import express from "express";
import { registerUser } from "../controllers/authControllers.js";
const router = express.Router();

interface RegValid {
  req: Request;
  res: Response;
}
import { registerValidation } from "../middleware/inputValidation.js";

router.post("/register", registerValidation as any, registerUser);

export default router;
