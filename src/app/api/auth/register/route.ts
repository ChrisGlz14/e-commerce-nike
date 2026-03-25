import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, password } = body;

    await connectDB();

    const userExists = await User.findOne({ email });

    if (userExists) {
      return NextResponse.json(
        { message: "El usuario ya existe" },
        { status: 400 },
      );
    }

    // Hashear password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creo usuario
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(newUser);
  } catch {

    
  const body = await req.json();

  const { name, email, password } = body;

  await connectDB();

  const userExists = await User.findOne({ email });

  if (userExists) {
    return NextResponse.json(
      { message: "El usuario ya existe" },
      { status: 400 }
    );
  }

  // Hashear password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Creo usuario
  const newUser = new User({
    name,
    email,
    password: hashedPassword
  });

  await newUser.save();

  return NextResponse.json(newUser);
  }
}
