import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const coupon = await db.Coupon.findUnique({
      where: {
        id,
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
export async function DELETE(request, { params: { id } }) {
  try {
    const existingCoupon = await db.Coupon.findUnique({
      where: {
        id,
      },
    });
    if (!existingCoupon) {
      return NextResponse.json(
        {
          data: null,
          message: "Coupon Not Found",
        },
        { status: 404 }
      );
    }
    const deletedCoupon = await db.Coupon.delete({
      where: {
        id,
      },
    });
    console.log("this is deleted Coupon", deletedCoupon);
    return NextResponse.json(deletedCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed To Delete Coupon",
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const { title, expiryDate, couponCode, isActive } = await request.json();
    const existingCoupon = await db.Coupon.findUnique({
      where: {
        id,
      },
    });
    if (!existingCoupon) {
      return NextResponse.json(
        {
          data: null,
          message: "Not Found",
        },
        { status: 404 }
      );
    }

    const updatedCoupon = await db.Coupon.update({
      where: { id },
      data: {
        title,
        expiryDate,
        couponCode,
        isActive,
      },
    });

    return NextResponse.json(updatedCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed To Update Coupon" },
      { status: 500 }
    );
  }
}
