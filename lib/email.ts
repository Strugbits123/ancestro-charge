import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Define the interface for form data, matching StepData from ApplyModal
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
  ownOrLease?: string;
  multipleLocations?: "Yes" | "No";
  multipleLocationsCount?: string;
  propertyPhotoConsent?: boolean;
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
  calendly?: any; // Adjust type as needed based on your Calendly data structure
}

// Define the interface for SendGrid's dynamic template data
interface TemplateData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  propertyAddress: string;
  propertyType: string;
  propertyPhotoConsent: string;
  chargersAvailable: string;
  covered: string;
  publicAccess: string;
  averageDailyVisitors: string;
  ownOrLease: string;
  multipleLocations: string;
  multipleLocationsCount: string;
  businessRevenue: string;
  electricalCapacity: string;
  utilityBillUploaded: string;
  utilityBillFiles: string;
  chargerPreference: string;
  partnershipModel: string;
  additionalOpportunities: string;
  propertyPhotoFiles: string;
  electricalPhotoFiles: string;
  notes: string;
  projectPortfolioFiles: string;
  meetingTime: string;
}

/**
 * Build meeting time from Calendly data
 * @param calendly - Calendly data from form
 * @returns Formatted meeting time string
 */
function buildMeetingTime(calendly: any): string {
  // Placeholder implementation; replace with actual Calendly logic
  return calendly ? new Date(calendly.start_time).toLocaleString() : "Not scheduled";
}

/**
 * Send confirmation email to user
 * @param formData - User form data
 * @throws Error if required fields are missing
 */
export async function sendUserConfirmation(formData: FormData) {
  if (!formData.email) {
    throw new Error("User email is required for sending confirmation");
  }
  if (!process.env.SENDGRID_FROM_EMAIL) {
    throw new Error("SENDGRID_FROM_EMAIL environment variable is not set");
  }
  console.log("Sending email to user:", formData);
  const templateData: TemplateData = {
    fullName: formData.fullName || "N/A",
    email: formData.email,
    phone: formData.phone || "N/A",
    businessName: formData.businessName || "N/A",
    propertyAddress: formData.propertyAddress || "N/A",
    propertyType: formData.propertyType || "N/A",
    propertyPhotoConsent: formData.propertyPhotoConsent ? "Yes" : "No",
    chargersAvailable: formData.chargersAvailable || "N/A",
    covered: formData.covered || "N/A",
    publicAccess: formData.publicAccess || "No",
    averageDailyVisitors: formData.averageDailyVisitors || "N/A",
    ownOrLease: formData.ownOrLease || "N/A",
    multipleLocations: formData.multipleLocations || "No",
    multipleLocationsCount: formData.multipleLocationsCount || "N/A",
    businessRevenue: formData.businessRevenue ? "Yes" : "No",
    electricalCapacity: formData.electricalCapacity ? "Yes" : "No",
    utilityBillUploaded: formData.utilityBillUploaded ? "Yes" : "No",
    utilityBillFiles: formData.utilityBillFiles?.join(", ") || "None",
    chargerPreference: formData.chargerPreference || "N/A",
    partnershipModel: formData.partnershipModel || "N/A",
    additionalOpportunities: formData.additionalOpportunities || "N/A",
    propertyPhotoFiles: formData.propertyPhotoFiles?.join(", ") || "None",
    electricalPhotoFiles: formData.electricalPhotoFiles?.join(", ") || "None",
    notes: formData.notes || "None",
    projectPortfolioFiles: formData.projectPortfolioFiles?.join(", ") || "None",
    meetingTime: buildMeetingTime(formData.calendly),
  };
  console.log("Template data:", templateData);

  const msg: sgMail.MailDataRequired = {
    to: formData.email, // Use user-provided email
    from: process.env.SENDGRID_FROM_EMAIL,
    templateId: "d-980652b58847448dab8df13f7a523072",
    dynamicTemplateData: templateData,
  };

  try {
    await sgMail.send(msg);
    console.log(`Confirmation email sent to ${formData.email}`);
  } catch (error) {
    console.error("SendGrid error:", error);
    throw error;
  }
}

/**
 * Send notification email to admin
 * @param adminEmail - Admin recipient email
 * @param formData - User form data
 * @throws Error if required fields are missing
 */
export async function sendAdminNotification(adminEmail: string, formData: FormData) {
  if (!formData.email) {
    throw new Error("User email is required for admin notification");
  }
  if (!adminEmail) {
    throw new Error("Admin email is required");
  }
  if (!process.env.SENDGRID_FROM_EMAIL) {
    throw new Error("SENDGRID_FROM_EMAIL environment variable is not set");
  }
  console.log("Sending admin notification for:", formData);
  const templateData: TemplateData = {
    fullName: formData.fullName || "N/A",
    email: formData.email,
    phone: formData.phone || "N/A",
    businessName: formData.businessName || "N/A",
    propertyAddress: formData.propertyAddress || "N/A",
    propertyType: formData.propertyType || "N/A",
    propertyPhotoConsent: formData.propertyPhotoConsent ? "Yes" : "No",
    chargersAvailable: formData.chargersAvailable || "N/A",
    covered: formData.covered || "N/A",
    publicAccess: formData.publicAccess || "No",
    averageDailyVisitors: formData.averageDailyVisitors || "N/A",
    ownOrLease: formData.ownOrLease || "N/A",
    multipleLocations: formData.multipleLocations || "No",
    multipleLocationsCount: formData.multipleLocationsCount || "N/A",
    businessRevenue: formData.businessRevenue ? "Yes" : "No",
    electricalCapacity: formData.electricalCapacity ? "Yes" : "No",
    utilityBillUploaded: formData.utilityBillUploaded ? "Yes" : "No",
    utilityBillFiles: formData.utilityBillFiles?.join(", ") || "None",
    chargerPreference: formData.chargerPreference || "N/A",
    partnershipModel: formData.partnershipModel || "N/A",
    additionalOpportunities: formData.additionalOpportunities || "N/A",
    propertyPhotoFiles: formData.propertyPhotoFiles?.join(", ") || "None",
    electricalPhotoFiles: formData.electricalPhotoFiles?.join(", ") || "None",
    notes: formData.notes || "None",
    projectPortfolioFiles: formData.projectPortfolioFiles?.join(", ") || "None",
    meetingTime: buildMeetingTime(formData.calendly),
  };
  console.log("Admin template data:", templateData);

  const msg: sgMail.MailDataRequired = {
    to: adminEmail, // Use provided admin email
    from: process.env.SENDGRID_FROM_EMAIL,
    templateId: "d-1d2e5761f5a74ed7a7c95b510d27afe7",
    dynamicTemplateData: templateData,
  };

  try {
    await sgMail.send(msg);
    console.log(`Admin notification sent to ${adminEmail}`);
  } catch (error) {
    console.error("SendGrid error:", error);
    throw error;
  }
}