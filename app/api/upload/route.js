import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { v2 as cloudinary } from 'cloudinary';
import { isAdminMiddleware } from "../middleware";

export const POST = async (req, res) => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_API_SECRET
    });

    try {
        // Get the image file from the form data
        const formData = await req.formData();
        const file = formData.get('file');

        if (!file) {
            // If no file is received, return a JSON response with an error and a 400 status code
            return NextResponse.json({ error: "No files received." }, { status: 400 });
        }

        // Convert file to buffer
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = file.name.replaceAll(" ", "_");

        // Write buffer to a temporary file
        const tempFilePath = path.join('/tmp', filename);
        await writeFile(tempFilePath, buffer);


        const check = await isAdminMiddleware(req, res)
        if (check.isAdmin === undefined) {
            console.log('isAdmin not provided');
            return NextResponse.json({ error: "You are not an admin" }, { status: 403 });
        }
        // Upload the image to Cloudinary

        if (check.isAdmin) {
            const result = await cloudinary.uploader.upload(tempFilePath, {
                folder: 'ecommerce', // Optional: Set the folder where the image will be stored
            });

            // Log the Cloudinary upload result
            console.log("Upload result:", result);

            // Return a JSON response with the Cloudinary upload result
            return new Response(JSON.stringify(result), {
                headers: { 'Content-Type': 'application/json' }
            });

        } else {
            return NextResponse.json('you are not allowed to create products,You are not an admin', { status: 403 })
        }
    } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        return new Response("Error uploading image to Cloudinary", { status: 500 });
    }
};
