import User from "../models/User";
import bcrypt from "bcrypt";

export const createUserService = async (
  data: any
) => {
  const existingUser = await User.findOne({
    email: data.email,
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hash = await bcrypt.hash(
    data.password,
    10
  );

  const user = await User.create({
    ...data,
    password: hash,
  });

  return user;
};

export const getUsersService = async (
  search?: string
) => {
  if (search) {
    return await User.find({
      $or: [
        {
          firstName: {
            $regex: search,
            $options: "i",
          },
        },
        {
          location: {
            $regex: search,
            $options: "i",
          },
        },
      ],
    }).sort({
      createdAt: -1,
    });
  }

  return await User.find().sort({
    createdAt: -1,
  });
};