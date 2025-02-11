import { NextResponse } from "next/server";
import db from "../../../lib/db";
// import { redirect } from "next/dist/server/api-utils";
export async function POST(request) {
  try {
    const { title, slug, imageUrl, description, isActive } =
      await request.json();
    const existingCategory = await db.Category.findUnique({
      where: {
        slug,
      },
    });
    if (existingCategory) {
      return NextResponse.json(
        {
          data: null,
          message: "category already exists",
        },
        { status: 409 }
      );
    }

    const newCategory = await db.Category.create({
      data: {
        title,
        slug,
        imageUrl,
        description,
        isActive,
      },
    });

    return NextResponse.json(newCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "failed to create category" },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const categories = await db.Category.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        products: true,
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed To Fetch category",
        error,
      },
      { status: 500 }
    );
  }
}
