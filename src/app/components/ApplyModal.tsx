// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
// import Image from "next/image";
// import SunButton from "./SunButton";
// import CustomCheckbox from "./CustomCheckbox";

// type StepData = {
//   fullName?: string;
//   email?: string;
//   phone?: string;
//   businessName?: string;
//   propertyAddress?: string;
//   // Step 2
//   propertyType?: string;
//   chargersAvailable?: string;
//   covered?: "covered" | "uncovered";
//   publicAccess?: "Yes" | "No";
//   averageDailyVisitors?: string;
//   hoursOfOperation?: string;
//   ownOrLease?: string;
//   multipleLocations?: "Yes" | "No";
//   multipleLocationsCount?: string;
//   // Step 3..6 simple fields
//   businessProfile?: string;
//   chargerPreference?: string;
//   partnershipModel?: string;
//   additionalOpportunities?: string;
//   utilityBillFiles?: string[]; // S3 URLs
//   propertyPhotoFiles?: string[]; // S3 URLs
//   electricalPhotoFiles?: string[]; // S3 URLs
//   projectPortfolioFiles?: string[]; // S3 URLs
//   propertyPhotoConsent?: boolean;
//   electricalPhotoConsent?: boolean;
//   notes?: string;
//   businessRevenue?: boolean;
//   electricalCapacity?: boolean;
//   utilityBillUploaded?: boolean;
// };

// export default function ApplyModal({
//   open,
//   onClose,
// }: {
//   open: boolean;
//   onClose: () => void;
// }) {
//   const { t } = useTranslation();
//   const [step, setStep] = useState(1);
//   const [submitting, setSubmitting] = useState(false);
//   const [done, setDone] = useState(false);
//   const [data, setData] = useState<StepData>({
//     covered: "covered",
//     publicAccess: "No",
//     multipleLocations: "No",
//   });
//   const modalRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     console.log("Form data changed:", data);
//   }, [data]);

//   useEffect(() => {
//     if (open) {
//       setStep(1);
//       setDone(false);
//       setSubmitting(false);
//       setData({
//         covered: "covered",
//         publicAccess: "No",
//         multipleLocations: "No",
//       }); // Reset with default values
//     }
//   }, [open]);

//   if (!open) return null;

//   const update = (patch: Partial<StepData>) =>
//     setData((d) => ({ ...d, ...patch }));

//   const next = () => setStep((s) => Math.min(7, s + 1));
//   const back = () => setStep((s) => Math.max(1, s - 1));

//   const submitFinal = async () => {
//     setSubmitting(true);
//     await new Promise((r) => setTimeout(r, 900));
//     setSubmitting(false);
//     setDone(true);
//     setStep(7);
//     onClose();
//   };

//   return (
//     <>
//       {/* Modal */}
//       {open && (
//         <div
//           className="fixed inset-0 z-[60] flex items-center justify-center px-4 sm:px-6"
//           aria-modal
//           role="dialog"
//           onMouseDown={(e) => {
//             if (e.target === e.currentTarget) onClose();
//           }}
//         >
//           {/* Backdrop - limited to modal area */}
//           <div className="absolute max-w-[520px] w-full h-[600px] rounded-[20px]" />

