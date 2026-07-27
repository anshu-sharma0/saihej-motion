"use client";

import React from "react";
import { Sparkles, Music, Star, Cloud } from "lucide-react";

export const FloatingElements: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* ========================================================
          DISNEY-PIXAR AMBIENT RED, BLUE, YELLOW GLOW ORBS
          ======================================================== */}
      {/* Top Red Glow Orb */}
      <div className="absolute top-[8%] left-[5%] w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-full bg-[#FF4D4D]/25 blur-[100px] animate-pulse-glow" />
      
      {/* Top-Mid Yellow Glow Orb */}
      <div className="absolute top-[18%] right-[5%] w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#FFD93D]/25 blur-[110px] animate-float" style={{ animationDuration: "12s" }} />

      {/* Mid Blue Glow Orb */}
      <div className="absolute top-[38%] left-[10%] w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] rounded-full bg-[#3B82F6]/20 blur-[115px] animate-float-reverse" style={{ animationDuration: "15s" }} />

      {/* Mid-Lower Red & Yellow Aurora Wash */}
      <div className="absolute top-[58%] right-[8%] w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] rounded-full bg-gradient-to-br from-[#FF4D4D]/15 via-[#FFD93D]/20 to-[#3B82F6]/15 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Bottom Blue & Red Glow Orbs */}
      <div className="absolute bottom-[10%] left-[15%] w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#3B82F6]/20 blur-[105px] animate-float" style={{ animationDuration: "14s" }} />
      <div className="absolute bottom-[5%] right-[12%] w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full bg-[#FF4D4D]/20 blur-[110px] animate-float-reverse" style={{ animationDuration: "13s" }} />

      {/* ========================================================
          CONTINUOUS FLOATING CLOUDS, STARS, MUSIC & SPARKLES
          ======================================================== */}
      {/* Continuous Floating Clouds */}
      <div
        className="absolute top-12 left-[6%] opacity-35 animate-float"
        style={{ animationDuration: "8s" }}
      >
        <Cloud className="h-16 w-16 text-[#3B82F6] fill-current drop-shadow-md" />
      </div>
      <div
        className="absolute top-44 right-[8%] opacity-35 animate-float-reverse"
        style={{ animationDuration: "11s" }}
      >
        <Cloud className="h-24 w-24 text-[#FFD93D] fill-current drop-shadow-md" />
      </div>
      <div
        className="absolute top-[45%] left-[4%] opacity-30 animate-float"
        style={{ animationDuration: "10s" }}
      >
        <Cloud className="h-20 w-20 text-[#FF4D4D] fill-current drop-shadow-md" />
      </div>
      <div
        className="absolute bottom-32 left-[12%] opacity-30 animate-float"
        style={{ animationDuration: "9s" }}
      >
        <Cloud className="h-20 w-20 text-[#3B82F6] fill-current drop-shadow-md" />
      </div>

      {/* Twinkling Stars */}
      <div className="absolute top-24 left-[25%] opacity-75 animate-pulse-glow">
        <Star className="h-6 w-6 text-[#FFD93D] fill-current drop-shadow" />
      </div>
      <div
        className="absolute top-64 right-[20%] opacity-80 animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      >
        <Star className="h-8 w-8 text-[#FF4D4D] fill-current drop-shadow" />
      </div>
      <div
        className="absolute top-[52%] right-[25%] opacity-75 animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      >
        <Star className="h-7 w-7 text-[#3B82F6] fill-current drop-shadow" />
      </div>
      <div
        className="absolute bottom-44 right-[35%] opacity-70 animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      >
        <Star className="h-6 w-6 text-[#FFD93D] fill-current drop-shadow" />
      </div>

      {/* Floating Musical Notes & Sparkles */}
      <div
        className="absolute top-1/3 left-[15%] opacity-60 animate-float"
        style={{ animationDuration: "7s", animationDelay: "0.5s" }}
      >
        <Music className="h-7 w-7 text-[#FF4D4D] drop-shadow" />
      </div>
      <div
        className="absolute top-[60%] right-[14%] opacity-60 animate-float"
        style={{ animationDuration: "9s", animationDelay: "1s" }}
      >
        <Sparkles className="h-8 w-8 text-[#FFD93D] drop-shadow" />
      </div>
      <div
        className="absolute bottom-1/4 right-[15%] opacity-60 animate-float-reverse"
        style={{ animationDuration: "10s", animationDelay: "1.5s" }}
      >
        <Music className="h-8 w-8 text-[#3B82F6] drop-shadow" />
      </div>
    </div>
  );
};
