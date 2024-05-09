import { NextResponse } from "next/server";
// import jwt from 'jsonwebtoken';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    try {
        const { email, fullName, staffRole, systemRole } = await req.json();
        console.log(email);

        if (!fullName || !email) {
            return new NextResponse("fullName and email are required.", { status: 400 });
        }

        // Check if the user already exists with the same email
        const existingUser = await prisma.user.findFirst({
            where: {
                email: email
            }
        });

        if (existingUser) {
            console.log("User already exists.", existingUser);
            return NextResponse.json('user Alredy exists', { status: 200 });

        } else {
            // Insert the new user
            if (systemRole) {
                const newUser = await prisma.user.create({
                    data: {
                        fullName,
                        email,
                        staffRole,
                        systemRole
                    }
                });
                console.log(newUser);
            }
            else {
                const newUser = await prisma.user.create({
                    data: {
                        fullName,
                        email,
                        staffRole,

                    }
                });
                console.log(newUser);
            }



            return new NextResponse('User stored successfully.', { status: 200 });
        }

    } catch (e) {
        console.error(e);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
};
