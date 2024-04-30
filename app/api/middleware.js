import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
// isAdmin middleware

export async function isAdminMiddleware(req, res) {

    const header = await req.headers.get('authorization')
    console.log('header', header);
    const token = header ? header.split(' ')[1] : null;
    console.log(token);

    if (!token) {
        return NextResponse.json('UnAuthorized access, please try again', { status: 201 })
    }
    else {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded
    }




    // if (isAdmin) {

    //     return true;
    // } else {
    //     console.log('You are not admin', isAdmin);
    //     return false;
    // }
}
