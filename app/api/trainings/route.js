import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
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

    //if this traning alrady exist
    const existingTraining = await db.Training.findUnique({
      where: {
        slug,
      },
    });
    if (existingTraining) {
      return NextResponse.json({
        data: null,
        message: " tarining with thsi name already exist ",
      });
    }
    const newTraining = await db.Training.create({
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

    console.log("new training", newTraining);

    return NextResponse.json(newTraining);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create training",
        error: error.message, // You can also include more error details
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const trainings = await db.Training.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(trainings);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to fetch training data",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
