import type { NextFunction, Request, Response } from "express";
import { ExpressError } from "../ExpressError/ExpressErrorHandler.js";
import { StatusCodes } from "http-status-codes";
import { UserModel } from "../Schema/UserSchema.js";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";
import { mailSender } from "../utils/emailSender.js";

import sgMail from "@sendgrid/mail";
// import dotenv from "dotenv";
// import { createWelcomeEmailTemplate } from "./welcomeEmail.js";
// dotenv.config();
// if (process.env.TWILIO_API) {
//   sgMail.setApiKey(process.env.TWILIO_API);
// }

interface UserModelInterface {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: string;
}

// REGISTERING A USER
export const registerUser = async (req: Request, res: Response) => {
  if (!req.body) {
    throw new ExpressError("No data received", StatusCodes.BAD_REQUEST);
  }

  const isAdmin = (await UserModel.countDocuments()) === 0;

  req.body.role = isAdmin ? "admin" : "user";
  const password = req.body.password;
  //   delete req.body.password;

  try {
    const registeredUser = await UserModel.create(req.body);
    if (!registeredUser) {
      throw new ExpressError("Problem creating user", StatusCodes.BAD_REQUEST);
    }

    await registeredUser.setPassword(password);
    await registeredUser.save();
    mailSender(
      registeredUser.email,
      "lesterabao@gmail.com",
      "Welcome to TALKSY",
      registeredUser.username
    );

    res
      .status(StatusCodes.OK)
      .json({ message: "Successfully registered user" });
  } catch (err) {
    console.log(err);
  }
};

// LOGGING IN A USER
export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body) {
    throw new ExpressError("No data received", StatusCodes.BAD_REQUEST);
  }
  try {
    const foundUser = await UserModel.findOne({ username: req.body.username });
    res
      .status(StatusCodes.OK)
      .json({ message: "User successfully logged in", foundUser });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// LOGGING OUT A USER
export const logoutUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res
      .status(StatusCodes.OK)
      .json({ message: "User successfully logged out" });
  });
};

// UPDATE A USER
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!req.body) {
      throw new ExpressError("No data received", StatusCodes.BAD_REQUEST);
    }
    const foundUser = await UserModel.findById(id);
    if (!foundUser) {
      throw new ExpressError("User cannot be found", StatusCodes.NOT_FOUND);
    }

    //delete previous uploaded photo when updating avatar
    if (foundUser.photoId) {
      await cloudinary.v2.uploader.destroy(foundUser.photoId);
    }
    // check req.file from multer and use cloudinary api to upload image
    if (req.file) {
      const response = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "talksy",
        quality: 70,
      });
      await fs.unlink(req.file.path); // delete image in the public/uploads folder
      req.body.photoUrl = response.secure_url;
      req.body.photoId = response.public_id;
    }
    const updatedUser = await UserModel.findByIdAndUpdate(
      foundUser._id,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      throw new ExpressError(
        "Problem updating user",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  } catch (err) {
    console.log(err);
  }
  res.status(StatusCodes.OK).json({ message: "User updated" });
};

//Obtain logged user data
export const getLoggedUser = async (req: Request, res: Response) => {
  // const { id } = req.params;
  if (!req.user) {
    throw new ExpressError("User not logged in", StatusCodes.UNAUTHORIZED);
  }
  const userData = req.user;
  const loggedUser = await UserModel.findOne(userData);
  if (!loggedUser) {
    throw new ExpressError("User is not logged in", StatusCodes.UNAUTHORIZED);
  }
  res.status(StatusCodes.OK).json({ message: "logged user", loggedUser });
};
