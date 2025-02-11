import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const farmer = await db.User.findUnique({
      where: {
        id,
      },
      include: {
        FarmerProfile: true,
      },
    });
    console.log("banner by id is coming here", farmer);
    return NextResponse.json(farmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed To Fetch farmer",
        error,
      },
      { status: 500 }
    );
  }
}
export async function DELETE(request, { params: { id } }) {
  try {
    const existingUser = await db.User.findUnique({
      where: {
        id,
      },
    });
    if (!existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User Not Found",
        },
        { status: 404 }
      );
    }
    const deletedUser = await db.User.delete({
      where: {
        id,
      },
    });
    console.log("this is deletedUser", deletedUser);
    return NextResponse.json(deletedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed To Delete deletedUser",
        error,
      },
      { status: 500 }
    );
  }
}
