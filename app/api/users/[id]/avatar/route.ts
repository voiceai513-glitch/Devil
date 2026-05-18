import { NextRequest, NextResponse } from "next/server";

import cloudinary from "../../../../lib/cloudinary";
// import cloudinary from "@/lib/cloudinary";

import { connectDB } from "../../../../lib/mongodb";
// import { connectDB } from "@/lib/mongodb";

import User from "../avatar../../../../.././models/User";

export async function PUT(
  req: NextRequest,
  { params }: any
) {
  try {
    await connectDB();

    const formData =
      await req.formData();

    const file =
      formData.get("avatar") as File;

    if (!file) {
      return NextResponse.json({
        message: "Image required",
      });
    }

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const base64 =
      `data:${file.type};base64,${buffer.toString(
        "base64"
      )}`;

    const result =
      await cloudinary.uploader.upload(
        base64,
        {
          folder: "next-users",
        }
      );

    const user =
      await User.findByIdAndUpdate(
        params.id,
        {
          avatar: result.secure_url,
        },
        {
          new: true,
        }
      );

    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
}