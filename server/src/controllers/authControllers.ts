import type { NextFunction, Request, Response } from "express";
import { ExpressError } from "../ExpressError/ExpressErrorHandler.js";
import { StatusCodes } from "http-status-codes";
import { UserModel } from "../Schema/UserSchema.js";

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
  if (!req.body) {
    throw new ExpressError("No date received", StatusCodes.BAD_REQUEST);
  }
  const { id } = req.params;
  const foundUser = await UserModel.findById(id);
  if (!foundUser) {
    throw new ExpressError("No user found with that id", StatusCodes.NOT_FOUND);
  }
  const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedUser) {
    throw new ExpressError(
      `There is a problem updating user ${foundUser.username}`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
  res.status(StatusCodes.OK).json({ message: "Successfully updated user" });
};
