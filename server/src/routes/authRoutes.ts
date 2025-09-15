import express from "express";
import type { Request, Response, NextFunction } from "express";
import { Error } from "mongoose";
import { registerUser, loginUser } from "../controllers/authControllers.js";
import passport from "passport";
const router = express.Router();

import { registerValidation } from "../middleware/inputValidation.js";
import { StatusCodes } from "http-status-codes";

router.post("/register", registerValidation, registerUser);
router.post(
  "/login",
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
      "local",
      (err: Error, user: Express.User, info: any) => {
        if (err) {
          return next(err);
        }
        if (!user) {
          return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: info.message || "Username or Password incorrect",
          });
        }
        req.login(user, (err) => {
          if (err) {
            return next(err);
          }
          return loginUser(req, res, next);
        });
      }
    )(req, res, next);
  },
  loginUser
);

export default router;
