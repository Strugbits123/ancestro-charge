import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { StepData } from "../types/StepData";
import { submitFinal } from "./SubmitFinal";
import Step1Contact from "./Step1";
import SunButton from "../SunButton"; 
import Step2Business from "./Step2Business"; 
import Step3Profile from "./Step3Profile"; 
import Step4Charger from "./Step4Charger"; 
import Step5Additional from "./Step5Additional"; 
import Step6Supporting from "./Step6Supporting"; 

export default function ApplyModalFinal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [data, setData] = useState<StepData>({
    covered: "covered",
    publicAccess: "No",
    multipleLocations: "No",
  });
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("Form data changed:", data);
  }, [data]);

  useEffect(() => {
    if (open) {
      setStep(1);
      setDone(false);
      setSubmitting(false);
      setData({
        covered: "covered",
        publicAccess: "No",
        multipleLocations: "No",
      });
    }
  }, [open]);

  if (!open) return null;

  const update = (patch: Partial<StepData>) =>
    setData((d) => ({ ...d, ...patch }));

  const next = () => setStep((s) => Math.min(6, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  return (
    <>
      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/35 flex items-center justify-center px-4 sm:px-6 "
          aria-modal
          role="dialog"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Backdrop - limited to modal area */}
          <div className="absolute max-w-[520px] w-full h-[600px] rounded-[20px]" />

          {/* Modal card */}
          <div
            ref={modalRef}
            className="relative z-10 max-w-[520px] w-full bg-[#00000080] border border-[rgba(255,255,255,0.1)] backdrop-blur-lg shadow-lg rounded-[20px] p-6 sm:p-8"
            style={{ width: "500px", height: "auto" }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {step > 1 && !done && (
                  <button
                    onClick={back}
                    className="p-1 rounded-md hover:opacity-90"
                    aria-label="Back"
                  >
                    <Image src="/back.png" alt="Back" width={28} height={28} />
                  </button>
                )}
              </div>
              {!done && (
                <div className="mb-6 text-center w-full">
                  <h3 className="text-white font-bold text-[18px] md:text-[20px] font-lato tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]">
                    {t("apply_modal_step_label")}{" "}
                    {String(step).padStart(2, "0")}:{" "}
                    {t(`apply_modal_step_${step}`)}
                  </h3>
                </div>
              )}
            </div>

            {/* Body — switch by step */}
            <div className="overflow-auto " style={{ maxHeight: 520 }}>
              {done ? (
                <div className="flex flex-col items-center gap-4 font-lato">
                  <div className="px-4 py-2 rounded-lg bg-[#FFCD28] ">
                    <h4 className="text-[20px] font-bold text-black text-center">
                      {t("apply_modal_thanks")}
                    </h4>
                  </div>
                  <p className="text-[16px] font-medium text-white text-center max-w-[320px]">
                    {t("apply_modal_thanks_desc")}
                  </p>
                </div>
              ) : (
                <>
                  {step === 1 && (
                    <Step1Contact data={data} update={update} onNext={next} />
                  )}
                  {step === 2 && (
                    <Step2Business data={data} update={update} onNext={next} />
                  )}
                  {step === 3 && (
                    <Step3Profile data={data} update={update} onNext={next} />
                  )}
                  {step === 4 && (
                    <Step4Charger data={data} update={update} onNext={next} />
                  )}
                  {step === 5 && (
                    <Step5Additional
                      data={data}
                      update={update}
                      onNext={next}
                    />
                  )}
                  {step === 6 && (
                    <Step6Supporting
                      data={data}
                      update={update}
                      onNext={async () => {
                        await submitFinal(
                          data,
                          setSubmitting,
                          setDone,
                          onClose,
                          t
                        );
                      }}
                      submitting={submitting}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}