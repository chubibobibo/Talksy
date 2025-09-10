import type { Request, Response } from "express";
import { ExpressError } from "../ExpressError/ExpressErrorHandler.js";
import { StatusCodes } from "http-status-codes";
import { UserModel } from "../Schema/UserSchema.js";

export const registerUser = async (req: Request, res: Response) => {
  if (!req.body) {
    throw new ExpressError("No data received", StatusCodes.BAD_REQUEST);
  }

  const isAdmin = (await UserModel.countDocuments()) === 0;

  req.body.role = isAdmin ? "admin" : "user";

  const registeredUser = await UserModel.create(req.body);
  if (!registeredUser) {
    throw new ExpressError("Problem creating user", StatusCodes.BAD_REQUEST);
  }

  await registeredUser.setPassword(req.body.password);
  await registeredUser.save();

  res.status(StatusCodes.OK).json({ message: "Successfully registered user" });
};
