import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StepData } from "../types/StepData";
import SunButton from "../SunButton"; 

function Step4Charger({
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

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};
    if (!data.chargerPreference)
      newErrors.chargerPreference = t("apply_modal_required_field");
    if (!data.partnershipModel)
      newErrors.partnershipModel = t("apply_modal_required_field");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const newErrors = { ...errors };
    if (data.chargerPreference) delete newErrors.chargerPreference;
    if (data.partnershipModel) delete newErrors.partnershipModel;
    setErrors(newErrors);
  }, [data.chargerPreference, data.partnershipModel]);

  const handleNext = () => {
    if (validateFields()) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col gap-8 text-white font-lato">
      {/* Charger Type */}
      <div>
        <p className="text-[14px] mb-3">
          {t("apply_modal_charger_type_question")}
          <span className="text-[10px] italic ml-2">
            {t("apply_modal_required_field")}
          </span>
        </p>
        <div className="flex flex-col gap-3">
          {/* Level 2 */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              name="chargerType"
              checked={
                data.chargerPreference === t("apply_modal_charger_level_2")
              }
              onChange={() =>
                update({ chargerPreference: t("apply_modal_charger_level_2") })
              }
              className="w-[14px] h-[14px] rounded-full accent-[#FFCD28] mt-[2px]"
            />
            <span className="text-[13px] leading-snug">
              <span className="font-bold text-white">
                {t("apply_modal_charger_level_2")}:
              </span>{" "}
              <span className="text-gray-300 text-[12px] italic">
                {t("apply_modal_charger_level_2_desc")}
              </span>
            </span>
          </label>

          {/* Level 3 */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              name="chargerType"
              checked={
                data.chargerPreference === t("apply_modal_charger_level_3")
              }
              onChange={() =>
                update({ chargerPreference: t("apply_modal_charger_level_3") })
              }
              className="w-[14px] h-[14px] rounded-full accent-[#FFCD28] mt-[2px] text-[14px]"
            />
            <span className="text-[13px] leading-snug">
              <span className="font-medium text-white">
                {t("apply_modal_charger_level_3")}:
              </span>{" "}
              <span className="text-gray-300 text-[12px] italic">
                {t("apply_modal_charger_level_3_desc")}
              </span>
            </span>
          </label>
          {errors.chargerPreference && (
            <span className="text-[10px] text-red-500 mt-1">
              {errors.chargerPreference}
            </span>
          )}
        </div>
      </div>

      {/* Partnership Model Preference */}
      <div>
        <p className="text-[14px] mb-3">
          {t("apply_modal_partnership_model")}
          <span className="text-[10px] italic ml-2">
            {t("apply_modal_required_field")}
          </span>
        </p>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="partnershipModel"
              checked={
                data.partnershipModel ===
                t("apply_modal_partnership_zero_investment")
              }
              onChange={() =>
                update({
                  partnershipModel: t(
                    "apply_modal_partnership_zero_investment"
                  ),
                })
              }
              className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
            />
            <span className="text-[13px]">
              {t("apply_modal_partnership_zero_investment")}
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="partnershipModel"
              checked={
                data.partnershipModel === t("apply_modal_partnership_invest")
              }
              onChange={() =>
                update({
                  partnershipModel: t("apply_modal_partnership_invest"),
                })
              }
              className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
            />
            <span className="text-[13px]">
              {t("apply_modal_partnership_invest")}
            </span>
          </label>
          {errors.partnershipModel && (
            <span className="text-[10px] text-red-500 mt-1">
              {errors.partnershipModel}
            </span>
          )}
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-6 flex justify-center">
        <SunButton
          onClick={handleNext}
          className="w-full py-3"
          textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
        >
          {t("apply_modal_next")}
        </SunButton>
      </div>
    </div>
  );
}

export default Step4Charger;