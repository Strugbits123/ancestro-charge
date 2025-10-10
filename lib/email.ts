import sgMail from "@sendgrid/mail";

export async function sendUserConfirmation(formData: any) {
  const msg = {
    to: "awais90789@gmail.com",
    from: process.env.SENDGRID_FROM_EMAIL!,
    templateId: "d-980652b58847448dab8df13f7a523072",
    dynamic_template_data: {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      businessName: formData.countryOfResidency,
      propertyAddress: formData.propertyAddress,
      propertyType: formData.propertyType,
      chargersAvailable: formData.chargersAvailable,
      covered: formData.covered,
      publicAccess: formData.publicAccess,
      averageDailyVisitors: formData.averageDailyVisitors,
      hoursOfOperation: formData.hoursOfOperation,
      businessRevenue: formData.businessRevenue,
      electricalCapacity: formData.electricalCapacity,
      utilityBillFiles: formData.utilityBillFiles,
      chargerPreference: formData.chargerPreference,
      partnershipModel: formData.partnershipModel,
      additionalOpportunities: formData.additionalOpportunities,
      propertyPhotoFiles: formData.propertyPhotoFiles,
      electricalPhotoFiles: formData.electricalPhotoFiles,
      notes: formData.notes,
      projectPortfolioFiles: formData.projectPortfolioFiles,
    },
  };

  await sgMail.send(msg);
}

export async function sendAdminNotification(adminEmail: string, formData: any) {
  const msg = {
    to: "awais90789@gmail.com",
    from: "awais90789@gmail.com",
    templateId: "d-1d2e5761f5a74ed7a7c95b510d27afe7",
    dynamic_template_data: {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      businessName: formData.countryOfResidency,
      propertyAddress: formData.propertyAddress,
      propertyType: formData.propertyType,
      chargersAvailable: formData.chargersAvailable,
      covered: formData.covered,
      publicAccess: formData.publicAccess,
      averageDailyVisitors: formData.averageDailyVisitors,
      hoursOfOperation: formData.hoursOfOperation,
      businessRevenue: formData.businessRevenue,
      electricalCapacity: formData.electricalCapacity,
      utilityBillFiles: formData.utilityBillFiles,
      chargerPreference: formData.chargerPreference,
      partnershipModel: formData.partnershipModel,
      additionalOpportunities: formData.additionalOpportunities,
      propertyPhotoFiles: formData.propertyPhotoFiles,
      electricalPhotoFiles: formData.electricalPhotoFiles,
      notes: formData.notes,
      projectPortfolioFiles: formData.projectPortfolioFiles,
    },
  };

  await sgMail.send(msg);
}
