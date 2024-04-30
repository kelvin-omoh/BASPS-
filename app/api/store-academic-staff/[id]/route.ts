import { dbPrisma } from "@/lib/db";
import { AcademicStaff } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const { id } = params;
    console.log("id", id);

    const email = id.trim().toLowerCase();

    try {
        if (!email) {
            console.error("Email parameter is missing");
            return NextResponse.json({ error: "Email parameter is missing" }, { status: 400 });
        }

        const existingUser: AcademicStaff | null = await dbPrisma.academicStaff.findUnique({
            where: {
                email
            }
        });

        if (existingUser) {
            console.log("User found:", existingUser);
            return NextResponse.json(true, { status: 200 }); // User exists, return true
        } else {
            console.log("No existing user found");
            return NextResponse.json(false, { status: 200 }); // User does not exist, return false
        }

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json("An error occurred", { status: 400 });
    }
};
