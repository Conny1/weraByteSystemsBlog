import { POSTRequest } from "@/utils/HelperFunctions";
import { connection } from "@/utils/db";
import { userType } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const q = `SELECT * FROM blog.user WHERE email=?`;

        const results = await POSTRequest(q, reqBody.email)

        if (!results || (results as userType[] ).length === 0) {
            return NextResponse.json({ status: 404, message: 'Email with the account does not exist' });
        }

        const userData = results as userType[];
        const password = userData[0].password;

        if (password !== reqBody.password) {
            return NextResponse.json({ status: 401, message: 'Invalid username or password' });
        }

        const response = NextResponse.json({ status: 200, data: { name: userData[0].name, email: userData[0].email, isadmin: userData[0].isadmin } });
        response.cookies.set('user', 'loggedin', { secure: true });

        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: 'Server error' });
    }
}
