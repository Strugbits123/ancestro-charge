"use client";

import React, { MouseEvent, ReactNode } from "react";
import { useRouter } from "next/navigation";

type SunButtonProps = {
  children?: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  href?: string;
  redirect?: string;
  target?: "_self" | "_blank";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "primary" | "secondary";
  size?: "small" | "default" | "large";
  text?: "default" | "override" | string;
  font?: "regular" | "semibold";
  textClassName?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function SunButton({
  children,
  className = "",
  onClick,
  href,
  redirect,
  target = "_self",
  disabled = false,
  type = "button",
  variant = "default",
  size = "default",
  text = "default",
  font = "regular",
  textClassName = "",
  ...props
}: SunButtonProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled) return;

    if (onClick) {
      onClick(e);
      return;
    }

    if (href) {
      if (target === "_blank") {
        window.open(href, "_blank");
      } else {
        router.push(href);
      }
      return;
    }

    if (redirect) {
      router.push(redirect);
    }
  };

  const sizeClasses: Record<string, string> = {
    small: "px-4 py-1 h-[40px] text-sm",
    default: "px-6 py-2",
    large: "px-8 py-3 h-[60px] text-lg",
  };

  const variantClasses: Record<string, string> = {
    default: "border-white text-white",
    primary: "border-yellow-500 text-yellow-500",
    secondary: "border-gray-300 text-gray-300",
  };

  const sunSizes: Record<string, string> = {
    small: "w-[40px] h-[40px]",
    default: "w-[50px] h-[50px]",
    large: "w-[60px] h-[60px]",
  };

  const sunPositions: Record<string, string> = {
    small: "group-hover:translate-y-[14px]",
    default: "group-hover:translate-y-[18px]",
    large: "group-hover:translate-y-[22px]",
  };

  const textColor: Record<string, string> = {
    override: "",
    default: "text-white",
  };

  const Component: React.ElementType = href ? "a" : "button";

  return (
    <Component
      {...props}
      className={`relative group border ${sizeClasses[size]} ${variantClasses[variant]} 
        rounded-full font-medium overflow-hidden transition-opacity 
        active:bg-yellow-500 active:text-black transition duration-500 ease-in-out 
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} 
        ${className}`}
      onClick={handleClick}
      {...(Component === "button"
        ? { disabled, type }
        : { href, target, rel: target === "_blank" ? "noopener noreferrer" : undefined })}
    >
      <span
        className={`relative z-10 ${
          textColor[text] || `text-${text}`
        } ${font === "regular" ? "font-[400]" : "font-[600]"} ${textClassName} 
        group-active:text-black`}
      >
        {children}
      </span>

      {/* Sun animation */}
      <span className="absolute inset-0 flex items-end justify-center">
        <span
          className={`${sunSizes[size]} rounded-full bg-yellow-500 opacity-0 translate-y-full 
          transition-all duration-500 ${sunPositions[size]} group-hover:opacity-100 blur-[2px]`}
        ></span>
      </span>
    </Component>
  );
}
