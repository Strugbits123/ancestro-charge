
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StepData } from "../types/StepData";
import SunButton from "../SunButton"; 

function Step3Profile({
  data,
  update,
  onNext,
}: {
  data: StepData;
  update: (p: Partial<StepData>) => void;
  onNext: () => void;
}) {
  const { t } = useTranslation();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [uploading, setUploading] = useState(false);

  const handleFile = async (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof StepData
  ) => {
    const files = e.target.files;
    if (!files) return;
    setUploading(true);
    try {
      const filesArray = Array.from(files);
      const urls: string[] = [];
      const preSignedUrls: string[] = [];
      for (const file of filesArray) {
        const response = await fetch("/api/get-presigned-url", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fileName: file.name,
            fileType: file.type,
            field: key,
          }),
        });
        if (!response.ok) throw new Error(`Failed to get pre-signed URL for ${file.name}`);
        const { objectUrl, signedUrl } = await response.json();
        urls.push(objectUrl);
        preSignedUrls.push(signedUrl);
      }
      update({
        [key]: [...((data[key] as string[]) || []), ...urls],
        [`${key}Raw`]: [...((data[`${key}Raw` as keyof StepData] as File[]) || []), ...filesArray],
        [`${key}PreSigned`]: [...((data[`${key}PreSigned` as keyof StepData] as string[]) || []), ...preSignedUrls],
      });
    } catch (error) {
      console.error("Error getting pre-signed URLs:", error);
      setErrors((prev) => ({
        ...prev,
        [key]: t("apply_modal_file_upload_error"),
      }));
    } finally {
      setUploading(false);
    }
  };

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};
    if (data.businessRevenue === undefined)
      newErrors.businessRevenue = t("apply_modal_required_field");
    if (data.electricalCapacity === undefined)
      newErrors.electricalCapacity = t("apply_modal_required_field");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const newErrors = { ...errors };
    if (data.businessRevenue !== undefined) delete newErrors.businessRevenue;
    if (data.electricalCapacity !== undefined)
      delete newErrors.electricalCapacity;
    if (data.utilityBillFiles?.length)
      delete newErrors.utilityBillFiles;
    setErrors(newErrors);
  }, [
    data.businessRevenue,
    data.electricalCapacity,
    data.utilityBillFiles,
  ]);

  const handleNext = () => {
    if (validateFields()) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col gap-6 text-white font-lato">
      {/* Annual Business Revenue Range */}
      <div>
        <p className="text-[12px] mb-2">
          {t("apply_modal_business_revenue")}
          <span className="text-[10px] italic ml-2">
            {t("apply_modal_required_field")}
          </span>
        </p>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="businessRevenue"
              checked={!!data.businessRevenue}
              onChange={() =>
                update({ businessRevenue: !data.businessRevenue })
              }
              className="w-[12px] h-[12px] rounded-full accent-[#FFCD28]"
            />
            <span className="text-[12px]">
              {t("apply_modal_business_revenue_hint")}
            </span>
          </label>
          {errors.businessRevenue && (
            <span className="text-[10px] text-red-500 mt-1">
              {errors.businessRevenue}
            </span>
          )}
        </div>
      </div>

      {/* Existing Electrical Capacity */}
      <div>
        <p className="text-[12px] mb-2">
          {t("apply_modal_electrical_capacity")}
          <span className="text-[10px] italic ml-2">
            {t("apply_modal_required_field")}
          </span>
        </p>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="electricalCapacity"
              checked={!!data.electricalCapacity}
              onChange={() =>
                update({ electricalCapacity: !data.electricalCapacity })
              }
              className="w-[12px] h-[12px] rounded-full accent-[#FFCD28]"
            />
            <span className="text-[12px]">
              {t("apply_modal_electrical_capacity_hint")}
            </span>
          </label>
          {errors.electricalCapacity && (
            <span className="text-[10px] text-red-500 mt-1">
              {errors.electricalCapacity}
            </span>
          )}
        </div>
      </div>

      {/* Upload Utility Bill */}
      <div className="flex flex-col gap-y-[8px]">
        <div className="flex flex-col gap-y-[10px]">
          <p className="text-[12px] mb-2">
            {t("apply_modal_utility_bill")}
          </p>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="utilityBillUploaded"
              checked={!!data.utilityBillUploaded}
              onChange={() =>
                update({ utilityBillUploaded: !data.utilityBillUploaded })
              }
              className="w-[12px] h-[12px] rounded-full accent-[#FFCD28]"
            />
            <span className="text-[12px]">
              {t("apply_modal_utility_bill_hint")}
            </span>
          </label>
        </div>
        {data.utilityBillUploaded && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div>
                <input
                  id="file-utility-bill"
                  type="file"
                  accept=".pdf,image/*"
                  onChange={(e) => handleFile(e, "utilityBillFiles")}
                  className="hidden"
                  multiple
                  disabled={uploading}
                />
                <label
                  htmlFor="file-utility-bill"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer"
                >
                  <span className="px-5 py-2 rounded-md text-[13px] bg-gradient-to-r from-[#00000099] via-[#FFFFFF4D] to-[#00000000] text-white border-1 border-[#FFFFFF1A]">
                    {uploading ? t("apply_modal_uploading") : t("apply_modal_upload")}
                  </span>
                </label>
              </div>
              <span className="text-[12px] text-gray-300">
                {t("apply_modal_file_format_gallery")}
              </span>
            </div>
            {errors.utilityBillFiles && (
              <span className="text-[10px] text-red-500 mt-1">
                {errors.utilityBillFiles}
              </span>
            )}
            {data.utilityBillFilesRaw?.length ? (
              <div className="text-[12px] text-gray-300">
                {data.utilityBillFilesRaw.map((file, index) => (
                  <div key={index}>{file.name}</div>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* Next Button */}
      <div className="mt-6 flex justify-center">
        <SunButton
          onClick={handleNext}
          className="w-full py-3"
          textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
          disabled={uploading}
        >
          {t("apply_modal_next")}
        </SunButton>
      </div>
    </div>
  );
}

export default Step3Profile;