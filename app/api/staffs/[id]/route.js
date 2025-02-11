import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request, { params: { id } }) {
  try {
    const staff = await db.Staff.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(staff);
  } catch (error) {
    return NextResponse.json(
      {
        data: staff,
        error,
      },
      {
        status: 500,
      }
    );
  }
}
