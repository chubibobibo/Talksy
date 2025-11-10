import express, { urlencoded } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import MongoStore from "connect-mongo";
import session from "express-session";
import authRoutes from "./routes/authRoutes.js";
import { UserModel } from "./Schema/UserSchema.js";
import passport from "passport";

import {v2 as cloudinary} from cloudinary

interface AppError {
  status: number;
  message: string;
}

interface UserModelInterface {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(urlencoded({extended: true})) //parses data from forms and turn it into JS objects
app.use(express.static('./public')) //makes files in a folder publicly accessible over HTTP.

//DB connection
main().catch((err) => console.log(err));
async function main() {
  //   await mongoose.connect(process.env.MONGO_URL as string);
  if (typeof process.env.MONGO_URL === "string") {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB");
  }
}

//configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_SECRET,
  secure: true

})

//express sessions store
//manual type check for process.env
if (
  typeof process.env.MONGO_URL === "string" &&
  typeof process.env.MONGO_SECRET == "string"
) {
  const store = MongoStore.create({
    mongoUrl: process.env.MONGO_URL as string,
    touchAfter: 24 * 3600,
    crypto: {
      secret: process.env.MONGO_SECRET as string,
    },
  });

  //express session
  app.set("trust proxy", 1); // trust first proxy
  app.use(
    session({
      store,
      name: process.env.SESSION_NAME,
      secret: process.env.SESSION_SECRET as string,
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: process.env.SESSION_ENV === "production",
        httpOnly: true,
        expires: new Date(Date.now() * 1000 * 60 * 60 * 24 * 7),
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
    })
  );
}

// Setting up passport and passport local mongoose
app.use(passport.initialize());
app.use(passport.session());

passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

//ROUTES
app.use("/api/auth", authRoutes);

//PAGE NOT FOUND ERROR HANDLER
//Cannot use * for paths because it is a named parameter in express 5
app.use((_req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({ message: "Page not found" });
});

//EXPRESS ERROR MIDDLEWARE
app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message;
  res.status(status).json({ message: message });
});

app.listen(process.env.PORT, () => {
  console.log(`SERVING PORT ${process.env.PORT}`);
});
