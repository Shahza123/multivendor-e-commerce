import { NextResponse } from "next/server";
import db from "@/lib/db";


export async function POST(request) {
  try {
    const { checkoutFormData, orderItems } = await request.json();
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


    function generatedOrderNumber(length) {
      const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let orderNumber = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        orderNumber += characters.charAt(randomIndex);
      }

      return orderNumber;

    }



    const result = await db.$transaction(async (prisma) => {
      const newOrder = await prisma.Order.create({
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
          orderNumber: generatedOrderNumber(8),
        }
      });
      const newOrderItems = await prisma.OrderItems.createMany({
        data: orderItems.map((item) => ({
          productId: item.id,
          vendorId: item.id,
          quantity: parseInt(item.qty),
          price: parseFloat(item.salePrice),
          orderId: newOrder.id,  // Use the order ID of the newly created order
          imageUrl: item.imageUrl,
          title: item.title,
          // Use the generated order number
        })),

      });


      const sales = await Promise.all(
        orderItems.map(async (item) => {
          const totalAmount = parseFloat(item.salePrice) * parseInt(item.qty);
          const newSale = await prisma.Sale.create({
            data: {
              orderId: newOrder.id,
              productTitle: item.title,
              productImage: item.imageUrl,
              productPrice: parseFloat(item.salePrice),
              productQty: parseInt(item.qty),
              productId: item.id,
              vendorId: item.vendorId,
              total: totalAmount,
            },
          });
          return newSale;
        })
      );
      return { newOrder, newOrderItems, sales };
    })

    console.log(result.newOrder, result.newOrderItems, result.sales);

    return NextResponse.json(result.newOrder);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to create order",
        error, // Return error details for debugging
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const orders = await db.Order.findMany({
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
