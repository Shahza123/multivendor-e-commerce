import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
  try {
    const { title, couponCode, expiryDate, isActive } = await request.json();
    const newCoupon = await db.Coupon.create({
      data: {
        title,
        couponCode,
        expiryDate,
        isActive,
      },
    });
    console.log("new coupon", newCoupon);

    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to create Coupon",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const coupon = await db.coupon.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(coupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed To Fetch Coupon",
        error,
      },
      { status: 500 }
    );
  }
}
