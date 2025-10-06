    
// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Button from "./Button";
// import CustomCheckbox from "./CustomCheckbox";
// import Image from "next/image";
// import SunButton from "./SunButton";

// type StepData = {
//   fullName?: string;
//   email?: string;
//   phone?: string;
//   businessName?: string;
//   propertyAddress?: string;
//   // Step 2
//   propertyType?: string;
//   chargersAvailable?: string;
//   covered?: boolean;
//   publicAccess?: boolean;
//   averageDailyVisitors?: string;
//   hoursOfOperation?: string;
//   ownOrLease?: string;
//   multipleLocations?: boolean;
//   multipleLocationsCount?: string;
//   // Step 3..6 simple fields
//   businessProfile?: string;
//    chargerPreference?: string;
//   partnershipModel?: string;
//   additionalOpportunities?: string[];
//   supportingFiles?: File[];
//   propertyPhotoConsent?: boolean;
//   electricalPhotoConsent?: boolean;
//   notes?: string;
//   projectPortfolio?: File[];
//     businessRevenue?: boolean;
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
//   const [step, setStep] = useState(1);
//   const [submitting, setSubmitting] = useState(false);
//   const [done, setDone] = useState(false);
//   const [data, setData] = useState<StepData>({});
//   const modalRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (open) {
//       setStep(1);
//       setDone(false);
//       setSubmitting(false);
//     }
//   }, [open]);

//   if (!open) return null;

//   const update = (patch: Partial<StepData>) => setData((d) => ({ ...d, ...patch }));

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
//           <div className="absolute max-w-[520px] w-full h-[600px]   rounded-[20px]" />

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
//             {step < 7 && (
//     <div className="mb-6 text-center w-full">
//       <h3 className="text-white font-bold text-[18px] md:text-[20px] font-lato tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]">
//         STEP {String(step).padStart(2, "0")}: {stepHeading(step)}
//       </h3>
//     </div>
//   )}

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
//                   <div className=" px-4 py-2 rounded-lg bg-[#FFCD28]">
//                     <h4 className="text-[20px] font-bold text-black text-center">THANKS FOR APPLYING!</h4>
//                   </div>
//                   <p className="text-[16px] font-medium text-white text-center max-w-[320px]">
//                     OUR TEAM WILL REVIEW YOUR PROPERTY WITHIN 48 HOURS. IF YOUR SITE IS PRE-APPROVED, YOU’LL RECEIVE A LINK TO SCHEDULE A CALL.
//                   </p>
        
//                        <div className="mt-4 flex justify-center w-full md:w-3/4">
     
      
//          <SunButton onClick={submitFinal}  className="w-full py-3" textClassName='whitespace-nowrap text-sm md:text-base lg:text-lg '>{submitting ? "Submitting..." : "SUBMIT NOW"}</SunButton>
//       </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// /* Helper headings */
// function stepHeading(step: number) {
//   switch (step) {
//     case 1:
//       return "CONTACT INFO";
//     case 2:
//       return "BUSINESS SNAPSHOT";
//     case 3:
//       return "BUSINESS PROFILE";
//     case 4:
//       return "CHARGER PREFERENCE";
//     case 5:
//       return "ADDITIONAL OPPORTUNITIES";
//     case 6:
//       return "SUPPORTING MATERIALS";
//     case 7:
//       return "THANK YOU";
//     default:
//       return "";
//   }
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
//   return (
//     <div className="flex flex-col gap-3 ">
//       <Field label="FULL NAME" value={data.fullName || ""} onChange={(v) => update({ fullName: v })} />
//       <Field label="EMAIL" value={data.email || ""} onChange={(v) => update({ email: v })} />
//       <Field label="PHONE NUMBER" value={data.phone || ""} onChange={(v) => update({ phone: v })} />
//       <Field label="BUSINESS / ORGANIZATION NAME" value={data.businessName || ""} onChange={(v) => update({ businessName: v })} />
//       <Field label=" PROPERTY ADDRESS" value={data.propertyAddress || ""} onChange={(v) => update({ propertyAddress: v })} hint="(WITH GOOGLE MAPS PIN OPTION)" />
//       <div className="mt-4 flex justify-center">
//         {/* <Button label="NEXT" /> */}
      
//          <SunButton onClick={onNext}  className="w-full py-3" textClassName='whitespace-nowrap text-sm md:text-base lg:text-lg '>NEXT</SunButton>
//       </div>
//     </div>
//   );
// }

// /* STEP 2 */


//  function Step2Business({
//   data,
//   update,
//   onNext,
// }: {
//   data: StepData;
//   update: (p: Partial<StepData>) => void;
//   onNext: () => void;
// }) {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isHoursDropdownOpen, setIsHoursDropdownOpen] = useState(false);

//   const propertyTypes = [
//     "Gas Station",
//     "Restaurant / Café",
//     "Shopping Mall / Plaza",
//     "Supermarket / Grocery",
//     "Hotel / Resort",
//     "Office Building",
//     "Residential Complex",
//     "Airport",
//     "Stadium / Sports Venue",
//     "Government Building",
//     "Hospital / Clinic",
//     "University / School",
//     "Parking Garage / Lot",
//     "Other",
//   ];

