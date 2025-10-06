
import React from "react";
import Image from "next/image";

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  label?: string;
  tickIcon?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  id,
  label,
  tickIcon = "/tick.svg",
}) => {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
      <div className="relative flex items-center justify-center w-[19px] h-[19px]">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="absolute w-full h-full rounded-[5px] border border-white bg-[#FFFFFF33] appearance-none cursor-pointer"
        />
        {checked && (
          <Image
            src={tickIcon}
            alt="checked"
            width={10}
            height={10}
            className="pointer-events-none"
          />
        )}
      </div>
      {label && <span className="text-[14px] text-white">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
