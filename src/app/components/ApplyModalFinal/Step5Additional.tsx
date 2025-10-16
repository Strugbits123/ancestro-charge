import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StepData } from "../types/StepData";
import SunButton from "../SunButton"; 

function Step5Additional({
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
    if (!data.additionalOpportunities)
      newErrors.additionalOpportunities = t("apply_modal_required_field");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const newErrors = { ...errors };
    if (data.additionalOpportunities) delete newErrors.additionalOpportunities;
    setErrors(newErrors);
  }, [data.additionalOpportunities]);

  const handleNext = () => {
    if (validateFields()) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col gap-6 font-lato text-white">
      {/* Question Text */}
      <div>
        <p
          className="text-[14px] leading-snug"
          dangerouslySetInnerHTML={{ __html: t("apply_modal_solar_question") }}
        />
        <span className="text-[10px] italic ml-2">
          {t("apply_modal_required_field")}
        </span>
      </div>

      {/* Radio Buttons for Single Selection */}
      <div className="flex flex-col sm:flex-row gap-4">
        {[
          t("apply_modal_solar_yes"),
          t("apply_modal_solar_no"),
          t("apply_modal_solar_maybe"),
        ].map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              name="additionalOpportunities"
              checked={data.additionalOpportunities === option}
              onChange={() => update({ additionalOpportunities: option })}
              className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
            />
            <span className="text-[13px]">{option}</span>
          </label>
        ))}
      </div>
      {errors.additionalOpportunities && (
        <span className="text-[10px] text-red-500 mt-1">
          {errors.additionalOpportunities}
        </span>
      )}

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

export default Step5Additional;