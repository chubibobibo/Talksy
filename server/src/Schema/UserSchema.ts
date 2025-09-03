import mongoose from "mongoose";
import { Schema } from "mongoose";
import { userRoles } from "../utils/userRoles.js";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  photoUrl: {
    type: String,
    required: false,
  },

  photoId: {
    type: String,
    required: false,
  },

  role: {
    enum: Object.values(userRoles),
    required: true,
  },
});

export const UserModel = mongoose.model("UserModel", UserSchema);
