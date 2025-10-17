
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StepData } from "../types/StepData";
import SunButton from "../SunButton"; 

function Step6Supporting({
  data,
  update,
  onNext,
  submitting,
}: {
  data: StepData;
  update: (p: Partial<StepData>) => void;
  onNext: () => void;
  submitting: boolean;
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
        const { objectUrl } = await response.json();
        urls.push(objectUrl);
      }
      update({
        [key]: [...((data[key] as string[]) || []), ...urls],
        [`${key}Raw`]: [...((data[`${key}Raw` as keyof StepData] as File[]) || []), ...filesArray],
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
    if (data.propertyPhotoConsent === undefined)
      newErrors.propertyPhotoConsent = t("apply_modal_required_field");
    if (
      data.propertyPhotoConsent &&
      (!data.propertyPhotoFiles || data.propertyPhotoFiles.length === 0)
    )
      newErrors.propertyPhotoFiles = t("apply_modal_required_field");
    if (data.electricalPhotoConsent === undefined)
      newErrors.electricalPhotoConsent = t("apply_modal_required_field");
    if (
      data.electricalPhotoConsent &&
      (!data.electricalPhotoFiles || data.electricalPhotoFiles.length === 0)
    )
      newErrors.electricalPhotoFiles = t("apply_modal_required_field");
    if (!data.notes?.trim()) newErrors.notes = t("apply_modal_required_field");
    if (!data.projectPortfolioFiles || data.projectPortfolioFiles.length === 0)
      newErrors.projectPortfolioFiles = t("apply_modal_required_field");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const newErrors = { ...errors };
    if (data.propertyPhotoConsent !== undefined)
      delete newErrors.propertyPhotoConsent;
    if (
      !data.propertyPhotoConsent ||
      (data.propertyPhotoConsent && data.propertyPhotoFiles?.length)
    )
      delete newErrors.propertyPhotoFiles;
    if (data.electricalPhotoConsent !== undefined)
      delete newErrors.electricalPhotoConsent;
    if (
      !data.electricalPhotoConsent ||
      (data.electricalPhotoConsent && data.electricalPhotoFiles?.length)
    )
      delete newErrors.electricalPhotoFiles;
    if (data.notes?.trim()) delete newErrors.notes;
    if (data.projectPortfolioFiles?.length)
      delete newErrors.projectPortfolioFiles;
    setErrors(newErrors);
  }, [
    data.propertyPhotoConsent,
    data.propertyPhotoFiles,
    data.electricalPhotoConsent,
    data.electricalPhotoFiles,
    data.notes,
    data.projectPortfolioFiles,
  ]);

  const handleNext = () => {
    if (validateFields()) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col gap-4 text-white font-lato">
      {/* 1️⃣ Property Exterior / Parking Area */}
      <div>
        <p className="text-[14px] mb-2">
          {t("apply_modal_property_photos")}
          <span className="text-[10px] italic ml-2">
            {t("apply_modal_required_field")}
          </span>
        </p>
        <label className="flex items-center gap-3 cursor-pointer mb-3">
          <input
            type="radio"
            name="propertyPhotoConsent"
            checked={!!data.propertyPhotoConsent}
            onChange={() =>
              update({ propertyPhotoConsent: !data.propertyPhotoConsent })
            }
            className="w-[12px] h-[12px] rounded-full accent-[#FFCD28]"
          />
          <span className="text-[13px]">
            {t("apply_modal_property_photos_hint")}
          </span>
        </label>
        {errors.propertyPhotoConsent && (
          <span className="text-[10px] text-red-500 mt-1">
            {errors.propertyPhotoConsent}
          </span>
        )}

        {/* Only show upload when selected */}
        {data.propertyPhotoConsent && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div>
                <input
                  id="file-property-step6"
                  type="file"
                  accept=".pdf,image/*"
                  onChange={(e) => handleFile(e, "propertyPhotoFiles")}
                  className="hidden"
                  multiple
                  disabled={uploading}
                />
                <label
                  htmlFor="file-property-step6"
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
            {errors.propertyPhotoFiles && (
              <span className="text-[10px] text-red-500 mt-1">
                {errors.propertyPhotoFiles}
              </span>
            )}
            {data.propertyPhotoFilesRaw?.length ? (
              <div className="text-[12px] text-gray-300">
                {data.propertyPhotoFilesRaw.map((file, index) => (
                  <div key={index}>{file.name}</div>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* 2️⃣ Electrical Breaker / Infrastructure */}
      <div>
        <p className="text-[14px] mb-2">
          {t("apply_modal_electrical_photos")}
          <span className="text-[10px] italic ml-2">
            {t("apply_modal_required_field")}
          </span>
        </p>
        <label className="flex items-center gap-3 cursor-pointer mb-3">
          <input
            type="radio"
            name="electricalPhotoConsent"
            checked={!!data.electricalPhotoConsent}
            onChange={() =>
              update({ electricalPhotoConsent: !data.electricalPhotoConsent })
            }
            className="w-[12px] h-[12px] rounded-full accent-[#FFCD28]"
          />
          <span className="text-[13px]">
            {t("apply_modal_electrical_photos_hint")}
          </span>
        </label>
        {errors.electricalPhotoConsent && (
          <span className="text-[10px] text-red-500 mt-1">
            {errors.electricalPhotoConsent}
          </span>
        )}

        {/* Only show upload when selected */}
        {data.electricalPhotoConsent && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div>
                <input
                  id="file-electrical-step6"
                  type="file"
                  accept=".pdf,image/*"
                  onChange={(e) => handleFile(e, "electricalPhotoFiles")}
                  className="hidden"
                  multiple
                  disabled={uploading}
                />
                <label
                  htmlFor="file-electrical-step6"
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
            {errors.electricalPhotoFiles && (
              <span className="text-[10px] text-red-500 mt-1">
                {errors.electricalPhotoFiles}
              </span>
            )}
            {data.electricalPhotoFilesRaw?.length ? (
              <div className="text-[12px] text-gray-300">
                {data.electricalPhotoFilesRaw.map((file, index) => (
                  <div key={index}>{file.name}</div>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* 3️⃣ Additional Notes */}
      <div className="px-1">
        <p className="text-[14px] mb-2">
          {t("apply_modal_additional_notes")}
          <span className="text-[10px] italic ml-2">
            {t("apply_modal_required_field")}
          </span>
        </p>
        <p className="text-[12px] italic text-gray-300 mb-3">
          {t("apply_modal_additional_notes_hint")}
        </p>
        <textarea
          value={data.notes || ""}
          onChange={(e) => update({ notes: e.target.value })}
          className={`w-full bg-transparent border text-white p-2 text-sm placeholder:text-gray-400 ${
            errors.notes ? "border-red-500" : "border-[rgba(255,255,255,0.3)]"
          }`}
          // placeholder={t("apply_modal_additional_notes_placeholder")}
          rows={4}
        />
        {errors.notes && (
          <span className="text-[10px] text-red-500 mt-1">{errors.notes}</span>
        )}
      </div>

      {/* 4️⃣ Project Portfolio Upload */}
      <div>
        <p className="text-[14px] mb-2">
          {t("apply_modal_project_portfolio")}
          <span className="text-[10px] italic ml-2">
            {t("apply_modal_required_field")}
          </span>
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div>
              <input
                id="file-portfolio"
                type="file"
                accept=".pdf,image/*"
                onChange={(e) => handleFile(e, "projectPortfolioFiles")}
                className="hidden"
                multiple
                disabled={uploading}
              />
              <label
                htmlFor="file-portfolio"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer"
              >
                <span className="px-5 py-2 border-1 border-[#FFFFFF1A] rounded-md text-[13px] bg-gradient-to-r from-[#00000099] via-[#FFFFFF4D] to-[#00000000] text-white">
                  {uploading ? t("apply_modal_uploading") : t("apply_modal_upload")}
                </span>
              </label>
            </div>
            <span className="text-[13px] text-gray-300">
              {t("apply_modal_file_format")}
            </span>
          </div>
          {errors.projectPortfolioFiles && (
            <span className="text-[10px] text-red-500 mt-1">
              {errors.projectPortfolioFiles}
            </span>
          )}
          {data.projectPortfolioFilesRaw?.length ? (
            <div className="text-[12px] text-gray-300">
              {data.projectPortfolioFilesRaw.map((file, index) => (
                <div key={index}>{file.name}</div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* 5️⃣ Submit Button */}
      <div className="mt-6 flex justify-center">
        <SunButton
          onClick={handleNext}
          className="w-full py-3"
          textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
          disabled={submitting || uploading}
        >
          {t("apply_modal_file_formSubmit")}
        </SunButton>
      </div>
    </div>
  );
}

export default Step6Supporting;