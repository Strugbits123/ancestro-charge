// components/CustomCheckbox.tsx
import React from "react";

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  label?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange, id, label }) => {
  return (
    <>
      <style>{`
        .custom-checkbox {
          position: relative;
        }
        .custom-checkbox:checked::after {
          content: '';
          position: absolute;
          width: 5px;
          height: 10px;
          border: solid #F8B03B;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          top: 3px;
          left: 6px;
        }
      `}</style>
      <label className="inline-flex items-center gap-2 cursor-pointer">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-[19px] h-[19px] rounded-[5px] border border-white bg-[#FFFFFF33] appearance-none cursor-pointer custom-checkbox"
        />
        {label && <span className="text-[14px]">{label}</span>}
      </label>
    </>
  );
};

export default CustomCheckbox;
// import React from "react";
// import Image from "next/image";

// interface CustomCheckboxProps {
//   checked: boolean;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   id?: string;
//   label?: string;
//   tickIcon?: string; // optional path for custom tick icon
// }

// const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
//   checked,
//   onChange,
//   id,
//   label,
//   tickIcon = "/tick.svg", // default icon path
// }) => {
//   return (
//     <label className="inline-flex items-center gap-2 cursor-pointer select-none">
//       <div className="relative">
//         <input
//           id={id}
//           type="checkbox"
//           checked={checked}
//           onChange={onChange}
//           className="w-[19px] h-[19px] rounded-[5px] border border-white bg-[#FFFFFF33] appearance-none cursor-pointer"
//         />
//         {checked && (
//           <Image
//             src={tickIcon}
//             alt="checked"
//             width={12}
//             height={12}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//           />
//         )}
//       </div>
//       {label && <span className="text-[14px] text-white">{label}</span>}
//     </label>
//   );
// };

// export default CustomCheckbox;
