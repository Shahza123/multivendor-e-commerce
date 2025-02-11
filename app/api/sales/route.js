import { NextResponse } from "next/server";
import db from "@/lib/db";




export async function GET(request) {
  try {
    const sales = await db.Sale.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(sales);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to fetch orders",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
