// import { NextRequest, NextResponse } from "next/server";
// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// const s3 = new S3Client({
//   region: process.env.AWS_REGION,
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
//   },
// });

// export async function POST(req: NextRequest) {
//   try {
//     // Validate environment variables
//     if (!process.env.S3_BUCKET_NAME || !process.env.AWS_REGION) {
//       console.error("Missing S3_BUCKET_NAME or AWS_REGION environment variable");
//       return NextResponse.json(
//         { error: "Server configuration error" },
//         { status: 500 }
//       );
//     }

//     const formData = await req.formData();
//     const files = formData.getAll("files") as File[];

//     if (!files || files.length === 0) {
//       return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
//     }

//     const urls: string[] = [];

//     for (const file of files) {
//       if (!file.name || file.size === 0) {
//         continue; // Skip invalid files
//       }

//       const buffer = Buffer.from(await file.arrayBuffer());
//       const key = `Uploads/${Date.now()}-${file.name}`;

//       await s3.send(
//         new PutObjectCommand({
//           Bucket: process.env.S3_BUCKET_NAME!,
//           Key: key,
//           Body: buffer,
//           ContentType: file.type || "application/octet-stream",
//         })
//       );

//       const url = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
//       urls.push(url);
//     }

//     if (urls.length === 0) {
//       return NextResponse.json({ error: "No valid files uploaded" }, { status: 400 });
//     }

//     return NextResponse.json({ urls }, { status: 200 });
//   } catch (err) {
//     console.error("Upload failed:", err);
//     return NextResponse.json({ error: "Upload failed" }, { status: 500 });
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { MongoClient } from "mongodb";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// MongoDB connection setup
const mongoUri = process.env.MONGODB_URI!;
const client = new MongoClient(mongoUri);

// Function to upload files to S3 and collect metadata
async function uploadFilesToS3(files: File[]) {
  if (!process.env.S3_BUCKET_NAME || !process.env.AWS_REGION) {
    throw new Error("Missing S3_BUCKET_NAME or AWS_REGION environment variable");
  }

  const urls: string[] = [];
  const uploadRecords: any[] = [];

  for (const file of files) {
    if (!file.name || file.size === 0) {
      continue; // Skip invalid files
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const key = `Uploads/${Date.now()}-${file.name}`;

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

    // Prepare record for MongoDB
    uploadRecords.push({
      fileName: file.name,
      url: url,
      uploadDate: new Date(),
      fileSize: file.size,
      contentType: file.type || "application/octet-stream",
    });
  }

  return { urls, uploadRecords };
}

// Function to submit data to MongoDB
async function submitToDatabase(uploadRecords: any[]) {
  if (!mongoUri) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  try {
    await client.connect();
    const db = client.db("ancestro");
    const collection = db.collection("ancestrocharge");

    if (uploadRecords.length > 0) {
      await collection.insertMany(uploadRecords);
    }
  } finally {
    await client.close();
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
    }

    const { urls, uploadRecords } = await uploadFilesToS3(files);

    if (urls.length === 0) {
      return NextResponse.json({ error: "No valid files uploaded" }, { status: 400 });
    }

    // Submit to database
    await submitToDatabase(uploadRecords);

    return NextResponse.json({ urls }, { status: 200 });
  } catch (err) {
    console.error("Operation failed:", err);
    return NextResponse.json({ error: "Operation failed" }, { status: 500 });
  }
}

// New endpoint to submit final data to database independently
export async function POST_FINAL(req: NextRequest) {
  try {
    const body = await req.json();
    const uploadRecords = body.uploadRecords;

    if (!uploadRecords || !Array.isArray(uploadRecords) || uploadRecords.length === 0) {
      return NextResponse.json({ error: "No valid records provided" }, { status: 400 });
    }

    await submitToDatabase(uploadRecords);

    return NextResponse.json({ message: "Data successfully submitted to database" }, { status: 200 });
  } catch (err) {
    console.error("Database submission failed:", err);
    return NextResponse.json({ error: "Database submission failed" }, { status: 500 });
  }
}