//   return (
//     <div className="flex flex-col gap-5 text-white">
//       {/* Property Type Dropdown */}
//       <div className="relative flex flex-col">
//         <label className="text-[13px] mb-2">Property Type</label>
//         <div
//           className="flex items-center justify-between bg-transparent border-b border-[rgba(255,255,255,0.3)] p-2 cursor-pointer"
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//         >
//           <span>{data.propertyType || "Select Property Type"}</span>
//           <Image src="/cap-icon.svg" alt="cap" width={17} height={17} />
//         </div>

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
//                 {type === "Other" && (
//                   <div className="border-b border-[#FFFFFF1A] my-3" />
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* When "Other" is selected → show additional fields */}
//       {data.propertyType === "Other" && (
//         <div className="flex flex-col gap-5 mt-3 transition-all duration-300">
//           {/* Parking Availability */}
//           <div>
//             <label className="text-[13px] block mb-2">
//               Parking Availability Dedicated for Chargers / Spaces Available
//             </label>
//             <select
//               value={data.chargersAvailable || ""}
//               onChange={(e) => update({ chargersAvailable: e.target.value })}
//               className="bg-transparent p-2 border-b border-[rgba(255,255,255,0.3)] w-full text-white"
//             >
//               <option value="" className="text-black">Select</option>
//               {[...Array(21).keys()].map((n) => (
//                 <option key={n} value={n === 20 ? "20+" : n}  className="text-black">
//                   {n === 20 ? "20+" : n}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Covered / Uncovered */}
//           <div>
//             <label className="text-[13px] block mb-2">Covered / Uncovered</label>
//             <div className="flex gap-5">
//               {["Covered", "Uncovered"].map((opt) => (
//                 <label
//                   key={opt}
//                   className="flex items-center gap-2 text-[14px] cursor-pointer"
//                 >
//                   <CustomCheckbox
//                     checked={data.covered === (opt === "Covered")}
//                     onChange={() =>
//                       update({ covered: opt === "Covered" })
//                     }
//                   />
//                   {opt}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Public Access */}
//           <div>
//             <label className="text-[13px] block mb-2">24/7 Public Access</label>
//             <div className="flex gap-5">
//               {["Yes", "No"].map((opt) => (
//                 <label
//                   key={opt}
//                   className="flex items-center gap-2 text-[14px] cursor-pointer"
//                 >
//                   <CustomCheckbox
//                     checked={
//                       (opt === "Yes" && data.publicAccess) ||
//                       (opt === "No" && !data.publicAccess)
//                     }
//                     onChange={() =>
//                       update({ publicAccess: opt === "Yes" })
//                     }
//                   />
//                   {opt}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Visitors */}
//           <div>
//             <label className="text-[13px] block mb-2">
//               Average Daily Visitors / Customers
//             </label>
//             <div className="flex flex-wrap gap-2">
//               {["<50", "50–200", "200–500", "500–1,000", "1,000+"].map((opt) => (
//                 <button
//                   key={opt}
//                   onClick={() => update({ averageDailyVisitors: opt })}
//                   className={`px-3 py-2 rounded-md text-[13px] ${
//                     data.averageDailyVisitors === opt
//                       ? "bg-[#F5DC7B] text-black"
//                       : "bg-[#ffffff14] text-white"
//                   }`}
//                 >
//                   {opt}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Hours of Operation */}
//           <div className="relative flex flex-col">
//             <label className="text-[13px] mb-2">Hours of Operation</label>
//             <div
//               className="flex items-center justify-between bg-transparent border-b border-[rgba(255,255,255,0.3)] p-2 cursor-pointer"
//               onClick={() => setIsHoursDropdownOpen(!isHoursDropdownOpen)}
//             >
//               <span>{data.hoursOfOperation || "Select Hours"}</span>
//               <Image src="/cap-icon.svg" alt="cap" width={24} height={24} />
//             </div>