//           {/* Modal card */}
//           <div
//             ref={modalRef}
//             className="relative z-10 max-w-[520px] w-full bg-[#00000080] border border-[rgba(255,255,255,0.1)] backdrop-blur-lg shadow-lg rounded-[20px] p-6 sm:p-8"
//             style={{ width: "500px", height: "auto" }}
//             onMouseDown={(e) => e.stopPropagation()}
//           >
//             {/* Header row */}
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 {step > 1 && step < 7 && (
//                   <button
//                     onClick={back}
//                     className="p-1 rounded-md hover:opacity-90"
//                     aria-label="Back"
//                   >
//                     <Image src="/back.png" alt="Back" width={28} height={28} />
//                   </button>
//                 )}
//               </div>
//               {step < 7 && (
//                 <div className="mb-6 text-center w-full">
//                   <h3 className="text-white font-bold text-[18px] md:text-[20px] font-lato tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]">
//                     {t("apply_modal_step_label")}{" "}
//                     {String(step).padStart(2, "0")}:{" "}
//                     {t(`apply_modal_step_${step}`)}
//                   </h3>
//                 </div>
//               )}
//             </div>

//             {/* Body — switch by step */}
//             <div className="overflow-auto" style={{ maxHeight: 520 }}>
//               {step === 1 && (
//                 <Step1Contact data={data} update={update} onNext={next} />
//               )}
//               {step === 2 && (
//                 <Step2Business data={data} update={update} onNext={next} />
//               )}
//               {step === 3 && (
//                 <Step3Profile data={data} update={update} onNext={next} />
//               )}
//               {step === 4 && (
//                 <Step4Charger data={data} update={update} onNext={next} />
//               )}
//               {step === 5 && (
//                 <Step5Additional data={data} update={update} onNext={next} />
//               )}
//               {step === 6 && (
//                 <Step6Supporting
//                   data={data}
//                   update={update}
//                   onNext={() => {
//                     next();
//                   }}
//                 />
//               )}
//               {step === 7 && (
//                 <div className="flex flex-col items-center gap-4 font-lato">
//                   <div className="px-4 py-2 rounded-lg bg-[#FFCD28]">
//                     <h4 className="text-[20px] font-bold text-black text-center">
//                       {t("apply_modal_thanks")}
//                     </h4>
//                   </div>
//                   <p className="text-[16px] font-medium text-white text-center max-w-[320px]">
//                     {t("apply_modal_thanks_desc")}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// /* STEP 1 */
// function Step1Contact({
//   data,
//   update,
//   onNext,
// }: {
//   data: StepData;
//   update: (p: Partial<StepData>) => void;
//   onNext: () => void;
// }) {
//   const { t } = useTranslation();
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

//   const validateFields = () => {
//     const newErrors: { [key: string]: string } = {};
//     if (!data.fullName?.trim()) newErrors.fullName = t("apply_modal_required_field");
//     if (!data.email?.trim()) newErrors.email = t("apply_modal_required_field");
//     else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = t("apply_modal_invalid_email");
//     if (!data.phone?.trim()) newErrors.phone = t("apply_modal_required_field");
//     if (!data.businessName?.trim()) newErrors.businessName = t("apply_modal_required_field");
//     if (!data.propertyAddress?.trim()) newErrors.propertyAddress = t("apply_modal_required_field");
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   useEffect(() => {
//     const newErrors = { ...errors };
//     if (data.fullName?.trim()) delete newErrors.fullName;
//     if (data.email?.trim() && /\S+@\S+\.\S+/.test(data.email)) delete newErrors.email;
//     if (data.phone?.trim()) delete newErrors.phone;
//     if (data.businessName?.trim()) delete newErrors.businessName;
//     if (data.propertyAddress?.trim()) delete newErrors.propertyAddress;
//     setErrors(newErrors);
//   }, [data.fullName, data.email, data.phone, data.businessName, data.propertyAddress]);

//   const handleNext = () => {
//     if (validateFields()) {
//       onNext();
//     }
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <Field
//         label={t("apply_modal_full_name")}
//         value={data.fullName || ""}
//         onChange={(v) => update({ fullName: v })}
//         error={errors.fullName}
//         hint={t("apply_modal_required_field")}
//       />
//       <Field
//         label={t("apply_modal_email")}
//         value={data.email || ""}
//         onChange={(v) => update({ email: v })}
//         error={errors.email}
//         hint={t("apply_modal_required_field")}
//       />
//       <Field
//         label={t("apply_modal_phone")}
//         value={data.phone || ""}
//         onChange={(v) => update({ phone: v })}
//         error={errors.phone}
//         hint={t("apply_modal_required_field")}
//       />
//       <Field
//         label={t("apply_modal_business_name")}
//         value={data.businessName || ""}
//         onChange={(v) => update({ businessName: v })}
//         error={errors.businessName}
//         hint={t("apply_modal_required_field")}
//       />
//       <Field
//         label={t("apply_modal_property_address")}
//         value={data.propertyAddress || ""}
//         onChange={(v) => update({ propertyAddress: v })}
//         error={errors.propertyAddress}
//         hint={t("apply_modal_property_address_hint")}
//       />
//       <div className="mt-4 flex justify-center">
//         <SunButton
//           onClick={handleNext}
//           className="w-full py-3"
//           textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
//         >
//           {t("apply_modal_next")}
//         </SunButton>
//       </div>
//     </div>
//   );
// }

// /* STEP 2 */
// function Step2Business({
//   data,
//   update,
//   onNext,
// }: {
//   data: StepData;
//   update: (p: Partial<StepData>) => void;
//   onNext: () => void;
// }) {
//   const { t } = useTranslation();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isHoursDropdownOpen, setIsHoursDropdownOpen] = useState(false);
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

//   const propertyTypes = [
//     t("apply_modal_property_type_gas_station"),
//     t("apply_modal_property_type_restaurant"),
//     t("apply_modal_property_type_shopping_mall"),
//     t("apply_modal_property_type_supermarket"),
//     t("apply_modal_property_type_hotel"),
//     t("apply_modal_property_type_office"),
//     t("apply_modal_property_type_residential"),
//     t("apply_modal_property_type_airport"),
//     t("apply_modal_property_type_stadium"),
//     t("apply_modal_property_type_government"),
//     t("apply_modal_property_type_hospital"),
//     t("apply_modal_property_type_university"),
//     t("apply_modal_property_type_parking"),
//     t("apply_modal_property_type_other"),
//   ];

//   const validateFields = () => {
//     const newErrors: { [key: string]: string } = {};
//     if (!data.propertyType) newErrors.propertyType = t("apply_modal_required_field");
//     if (!data.chargersAvailable) newErrors.chargersAvailable = t("apply_modal_required_field");
//     if (!data.covered) newErrors.covered = t("apply_modal_required_field");
//     if (!data.publicAccess) newErrors.publicAccess = t("apply_modal_required_field");
//     if (!data.averageDailyVisitors) newErrors.averageDailyVisitors = t("apply_modal_required_field");
//     if (!data.ownOrLease) newErrors.ownOrLease = t("apply_modal_required_field");
//     if (!data.multipleLocations) newErrors.multipleLocations = t("apply_modal_required_field");
//     if (data.multipleLocations === "Yes" && !data.multipleLocationsCount?.trim())
//       newErrors.multipleLocationsCount = t("apply_modal_required_field");
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   useEffect(() => {
//     const newErrors = { ...errors };
//     if (data.propertyType) delete newErrors.propertyType;
//     if (data.chargersAvailable) delete newErrors.chargersAvailable;
//     if (data.covered) delete newErrors.covered;
//     if (data.publicAccess) delete newErrors.publicAccess;
//     if (data.averageDailyVisitors) delete newErrors.averageDailyVisitors;
//     if (data.ownOrLease) delete newErrors.ownOrLease;
//     if (data.multipleLocations) delete newErrors.multipleLocations;
//     if (data.multipleLocations !== "Yes" || (data.multipleLocations === "Yes" && data.multipleLocationsCount?.trim()))
//       delete newErrors.multipleLocationsCount;
//     setErrors(newErrors);
//   }, [
//     data.propertyType,
//     data.chargersAvailable,
//     data.covered,
//     data.publicAccess,
//     data.averageDailyVisitors,
//     data.ownOrLease,
//     data.multipleLocations,
//     data.multipleLocationsCount,
//   ]);

//   const handleNext = () => {
//     if (validateFields()) {
//       onNext();
//     }
//   };

//   return (
//     <div className="flex flex-col gap-5 text-white">
//       {/* Property Type Dropdown */}
//       <div className="relative flex flex-col">
//         <label className="text-[13px] mb-2">
//           {t("apply_modal_property_type")}
//           <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//         </label>
//         <div
//           className={`flex items-center justify-between bg-transparent border-b p-2 cursor-pointer ${
//             errors.propertyType ? "border-red-500" : "border-[rgba(255,255,255,0.3)]"
//           }`}
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//         >
//           <span>
//             {data.propertyType || t("apply_modal_select_property_type")}
//           </span>
//           <Image src="/cap-icon.svg" alt="cap" width={17} height={17} />
//         </div>
//         {errors.propertyType && (
//           <span className="text-[10px] text-red-500 mt-1">{errors.propertyType}</span>
//         )}

//         {/* Dropdown list */}
//         {isDropdownOpen && (
//           <div className="flex flex-col mt-3 bg-[#0000001A] backdrop-blur-lg border border-[#FFFFFF1A] rounded-xl p-4 gap-2 max-h-[250px] overflow-y-auto transition-all duration-300">
//             {propertyTypes.map((type) => (
//               <div key={type}>
//                 <button
//                   onClick={() => {
//                     update({ propertyType: type });
//                     setIsDropdownOpen(false);
//                   }}
//                   className={`w-full text-left text-[14px] px-2 py-1 rounded-md hover:bg-[#F5DC7B] hover:text-black transition ${
//                     data.propertyType === type
//                       ? "bg-[#F5DC7B] text-black"
//                       : "text-white"
//                   }`}
//                 >
//                   {type}
//                 </button>

//                 {/* Divider after "Other" */}
//                 {type === t("apply_modal_property_type_other") && (
//                   <div className="border-b border-[#FFFFFF1A] my-3" />
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* When "Other" is selected → show additional fields */}
//       <div className="flex flex-col gap-5 mt-3 transition-all duration-300">
//         {/* Parking Availability */}
//         <div>
//           <label className="text-[13px] block mb-2">
//             {t("apply_modal_parking_availability")}
//             <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//           </label>
//           <select
//             value={data.chargersAvailable || ""}
//             onChange={(e) => update({ chargersAvailable: e.target.value })}
//             className={`bg-transparent p-2 border-b w-full text-white ${
//               errors.chargersAvailable ? "border-red-500" : "border-[rgba(255,255,255,0.3)]"
//             }`}
//           >
//             <option value="" className="text-black">
//               {t("apply_modal_select_property_type")}
//             </option>
//             {[...Array(21).keys()].map((n) => (
//               <option
//                 key={n}
//                 value={n === 20 ? "20+" : n}
//                 className="text-black"
//               >
//                 {n === 20 ? "20+" : n}
//               </option>
//             ))}
//           </select>
//           {errors.chargersAvailable && (
//             <span className="text-[10px] text-red-500 mt-1">{errors.chargersAvailable}</span>
//           )}
//         </div>

//         {/* Covered / Uncovered */}
//         <div>
//           <label className="text-[13px] block mb-2">
//             {t("apply_modal_covered")}/{t("apply_modal_uncovered")}
//             <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//           </label>
//           <div className="flex gap-5">
//             {(["covered", "uncovered"] as const).map((opt) => (
//               <label
//                 key={opt}
//                 className="flex items-center gap-2 text-[14px] cursor-pointer"
//               >
//                 <input
//                   type="radio"
//                   name="covered"
//                   checked={data.covered === opt}
//                   onChange={() => update({ covered: opt })}
//                   className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
//                 />
//                 {t(`apply_modal_${opt}`)}
//               </label>
//             ))}
//           </div>
//           {errors.covered && (
//             <span className="text-[10px] text-red-500 mt-1">{errors.covered}</span>
//           )}
//         </div>

//         {/* Public Access */}
//         <div>
//           <label className="text-[13px] block mb-2">
//             {t("apply_modal_public_access")}
//             <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//           </label>
//           <div className="flex gap-5">
//             {(["Yes", "No"] as const).map((opt) => (
//               <label
//                 key={opt}
//                 className="flex items-center gap-2 text-[14px] cursor-pointer"
//               >
//                 <input
//                   type="radio"
//                   name="publicAccess"
//                   checked={data.publicAccess === opt}
//                   onChange={() => update({ publicAccess: opt })}
//                   className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
//                 />
//                 {t(`apply_modal_${opt.toLowerCase()}`)}
//               </label>
//             ))}
//           </div>
//           {errors.publicAccess && (
//             <span className="text-[10px] text-red-500 mt-1">{errors.publicAccess}</span>
//           )}
//         </div>

//         {/* Visitors */}
//         <div>
//           <label className="text-[13px] block mb-2">
//             {t("apply_modal_average_daily_visitors")}
//             <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//           </label>
//           <div className="flex flex-wrap gap-2">
//             {["<50", "50–200", "200–500", "500–1,000", "1,000+"].map((opt) => (
//               <button
//                 key={opt}
//                 onClick={() => update({ averageDailyVisitors: opt })}
//                 className={`px-3 py-2 rounded-md text-[13px] ${
//                   data.averageDailyVisitors === opt
//                     ? "bg-[#F5DC7B] text-black"
//                     : "bg-[#ffffff14] text-white"
//                 }`}
//               >
//                 {opt}
//               </button>
//             ))}
//           </div>
//           {errors.averageDailyVisitors && (
//             <span className="text-[10px] text-red-500 mt-1">{errors.averageDailyVisitors}</span>
//           )}
//         </div>

//         {/* Hours of Operation */}
//         <div className="relative flex flex-col">
//           <label className="text-[13px] mb-2">
//             {t("apply_modal_hours_of_operation")}
//             <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//           </label>
//           <div
//             className={`flex items-center justify-between bg-transparent border-b p-2 cursor-pointer ${
//               errors.ownOrLease || errors.multipleLocations ? "border-red-500" : "border-[rgba(255,255,255,0.3)]"
//             }`}
//             onClick={() => setIsHoursDropdownOpen(!isHoursDropdownOpen)}
//           >
//             <span>
//               {data.hoursOfOperation || t("apply_modal_select_hours")}
//             </span>
//             <Image src="/cap-icon.svg" alt="cap" width={24} height={24} />
//           </div>

//           {isHoursDropdownOpen && (
//             <div className="mt-3 border border-[#FFFFFF1A] rounded-xl bg-[#0000001A] backdrop-blur-md p-4 flex flex-col gap-3">
//               {/* Ownership */}
//               <div>
//                 <p className="text-[12px] text-gray-300 mb-1">
//                   {t("apply_modal_own_or_lease")}
//                   <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//                 </p>
//                 <div className="flex gap-2">
//                   {[
//                     t("apply_modal_own"),
//                     t("apply_modal_lease"),
//                     t("apply_modal_franchise"),
//                   ].map((opt) => (
//                     <label
//                       key={opt}
//                       className="flex items-center gap-2 text-[13px] cursor-pointer"
//                     >
//                       <CustomCheckbox
//                         checked={data.ownOrLease === opt}
//                         onChange={() => update({ ownOrLease: opt })}
//                       />
//                       {opt}
//                     </label>
//                   ))}
//                 </div>
//                 {errors.ownOrLease && (
//                   <span className="text-[10px] text-red-500 mt-1">{errors.ownOrLease}</span>
//                 )}
//               </div>

//               {/* Multiple Locations */}
//               <div>
//                 <p className="text-[12px] text-gray-300 mb-1">
//                   {t("apply_modal_multiple_locations")}
//                   <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//                 </p>
//                 <div className="flex gap-5">
//                   {(["Yes", "No"] as const).map((opt) => (
//                     <label
//                       key={opt}
//                       className="flex items-center gap-2 text-[13px] cursor-pointer"
//                     >
//                       <input
//                         type="radio"
//                         name="multipleLocations"
//                         checked={data.multipleLocations === opt}
//                         onChange={() => update({ multipleLocations: opt })}
//                         className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
//                       />
//                       {t(`apply_modal_${opt.toLowerCase()}`)}
//                     </label>
//                   ))}
//                 </div>
//                 {errors.multipleLocations && (
//                   <span className="text-[10px] text-red-500 mt-1">{errors.multipleLocations}</span>
//                 )}
//                 {data.multipleLocations === "Yes" && (
//                   <div className="mt-2">
//                     <input
//                       type="text"
//                       placeholder={t("apply_modal_multiple_locations_count")}
//                       className={`w-full bg-transparent border-b text-white p-2 text-sm placeholder:text-gray-400 ${
//                         errors.multipleLocationsCount ? "border-red-500" : "border-[rgba(255,255,255,0.3)]"
//                       }`}
//                       value={data.multipleLocationsCount || ""}
//                       onChange={(e) =>
//                         update({ multipleLocationsCount: e.target.value })
//                       }
//                     />
//                     {errors.multipleLocationsCount && (
//                       <span className="text-[10px] text-red-500 mt-1">{errors.multipleLocationsCount}</span>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Next Button */}
//       <div className="mt-6 flex justify-center">
//         <SunButton
//           onClick={handleNext}
//           className="w-full py-3"
//           textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
//         >
//           {t("apply_modal_next")}
//         </SunButton>
//       </div>
//     </div>
//   );
// }

// /* STEP 3 */
// function Step3Profile({
//   data,
//   update,
//   onNext,
// }: {
//   data: StepData;
//   update: (p: Partial<StepData>) => void;
//   onNext: () => void;
// }) {
//   const { t } = useTranslation();
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [uploading, setUploading] = useState<{
//     utilityBillFiles?: boolean;
//   }>({});

//   const handleFile = async (
//     e: React.ChangeEvent<HTMLInputElement>,
//     key: keyof StepData
//   ) => {
//     const files = e.target.files;
//     if (!files) return;
//     setUploading((prev) => ({ ...prev, [key]: true }));
//     try {
//       const formData = new FormData();
//       Array.from(files).forEach((file) => {
//         formData.append("files", file);
//       });

//       const response = await fetch("/api/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) throw new Error("Upload failed");
//       const { urls } = await response.json();
//       update({ [key]: [...(data[key] as string[] || []), ...urls] });
//     } catch (error) {
//       console.error("Error uploading files:", error);
//       setErrors((prev) => ({
//         ...prev,
//         [key]: t("apply_modal_upload_error"),
//       }));
//     } finally {
//       setUploading((prev) => ({ ...prev, [key]: false }));
//     }
//   };

//   const validateFields = () => {
//     const newErrors: { [key: string]: string } = {};
//     if (data.businessRevenue === undefined) newErrors.businessRevenue = t("apply_modal_required_field");
//     if (data.electricalCapacity === undefined) newErrors.electricalCapacity = t("apply_modal_required_field");
//     if (data.utilityBillUploaded === undefined) newErrors.utilityBillUploaded = t("apply_modal_required_field");
//     if (data.utilityBillUploaded && (!data.utilityBillFiles || data.utilityBillFiles.length === 0))
//       newErrors.utilityBillFiles = t("apply_modal_required_field");
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   useEffect(() => {
//     const newErrors = { ...errors };
//     if (data.businessRevenue !== undefined) delete newErrors.businessRevenue;
//     if (data.electricalCapacity !== undefined) delete newErrors.electricalCapacity;
//     if (data.utilityBillUploaded !== undefined) delete newErrors.utilityBillUploaded;
//     if (!data.utilityBillUploaded || (data.utilityBillUploaded && data.utilityBillFiles?.length))
//       delete newErrors.utilityBillFiles;
//     setErrors(newErrors);
//   }, [data.businessRevenue, data.electricalCapacity, data.utilityBillUploaded, data.utilityBillFiles]);

//   const handleNext = () => {
//     if (validateFields()) {
//       onNext();
//     }
//   };

//   return (
//     <div className="flex flex-col gap-6 text-white font-lato">
//       {/* Annual Business Revenue Range */}
//       <div>
//         <p className="text-[12px] mb-2">
//           {t("apply_modal_business_revenue")}
//           <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//         </p>
//         <div className="flex flex-col gap-2">
//           <label className="flex items-center gap-3 cursor-pointer">
//             <input
//               type="radio"
//               name="businessRevenue"
//               checked={!!data.businessRevenue}
//               onChange={() =>
//                 update({ businessRevenue: !data.businessRevenue })
//               }
//               className="w-[12px] h-[12px] rounded-full accent-[#FFCD28]"
//             />
//             <span className="text-[12px]">
//               {t("apply_modal_business_revenue_hint")}
//             </span>
//           </label>
//           {errors.businessRevenue && (
//             <span className="text-[10px] text-red-500 mt-1">{errors.businessRevenue}</span>
//           )}
//         </div>
//       </div>

//       {/* Existing Electrical Capacity */}
//       <div>
//         <p className="text-[12px] mb-2">
//           {t("apply_modal_electrical_capacity")}
//           <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//         </p>
//         <div className="flex flex-col gap-2">
//           <label className="flex items-center gap-3 cursor-pointer">
//             <input
//               type="radio"
//               name="electricalCapacity"
//               checked={!!data.electricalCapacity}
//               onChange={() =>
//                 update({ electricalCapacity: !data.electricalCapacity })
//               }
//               className="w-[12px] h-[12px] rounded-full accent-[#FFCD28]"
//             />
//             <span className="text-[12px]">
//               {t("apply_modal_electrical_capacity_hint")}
//             </span>
//           </label>
//           {errors.electricalCapacity && (
//             <span className="text-[10px] text-red-500 mt-1">{errors.electricalCapacity}</span>
//           )}
//         </div>
//       </div>

//       {/* Upload Utility Bill */}
//       <div className="flex flex-col gap-y-[8px]">
//         <div className="flex flex-col gap-y-[10px]">
//           <p className="text-[12px] mb-2">
//             {t("apply_modal_utility_bill")}
//             <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//           </p>
//           <label className="flex items-center gap-3 cursor-pointer">
//             <input
//               type="radio"
//               name="utilityBillUploaded"
//               checked={!!data.utilityBillUploaded}
//               onChange={() =>
//                 update({ utilityBillUploaded: !data.utilityBillUploaded })
//               }
//               className="w-[12px] h-[12px] rounded-full accent-[#FFCD28]"
//             />
//             <span className="text-[12px]">
//               {t("apply_modal_utility_bill_hint")}
//             </span>
//           </label>
//           {errors.utilityBillUploaded && (
//             <span className="text-[10px] text-red-500 mt-1">{errors.utilityBillUploaded}</span>
//           )}
//         </div>
//         {data.utilityBillUploaded && (
//           <div className="flex flex-col gap-3">
//             <div className="flex items-center gap-3">
//               <div>
//                 <input
//                   id="file-utility-bill"
//                   type="file"
//                   accept=".pdf,image/*"
//                   onChange={(e) => handleFile(e, "utilityBillFiles")}
//                   className="hidden"
//                   multiple
//                   disabled={uploading.utilityBillFiles}
//                 />
//                 <label
//                   htmlFor="file-utility-bill"
//                   className={`inline-flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${uploading.utilityBillFiles ? "opacity-50 cursor-not-allowed" : ""}`}
//                 >
//                   <span className="px-5 py-2 rounded-md text-[13px] bg-gradient-to-r from-[#00000099] via-[#FFFFFF4D] to-[#00000000] text-white border-1 border-[#FFFFFF1A]">
//                     {uploading.utilityBillFiles ? t("apply_modal_uploading") : t("apply_modal_upload")}
//                   </span>
//                 </label>
//               </div>
//               <span className="text-[12px] text-gray-300">
//                 {t("apply_modal_file_format_gallery")}
//               </span>
//             </div>
//             {errors.utilityBillFiles && (
//               <span className="text-[10px] text-red-500 mt-1">{errors.utilityBillFiles}</span>
//             )}
//             {data.utilityBillFiles?.length ? (
//               <div className="text-[12px] text-gray-300">
//                 {data.utilityBillFiles.map((url, index) => (
//                   <div key={url}>
//                     {url.split("/").pop() || `File ${index + 1}`}
//                   </div>
//                 ))}
//               </div>
//             ) : null}
//           </div>
//         )}
//       </div>

//       {/* Next Button */}
//       <div className="mt-6 flex justify-center">
//         <SunButton
//           onClick={handleNext}
//           className="w-full py-3"
//           textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
//           disabled={uploading.utilityBillFiles}
//         >
//           {t("apply_modal_next")}
//         </SunButton>
//       </div>
//     </div>
//   );
// }

// /* STEP 4 */
// function Step4Charger({
//   data,
//   update,
//   onNext,
// }: {
//   data: StepData;
//   update: (p: Partial<StepData>) => void;
//   onNext: () => void;
// }) {
//   const { t } = useTranslation();
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

//   const validateFields = () => {
//     const newErrors: { [key: string]: string } = {};
//     if (!data.chargerPreference) newErrors.chargerPreference = t("apply_modal_required_field");
//     if (!data.partnershipModel) newErrors.partnershipModel = t("apply_modal_required_field");
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   useEffect(() => {
//     const newErrors = { ...errors };
//     if (data.chargerPreference) delete newErrors.chargerPreference;
//     if (data.partnershipModel) delete newErrors.partnershipModel;
//     setErrors(newErrors);
//   }, [data.chargerPreference, data.partnershipModel]);

//   const handleNext = () => {
//     if (validateFields()) {
//       onNext();
//     }
//   };

//   return (
//     <div className="flex flex-col gap-8 text-white font-lato">
//       {/* Charger Type */}
//       <div>
//         <p className="text-[14px] mb-3">
//           {t("apply_modal_charger_type_question")}
//           <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//         </p>
//         <div className="flex flex-col gap-3">
//           {/* Level 2 */}
//           <label className="flex items-start gap-3 cursor-pointer">
//             <input
//               type="radio"
//               name="chargerType"
//               checked={
//                 data.chargerPreference === t("apply_modal_charger_level_2")
//               }
//               onChange={() =>
//                 update({ chargerPreference: t("apply_modal_charger_level_2") })
//               }
//               className="w-[14px] h-[14px] rounded-full accent-[#FFCD28] mt-[2px]"
//             />
//             <span className="text-[13px] leading-snug">
//               <span className="font-bold text-white">
//                 {t("apply_modal_charger_level_2")}:
//               </span>{" "}
//               <span className="text-gray-300 text-[12px] italic">
//                 {t("apply_modal_charger_level_2_desc")}
//               </span>
//             </span>
//           </label>

//           {/* Level 3 */}
//           <label className="flex items-start gap-3 cursor-pointer">
//             <input
//               type="radio"
//               name="chargerType"
//               checked={
//                 data.chargerPreference === t("apply_modal_charger_level_3")
//               }
//               onChange={() =>
//                 update({ chargerPreference: t("apply_modal_charger_level_3") })
//               }
//               className="w-[14px] h-[14px] rounded-full accent-[#FFCD28] mt-[2px] text-[14px]"
//             />
//             <span className="text-[13px] leading-snug">
//               <span className="font-medium text-white">
//                 {t("apply_modal_charger_level_3")}:
//               </span>{" "}
//               <span className="text-gray-300 text-[12px] italic">
//                 {t("apply_modal_charger_level_3_desc")}
//               </span>
//             </span>
//           </label>
//           {errors.chargerPreference && (
//             <span className="text-[10px] text-red-500 mt-1">{errors.chargerPreference}</span>
//           )}
//         </div>
//       </div>

//       {/* Partnership Model Preference */}
//       <div>
//         <p className="text-[14px] mb-3">
//           {t("apply_modal_partnership_model")}
//           <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//         </p>
//         <div className="flex flex-col gap-3">
//           <label className="flex items-center gap-3 cursor-pointer">
//             <input
//               type="radio"
//               name="partnershipModel"
//               checked={
//                 data.partnershipModel ===
//                 t("apply_modal_partnership_zero_investment")
//               }
//               onChange={() =>
//                 update({
//                   partnershipModel: t(
//                     "apply_modal_partnership_zero_investment"
//                   ),
//                 })
//               }
//               className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
//             />
//             <span className="text-[13px]">
//               {t("apply_modal_partnership_zero_investment")}
//             </span>
//           </label>

//           <label className="flex items-center gap-3 cursor-pointer">
//             <input
//               type="radio"
//               name="partnershipModel"
//               checked={
//                 data.partnershipModel === t("apply_modal_partnership_invest")
//               }
//               onChange={() =>
//                 update({
//                   partnershipModel: t("apply_modal_partnership_invest"),
//                 })
//               }
//               className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
//             />
//             <span className="text-[13px]">
//               {t("apply_modal_partnership_invest")}
//             </span>
//           </label>
//           {errors.partnershipModel && (
//             <span className="text-[10px] text-red-500 mt-1">{errors.partnershipModel}</span>
//           )}
//         </div>
//       </div>

//       {/* Next Button */}
//       <div className="mt-6 flex justify-center">
//         <SunButton
//           onClick={handleNext}
//           className="w-full py-3"
//           textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
//         >
//           {t("apply_modal_next")}
//         </SunButton>
//       </div>
//     </div>
//   );
// }

// /* STEP 5 */
// function Step5Additional({
//   data,
//   update,
//   onNext,
// }: {
//   data: StepData;
//   update: (p: Partial<StepData>) => void;
//   onNext: () => void;
// }) {
//   const { t } = useTranslation();
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

//   const validateFields = () => {
//     const newErrors: { [key: string]: string } = {};
//     if (!data.additionalOpportunities)
//       newErrors.additionalOpportunities = t("apply_modal_required_field");
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   useEffect(() => {
//     const newErrors = { ...errors };
//     if (data.additionalOpportunities) delete newErrors.additionalOpportunities;
//     setErrors(newErrors);
//   }, [data.additionalOpportunities]);

//   const handleNext = () => {
//     if (validateFields()) {
//       onNext();
//     }
//   };

//   return (
//     <div className="flex flex-col gap-6 font-lato text-white">
//       {/* Question Text */}
//       <div>
//         <p
//           className="text-[14px] leading-snug"
//           dangerouslySetInnerHTML={{ __html: t("apply_modal_solar_question") }}
//         />
//         <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//       </div>

//       {/* Radio Buttons for Single Selection */}
//       <div className="flex flex-col sm:flex-row gap-4">
//         {[
//           t("apply_modal_solar_yes"),
//           t("apply_modal_solar_no"),
//           t("apply_modal_solar_maybe"),
//         ].map((option) => (
//           <label
//             key={option}
//             className="flex items-center gap-3 cursor-pointer"
//           >
//             <input
//               type="radio"
//               name="additionalOpportunities"
//               checked={data.additionalOpportunities === option}
//               onChange={() => update({ additionalOpportunities: option })}
//               className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
//             />
//             <span className="text-[13px]">{option}</span>
//           </label>
//         ))}
//       </div>
//       {errors.additionalOpportunities && (
//         <span className="text-[10px] text-red-500 mt-1">{errors.additionalOpportunities}</span>
//       )}

//       {/* Next Button */}
//       <div className="mt-6 flex justify-center">
//         <SunButton
//           onClick={handleNext}
//           className="w-full py-3"
//           textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
//         >
//           {t("apply_modal_next")}
//         </SunButton>
//       </div>
//     </div>
//   );
// }

// /* STEP 6 */
// function Step6Supporting({
//   data,
//   update,
//   onNext,
// }: {
//   data: StepData;
//   update: (p: Partial<StepData>) => void;
//   onNext: () => void;
// }) {
//   const { t } = useTranslation();
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [uploading, setUploading] = useState<{
//     propertyPhotoFiles?: boolean;
//     electricalPhotoFiles?: boolean;
//     projectPortfolioFiles?: boolean;
//   }>({});

//   const handleFile = async (
//     e: React.ChangeEvent<HTMLInputElement>,
//     key: keyof StepData
//   ) => {
//     const files = e.target.files;
//     if (!files) return;
//     setUploading((prev) => ({ ...prev, [key]: true }));
//     try {
//       const formData = new FormData();
//       Array.from(files).forEach((file) => {
//         formData.append("files", file);
//       });

//       const response = await fetch("/api/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) throw new Error("Upload failed");
//       const { urls } = await response.json();
//       update({ [key]: [...(data[key] as string[] || []), ...urls] });
//     } catch (error) {
//       console.error("Error uploading files:", error);
//       setErrors((prev) => ({
//         ...prev,
//         [key]: t("apply_modal_upload_error"),
//       }));
//     } finally {
//       setUploading((prev) => ({ ...prev, [key]: false }));
//     }
//   };

//   const validateFields = () => {
//     const newErrors: { [key: string]: string } = {};
//     if (data.propertyPhotoConsent === undefined) newErrors.propertyPhotoConsent = t("apply_modal_required_field");
//     if (data.propertyPhotoConsent && (!data.propertyPhotoFiles || data.propertyPhotoFiles.length === 0))
//       newErrors.propertyPhotoFiles = t("apply_modal_required_field");
//     if (data.electricalPhotoConsent === undefined) newErrors.electricalPhotoConsent = t("apply_modal_required_field");
//     if (data.electricalPhotoConsent && (!data.electricalPhotoFiles || data.electricalPhotoFiles.length === 0))
//       newErrors.electricalPhotoFiles = t("apply_modal_required_field");
//     if (!data.notes?.trim()) newErrors.notes = t("apply_modal_required_field");
//     if (!data.projectPortfolioFiles || data.projectPortfolioFiles.length === 0)
//       newErrors.projectPortfolioFiles = t("apply_modal_required_field");
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   useEffect(() => {
//     const newErrors = { ...errors };
//     if (data.propertyPhotoConsent !== undefined) delete newErrors.propertyPhotoConsent;
//     if (!data.propertyPhotoConsent || (data.propertyPhotoConsent && data.propertyPhotoFiles?.length))
//       delete newErrors.propertyPhotoFiles;
//     if (data.electricalPhotoConsent !== undefined) delete newErrors.electricalPhotoConsent;
//     if (!data.electricalPhotoConsent || (data.electricalPhotoConsent && data.electricalPhotoFiles?.length))
//       delete newErrors.electricalPhotoFiles;
//     if (data.notes?.trim()) delete newErrors.notes;
//     if (data.projectPortfolioFiles?.length) delete newErrors.projectPortfolioFiles;
//     setErrors(newErrors);
//   }, [
//     data.propertyPhotoConsent,
//     data.propertyPhotoFiles,
//     data.electricalPhotoConsent,
//     data.electricalPhotoFiles,
//     data.notes,
//     data.projectPortfolioFiles,
//   ]);

//   const handleNext = () => {
//     if (validateFields()) {
//       onNext();
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4 text-white font-lato">
//       {/* 1️⃣ Property Exterior / Parking Area */}
//       <div>
//         <p className="text-[14px] mb-2">
//           {t("apply_modal_property_photos")}
//           <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//         </p>
//         <label className="flex items-center gap-3 cursor-pointer mb-3">
//           <input
//             type="radio"
//             name="propertyPhotoConsent"
//             checked={!!data.propertyPhotoConsent}
//             onChange={() =>
//               update({ propertyPhotoConsent: !data.propertyPhotoConsent })
//             }
//             className="w-[12px] h-[12px] rounded-full accent-[#FFCD28]"
//           />
//           <span className="text-[13px]">
//             {t("apply_modal_property_photos_hint")}
//           </span>
//         </label>
//         {errors.propertyPhotoConsent && (
//           <span className="text-[10px] text-red-500 mt-1">{errors.propertyPhotoConsent}</span>
//         )}

//         {/* Only show upload when selected */}
//         {data.propertyPhotoConsent && (
//           <div className="flex flex-col gap-3">
//             <div className="flex items-center gap-3">
//               <div>
//                 <input
//                   id="file-property-step6"
//                   type="file"
//                   accept=".pdf,image/*"
//                   onChange={(e) => handleFile(e, "propertyPhotoFiles")}
//                   className="hidden"
//                   multiple
//                   disabled={uploading.propertyPhotoFiles}
//                 />
//                 <label
//                   htmlFor="file-property-step6"
//                   className={`inline-flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${uploading.propertyPhotoFiles ? "opacity-50 cursor-not-allowed" : ""}`}
//                 >
//                   <span className="px-5 py-2 rounded-md text-[13px] bg-gradient-to-r from-[#00000099] via-[#FFFFFF4D] to-[#00000000] text-white border-1 border-[#FFFFFF1A]">
//                     {uploading.propertyPhotoFiles ? t("apply_modal_uploading") : t("apply_modal_upload")}
//                   </span>
//                 </label>
//               </div>
//               <span className="text-[12px] text-gray-300">
//                 {t("apply_modal_file_format_gallery")}
//               </span>
//             </div>
//             {errors.propertyPhotoFiles && (
//               <span className="text-[10px] text-red-500 mt-1">{errors.propertyPhotoFiles}</span>
//             )}
//             {data.propertyPhotoFiles?.length ? (
//               <div className="text-[12px] text-gray-300">
//                 {data.propertyPhotoFiles.map((url, index) => (
//                   <div key={url}>
//                     {url.split("/").pop() || `File ${index + 1}`}
//                   </div>
//                 ))}
//               </div>
//             ) : null}
//           </div>
//         )}
//       </div>

//       {/* 2️⃣ Electrical Breaker / Infrastructure */}
//       <div>
//         <p className="text-[14px] mb-2">
//           {t("apply_modal_electrical_photos")}
//           <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//         </p>
//         <label className="flex items-center gap-3 cursor-pointer mb-3">
//           <input
//             type="radio"
//             name="electricalPhotoConsent"
//             checked={!!data.electricalPhotoConsent}
//             onChange={() =>
//               update({ electricalPhotoConsent: !data.electricalPhotoConsent })
//             }
//             className="w-[12px] h-[12px] rounded-full accent-[#FFCD28]"
//           />
//           <span className="text-[13px]">
//             {t("apply_modal_electrical_photos_hint")}
//           </span>
//         </label>
//         {errors.electricalPhotoConsent && (
//           <span className="text-[10px] text-red-500 mt-1">{errors.electricalPhotoConsent}</span>
//         )}

//         {/* Only show upload when selected */}
//         {data.electricalPhotoConsent && (
//           <div className="flex flex-col gap-3">
//             <div className="flex items-center gap-3">
//               <div>
//                 <input
//                   id="file-electrical-step6"
//                   type="file"
//                   accept=".pdf,image/*"
//                   onChange={(e) => handleFile(e, "electricalPhotoFiles")}
//                   className="hidden"
//                   multiple
//                   disabled={uploading.electricalPhotoFiles}
//                 />
//                 <label
//                   htmlFor="file-electrical-step6"
//                   className={`inline-flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${uploading.electricalPhotoFiles ? "opacity-50 cursor-not-allowed" : ""}`}
//                 >
//                   <span className="px-5 py-2 rounded-md text-[13px] bg-gradient-to-r from-[#00000099] via-[#FFFFFF4D] to-[#00000000] text-white border-1 border-[#FFFFFF1A]">
//                     {uploading.electricalPhotoFiles ? t("apply_modal_uploading") : t("apply_modal_upload")}
//                   </span>
//                 </label>
//               </div>
//               <span className="text-[12px] text-gray-300">
//                 {t("apply_modal_file_format_gallery")}
//               </span>
//             </div>
//             {errors.electricalPhotoFiles && (
//               <span className="text-[10px] text-red-500 mt-1">{errors.electricalPhotoFiles}</span>
//             )}
//             {data.electricalPhotoFiles?.length ? (
//               <div className="text-[12px] text-gray-300">
//                 {data.electricalPhotoFiles.map((url, index) => (
//                   <div key={url}>
//                     {url.split("/").pop() || `File ${index + 1}`}
//                   </div>
//                 ))}
//               </div>
//             ) : null}
//           </div>
//         )}
//       </div>

//       {/* 3️⃣ Additional Notes */}
//       <div>
//         <p className="text-[14px] mb-2">
//           {t("apply_modal_additional_notes")}
//           <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//         </p>
//         <p className="text-[12px] italic text-gray-300 mb-3">
//           {t("apply_modal_additional_notes_hint")}
//         </p>
//         <textarea
//           value={data.notes || ""}
//           onChange={(e) => update({ notes: e.target.value })}
//           className={`w-full bg-transparent border-b text-white p-2 text-sm placeholder:text-gray-400 ${
//             errors.notes ? "border-red-500" : "border-[rgba(255,255,255,0.3)]"
//           }`}
//           placeholder={t("apply_modal_additional_notes_placeholder")}
//           rows={4}
//         />
//         {errors.notes && (
//           <span className="text-[10px] text-red-500 mt-1">{errors.notes}</span>
//         )}
//       </div>

//       {/* 4️⃣ Project Portfolio Upload */}
//       <div>
//         <p className="text-[14px] mb-2">
//           {t("apply_modal_project_portfolio")}
//           <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
//         </p>
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-3">
//             <div>
//               <input
//                 id="file-portfolio"
//                 type="file"
//                 accept=".pdf,image/*"
//                 onChange={(e) => handleFile(e, "projectPortfolioFiles")}
//                 className="hidden"
//                 multiple
//                 disabled={uploading.projectPortfolioFiles}
//               />
//               <label
//                 htmlFor="file-portfolio"
//                 className={`inline-flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${uploading.projectPortfolioFiles ? "opacity-50 cursor-not-allowed" : ""}`}
//               >
//                 <span className="px-5 py-2 border-1 border-[#FFFFFF1A] rounded-md text-[13px] bg-gradient-to-r from-[#00000099] via-[#FFFFFF4D] to-[#00000000] text-white">
//                   {uploading.projectPortfolioFiles ? t("apply_modal_uploading") : t("apply_modal_upload")}
//                 </span>
//               </label>
//             </div>
//             <span className="text-[13px] text-gray-300">
//               {t("apply_modal_file_format")}
//             </span>
//           </div>
//           {errors.projectPortfolioFiles && (
//             <span className="text-[10px] text-red-500 mt-1">{errors.projectPortfolioFiles}</span>
//           )}
//           {data.projectPortfolioFiles?.length ? (
//             <div className="text-[12px] text-gray-300">
//               {data.projectPortfolioFiles.map((url, index) => (
//                 <div key={url}>
//                   {url.split("/").pop() || `File ${index + 1}`}
//                 </div>
//               ))}
//             </div>
//           ) : null}
//         </div>
//       </div>

//       {/* 5️⃣ Next Button */}
//       <div className="mt-6 flex justify-center">
//         <SunButton
//           onClick={handleNext}
//           className="w-full py-3"
//           textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
//           disabled={uploading.propertyPhotoFiles || uploading.electricalPhotoFiles || uploading.projectPortfolioFiles}
//         >
//           {t("apply_modal_file_formSubmit")}
//         </SunButton>
//       </div>
//     </div>
//   );
// }

// function Field({
//   label,
//   value,
//   onChange,
//   error,
//   hint,
// }: {
//   label: string;
//   value: string;
//   onChange: (v: string) => void;
//   error?: string;
//   hint?: string;
// }) {
//   return (
//     <div className="flex flex-col font-lato text-[14px] font-bold">
//       {/* Label and hint in one row */}
//       <div className="flex items-center gap-2 mb-1">
//         <label className="text-[12px] text-white">{label}</label>
//         {hint && <span className="text-[10px] text-white italic">{hint}</span>}
//       </div>

//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className={`bg-transparent outline-none py-1 border-b ${
//           error ? "border-red-500" : "border-[rgba(255,255,255,0.3)]"
//         } text-white`}
//       />
//       {error && (
//         <span className="text-[10px] text-red-500 mt-1">{error}</span>
//       )}
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import SunButton from "./SunButton";
import CustomCheckbox from "./CustomCheckbox";

type StepData = {
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
  hoursOfOperation?: string;
  ownOrLease?: string;
  multipleLocations?: "Yes" | "No";
  multipleLocationsCount?: string;
  // Step 3..6 simple fields
  businessProfile?: string;
  chargerPreference?: string;
  partnershipModel?: string;
  additionalOpportunities?: string;
  utilityBillFiles?: string[]; // S3 URLs
  propertyPhotoFiles?: string[]; // S3 URLs
  electricalPhotoFiles?: string[]; // S3 URLs
  projectPortfolioFiles?: string[]; // S3 URLs
  propertyPhotoConsent?: boolean;
  electricalPhotoConsent?: boolean;
  notes?: string;
  businessRevenue?: boolean;
  electricalCapacity?: boolean;
  utilityBillUploaded?: boolean;
};

export default function ApplyModal({
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
      }); // Reset with default values
    }
  }, [open]);

  if (!open) return null;

  const update = (patch: Partial<StepData>) =>
    setData((d) => ({ ...d, ...patch }));

  const next = () => setStep((s) => Math.min(7, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  return (
    <>
      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center px-4 sm:px-6"
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
                {step > 1 && step < 7 && (
                  <button
                    onClick={back}
                    className="p-1 rounded-md hover:opacity-90"
                    aria-label="Back"
                  >
                    <Image src="/back.png" alt="Back" width={28} height={28} />
                  </button>
                )}
              </div>
              {step < 7 && (
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
            <div className="overflow-auto" style={{ maxHeight: 520 }}>
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
                <Step5Additional data={data} update={update} onNext={next} />
              )}
              {step === 6 && (
                <Step6Supporting
                  data={data}
                  update={update}
                  onNext={async () => {
                    await submitFinal(data, setSubmitting, setDone, next, onClose, t);
                  }}
                />
              )}
              {step === 7 && (
                <div className="flex flex-col items-center gap-4 font-lato">
                  <div className="px-4 py-2 rounded-lg bg-[#FFCD28]">
                    <h4 className="text-[20px] font-bold text-black text-center">
                      {t("apply_modal_thanks")}
                    </h4>
                  </div>
                  <p className="text-[16px] font-medium text-white text-center max-w-[320px]">
                    {t("apply_modal_thanks_desc")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* STEP 1 */
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
    if (!data.fullName?.trim()) newErrors.fullName = t("apply_modal_required_field");
    if (!data.email?.trim()) newErrors.email = t("apply_modal_required_field");
    else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = t("apply_modal_invalid_email");
    if (!data.phone?.trim()) newErrors.phone = t("apply_modal_required_field");
    if (!data.businessName?.trim()) newErrors.businessName = t("apply_modal_required_field");
    if (!data.propertyAddress?.trim()) newErrors.propertyAddress = t("apply_modal_required_field");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const newErrors = { ...errors };
    if (data.fullName?.trim()) delete newErrors.fullName;
    if (data.email?.trim() && /\S+@\S+\.\S+/.test(data.email)) delete newErrors.email;
    if (data.phone?.trim()) delete newErrors.phone;
    if (data.businessName?.trim()) delete newErrors.businessName;
    if (data.propertyAddress?.trim()) delete newErrors.propertyAddress;
    setErrors(newErrors);
  }, [data.fullName, data.email, data.phone, data.businessName, data.propertyAddress]);

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

/* STEP 2 */
function Step2Business({
  data,
  update,
  onNext,
}: {
  data: StepData;
  update: (p: Partial<StepData>) => void;
  onNext: () => void;
}) {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHoursDropdownOpen, setIsHoursDropdownOpen] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const propertyTypes = [
    t("apply_modal_property_type_gas_station"),
    t("apply_modal_property_type_restaurant"),
    t("apply_modal_property_type_shopping_mall"),
    t("apply_modal_property_type_supermarket"),
    t("apply_modal_property_type_hotel"),
    t("apply_modal_property_type_office"),
    t("apply_modal_property_type_residential"),
    t("apply_modal_property_type_airport"),
    t("apply_modal_property_type_stadium"),
    t("apply_modal_property_type_government"),
    t("apply_modal_property_type_hospital"),
    t("apply_modal_property_type_university"),
    t("apply_modal_property_type_parking"),
    t("apply_modal_property_type_other"),
  ];

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};
    if (!data.propertyType) newErrors.propertyType = t("apply_modal_required_field");
    if (!data.chargersAvailable) newErrors.chargersAvailable = t("apply_modal_required_field");
    if (!data.covered) newErrors.covered = t("apply_modal_required_field");
    if (!data.publicAccess) newErrors.publicAccess = t("apply_modal_required_field");
    if (!data.averageDailyVisitors) newErrors.averageDailyVisitors = t("apply_modal_required_field");
    if (!data.ownOrLease) newErrors.ownOrLease = t("apply_modal_required_field");
    if (!data.multipleLocations) newErrors.multipleLocations = t("apply_modal_required_field");
    if (data.multipleLocations === "Yes" && !data.multipleLocationsCount?.trim())
      newErrors.multipleLocationsCount = t("apply_modal_required_field");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const newErrors = { ...errors };
    if (data.propertyType) delete newErrors.propertyType;
    if (data.chargersAvailable) delete newErrors.chargersAvailable;
    if (data.covered) delete newErrors.covered;
    if (data.publicAccess) delete newErrors.publicAccess;
    if (data.averageDailyVisitors) delete newErrors.averageDailyVisitors;
    if (data.ownOrLease) delete newErrors.ownOrLease;
    if (data.multipleLocations) delete newErrors.multipleLocations;
    if (data.multipleLocations !== "Yes" || (data.multipleLocations === "Yes" && data.multipleLocationsCount?.trim()))
      delete newErrors.multipleLocationsCount;
    setErrors(newErrors);
  }, [
    data.propertyType,
    data.chargersAvailable,
    data.covered,
    data.publicAccess,
    data.averageDailyVisitors,
    data.ownOrLease,
    data.multipleLocations,
    data.multipleLocationsCount,
  ]);

  const handleNext = () => {
    if (validateFields()) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col gap-5 text-white">
      {/* Property Type Dropdown */}
      <div className="relative flex flex-col">
        <label className="text-[13px] mb-2">
          {t("apply_modal_property_type")}
          <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
        </label>
        <div
          className={`flex items-center justify-between bg-transparent border-b p-2 cursor-pointer ${
            errors.propertyType ? "border-red-500" : "border-[rgba(255,255,255,0.3)]"
          }`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>
            {data.propertyType || t("apply_modal_select_property_type")}
          </span>
          <Image src="/cap-icon.svg" alt="cap" width={17} height={17} />
        </div>
        {errors.propertyType && (
          <span className="text-[10px] text-red-500 mt-1">{errors.propertyType}</span>
        )}

        {/* Dropdown list */}
        {isDropdownOpen && (
          <div className="flex flex-col mt-3 bg-[#0000001A] backdrop-blur-lg border border-[#FFFFFF1A] rounded-xl p-4 gap-2 max-h-[250px] overflow-y-auto transition-all duration-300">
            {propertyTypes.map((type) => (
              <div key={type}>
                <button
                  onClick={() => {
                    update({ propertyType: type });
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left text-[14px] px-2 py-1 rounded-md hover:bg-[#F5DC7B] hover:text-black transition ${
                    data.propertyType === type
                      ? "bg-[#F5DC7B] text-black"
                      : "text-white"
                  }`}
                >
                  {type}
                </button>

                {/* Divider after "Other" */}
                {type === t("apply_modal_property_type_other") && (
                  <div className="border-b border-[#FFFFFF1A] my-3" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* When "Other" is selected → show additional fields */}
      <div className="flex flex-col gap-5 mt-3 transition-all duration-300">
        {/* Parking Availability */}
        <div>
          <label className="text-[13px] block mb-2">
            {t("apply_modal_parking_availability")}
            <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
          </label>
          <select
            value={data.chargersAvailable || ""}
            onChange={(e) => update({ chargersAvailable: e.target.value })}
            className={`bg-transparent p-2 border-b w-full text-white ${
              errors.chargersAvailable ? "border-red-500" : "border-[rgba(255,255,255,0.3)]"
            }`}
          >
            <option value="" className="text-black">
              {t("apply_modal_select_property_type")}
            </option>
            {[...Array(21).keys()].map((n) => (
              <option
                key={n}
                value={n === 20 ? "20+" : n}
                className="text-black"
              >
                {n === 20 ? "20+" : n}
              </option>
            ))}
          </select>
          {errors.chargersAvailable && (
            <span className="text-[10px] text-red-500 mt-1">{errors.chargersAvailable}</span>
          )}
        </div>

        {/* Covered / Uncovered */}
        <div>
          <label className="text-[13px] block mb-2">
            {t("apply_modal_covered")}/{t("apply_modal_uncovered")}
            <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
          </label>
          <div className="flex gap-5">
            {(["covered", "uncovered"] as const).map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-2 text-[14px] cursor-pointer"
              >
                <input
                  type="radio"
                  name="covered"
                  checked={data.covered === opt}
                  onChange={() => update({ covered: opt })}
                  className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
                />
                {t(`apply_modal_${opt}`)}
              </label>
            ))}
          </div>
          {errors.covered && (
            <span className="text-[10px] text-red-500 mt-1">{errors.covered}</span>
          )}
        </div>

        {/* Public Access */}
        <div>
          <label className="text-[13px] block mb-2">
            {t("apply_modal_public_access")}
            <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
          </label>
          <div className="flex gap-5">
            {(["Yes", "No"] as const).map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-2 text-[14px] cursor-pointer"
              >
                <input
                  type="radio"
                  name="publicAccess"
                  checked={data.publicAccess === opt}
                  onChange={() => update({ publicAccess: opt })}
                  className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
                />
                {t(`apply_modal_${opt.toLowerCase()}`)}
              </label>
            ))}
          </div>
          {errors.publicAccess && (
            <span className="text-[10px] text-red-500 mt-1">{errors.publicAccess}</span>
          )}
        </div>

        {/* Visitors */}
        <div>
          <label className="text-[13px] block mb-2">
            {t("apply_modal_average_daily_visitors")}
            <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {["<50", "50–200", "200–500", "500–1,000", "1,000+"].map((opt) => (
              <button
                key={opt}
                onClick={() => update({ averageDailyVisitors: opt })}
                className={`px-3 py-2 rounded-md text-[13px] ${
                  data.averageDailyVisitors === opt
                    ? "bg-[#F5DC7B] text-black"
                    : "bg-[#ffffff14] text-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          {errors.averageDailyVisitors && (
            <span className="text-[10px] text-red-500 mt-1">{errors.averageDailyVisitors}</span>
          )}
        </div>

        {/* Hours of Operation */}
        <div className="relative flex flex-col">
          <label className="text-[13px] mb-2">
            {t("apply_modal_hours_of_operation")}
            <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
          </label>
          <div
            className={`flex items-center justify-between bg-transparent border-b p-2 cursor-pointer ${
              errors.ownOrLease || errors.multipleLocations ? "border-red-500" : "border-[rgba(255,255,255,0.3)]"
            }`}
            onClick={() => setIsHoursDropdownOpen(!isHoursDropdownOpen)}
          >
            <span>
              {data.hoursOfOperation || t("apply_modal_select_hours")}
            </span>
            <Image src="/cap-icon.svg" alt="cap" width={24} height={24} />
          </div>

          {isHoursDropdownOpen && (
            <div className="mt-3 border border-[#FFFFFF1A] rounded-xl bg-[#0000001A] backdrop-blur-md p-4 flex flex-col gap-3">
              {/* Ownership */}
              <div>
                <p className="text-[12px] text-gray-300 mb-1">
                  {t("apply_modal_own_or_lease")}
                  <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
                </p>
                <div className="flex gap-2">
                  {[
                    t("apply_modal_own"),
                    t("apply_modal_lease"),
                    t("apply_modal_franchise"),
                  ].map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 text-[13px] cursor-pointer"
                    >
                      <CustomCheckbox
                        checked={data.ownOrLease === opt}
                        onChange={() => update({ ownOrLease: opt })}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
                {errors.ownOrLease && (
                  <span className="text-[10px] text-red-500 mt-1">{errors.ownOrLease}</span>
                )}
              </div>

              {/* Multiple Locations */}
              <div>
                <p className="text-[12px] text-gray-300 mb-1">
                  {t("apply_modal_multiple_locations")}
                  <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
                </p>
                <div className="flex gap-5">
                  {(["Yes", "No"] as const).map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 text-[13px] cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="multipleLocations"
                        checked={data.multipleLocations === opt}
                        onChange={() => update({ multipleLocations: opt })}
                        className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
                      />
                      {t(`apply_modal_${opt.toLowerCase()}`)}
                    </label>
                  ))}
                </div>
                {errors.multipleLocations && (
                  <span className="text-[10px] text-red-500 mt-1">{errors.multipleLocations}</span>
                )}
                {data.multipleLocations === "Yes" && (
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder={t("apply_modal_multiple_locations_count")}
                      className={`w-full bg-transparent border-b text-white p-2 text-sm placeholder:text-gray-400 ${
                        errors.multipleLocationsCount ? "border-red-500" : "border-[rgba(255,255,255,0.3)]"
                      }`}
                      value={data.multipleLocationsCount || ""}
                      onChange={(e) =>
                        update({ multipleLocationsCount: e.target.value })
                      }
                    />
                    {errors.multipleLocationsCount && (
                      <span className="text-[10px] text-red-500 mt-1">{errors.multipleLocationsCount}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
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

/* STEP 3 */
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
  const [uploading, setUploading] = useState<{
    utilityBillFiles?: boolean;
  }>({});

  const handleFile = async (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof StepData
  ) => {
    const files = e.target.files;
    if (!files) return;
    setUploading((prev) => ({ ...prev, [key]: true }));
    try {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");
      const { urls } = await response.json();
      update({ [key]: [...(data[key] as string[] || []), ...urls] });
    } catch (error) {
      console.error("Error uploading files:", error);
      setErrors((prev) => ({
        ...prev,
        [key]: t("apply_modal_upload_error"),
      }));
    } finally {
      setUploading((prev) => ({ ...prev, [key]: false }));
    }
  };

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};
    if (data.businessRevenue === undefined) newErrors.businessRevenue = t("apply_modal_required_field");
    if (data.electricalCapacity === undefined) newErrors.electricalCapacity = t("apply_modal_required_field");
    if (data.utilityBillUploaded === undefined) newErrors.utilityBillUploaded = t("apply_modal_required_field");
    if (data.utilityBillUploaded && (!data.utilityBillFiles || data.utilityBillFiles.length === 0))
      newErrors.utilityBillFiles = t("apply_modal_required_field");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const newErrors = { ...errors };
    if (data.businessRevenue !== undefined) delete newErrors.businessRevenue;
    if (data.electricalCapacity !== undefined) delete newErrors.electricalCapacity;
    if (data.utilityBillUploaded !== undefined) delete newErrors.utilityBillUploaded;
    if (!data.utilityBillUploaded || (data.utilityBillUploaded && data.utilityBillFiles?.length))
      delete newErrors.utilityBillFiles;
    setErrors(newErrors);
  }, [data.businessRevenue, data.electricalCapacity, data.utilityBillUploaded, data.utilityBillFiles]);

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
          <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
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
            <span className="text-[10px] text-red-500 mt-1">{errors.businessRevenue}</span>
          )}
        </div>
      </div>

      {/* Existing Electrical Capacity */}
      <div>
        <p className="text-[12px] mb-2">
          {t("apply_modal_electrical_capacity")}
          <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
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
            <span className="text-[10px] text-red-500 mt-1">{errors.electricalCapacity}</span>
          )}
        </div>
      </div>

      {/* Upload Utility Bill */}
      <div className="flex flex-col gap-y-[8px]">
        <div className="flex flex-col gap-y-[10px]">
          <p className="text-[12px] mb-2">
            {t("apply_modal_utility_bill")}
            <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
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
          {errors.utilityBillUploaded && (
            <span className="text-[10px] text-red-500 mt-1">{errors.utilityBillUploaded}</span>
          )}
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
                  disabled={uploading.utilityBillFiles}
                />
                <label
                  htmlFor="file-utility-bill"
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${uploading.utilityBillFiles ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <span className="px-5 py-2 rounded-md text-[13px] bg-gradient-to-r from-[#00000099] via-[#FFFFFF4D] to-[#00000000] text-white border-1 border-[#FFFFFF1A]">
                    {uploading.utilityBillFiles ? t("apply_modal_uploading") : t("apply_modal_upload")}
                  </span>
                </label>
              </div>
              <span className="text-[12px] text-gray-300">
                {t("apply_modal_file_format_gallery")}
              </span>
            </div>
            {errors.utilityBillFiles && (
              <span className="text-[10px] text-red-500 mt-1">{errors.utilityBillFiles}</span>
            )}
            {data.utilityBillFiles?.length ? (
              <div className="text-[12px] text-gray-300">
                {data.utilityBillFiles.map((url, index) => (
                  <div key={url}>
                    {url.split("/").pop() || `File ${index + 1}`}
                  </div>
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
          disabled={uploading.utilityBillFiles}
        >
          {t("apply_modal_next")}
        </SunButton>
      </div>
    </div>
  );
}

/* STEP 4 */
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
    if (!data.chargerPreference) newErrors.chargerPreference = t("apply_modal_required_field");
    if (!data.partnershipModel) newErrors.partnershipModel = t("apply_modal_required_field");
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
          <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
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
            <span className="text-[10px] text-red-500 mt-1">{errors.chargerPreference}</span>
          )}
        </div>
      </div>

      {/* Partnership Model Preference */}
      <div>
        <p className="text-[14px] mb-3">
          {t("apply_modal_partnership_model")}
          <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
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
            <span className="text-[10px] text-red-500 mt-1">{errors.partnershipModel}</span>
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

/* STEP 5 */
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
        <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
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
        <span className="text-[10px] text-red-500 mt-1">{errors.additionalOpportunities}</span>
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

/* STEP 6 */
async function submitFinal(
  data: StepData,
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  setDone: React.Dispatch<React.SetStateAction<boolean>>,
  next: () => void,
  onClose: () => void,
  t: (key: string) => string
) {
  setSubmitting(true);
  try {
    const uploadRecords = [
      {
        ...data,
        submissionDate: new Date(),
        utilityBillFiles: data.utilityBillFiles || [],
        propertyPhotoFiles: data.propertyPhotoFiles || [],
        electricalPhotoFiles: data.electricalPhotoFiles || [],
        projectPortfolioFiles: data.projectPortfolioFiles || [],
      },
    ];

    const response = await fetch("/api/final", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uploadRecords }),
    });

    if (!response.ok) throw new Error("Submission failed");
    setDone(true);
    next();
  } catch (error) {
    console.error("Error submitting final data:", error);
    alert(t("apply_modal_submission_error"));
  } finally {
    setSubmitting(false);
    onClose();
  }
}

function Step6Supporting({
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
  const [uploading, setUploading] = useState<{
    propertyPhotoFiles?: boolean;
    electricalPhotoFiles?: boolean;
    projectPortfolioFiles?: boolean;
  }>({});

  const handleFile = async (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof StepData
  ) => {
    const files = e.target.files;
    if (!files) return;
    setUploading((prev) => ({ ...prev, [key]: true }));
    try {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");
      const { urls } = await response.json();
      update({ [key]: [...(data[key] as string[] || []), ...urls] });
    } catch (error) {
      console.error("Error uploading files:", error);
      setErrors((prev) => ({
        ...prev,
        [key]: t("apply_modal_upload_error"),
      }));
    } finally {
      setUploading((prev) => ({ ...prev, [key]: false }));
    }
  };

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};
    if (data.propertyPhotoConsent === undefined) newErrors.propertyPhotoConsent = t("apply_modal_required_field");
    if (data.propertyPhotoConsent && (!data.propertyPhotoFiles || data.propertyPhotoFiles.length === 0))
      newErrors.propertyPhotoFiles = t("apply_modal_required_field");
    if (data.electricalPhotoConsent === undefined) newErrors.electricalPhotoConsent = t("apply_modal_required_field");
    if (data.electricalPhotoConsent && (!data.electricalPhotoFiles || data.electricalPhotoFiles.length === 0))
      newErrors.electricalPhotoFiles = t("apply_modal_required_field");
    if (!data.notes?.trim()) newErrors.notes = t("apply_modal_required_field");
    if (!data.projectPortfolioFiles || data.projectPortfolioFiles.length === 0)
      newErrors.projectPortfolioFiles = t("apply_modal_required_field");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const newErrors = { ...errors };
    if (data.propertyPhotoConsent !== undefined) delete newErrors.propertyPhotoConsent;
    if (!data.propertyPhotoConsent || (data.propertyPhotoConsent && data.propertyPhotoFiles?.length))
      delete newErrors.propertyPhotoFiles;
    if (data.electricalPhotoConsent !== undefined) delete newErrors.electricalPhotoConsent;
    if (!data.electricalPhotoConsent || (data.electricalPhotoConsent && data.electricalPhotoFiles?.length))
      delete newErrors.electricalPhotoFiles;
    if (data.notes?.trim()) delete newErrors.notes;
    if (data.projectPortfolioFiles?.length) delete newErrors.projectPortfolioFiles;
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
          <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
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
          <span className="text-[10px] text-red-500 mt-1">{errors.propertyPhotoConsent}</span>
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
                  disabled={uploading.propertyPhotoFiles}
                />
                <label
                  htmlFor="file-property-step6"
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${uploading.propertyPhotoFiles ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <span className="px-5 py-2 rounded-md text-[13px] bg-gradient-to-r from-[#00000099] via-[#FFFFFF4D] to-[#00000000] text-white border-1 border-[#FFFFFF1A]">
                    {uploading.propertyPhotoFiles ? t("apply_modal_uploading") : t("apply_modal_upload")}
                  </span>
                </label>
              </div>
              <span className="text-[12px] text-gray-300">
                {t("apply_modal_file_format_gallery")}
              </span>
            </div>
            {errors.propertyPhotoFiles && (
              <span className="text-[10px] text-red-500 mt-1">{errors.propertyPhotoFiles}</span>
            )}
            {data.propertyPhotoFiles?.length ? (
              <div className="text-[12px] text-gray-300">
                {data.propertyPhotoFiles.map((url, index) => (
                  <div key={url}>
                    {url.split("/").pop() || `File ${index + 1}`}
                  </div>
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
          <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
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
          <span className="text-[10px] text-red-500 mt-1">{errors.electricalPhotoConsent}</span>
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
                  disabled={uploading.electricalPhotoFiles}
                />
                <label
                  htmlFor="file-electrical-step6"
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${uploading.electricalPhotoFiles ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <span className="px-5 py-2 rounded-md text-[13px] bg-gradient-to-r from-[#00000099] via-[#FFFFFF4D] to-[#00000000] text-white border-1 border-[#FFFFFF1A]">
                    {uploading.electricalPhotoFiles ? t("apply_modal_uploading") : t("apply_modal_upload")}
                  </span>
                </label>
              </div>
              <span className="text-[12px] text-gray-300">
                {t("apply_modal_file_format_gallery")}
              </span>
            </div>
            {errors.electricalPhotoFiles && (
              <span className="text-[10px] text-red-500 mt-1">{errors.electricalPhotoFiles}</span>
            )}
            {data.electricalPhotoFiles?.length ? (
              <div className="text-[12px] text-gray-300">
                {data.electricalPhotoFiles.map((url, index) => (
                  <div key={url}>
                    {url.split("/").pop() || `File ${index + 1}`}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* 3️⃣ Additional Notes */}
      <div>
        <p className="text-[14px] mb-2">
          {t("apply_modal_additional_notes")}
          <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
        </p>
        <p className="text-[12px] italic text-gray-300 mb-3">
          {t("apply_modal_additional_notes_hint")}
        </p>
        <textarea
          value={data.notes || ""}
          onChange={(e) => update({ notes: e.target.value })}
          className={`w-full bg-transparent border-b text-white p-2 text-sm placeholder:text-gray-400 ${
            errors.notes ? "border-red-500" : "border-[rgba(255,255,255,0.3)]"
          }`}
          placeholder={t("apply_modal_additional_notes_placeholder")}
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
          <span className="text-[10px] italic ml-2">{t("apply_modal_required_field")}</span>
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
                disabled={uploading.projectPortfolioFiles}
              />
              <label
                htmlFor="file-portfolio"
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${uploading.projectPortfolioFiles ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <span className="px-5 py-2 border-1 border-[#FFFFFF1A] rounded-md text-[13px] bg-gradient-to-r from-[#00000099] via-[#FFFFFF4D] to-[#00000000] text-white">
                  {uploading.projectPortfolioFiles ? t("apply_modal_uploading") : t("apply_modal_upload")}
                </span>
              </label>
            </div>
            <span className="text-[13px] text-gray-300">
              {t("apply_modal_file_format")}
            </span>
          </div>
          {errors.projectPortfolioFiles && (
            <span className="text-[10px] text-red-500 mt-1">{errors.projectPortfolioFiles}</span>
          )}
          {data.projectPortfolioFiles?.length ? (
            <div className="text-[12px] text-gray-300">
              {data.projectPortfolioFiles.map((url, index) => (
                <div key={url}>
                  {url.split("/").pop() || `File ${index + 1}`}
                </div>
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
          disabled={uploading.propertyPhotoFiles || uploading.electricalPhotoFiles || uploading.projectPortfolioFiles}
        >
          {t("apply_modal_file_formSubmit")}
        </SunButton>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col font-lato text-[14px] font-bold">
      {/* Label and hint in one row */}
      <div className="flex items-center gap-2 mb-1">
        <label className="text-[12px] text-white">{label}</label>
        {hint && <span className="text-[10px] text-white italic">{hint}</span>}
      </div>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`bg-transparent outline-none py-1 border-b ${
          error ? "border-red-500" : "border-[rgba(255,255,255,0.3)]"
        } text-white`}
      />
      {error && (
        <span className="text-[10px] text-red-500 mt-1">{error}</span>
      )}
    </div>
  );
}