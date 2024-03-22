import { GETRequest } from "@/utils/HelperFunctions";
import { contentType } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const q = `SELECT * FROM blog.blogdata WHERE id=${params.id}`;
  //   console.log("get");
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