//             {isHoursDropdownOpen && (
//               <div className="mt-3 border border-[#FFFFFF1A] rounded-xl bg-[#0000001A] backdrop-blur-md p-4 flex flex-col gap-3">
//                 {/* Ownership */}
//                 <div>
//                   <p className="text-[12px] text-gray-300 mb-1">
//                     Do you Own or Lease this Property?
//                   </p>
//                   <div className="flex gap-2">
//                     {["Own", "Lease", "Franchise"].map((opt) => (
//                       <label
//                         key={opt}
//                         className="flex items-center gap-2 text-[13px] cursor-pointer"
//                       >
//                         <CustomCheckbox
//                           checked={data.ownOrLease === opt}
//                           onChange={() => update({ ownOrLease: opt })}
//                         />
//                         {opt}
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Multiple Locations */}
//                 <div>
//                   <p className="text-[12px] text-gray-300 mb-1">
//                     Do you Operate Multiple Locations?
//                   </p>
//                   <div className="flex gap-5">
//                     {["Yes", "No"].map((opt) => (
//                       <label
//                         key={opt}
//                         className="flex items-center gap-2 text-[13px] cursor-pointer"
//                       >
//                         <CustomCheckbox
//                           checked={
//                             (opt === "Yes" && data.multipleLocations) ||
//                             (opt === "No" && !data.multipleLocations)
//                           }
//                           onChange={() =>
//                             update({
//                               multipleLocations: opt === "Yes",
//                             })
//                           }
//                         />
//                         {opt}
//                       </label>
//                     ))}
//                   </div>
//                   {data.multipleLocations && (
//                     <input
//                       type="text"
//                       placeholder="How many & where"
//                       className="mt-2 w-full bg-transparent border-b border-[rgba(255,255,255,0.3)] text-white p-2 text-sm placeholder:text-gray-400"
//                       value={data.multipleLocationsCount || ""}
//                       onChange={(e) =>
//                         update({ multipleLocationsCount: e.target.value })
//                       }
//                     />
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Next Button */}
//       <div className="mt-6 flex justify-center">
//         <SunButton
//           onClick={onNext}
//           className="w-full py-3"
//           textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
//         >
//           NEXT
//         </SunButton>
//       </div>
//     </div>
//   );
// }
// /* STEP 3 */
//     function Step3Profile({ data, update, onNext }: { data: StepData; update: (p: Partial<StepData>) => void; onNext: () => void; }) {


//     return (
//     <div className="flex flex-col gap-6 text-white font-lato">
//         {/* Annual Business Revenue Range */}
//         <div>
//             <p className="text-[12px] mb-2">ANNUAL BUSINESS REVENUE RANGE</p>
//             <div className="flex flex-col gap-2">
//             <label className="flex items-center gap-3 cursor-pointer">
//                 <input
//                 type="radio"
//                 name="businessRevenue"
//                 checked={!!data.businessRevenue}
//                 onChange={() =>
//                     update({ businessRevenue: !data.businessRevenue })
//                 }
//                 className="w-[12px] h-[12px] rounded-full accent-[#FFCD28]"
//                 />
//                 <span className="text-[12px]">
//                 Optional but helps gauge charger type suitability.
//                 </span>
//             </label>
//             </div>
//         </div>

//         {/* Existing Electrical Capacity */}
//         <div>
//             <p className="text-[12px] mb-2">EXISTING ELECTRICAL CAPACITY</p>
//             <div className="flex flex-col gap-2">
//             <label className="flex items-center gap-3 cursor-pointer">
//                 <input
//                 type="radio"
//                 name="electricalCapacity"
//                 checked={!!data.electricalCapacity}
//                 onChange={() =>
//                     update({ electricalCapacity: !data.electricalCapacity })
//                 }
//                 className="w-[12px] h-[12px] rounded-full accent-[#FFCD28]"
//                 />
//                 <span className="text-[12px]">
//                 Options: I know my kW service / I’m not sure.
//                 </span>
//             </label>
//             </div>
//         </div>

//         {/* Upload Utility Bill */}
//         <div>
//             <p className="text-[12px] mb-2">UPLOAD RECENT UTILITY BILL (OPTIONAL)</p>
//             <label className="flex items-center gap-3 cursor-pointer">
//             <input
//                 type="radio"
//                 name="utilityBillUploaded"
//                 checked={!!data.utilityBillUploaded}
//                 onChange={() =>
//                 update({ utilityBillUploaded: !data.utilityBillUploaded })
//                 }
//                 className="w-[12px] h-[12px] rounded-full accent-[#FFCD28]"
//             />
//             <span className="text-[12px]">For faster review of electrical load.</span>
//             </label>
//         </div>

//         {/* Next Button */}
//         <div className="mt-6 flex justify-center">
//             <SunButton
//             onClick={onNext}
//             className="w-full py-3"
//             textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
//             >
//             NEXT
//             </SunButton>
//         </div>
//         </div>
//     );
//     }   

// /* STEP 4 */
// function Step4Charger({ data, update, onNext }: { data: StepData; update: (p: Partial<StepData>) => void; onNext: () => void; }) {

//   return (
//   <div className="flex flex-col gap-8 text-white font-lato">
//       {/* Charger Type */}
//       <div>
//         <p className="text-[14px] mb-3">
//           WHICH CHARGER TYPE FITS YOUR LOCATION BEST?
//         </p>

//         <div className="flex flex-col gap-3">
//           {/* Level 2 */}
//           <label className="flex items-start gap-3 cursor-pointer">
//             <input
//               type="radio"
//               name="chargerType"
//               checked={data.chargerPreference === "Level 2"}
//               onChange={() => update({ chargerPreference: "Level 2" })}
//               className="w-[14px] h-[14px] rounded-full accent-[#FFCD28] mt-[2px]"
//             />
//             <span className="text-[13px] leading-snug">
//               <span className="font-bold text-white">Level 2:</span>{" "}
//               <span className="text-gray-300 text-[12px] italic">
//                 (BEST FOR RESTAURANTS, OFFICES, RESIDENTIAL, SMALLER TRAFFIC
//                 LOCATIONS — 4–8 HOUR STAYS).
//               </span>
//             </span>
//           </label>

