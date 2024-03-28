import { DELRequest, GETRequest, verifyToken } from "@/utils/HelperFunctions";
import { contentType } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

// @description getOne blog by id
// route  /api/blogdata/:id
// method GET

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const q = `SELECT * FROM  ${process.env.DB_NAME}.blogdata WHERE id=${params.id}`;
  //   console.log("get");
  try {
    const respData = await GETRequest(q);
    if (!respData || (respData as contentType[]).length === 0)
      return NextResponse.json({
        status: 404,
        message: "No blog yet",
      });
    console.log(respData);
    return NextResponse.json({ status: 200, data: respData });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ status: 500, message: "server error" });
  }
}

// @description Delete blog by id
// route  /api/blogdata/:id
// method DELETE

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const q = `DELETE FROM ${process.env.DB_NAME}.blogdata WHERE id=${params.id}`;
  const token = req.cookies.get("user")?.value;
  // console.log(token);
  if (!token) return NextResponse.json({ status: 500 });
  const isValidToken: Boolean = verifyToken(token);

  if (!isValidToken)
    return NextResponse.json({ status: 403, message: "forbiden. Login first" });
  try {
    const respData = await DELRequest(q);

    // console.log(respData);
    return NextResponse.json({ status: 200, data: respData });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ status: 500, message: "server error" });
  }
}
