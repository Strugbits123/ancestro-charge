
export type StepData = {
  fullName?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  propertyAddress?: string;
  // Step 2
  propertyType?: string;
  chargersAvailable?: string;
  covered?: "covered" | "uncovered";
  publicAccess?: "Yes" | "No";
  averageDailyVisitors?: string;
  ownOrLease?: string;
  multipleLocations?: "Yes" | "No";
  multipleLocationsCount?: string;
  // Step 3..6
  businessProfile?: string;
  chargerPreference?: string;
  partnershipModel?: string;
  additionalOpportunities?: string;
  utilityBillFiles?: string[]; // Object URLs
  propertyPhotoFiles?: string[]; // Object URLs
  electricalPhotoFiles?: string[]; // Object URLs
  projectPortfolioFiles?: string[]; // Object URLs
  utilityBillFilesRaw?: File[]; // Raw files for upload
  propertyPhotoFilesRaw?: File[]; // Raw files for upload
  electricalPhotoFilesRaw?: File[]; // Raw files for upload
  projectPortfolioFilesRaw?: File[]; // Raw files for upload
  utilityBillFilesPreSigned?: string[]; // Pre-signed URLs
  propertyPhotoFilesPreSigned?: string[]; // Pre-signed URLs
  electricalPhotoFilesPreSigned?: string[]; // Pre-signed URLs
  projectPortfolioFilesPreSigned?: string[]; // Pre-signed URLs
  propertyPhotoConsent?: boolean;
  electricalPhotoConsent?: boolean;
  notes?: string;
  businessRevenue?: boolean;
  electricalCapacity?: boolean;
  utilityBillUploaded?: boolean;
};