//           {/* Level 3 */}
//           <label className="flex items-start gap-3 cursor-pointer">
//             <input
//               type="radio"
//               name="chargerType"
//               checked={data.chargerPreference === "Level 3"}
//               onChange={() => update({ chargerPreference: "Level 3" })}
//               className="w-[14px] h-[14px] rounded-full accent-[#FFCD28] mt-[2px] text-[14px]"
//             />
//             <span className="text-[13px] leading-snug">
//               <span className="font-medium text-white">Level 3:</span>{" "}
//               <span className="text-gray-300 text-[12px] italic">
//                 DC Fast (BEST FOR GAS STATIONS, MALLS, SUPERMARKETS, HIGHWAYS —
//                 HIGH-TRAFFIC, SHORT STAYS).
//               </span>
//             </span>
//           </label>
//         </div>
//       </div>

//       {/* Partnership Model Preference */}
//       <div>
//         <p className="text-[14px] mb-3">PARTNERSHIP MODEL PREFERENCE:</p>
//         <div className="flex flex-col gap-3">
//           <label className="flex items-center gap-3 cursor-pointer">
//             <input
//               type="radio"
//               name="partnershipModel"
//               checked={
//                 data.partnershipModel ===
//                 "$0 investment option (standard revenue share)"
//               }
//               onChange={() =>
//                 update({
//                   partnershipModel:
//                     "$0 investment option (standard revenue share)",
//                 })
//               }
//               className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
//             />
//             <span className="text-[13px]">
//               $0 INVESTMENT OPTION (STANDARD REVENUE SHARE).
//             </span>
//           </label>

//           <label className="flex items-center gap-3 cursor-pointer">
//             <input
//               type="radio"
//               name="partnershipModel"
//               checked={
//                 data.partnershipModel ===
//                 "Willing to invest as a partner for higher revenue share"
//               }
//               onChange={() =>
//                 update({
//                   partnershipModel:
//                     "Willing to invest as a partner for higher revenue share",
//                 })
//               }
//               className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
//             />
//             <span className="text-[13px]">
//               WILLING TO INVEST AS A PARTNER FOR HIGHER REVENUE SHARE.
//             </span>
//           </label>
//         </div>
//       </div>

//       {/* Next Button */}
//       <div className="mt-6 flex justify-center">
//         <SunButton
//           onClick={onNext}
//           className="w-full py-3"
//           textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
//         >
//           NEXT
//         </SunButton>
//       </div>
//     </div>  
//   );
// }

// /* STEP 5 */
// function Step5Additional({ data, update, onNext }: { data: StepData; update: (p: Partial<StepData>) => void; onNext: () => void; }) {
//     const options = ["Yes", "No", "Maybe"];

//   const handleCheckboxChange = (option: string) => {
//     const arr = data.additionalOpportunities ? [...data.additionalOpportunities] : [];
//     if (arr.includes(option)) {
//       update({ additionalOpportunities: arr.filter((x) => x !== option) });
//     } else {
//       update({ additionalOpportunities: [...arr, option] });
//     }
//   };

//   return (
//     <div className="flex flex-col gap-6 font-lato text-white">
//       {/* Question Text */}
//       <p className="text-[14px] leading-snug">
//         WOULD YOU LIKE US TO EVALUATE YOUR PROPERTY FOR A{" "}
//         <span >$0 DOWN SOLAR SUBSCRIPTION</span> TO
//         LOWER YOUR ENERGY BILLS AND INCREASE PROFITS?
//       </p>

//       {/* Custom Checkboxes */}
//       <div className="flex flex-col sm:flex-row gap-4">
//         {options.map((o) => (
//           <CustomCheckbox
//             key={o}
//             label={o}
//             checked={!!data.additionalOpportunities?.includes(o)}
//             onChange={() => handleCheckboxChange(o)}
//             id={`option-${o}`}
//           />
//         ))}
//       </div>

//       {/* Next Button */}
//       <div className="mt-6 flex justify-center">
//         <SunButton
//           onClick={onNext}
//           className="w-full py-3"
//           textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
//         >
//           NEXT
//         </SunButton>
//       </div>
//     </div>
//   );
// }

// /* STEP 6 */
// function Step6Supporting({ data, update, onNext }: { data: StepData; update: (p: Partial<StepData>) => void; onNext: () => void; }) {
//   const handleFile = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     key: keyof StepData
//   ) => {
//     const files = e.target.files;
//     if (!files) return;
//     const arr = Array.from(files);
//     update({ [key]: arr });
//   };

//   return (
//     <div className="flex flex-col gap-4 text-white font-lato">
//       {/* 1️⃣ Property Exterior / Parking Area */}
//       <div>
//         <p className="text-[14px] mb-2">
//           UPLOAD PHOTOS OF PROPERTY EXTERIOR / PARKING AREA
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
//             HELPS US VISUALIZE CHARGER PLACEMENT.
//           </span>
//         </label>

