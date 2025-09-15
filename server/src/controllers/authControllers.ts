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
