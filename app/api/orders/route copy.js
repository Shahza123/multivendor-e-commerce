import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const { checkoutFormData, orderItems } = await request.json();
    // console.log("order item is", orderItems);

    const {
      userId,
    firstName,
      lastName,
      email,
      phone,
      city,
      district,
      country,
      shippingCost,
      streetAddress,
      paymentMethod,
    } = checkoutFormData;

    // Create the order in the database
    const newOrder = await db.order.create({
      data: {
        userId,
        firstName,
        lastName,
        email,
        phone,
        city,
        district,
        country,
        shippingCost: parseFloat(shippingCost),
        streetAddress,
        paymentMethod,
      },
    });

    // Generate an order number
    function generateOrderNumber(length) {
      const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let orderNumber = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        orderNumber += characters.charAt(randomIndex);
      }

      return orderNumber;
    }

    // Generate an order number with 8 characters
    const generatedOrderNumber = generateOrderNumber(8);

    // Create order items in the database using createMany
    const newOrderItems = await db.orderItems.createMany({
      data: orderItems.map((item) => ({
        productId: item.id,
        vendorId:item.id,
        quantity: parseInt(item.qty),
        price: parseFloat(item.salePrice),
        orderId: newOrder.id,  // Use the order ID of the newly created order
        imageUrl: item.imageUrl,
        title: item.title,
        orderNumber: generatedOrderNumber,  // Use the generated order number
      })),
    });

    console.log("new order and new order items created:", newOrder, newOrderItems);

    return NextResponse.json(newOrder);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create order",
        error: error.message,  // Return error details for debugging
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const orders = await db.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        orderItems: true,
      },
    });
    return NextResponse.json(orders);
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
