import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { sendAdminNotification, sendUserConfirmation } from "../../../../lib/email";

// Define the FormData interface to match emailUtils.ts and StepData
interface FormData {
  fullName?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  propertyAddress?: string;
  propertyType?: string;
  chargersAvailable?: string;
  covered?: "covered" | "uncovered";
  publicAccess?: "Yes" | "No";
  averageDailyVisitors?: string;
  hoursOfOperation?: string;
  ownOrLease?: string;
  multipleLocations?: "Yes" | "No";
  multipleLocationsCount?: string;
  businessRevenue?: boolean;
  electricalCapacity?: boolean;
  utilityBillUploaded?: boolean;
  utilityBillFiles?: string[];
  chargerPreference?: string;
  partnershipModel?: string;
  additionalOpportunities?: string;
  propertyPhotoFiles?: string[];
  electricalPhotoFiles?: string[];
  notes?: string;
  projectPortfolioFiles?: string[];
  submissionDate?: Date;
  calendly?: any;
}

const mongoUri = process.env.MONGODB_URI!;
const client = new MongoClient(mongoUri);

async function submitToDatabase(uploadRecords: FormData[]) {
  if (!mongoUri) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  try {
    await client.connect();
    const db = client.db("ancestro");
    const collection = db.collection("ancestrocharge");

    if (uploadRecords.length > 0) {
      // Ensure submissionDate is stored as an ISO date string
      const recordsToInsert = uploadRecords.map(record => ({
        ...record,
        submissionDate: record.submissionDate ? new Date(record.submissionDate).toISOString() : new Date().toISOString(),
      }));
      await collection.insertMany(recordsToInsert);
    }
  } finally {
    await client.close();
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const uploadRecords: FormData[] = body.uploadRecords;

    console.log("FormData: ", uploadRecords);

    if (!uploadRecords || !Array.isArray(uploadRecords) || uploadRecords.length === 0) {
      return NextResponse.json({ error: "No valid records provided" }, { status: 400 });
    }

    // Submit to database
    await submitToDatabase(uploadRecords);

    // Send confirmation emails for each record
    await Promise.all(
      uploadRecords.map(async (record) => {
        if (!record.email) {
          throw new Error("User email is missing in one of the records");
        }
        await Promise.all([
          sendUserConfirmation(record),
          sendAdminNotification("tarzan@ancestroenergy.com", record),
        ]);
      })
    );

    return NextResponse.json({ message: "Data successfully submitted and emails sent" }, { status: 200 });
  } catch (err) {
    console.error("Error in submission:", err);
    return NextResponse.json({ error: "Submission or email sending failed" }, { status: 500 });
  }
}