//         {/* Upload Button */}
//         <div className="flex items-center gap-3">
//           <div>
//             <input
//               id="file-property"
//               type="file"
//               accept=".pdf,image/*"
//               onChange={(e) => handleFile(e, "supportingFiles")}
//               className="hidden"
//             />
//             <label
//               htmlFor="file-property"
//               className="inline-flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer"
//             >
//               <span className="px-5 py-2 rounded-md text-[13px] bg-gradient-to-r from-[#00000099] via-[#FFFFFF4D] to-[#00000000] text-white border-1 border-[#FFFFFF1A]">
//                 Upload
//               </span>
//             </label>
//           </div>
//           <span className="text-[12px] text-gray-300">
//             (PDF, JPEG/PNG gallery)
//           </span>
//         </div>
//       </div>

//       {/* 2️⃣ Electrical Breaker / Infrastructure */}
//       <div>
//         <p className="text-[14px] mb-2">
//           UPLOAD PHOTOS OF ELECTRICAL BREAKER / INFRASTRUCTURE
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
//             Allows remote feasibility screening without physical inspection.
//           </span>
//         </label>
//       </div>

//       {/* 3️⃣ Additional Notes */}
//       <div>
//         <p className="text-[14px] mb-2">ADDITIONAL NOTES</p>
//         <p className="text-[12px] italic text-gray-300 mb-3">
//           “Tell us why your property is a great fit to host EV chargers.”
//         </p>
//         {/* <textarea
//           value={data.notes || ""}
//           onChange={(e) => update({ notes: e.target.value })}
//           placeholder="Write your note here..."
//           className="w-full bg-[#ffffff14] border border-[#FFFFFF33] rounded-md text-[13px] text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#F5DC7B] resize-none h-[80px]"
//         /> */}
//       </div>

//       {/* 4️⃣ Project Portfolio Upload */}
//       <div>
//         <p className="text-[14px] mb-2">UPLOAD YOUR PROJECT PORTFOLIO</p>
//         <div className="flex items-center gap-3">
//           <div>
//             <input
//               id="file-portfolio"
//               type="file"
//               accept=".pdf,image/*"
//               onChange={(e) => handleFile(e, "projectPortfolio")}
//               className="hidden"
//             />
//             <label
//               htmlFor="file-portfolio"
//               className="inline-flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer"
//             >
//               <span className="px-5 py-2  border-1 border-[#FFFFFF1A] rounded-md text-[13px] bg-gradient-to-r from-[#00000099] via-[#FFFFFF4D] to-[#00000000] text-white">
//                 Upload
//               </span>
//             </label>
//           </div>
//           <span className="text-[13px] text-gray-300">(PDF, JPEG/PNG)</span>
//         </div>
//       </div>

//       {/* 5️⃣ Next Button */}
//       <div className="mt-6 flex justify-center">
//         <SunButton
//           onClick={onNext}
//           className="w-full py-3"
//           textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
//         >
//           NEXT
//         </SunButton>
//       </div>
//     </div>
//   );
// }

// /* Small Field component with label and bottom-only border */
// function Field({
//   label,
//   value,
//   onChange,
//   hint,
// }: {
//   label: string;
//   value: string;
//   onChange: (v: string) => void;
//   hint?: string;
// }) {
//   return (
//     <div className="flex flex-col font-lato text-[14px] font-bold">
//       <label className="text-[12px] text-white mb-1">{label}</label>
//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="bg-transparent outline-none py-1 border-b border-[rgba(255,255,255,0.3)] text-white"
//       />
//       {hint && <span className="text-[11px] text-white ">{hint}</span>}
//     </div>
//   );
// }
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import CustomCheckbox from "./CustomCheckbox";
import Image from "next/image";
import SunButton from "./SunButton";

