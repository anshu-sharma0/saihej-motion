"use client";

import React from "react";
import { Sparkles, Music, Star, Cloud } from "lucide-react";

export const FloatingElements: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Continuous Floating Clouds */}
      <div
        className="absolute top-12 left-[5%] opacity-25 animate-float"
        style={{ animationDuration: "8s" }}
      >
        <Cloud className="h-16 w-16 text-[#3B82F6] fill-current" />
      </div>
      <div
        className="absolute top-40 right-[8%] opacity-20 animate-float-reverse"
        style={{ animationDuration: "11s" }}
      >
        <Cloud className="h-24 w-24 text-[#FFD93D] fill-current" />
      </div>
      <div
        className="absolute bottom-32 left-[12%] opacity-20 animate-float"
        style={{ animationDuration: "9s" }}
      >
        <Cloud className="h-20 w-20 text-[#22C55E] fill-current" />
      </div>

      {/* Twinkling Stars */}
      <div className="absolute top-24 left-[25%] opacity-60 animate-pulse-glow">
        <Star className="h-6 w-6 text-[#FFD93D] fill-current" />
      </div>
      <div
        className="absolute top-64 right-[20%] opacity-70 animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      >
        <Star className="h-8 w-8 text-[#FF4D4D] fill-current" />
      </div>
      <div
        className="absolute bottom-44 right-[35%] opacity-60 animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      >
        <Star className="h-5 w-5 text-[#3B82F6] fill-current" />
      </div>

      {/* Floating Musical Notes */}
      <div
        className="absolute top-1/3 left-[15%] opacity-40 animate-float"
        style={{ animationDuration: "7s", animationDelay: "0.5s" }}
      >
        <Music className="h-7 w-7 text-[#FF4D4D]" />
      </div>
      <div
        className="absolute bottom-1/4 right-[15%] opacity-40 animate-float-reverse"
        style={{ animationDuration: "10s", animationDelay: "1.5s" }}
      >
        <Music className="h-8 w-8 text-[#22C55E]" />
      </div>
    </div>
  );
};
