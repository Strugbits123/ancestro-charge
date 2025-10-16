import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// Function to upload files to S3 and collect URLs
async function uploadFilesToS3(files: File[]) {
  if (!process.env.S3_BUCKET_NAME || !process.env.AWS_REGION) {
    throw new Error("Missing S3_BUCKET_NAME or AWS_REGION environment variable");
  }

  const urls: string[] = [];

  for (const file of files) {
    if (!file.name || file.size === 0) {
      continue; // Skip invalid files
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const key = `charge/${Date.now()}-${file.name}`;

    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: key,
        Body: buffer,
        ContentType: file.type || "application/octet-stream",
      })
    );

    const url = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    urls.push(url);
  }

  return urls;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
    }

    const urls = await uploadFilesToS3(files);

    if (urls.length === 0) {
      return NextResponse.json({ error: "No valid files uploaded" }, { status: 400 });
    }

    return NextResponse.json({ urls }, { status: 200 });
  } catch (err) {
    console.error("Operation failed:", err);
    return NextResponse.json({ error: "Operation failed" }, { status: 500 });
  }
}