type StepData = {
  fullName?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  propertyAddress?: string;
  // Step 2
  propertyType?: string;
  chargersAvailable?: string;
  covered?: boolean;
  publicAccess?: boolean;
  averageDailyVisitors?: string;
  hoursOfOperation?: string;
  ownOrLease?: string;
  multipleLocations?: boolean;
  multipleLocationsCount?: string;
  // Step 3..6 simple fields
  businessProfile?: string;
  chargerPreference?: string;
  partnershipModel?: string;
  additionalOpportunities?: string[];
  supportingFiles?: File[];
  propertyPhotoConsent?: boolean;
  electricalPhotoConsent?: boolean;
  notes?: string;
  projectPortfolio?: File[];
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
  const [data, setData] = useState<StepData>({});
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) {
      setStep(1);
      setDone(false);
      setSubmitting(false);
    }
  }, [open]);

  if (!open) return null;

  const update = (patch: Partial<StepData>) => setData((d) => ({ ...d, ...patch }));

  const next = () => setStep((s) => Math.min(7, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const submitFinal = async () => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
    setStep(7);
    onClose();
  };

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
                    {t("apply_modal_step_label")} {String(step).padStart(2, "0")}: {t(`apply_modal_step_${step}`)}
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
                  onNext={() => {
                    next();
                  }}
                />
              )}
              {step === 7 && (
                <div className="flex flex-col items-center gap-4 font-lato">
                  <div className="px-4 py-2 rounded-lg bg-[#FFCD28]">
                    <h4 className="text-[20px] font-bold text-black text-center">{t("apply_modal_thanks")}</h4>
                  </div>
                  <p className="text-[16px] font-medium text-white text-center max-w-[320px]">
                    {t("apply_modal_thanks_desc")}
                  </p>
                  <div className="mt-4 flex justify-center w-full md:w-3/4">
                    <SunButton
                      onClick={submitFinal}
                      className="w-full py-3"
                      textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
                    >
                      {submitting ? t("apply_modal_submitting") : t("apply_modal_submit")}
                    </SunButton>
                  </div>
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

  return (
    <div className="flex flex-col gap-3">
      <Field label={t("apply_modal_full_name")} value={data.fullName || ""} onChange={(v) => update({ fullName: v })} />
      <Field label={t("apply_modal_email")} value={data.email || ""} onChange={(v) => update({ email: v })} />
      <Field label={t("apply_modal_phone")} value={data.phone || ""} onChange={(v) => update({ phone: v })} />
      <Field label={t("apply_modal_business_name")} value={data.businessName || ""} onChange={(v) => update({ businessName: v })} />
      <Field
        label={t("apply_modal_property_address")}
        value={data.propertyAddress || ""}
        onChange={(v) => update({ propertyAddress: v })}
        hint={t("apply_modal_property_address_hint")}
      />
      <div className="mt-4 flex justify-center">
        <SunButton
          onClick={onNext}
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

  return (
    <div className="flex flex-col gap-5 text-white">
      {/* Property Type Dropdown */}
      <div className="relative flex flex-col">
        <label className="text-[13px] mb-2">{t("apply_modal_property_type")}</label>
        <div
          className="flex items-center justify-between bg-transparent border-b border-[rgba(255,255,255,0.3)] p-2 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>{data.propertyType || t("apply_modal_select_property_type")}</span>
          <Image src="/cap-icon.svg" alt="cap" width={17} height={17} />
        </div>

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
      {data.propertyType === t("apply_modal_property_type_other") && (
        <div className="flex flex-col gap-5 mt-3 transition-all duration-300">
          {/* Parking Availability */}
          <div>
            <label className="text-[13px] block mb-2">{t("apply_modal_parking_availability")}</label>
            <select
              value={data.chargersAvailable || ""}
              onChange={(e) => update({ chargersAvailable: e.target.value })}
              className="bg-transparent p-2 border-b border-[rgba(255,255,255,0.3)] w-full text-white"
            >
              <option value="" className="text-black">{t("apply_modal_select_property_type")}</option>
              {[...Array(21).keys()].map((n) => (
                <option key={n} value={n === 20 ? "20+" : n} className="text-black">
                  {n === 20 ? "20+" : n}
                </option>
              ))}
            </select>
          </div>

          {/* Covered / Uncovered */}
          <div>
            <label className="text-[13px] block mb-2">{t("apply_modal_covered")}/{t("apply_modal_uncovered")}</label>
            <div className="flex gap-5">
              {[t("apply_modal_covered"), t("apply_modal_uncovered")].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2 text-[14px] cursor-pointer"
                >
                  <CustomCheckbox
                    checked={data.covered === (opt === t("apply_modal_covered"))}
                    onChange={() =>
                      update({ covered: opt === t("apply_modal_covered") })
                    }
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Public Access */}
          <div>
            <label className="text-[13px] block mb-2">{t("apply_modal_public_access")}</label>
            <div className="flex gap-5">
              {[t("apply_modal_yes"), t("apply_modal_no")].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2 text-[14px] cursor-pointer"
                >
                  <CustomCheckbox
                    checked={
                      (opt === t("apply_modal_yes") && data.publicAccess) ||
                      (opt === t("apply_modal_no") && !data.publicAccess)
                    }
                    onChange={() =>
                      update({ publicAccess: opt === t("apply_modal_yes") })
                    }
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Visitors */}
          <div>
            <label className="text-[13px] block mb-2">{t("apply_modal_average_daily_visitors")}</label>
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
          </div>

          {/* Hours of Operation */}
          <div className="relative flex flex-col">
            <label className="text-[13px] mb-2">{t("apply_modal_hours_of_operation")}</label>
            <div
              className="flex items-center justify-between bg-transparent border-b border-[rgba(255,255,255,0.3)] p-2 cursor-pointer"
              onClick={() => setIsHoursDropdownOpen(!isHoursDropdownOpen)}
            >
              <span>{data.hoursOfOperation || t("apply_modal_select_hours")}</span>
              <Image src="/cap-icon.svg" alt="cap" width={24} height={24} />
            </div>

            {isHoursDropdownOpen && (
              <div className="mt-3 border border-[#FFFFFF1A] rounded-xl bg-[#0000001A] backdrop-blur-md p-4 flex flex-col gap-3">
                {/* Ownership */}
                <div>
                  <p className="text-[12px] text-gray-300 mb-1">{t("apply_modal_own_or_lease")}</p>
                  <div className="flex gap-2">
                    {[t("apply_modal_own"), t("apply_modal_lease"), t("apply_modal_franchise")].map((opt) => (
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
                </div>

                {/* Multiple Locations */}
                <div>
                  <p className="text-[12px] text-gray-300 mb-1">{t("apply_modal_multiple_locations")}</p>
                  <div className="flex gap-5">
                    {[t("apply_modal_yes"), t("apply_modal_no")].map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 text-[13px] cursor-pointer"
                      >
                        <CustomCheckbox
                          checked={
                            (opt === t("apply_modal_yes") && data.multipleLocations) ||
                            (opt === t("apply_modal_no") && !data.multipleLocations)
                          }
                          onChange={() =>
                            update({
                              multipleLocations: opt === t("apply_modal_yes"),
                            })
                          }
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                  {data.multipleLocations && (
                    <input
                      type="text"
                      placeholder={t("apply_modal_multiple_locations_count")}
                      className="mt-2 w-full bg-transparent border-b border-[rgba(255,255,255,0.3)] text-white p-2 text-sm placeholder:text-gray-400"
                      value={data.multipleLocationsCount || ""}
                      onChange={(e) =>
                        update({ multipleLocationsCount: e.target.value })
                      }
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Next Button */}
      <div className="mt-6 flex justify-center">
        <SunButton
          onClick={onNext}
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

  return (
    <div className="flex flex-col gap-6 text-white font-lato">
      {/* Annual Business Revenue Range */}
      <div>
        <p className="text-[12px] mb-2">{t("apply_modal_business_revenue")}</p>
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
            <span className="text-[12px]">{t("apply_modal_business_revenue_hint")}</span>
          </label>
        </div>
      </div>

      {/* Existing Electrical Capacity */}
      <div>
        <p className="text-[12px] mb-2">{t("apply_modal_electrical_capacity")}</p>
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
            <span className="text-[12px]">{t("apply_modal_electrical_capacity_hint")}</span>
          </label>
        </div>
      </div>

      {/* Upload Utility Bill */}
      <div>
        <p className="text-[12px] mb-2">{t("apply_modal_utility_bill")}</p>
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
          <span className="text-[12px]">{t("apply_modal_utility_bill_hint")}</span>
        </label>
      </div>

      {/* Next Button */}
      <div className="mt-6 flex justify-center">
        <SunButton
          onClick={onNext}
          className="w-full py-3"
          textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
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

  return (
    <div className="flex flex-col gap-8 text-white font-lato">
      {/* Charger Type */}
      <div>
        <p className="text-[14px] mb-3">{t("apply_modal_charger_type_question")}</p>
        <div className="flex flex-col gap-3">
          {/* Level 2 */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              name="chargerType"
              checked={data.chargerPreference === t("apply_modal_charger_level_2")}
              onChange={() => update({ chargerPreference: t("apply_modal_charger_level_2") })}
              className="w-[14px] h-[14px] rounded-full accent-[#FFCD28] mt-[2px]"
            />
            <span className="text-[13px] leading-snug">
              <span className="font-bold text-white">{t("apply_modal_charger_level_2")}:</span>{" "}
              <span className="text-gray-300 text-[12px] italic">{t("apply_modal_charger_level_2_desc")}</span>
            </span>
          </label>

          {/* Level 3 */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              name="chargerType"
              checked={data.chargerPreference === t("apply_modal_charger_level_3")}
              onChange={() => update({ chargerPreference: t("apply_modal_charger_level_3") })}
              className="w-[14px] h-[14px] rounded-full accent-[#FFCD28] mt-[2px] text-[14px]"
            />
            <span className="text-[13px] leading-snug">
              <span className="font-medium text-white">{t("apply_modal_charger_level_3")}:</span>{" "}
              <span className="text-gray-300 text-[12px] italic">{t("apply_modal_charger_level_3_desc")}</span>
            </span>
          </label>
        </div>
      </div>

      {/* Partnership Model Preference */}
      <div>
        <p className="text-[14px] mb-3">{t("apply_modal_partnership_model")}</p>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="partnershipModel"
              checked={data.partnershipModel === t("apply_modal_partnership_zero_investment")}
              onChange={() =>
                update({
                  partnershipModel: t("apply_modal_partnership_zero_investment"),
                })
              }
              className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
            />
            <span className="text-[13px]">{t("apply_modal_partnership_zero_investment")}</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="partnershipModel"
              checked={data.partnershipModel === t("apply_modal_partnership_invest")}
              onChange={() =>
                update({
                  partnershipModel: t("apply_modal_partnership_invest"),
                })
              }
              className="w-[14px] h-[14px] rounded-full accent-[#FFCD28]"
            />
            <span className="text-[13px]">{t("apply_modal_partnership_invest")}</span>
          </label>
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-6 flex justify-center">
        <SunButton
          onClick={onNext}
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
  const options = [t("apply_modal_solar_yes"), t("apply_modal_solar_no"), t("apply_modal_solar_maybe")];

  const handleCheckboxChange = (option: string) => {
    const arr = data.additionalOpportunities ? [...data.additionalOpportunities] : [];
    if (arr.includes(option)) {
      update({ additionalOpportunities: arr.filter((x) => x !== option) });
    } else {
      update({ additionalOpportunities: [...arr, option] });
    }
  };

  return (
    <div className="flex flex-col gap-6 font-lato text-white">
      {/* Question Text */}
      <p className="text-[14px] leading-snug" dangerouslySetInnerHTML={{ __html: t("apply_modal_solar_question") }} />

      {/* Custom Checkboxes */}
      <div className="flex flex-col sm:flex-row gap-4">
        {options.map((o) => (
          <CustomCheckbox
            key={o}
            label={o}
            checked={!!data.additionalOpportunities?.includes(o)}
            onChange={() => handleCheckboxChange(o)}
            id={`option-${o}`}
          />
        ))}
      </div>

      {/* Next Button */}
      <div className="mt-6 flex justify-center">
        <SunButton
          onClick={onNext}
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

  const handleFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof StepData
  ) => {
    const files = e.target.files;
    if (!files) return;
    const arr = Array.from(files);
    update({ [key]: arr });
  };

  return (
    <div className="flex flex-col gap-4 text-white font-lato">
      {/* 1️⃣ Property Exterior / Parking Area */}
      <div>
        <p className="text-[14px] mb-2">{t("apply_modal_property_photos")}</p>
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
          <span className="text-[13px]">{t("apply_modal_property_photos_hint")}</span>
        </label>

        {/* Upload Button */}
        <div className="flex items-center gap-3">
          <div>
            <input
              id="file-property"
              type="file"
              accept=".pdf,image/*"
              onChange={(e) => handleFile(e, "supportingFiles")}
              className="hidden"
            />
            <label
              htmlFor="file-property"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer"
            >
              <span className="px-5 py-2 rounded-md text-[13px] bg-gradient-to-r from-[#00000099] via-[#FFFFFF4D] to-[#00000000] text-white border-1 border-[#FFFFFF1A]">
                {t("apply_modal_upload")}
              </span>
            </label>
          </div>
          <span className="text-[12px] text-gray-300">{t("apply_modal_file_format_gallery")}</span>
        </div>
      </div>

      {/* 2️⃣ Electrical Breaker / Infrastructure */}
      <div>
        <p className="text-[14px] mb-2">{t("apply_modal_electrical_photos")}</p>
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
          <span className="text-[13px]">{t("apply_modal_electrical_photos_hint")}</span>
        </label>
      </div>

      {/* 3️⃣ Additional Notes */}
      <div>
        <p className="text-[14px] mb-2">{t("apply_modal_additional_notes")}</p>
        <p className="text-[12px] italic text-gray-300 mb-3">{t("apply_modal_additional_notes_hint")}</p>
        {/* <textarea
          value={data.notes || ""}
          onChange={(e) => update({ notes: e.target.value })}
          placeholder="Write your note here..."
          className="w-full bg-[#ffffff14] border border-[#FFFFFF33] rounded-md text-[13px] text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#F5DC7B] resize-none h-[80px]"
        /> */}
      </div>

      {/* 4️⃣ Project Portfolio Upload */}
      <div>
        <p className="text-[14px] mb-2">{t("apply_modal_project_portfolio")}</p>
        <div className="flex items-center gap-3">
          <div>
            <input
              id="file-portfolio"
              type="file"
              accept=".pdf,image/*"
              onChange={(e) => handleFile(e, "projectPortfolio")}
              className="hidden"
            />
            <label
              htmlFor="file-portfolio"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer"
            >
              <span className="px-5 py-2 border-1 border-[#FFFFFF1A] rounded-md text-[13px] bg-gradient-to-r from-[#00000099] via-[#FFFFFF4D] to-[#00000000] text-white">
                {t("apply_modal_upload")}
              </span>
            </label>
          </div>
          <span className="text-[13px] text-gray-300">{t("apply_modal_file_format")}</span>
        </div>
      </div>

      {/* 5️⃣ Next Button */}
      <div className="mt-6 flex justify-center">
        <SunButton
          onClick={onNext}
          className="w-full py-3"
          textClassName="whitespace-nowrap text-sm md:text-base lg:text-lg"
        >
          {t("apply_modal_next")}
        </SunButton>
      </div>
    </div>
  );
}

/* Small Field component with label and bottom-only border */
// function Field({
//   label,
//   value,
//   onChange,
//   hint,
// }: {
//   label: string;
//   value: string;
//   onChange: (v: string) => void;
//   hint?: string;
// }) {
//   return (
//     <div className="flex flex-col font-lato text-[14px] font-bold">
//       <label className="text-[12px] text-white mb-1">{label}</label>
//       {hint && <span className="text-[11px] text-white">{hint}</span>}
//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="bg-transparent outline-none py-1 border-b border-[rgba(255,255,255,0.3)] text-white"
//       />
//     </div>
//   );
// }
function Field({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
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
        className="bg-transparent outline-none py-1 border-b border-[rgba(255,255,255,0.3)] text-white"
      />
    </div>
  );
}
