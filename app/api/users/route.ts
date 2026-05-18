import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "../../lib/mongodb";
// import { connectDB } from "@/lib/mongodb";

import {
  createUserService,
  getUsersService,
} from "../../services/user.service";
// } from "@/services/user.service";

export async function POST(
  req: NextRequest
) {
  try {
    await connectDB();

    const body = await req.json();

    const user =
      await createUserService(body);

    return NextResponse.json({
      message: "User created",
      user,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
}

export async function GET(
  req: NextRequest
) {
  try {
    await connectDB();

    const search =
      req.nextUrl.searchParams.get(
        "search"
      ) || "";

    const users =
      await getUsersService(search);

    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
}