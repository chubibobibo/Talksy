import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

interface AppError {
  status: number;
  message: string;
}

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

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
