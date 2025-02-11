import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const { title, slug, imageUrl, description, isActive, categoryIds } =
      await request.json();

    const existingMarket = await db.Market.findUnique({
      where: {
        slug,
      },
    });
    if (existingMarket) {
      return NextResponse.json(
        {
          data: null,
          message: "Market already exists",
        },
        { status: 409 }
      );
    }

    const newMarket = await db.Market.create({
      data: {
        title,
        slug,
        imageUrl,
        description,
        isActive,
        categoryIds,
      },
    });
    console.log("new market", newMarket);

    return NextResponse.json(newMarket);
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
    const markets = await db.Market.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(markets);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed To Fetch markets",
        error,
      },
      { status: 500 }
    );
  }
}
