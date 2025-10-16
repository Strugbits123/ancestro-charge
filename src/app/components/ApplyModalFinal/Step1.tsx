import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StepData } from "../types/StepData";
import Field from "../Field";
import SunButton from "../SunButton"; 

function Step1Contact({
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
    if (!data.fullName?.trim())
      newErrors.fullName = t("apply_modal_required_field");
    if (!data.email?.trim()) newErrors.email = t("apply_modal_required_field");
    else if (!/\S+@\S+\.\S+/.test(data.email))
      newErrors.email = t("apply_modal_invalid_email");
    if (!data.phone?.trim()) newErrors.phone = t("apply_modal_required_field");
    if (!data.businessName?.trim())
      newErrors.businessName = t("apply_modal_required_field");
    if (!data.propertyAddress?.trim())
      newErrors.propertyAddress = t("apply_modal_required_field");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const newErrors = { ...errors };
    if (data.fullName?.trim()) delete newErrors.fullName;
    if (data.email?.trim() && /\S+@\S+\.\S+/.test(data.email))
      delete newErrors.email;
    if (data.phone?.trim()) delete newErrors.phone;
    if (data.businessName?.trim()) delete newErrors.businessName;
    if (data.propertyAddress?.trim()) delete newErrors.propertyAddress;
    setErrors(newErrors);
  }, [
    data.fullName,
    data.email,
    data.phone,
    data.businessName,
    data.propertyAddress,
  ]);

  const handleNext = () => {
    if (validateFields()) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <Field
        label={t("apply_modal_full_name")}
        value={data.fullName || ""}
        onChange={(v) => update({ fullName: v })}
        error={errors.fullName}
        hint={t("apply_modal_required_field")}
      />
      <Field
        label={t("apply_modal_email")}
        value={data.email || ""}
        onChange={(v) => update({ email: v })}
        error={errors.email}
        hint={t("apply_modal_required_field")}
      />
      <Field
        label={t("apply_modal_phone")}
        value={data.phone || ""}
        onChange={(v) => update({ phone: v })}
        error={errors.phone}
        hint={t("apply_modal_required_field")}
      />
      <Field
        label={t("apply_modal_business_name")}
        value={data.businessName || ""}
        onChange={(v) => update({ businessName: v })}
        error={errors.businessName}
        hint={t("apply_modal_required_field")}
      />
      <Field
        label={t("apply_modal_property_address")}
        value={data.propertyAddress || ""}
        onChange={(v) => update({ propertyAddress: v })}
        error={errors.propertyAddress}
        hint={t("apply_modal_property_address_hint")}
      />
      <div className="mt-4 flex justify-center">
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

export default Step1Contact;