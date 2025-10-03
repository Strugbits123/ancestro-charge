import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "yellow" | "white"; 
style?:any
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  variant = "yellow",
  style 
}) => {
  const baseClasses =
    "px-6 py-3 rounded-full font-bold text-sm md:text-[15px] font-helvetica transition-all duration-200 border hover:cursor-pointer";

  const variants = {
    yellow:
      "border-[#F8B03B] text-[#F8B03B] bg-transparent  hover:bg-[#F8B03B] hover:text-black hover:shadow-[0_10px_30px_rgba(248,176,59,0.8)]",
    white:
      "border-white text-white bg-transparent  hover:bg-white hover:text-black hover:shadow-[0_10px_30px_rgba(255,255,255,0.7)]",
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`} style={style}>
      {children}
    </button>
  );
};

export default Button;