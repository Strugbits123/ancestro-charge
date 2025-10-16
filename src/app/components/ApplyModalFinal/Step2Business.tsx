import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { StepData } from "../types/StepData";
import SunButton from "../SunButton"; 
import CustomCheckbox from "../CustomCheckbox";

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
    if (!data.propertyType)
      newErrors.propertyType = t("apply_modal_required_field");
    if (!data.chargersAvailable)
      newErrors.chargersAvailable = t("apply_modal_required_field");
    if (!data.covered) newErrors.covered = t("apply_modal_required_field");
    if (!data.publicAccess)
      newErrors.publicAccess = t("apply_modal_required_field");
    if (!data.averageDailyVisitors)
      newErrors.averageDailyVisitors = t("apply_modal_required_field");
    if (!data.ownOrLease)
      newErrors.ownOrLease = t("apply_modal_required_field");
    if (!data.multipleLocations)
      newErrors.multipleLocations = t("apply_modal_required_field");
    if (
      data.multipleLocations === "Yes" &&
      !data.multipleLocationsCount?.trim()
    )
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
    if (
      data.multipleLocations !== "Yes" ||
      (data.multipleLocations === "Yes" && data.multipleLocationsCount?.trim())
    )
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
    <div className="flex flex-col gap-5 text-white ">
      {/* Property Type Dropdown */}
      <div className="relative flex flex-col">
        <label className="text-[13px] mb-2">
          {t("apply_modal_property_type")}
          <span className="text-[10px] italic ml-2">
            {t("apply_modal_required_field")}
          </span>
        </label>
        <div
          className={`flex items-center justify-between bg-transparent border-b p-2 cursor-pointer ${
            errors.propertyType
              ? "border-red-500"
              : "border-[rgba(255,255,255,0.3)]"
          }`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>
            {data.propertyType || t("apply_modal_select_property_type")}
          </span>
          <Image src="/cap-icon.svg" alt="cap" width={17} height={17} />
        </div>
        {errors.propertyType && (
          <span className="text-[10px] text-red-500 mt-1">
            {errors.propertyType}
          </span>
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
            <span className="text-[10px] italic ml-2">
              {t("apply_modal_required_field")}
            </span>
          </label>

          <select
            value={data.chargersAvailable || ""}
            onFocus={(e) => (e.target.size = 5)}
            onBlur={(e) => (e.target.size = 0)}
            onChange={(e) => {
              update({ chargersAvailable: e.target.value });
              e.target.size = 0;
              e.target.blur();
            }}
            className={`bg-transparent p-2 border-b w-full text-white overflow-y-auto ${
              errors.chargersAvailable
                ? "border-red-500"
                : "border-[rgba(255,255,255,0.3)]"
            }`}
            style={{ maxHeight: "25vh" }}
          >
            <option value="" className="text-white">
              {t("apply_modal_select_parkingavailability")}
            </option>
            {[...Array(21).keys()].map((n) => (
              <option key={n} value={n === 20 ? "20+" : n} className="text-white">
                {n === 20 ? "20+" : n}
              </option>
            ))}
          </select>

          {errors.chargersAvailable && (
            <span className="text-[10px] text-red-500 mt-1">
              {errors.chargersAvailable}
            </span>
          )}
        </div>

        {/* Covered / Uncovered */}
        <div>
          <label className="text-[13px] block mb-2">
            {t("apply_modal_covered")}/{t("apply_modal_uncovered")}
            <span className="text-[10px] italic ml-2">
              {t("apply_modal_required_field")}
            </span>
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
            <span className="text-[10px] text-red-500 mt-1">
              {errors.covered}
            </span>
          )}
        </div>

        {/* Public Access */}
        <div>
          <label className="text-[13px] block mb-2">
            {t("apply_modal_public_access")}
            <span className="text-[10px] italic ml-2">
              {t("apply_modal_required_field")}
            </span>
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
            <span className="text-[10px] text-red-500 mt-1">
              {errors.publicAccess}
            </span>
          )}
        </div>

        {/* Visitors */}
        <div>
          <label className="text-[13px] block mb-2">
            {t("apply_modal_average_daily_visitors")}
            <span className="text-[10px] italic ml-2">
              {t("apply_modal_required_field")}
            </span>
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
            <span className="text-[10px] text-red-500 mt-1">
              {errors.averageDailyVisitors}
            </span>
          )}
        </div>

        {/* Ownership and Multiple Locations */}
        <div className="relative flex flex-col">
          <div
            className={`flex items-center justify-between bg-transparent border-b p-2 cursor-pointer ${
              errors.ownOrLease || errors.multipleLocations
                ? "border-red-500"
                : "border-[rgba(255,255,255,0.3)]"
            }`}
            onClick={() => setIsHoursDropdownOpen(!isHoursDropdownOpen)}
          >
            <label className="text-[13px]">
              {t("apply_modal_hours_of_operation")}
              <span className="text-[10px] italic ml-2">
                {t("apply_modal_required_field")}
              </span>
            </label>
            <Image src="/cap-icon.svg" alt="cap" width={24} height={24} />
          </div>

          {isHoursDropdownOpen && (
            <div className="mt-3 border border-[#FFFFFF1A] rounded-xl bg-[#0000001A] backdrop-blur-md p-4 flex flex-col gap-3">
              {/* Ownership */}
              <div>
                <p className="text-[12px] text-gray-300 mb-1">
                  {t("apply_modal_own_or_lease")}
                  <span className="text-[10px] italic ml-2">
                    {t("apply_modal_required_field")}
                  </span>
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
                  <span className="text-[10px] text-red-500 mt-1">
                    {errors.ownOrLease}
                  </span>
                )}
              </div>

              {/* Multiple Locations */}
              <div>
                <p className="text-[12px] text-gray-300 mb-1">
                  {t("apply_modal_multiple_locations")}
                  <span className="text-[10px] italic ml-2">
                    {t("apply_modal_required_field")}
                  </span>
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
                  <span className="text-[10px] text-red-500 mt-1">
                    {errors.multipleLocations}
                  </span>
                )}
                {data.multipleLocations === "Yes" && (
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder={t("apply_modal_multiple_locations_count")}
                      className={`w-full bg-transparent border-b text-white p-2 text-sm placeholder:text-gray-400 ${
                        errors.multipleLocationsCount
                          ? "border-red-500"
                          : "border-[rgba(255,255,255,0.3)]"
                      }`}
                      value={data.multipleLocationsCount || ""}
                      onChange={(e) =>
                        update({ multipleLocationsCount: e.target.value })
                      }
                    />
                    {errors.multipleLocationsCount && (
                      <span className="text-[10px] text-red-500 mt-1">
                        {errors.multipleLocationsCount}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
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
    </div>
  );
}

export default Step2Business;