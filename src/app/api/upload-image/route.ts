

import { NextResponse } from "next/server";



export async function POST(request: Request) {

  try {

    const formData = await request.formData();

    const image = formData.get("image");

    if (!(image instanceof File)) {
      return NextResponse.json(
        { message: "Please select an image." },
        { status: 400 }
      );
    }

    if (!image.type.startsWith("image/")) {
      return NextResponse.json(
        { message: "Only image files are allowed." },
        { status: 400 }
      );
    }

    // Limit uploads to 10 MB
    if (image.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { message: "Image size must be less than 10 MB." },
        { status: 400 }
      );
    }

    const apiKey = process.env.IMAGEBB_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { message: "Image upload configuration is missing." },
        { status: 500 }
      );
    }

    const uploadData = new FormData();
    uploadData.append("image", image);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: "POST",
        body: uploadData,
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      return NextResponse.json(
        { message: "Image upload failed." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Image uploaded successfully.",
      imageUrl: result.data.url,
    });
  } 
  catch (error) {
    console.error("Image upload error:", error);

    return NextResponse.json(
      { message: "Something went wrong while uploading the image." },
      { status: 500 }
    );
  }
}



