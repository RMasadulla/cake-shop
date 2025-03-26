import { userModel } from "@/models/user";
import { dbConnect } from "@/service/mongo";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, password, phone, image, userPosition } =
    await request.json();
  dbConnect();

  const hashedPass = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPass,
    image,
    phone,
    userPosition,
  };

  try {
    await userModel.create(newUser);
    return new NextResponse("User has been Created", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}
