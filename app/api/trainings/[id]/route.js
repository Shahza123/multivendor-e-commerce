import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const training = await db.Training.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(training);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed To Fetch Training",
        error,
      },
      { status: 500 }
    );
  }
}
export async function DELETE(request, { params: { id } }) {
  try {
    const existingTraining = await db.Training.findUnique({
      where: {
        id,
      },
    });
    if (!existingTraining) {
      return NextResponse.json(
        {
          data: null,
          message: "Training Not Found",
        },
        { status: 404 }
      );
    }
    const deletedTraining = await db.Training.delete({
      where: {
        id,
      },
    });
    console.log("this is deleted Banner", deletedTraining);
    return NextResponse.json(deletedTraining);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed To Delete Training",
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
