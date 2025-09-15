import mongoose, { type InferSchemaType } from "mongoose";
import { Schema } from "mongoose";
import { userRoles } from "../utils/userRoles.js";
import passportLocalMongoose from "passport-local-mongoose";

// type UserType = InferSchemaType<typeof UserSchema>;

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

  // Do not include passwords. PassportJS handles the creation of passwords
  //   password: {
  //     type: String,
  //     required: true,
  //   },

  photoUrl: {
    type: String,
    required: false,
  },

  photoId: {
    type: String,
    required: false,
  },

  role: {
    type: String,
    enum: Object.values(userRoles),
    required: false,
  },
});

UserSchema.plugin(passportLocalMongoose);

export const UserModel = mongoose.model("UserModel", UserSchema);
// export default UserModel;
