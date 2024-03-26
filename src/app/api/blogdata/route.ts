import { GETRequest, POSTRequest, verifyToken } from "@/utils/HelperFunctions";
import { contentType } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

// @description Create blog
// route  /api/blogdata/
// method POST

export async function POST(req: NextRequest) {
  const token = req.cookies.get("user")?.value;
  // console.log(token);
  if (!token) return NextResponse.json({ status: 500 });
  const isValidToken: Boolean = verifyToken(token);

  if (!isValidToken)
    return NextResponse.json({ status: 403, message: "forbiden. Login first" });

  const { title, userid, content } = await req.json();

  const q = `INSERT INTO  ${process.env.DB_NAME}.blogdata(userid, title, content) VALUES(?,?,?)`;
  const data = [userid, title, content];
  try {
    const respData = await POSTRequest(q, data);
    if (!respData)
      return NextResponse.json({
        status: 400,
        message: "Database not updated",
      });
    return NextResponse.json({ status: 200, message: "Blog added" });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ status: 500, message: "server error" });
  }
}

// @description get all blogs
// route  /api/blogdata/
// method GET

export async function GET(req: NextRequest) {
  const q = `SELECT * FROM  ${process.env.DB_NAME}.blogdata`;
  // console.log("get");
  try {
    const respData = await GETRequest(q);
    if (!respData || (respData as contentType[]).length === 0)
      return NextResponse.json({
        status: 404,
        message: "No blog yet",
      });
    // console.log(respData);
    return NextResponse.json({ status: 200, data: respData });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ status: 500, message: "server error" });
  }
}
