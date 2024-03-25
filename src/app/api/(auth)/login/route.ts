import { POSTRequest } from "@/utils/HelperFunctions";
import { userType } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const q = `SELECT * FROM  ${process.env.DB_NAME}.user WHERE email=?`;

    const results = await POSTRequest(q, [reqBody.email]);

    if (!results || (results as userType[]).length === 0) {
      return NextResponse.json({
        status: 404,
        message: "Email with the account does not exist",
      });
    }

    const userData = results as userType[];
    const password = userData[0].password;

    if (password !== reqBody.password) {
      return NextResponse.json({
        status: 401,
        message: "Invalid username or password",
      });
    }

    const response = NextResponse.json({
      status: 200,
      data: {
        id: userData[0].id,
        name: userData[0].name,
        email: userData[0].email,
        isadmin: userData[0].isadmin,
      },
    });
    const token = jwt.sign(
      { id: userData[0].id, isadmin: userData[0].isadmin },
      process.env.KEY as string
    );

    response.cookies.set("user", token, { secure: true });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, message: "Server error" });
  }
}
