import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const order = await db.Order.findUnique({
      where: {
        id,
      },
      include: {
        orderItems: true,
      }
    });
    return NextResponse.json(order);
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
export async function DELETE(request, { params: { id } }) {
  try {
    const existingOrder = await db.Order.findUnique({
      where: {
        id,
      },
    });
    if (!existingTraining) {
      return NextResponse.json(
        {
          data: null,
          message: "Order  Not Found",
        },
        { status: 404 }
      );
    }
    const deletedOrder = await db.order.delete({
      where: {
        id,
      },
    });
    console.log("this is deleted Banner", deletedOrder);
    return NextResponse.json(deletedTraining);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed To Delete to an Order",
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const {
      title,
      slug,
      imageUrl,
      description,
      isActive,
      content,
      categoryId,
    } = await request.json();
    const existingTraining = await db.Training.findUnique({
      where: {
        id,
      },
    });
    if (!existingTraining) {
      return NextResponse.json(
        {
          data: null,
          message: "Not Found",
        },
        { status: 404 }
      );
    }

    const updatedTraining = await db.Training.update({
      where: { id },

      data: {
        title,
        slug,
        imageUrl,
        description,
        isActive,
        content,
        categoryId,
      },
    });

    return NextResponse.json(updatedTraining);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed To Update Training" },
      { status: 500 }
    );
  }
}
