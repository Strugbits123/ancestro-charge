import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI!;
const client = new MongoClient(mongoUri);
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
    const body = await req.json();
    const uploadRecords = body.uploadRecords;

    console.log("FormData: ",body.uploadRecords);

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



// import { NextRequest, NextResponse } from "next/server";
// import { MongoClient } from "mongodb";
// import { sendUserConfirmation, sendAdminNotification } from "../../../../lib/email";

// const mongoUri = process.env.MONGODB_URI!;
// const client = new MongoClient(mongoUri);

// async function submitToDatabase(uploadRecords: any[]) {
//   await client.connect();
//   const db = client.db("ancestro");
//   const collection = db.collection("ancestrocharge");

//   if (uploadRecords.length > 0) {
//     await collection.insertMany(uploadRecords);
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const uploadRecords = body.uploadRecords;

//     if (!uploadRecords || !Array.isArray(uploadRecords) || uploadRecords.length === 0) {
//       return NextResponse.json({ error: "No valid records provided" }, { status: 400 });
//     }

//     // Save to DB
//     await submitToDatabase(uploadRecords);

//     // Send emails (to client + admin)
//     for (const record of uploadRecords) {
//       await sendUserConfirmation(record);
//       await sendAdminNotification(process.env.ADMIN_EMAIL!, record);
//     }

//     return NextResponse.json(
//       { message: "Data saved & confirmation emails sent successfully" },
//       { status: 200 }
//     );
//   } catch (err) {
//     console.error("Database submission or email failed:", err);
//     return NextResponse.json({ error: "Submission failed" }, { status: 500 });
//   } finally {
//     await client.close();
//   }
// }
