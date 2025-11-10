import express from "express";
import type { Request, Response, NextFunction } from "express";
import { Error } from "mongoose";
import {
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  getLoggedUser,
} from "../controllers/authControllers.js";
import passport from "passport";
import { rateLimit } from "express-rate-limit";
const router = express.Router();

import {
  registerValidation,
  loginValidation,
  updateUserValidation,
} from "../middleware/inputValidation.js";
import { StatusCodes } from "http-status-codes";

const loginLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
  message: "Too many attempts to login, Try again in 10 minutes",
});

// Get logged user
router.get("/getLoggedUser", getLoggedUser);

// Register route
router.post("/register", registerValidation, registerUser);

// Login route
router.post(
  "/login",
  loginLimiter,
  loginValidation,
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

// Logout route
router.post("/logout", logoutUser);

// Update user route
router.patch("/update/:id", updateUserValidation, updateUser);

export default router;
