import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  try {
    console.log('dsfsdfsdfsdwewef')
    const { fullName, email, password } = await req.json();

    if (!fullName || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ fullName, email, password: hashedPassword });

    return NextResponse.json(
      { message: "User registered successfully", user: { fullName: newUser.fullName, email: newUser.email } },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
