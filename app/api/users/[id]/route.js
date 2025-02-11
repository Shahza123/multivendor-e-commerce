import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request, { params: { id } }) {
  try {
    const user = await db.User.findUnique({
      where: {
        id,
        role: "FARMER",
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed To Fetch User",
        error,
      },
      { status: 500 }
    );
  }
}
