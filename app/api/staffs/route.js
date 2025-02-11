import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"; // Make sure to install bcrypt

export async function POST(request) {
  try {
    const {
      title,
      password,
      email,
      phone,
      physicalAddress,
      nin,
      notes,
      imageUrl,
      isActive,
      dob,
    } = await request.json();

    // Basic validation
    if (!title || !password || !email || !phone || !physicalAddress || !nin) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newStaff = await db.Staff.create({
      data: {
        title,
        password: hashedPassword,
        email,
        phone,
        physicalAddress,
        nin,
        notes,
        imageUrl,
        isActive,
        dob,
      },
    });

    console.log("New staff created:", newStaff);
    return NextResponse.json(newStaff);
  } catch (error) {
    console.error("Error creating staff:", error); // Log the error
    return NextResponse.json(
      {
        message: "Failed to create staff",
        error: error.message || error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const staff = await db.Staff.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(staff);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch Staff",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
