"use client";

import React from "react";

interface ButtonProps {
  /** The visible text label on the button */
  label: string;

  /** Optional onClick handler */
  onClick?: () => void;

  /** Optional additional classes (e.g., margin, width overrides) */
  className?: string;

  /** Optional small size toggle for compact buttons */
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  small = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden group rounded-xl font-helvetica font-bold tracking-[2px] text-white bg-[#FFFFFF1A] hover:cursor-pointer transition-colors duration-300
        ${
          small
            ? "px-4 sm:px-5 py-3 text-[12px] sm:text-[14px]"
            : "px-6 sm:px-8 py-3 sm:py-4 text-[16px]"
        } 
        ${className}`}
    >
      {/* Background overlay */}
      <span className="absolute inset-0 bg-[#F5DC7B] left-full group-hover:left-0 transition-all duration-500 ease-out"></span>

      {/* Text */}
      <span className="relative z-10 group-hover:text-black transition-colors duration-300">
        {label}
      </span>
    </button>
  );
};

export default Button;
