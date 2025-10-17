
import { StepData } from "../types/StepData";

export async function submitFinal(
  data: StepData,
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  setDone: React.Dispatch<React.SetStateAction<boolean>>,
  onClose: () => void,
  t: (key: string) => string
) {
  setSubmitting(true);
  try {
    // Define the file groups with their pre-signed URLs, object URLs, and raw files
    const uploadGroups = [
      {
        key: "utilityBillFiles" as const,
        files: data.utilityBillFiles || [],
        preSignedUrls: data.utilityBillFilesPreSigned || [],
        originalFiles: data.utilityBillFilesRaw || [],
      },
      {
        key: "propertyPhotoFiles" as const,
        files: data.propertyPhotoFiles || [],
        preSignedUrls: data.propertyPhotoFilesPreSigned || [],
        originalFiles: data.propertyPhotoFilesRaw || [],
      },
      {
        key: "electricalPhotoFiles" as const,
        files: data.electricalPhotoFiles || [],
        preSignedUrls: data.electricalPhotoFilesPreSigned || [],
        originalFiles: data.electricalPhotoFilesRaw || [],
      },
      {
        key: "projectPortfolioFiles" as const,
        files: data.projectPortfolioFiles || [],
        preSignedUrls: data.projectPortfolioFilesPreSigned || [],
        originalFiles: data.projectPortfolioFilesRaw || [],
      },
    ];

    // Object to store the final URLs
    const uploadedUrls: Partial<{ [K in keyof StepData]: string[] }> = {};

    // Upload files to S3 using stored pre-signed URLs
    await Promise.all(
      uploadGroups.map(async ({ key, files, preSignedUrls, originalFiles }) => {
        if (files.length === 0 || originalFiles.length === 0 || preSignedUrls.length === 0) return;

        // Ensure the number of files, URLs, and pre-signed URLs match
        if (files.length !== originalFiles.length || files.length !== preSignedUrls.length) {
          throw new Error(`Mismatch between URLs, pre-signed URLs, and files for ${key}`);
        }

        // Upload each file using its corresponding pre-signed URL
        await Promise.all(
          files.map(async (objectUrl, index) => {
            const file = originalFiles[index];
            const preSignedUrl = preSignedUrls[index];
            if (!preSignedUrl) {
              throw new Error(`No pre-signed URL for ${file.name} in ${key}`);
            }

            // Upload file to S3
            const uploadResponse = await fetch(preSignedUrl, {
              method: "PUT",
              body: file,
              headers: {
                "Content-Type": file.type,
              },
            });

            if (!uploadResponse.ok) {
              throw new Error(`Failed to upload ${file.name} to S3 for ${key}`);
            }

            // Store the object URL
            if (!uploadedUrls[key]) {
              uploadedUrls[key] = [];
            }
            uploadedUrls[key]!.push(objectUrl);
          })
        );
      })
    );

    // Prepare final data with uploaded URLs
    const finalData = {
      ...data,
      ...uploadedUrls,
      submissionDate: new Date(),
    };

    // Submit the final data to /api/final
    const response = await fetch("/api/final", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uploadRecords: [finalData] }),
    });

    if (!response.ok) throw new Error("Submission failed");

    // Set done to true on successful submission
    setDone(true);
  } catch (error) {
    console.error("Error submitting final data:", error);
    alert(t("apply_modal_submission_error"));
  } finally {
    setSubmitting(false);
  }
}