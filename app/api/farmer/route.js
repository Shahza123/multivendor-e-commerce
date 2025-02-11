import { NextResponse } from "next/server";
import db from "../../../lib/db";
export async function POST(request) {
  try {
    //Update the verification in the user
    const farmerData = await request.json();
    // console.log("farmer data is coming here", farmerData);

    const existingUser = await db.User.findUnique({
      where: {
        id: farmerData.userId,
      },
    });
    if (!existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "No User Found",
        },
        {
          status: 403,
        }
      );
    }
    const updatedUser = await db.User.update({
      where: {
        id: farmerData.userId,
      },
      data: {
        emailVerified: true,
      },
    });
    const newFarmerProfile = await db.FarmerProfile.create({
      data: {
        contactPerson: farmerData.contactPerson,
        contactPersonPhone: farmerData.contactPersonPhone,
        imageUrl: farmerData.imageUrl,
        email: farmerData.email,
        name: farmerData.name,
        terms: farmerData.terms,
        notes: farmerData.notes,
        phone: farmerData.phone,
        physicalAddress: farmerData.physicalAddress,
        terms: farmerData.terms,
        isActive: farmerData.isActive,
        code: farmerData.code,

        products: farmerData.products,
        landSize: parseFloat(farmerData.landSize),
        mainCrop: farmerData.mainCrop,
        userId: farmerData.userId,
      },
    });

    console.log(
      "farmer resposne is coming here from database",
      newFarmerProfile
    );

    // Corrected the typo here
    return NextResponse.json(newFarmerProfile);
  } catch (error) {
    // console.log(error);

    // Corrected the typo here as well
    return NextResponse.json(
      { message: "Failed to create farmer", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const farmers = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        role: "FARMER",
      },
      include: {
        farmerProfile: true,
      },
    });
    return NextResponse.json(farmers);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed To Fetch farmers",
        error,
      },
      { status: 500 }
    );
  }
}
