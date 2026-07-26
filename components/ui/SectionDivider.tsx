"use client";

import React from "react";

interface SectionDividerProps {
  position?: "top" | "bottom";
  color?: string;
  variant?: "wave" | "curved" | "clouds";
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  position = "bottom",
  color = "#FFFDF7",
  variant = "wave",
  className = "",
}) => {
  const isTop = position === "top";

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10 ${
        isTop ? "top-0 rotate-180" : "bottom-0"
      } ${className}`}
      style={{ height: "60px" }}
    >
      {variant === "wave" && (
        <svg
          className="relative block w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.2,130.83,121.57,201,114,241,109.83,281.33,83.9,321.39,56.44Z"
            fill={color}
          />
        </svg>
      )}

      {variant === "curved" && (
        <svg
          className="relative block w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill={color}
          />
        </svg>
      )}

      {variant === "clouds" && (
        <svg
          className="relative block w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,60 C650,160 900,-20 1200,40 L1200,120 L0,120 Z"
            fill={color}
          />
        </svg>
      )}
    </div>
  );
};
