import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: String,
    gender: String,
    dateOfBirth: String,
    avatar: String,

    location: String,

    instagram: String,

    facebook: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User ||
  mongoose.model("User", userSchema);