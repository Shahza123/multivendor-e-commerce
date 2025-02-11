import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import base64url from "base64url";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    //extract the credentials from the user
    const { name, email, password, role } = await request.json();

    // check if the user already exist in the db
    const existingUser = await db.User.findUnique({
      where: {
        email,
      },
    });

    // console.log(existingUser, "existingUser");

    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "user Already exists",
        },
        { status: 409 }
      );
    }
    // encrypt password=>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a random UUID
    const rawToken = uuidv4();

    // console.log(rawToken);
    const token = base64url.encode(rawToken);

    const newUser = await db.User.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        verificationToken: token,
      },
    });
    console.log("new user is coming here", newUser);
    // send the email if userRole===farmer

    if (role === "FARMER") {
      const userId = newUser.id;
      const linkText = "Verify Account";
      const redirectUrl = `onboarding/${userId}?token=${token}`;
      const subject = "Account Verification - limi Ecommerce";
      const description =
        " Thank you, for Creating an Account with Us. We request you to clickon the link Below in order to complete your onboarding process.Thankyou";
      const sendEmail = await resend.emails.send({
        from: "test@resend.dev",
        to: "ms2182580@gmail.com",
        subject: subject,
        react: EmailTemplate({
          name,
          redirectUrl,
          linkText,
          description,
          subject,
        }),
      });

      // console.log(sendEmail);
      //upon click redirect to the login
    }

    return NextResponse.json(
      {
        data: newUser,
        message: "User Created Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      {
        error: error,
        message: "Server Error:Something Went Wrong",
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const users = await db.User.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed To Fetch Users",
        error,
      },
      { status: 500 }
    );
  }
}
