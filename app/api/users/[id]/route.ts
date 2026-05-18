import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "../../../lib/mongodb";
// import { connectDB } from "@/lib/mongodb";

import User from "../../../models/User";
// import User from "@/models/User";

export async function GET(
  req: NextRequest,
  { params }: any
) {
  await connectDB();

  const user = await User.findById(
    params.id
  );

  return NextResponse.json(user);
}

export async function PUT(
  req: NextRequest,
  { params }: any
) {
  await connectDB();

  const body = await req.json();

  const user =
    await User.findByIdAndUpdate(
      params.id,
      body,
      {
        new: true,
      }
    );

  return NextResponse.json(user);
}

export async function DELETE(
  req: NextRequest,
  { params }: any
) {
  await connectDB();

  await User.findByIdAndDelete(
    params.id
  );

  return NextResponse.json({
    message: "Deleted",
  });
}