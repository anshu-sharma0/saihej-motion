"use client";

import React from "react";
import { Sparkles, Star, Cloud, Music } from "lucide-react";
import confetti from "canvas-confetti";
import { SectionDivider } from "../ui/SectionDivider";

interface FinalCtaSectionProps {
  onSubscribe?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onSubscribe }) => {
  const handleSubscribe = () => {
    // Launch massive celebration confetti
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#FF4D4D", "#FFD93D", "#3B82F6", "#22C55E", "#EC4899", "#8B5CF6"],
    });

    if (onSubscribe) {
      onSubscribe();
    } else {
      window.open("https://www.youtube.com/@SaihejMotion?sub_confirmation=1", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="relative py-8 md:py-18 overflow-hidden text-white bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1E40AF]">
      {/* Curved Top Section Divider */}
      <SectionDivider position="top" color="#FFFDF7" variant="clouds" />

      {/* RAINBOW & FLOATING SHAPES BACKGROUND ARTWORK */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        {/* Rainbow Arch */}
        <svg
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-auto"
          viewBox="0 0 1000 500"
          fill="none"
        >
          <path d="M 50 500 A 450 450 0 0 1 950 500" stroke="#FF4D4D" strokeWidth="24" opacity="0.8" />
          <path d="M 80 500 A 420 420 0 0 1 920 500" stroke="#FFD93D" strokeWidth="24" opacity="0.8" />
          <path d="M 110 500 A 390 390 0 0 1 890 500" stroke="#22C55E" strokeWidth="24" opacity="0.8" />
          <path d="M 140 500 A 360 360 0 0 1 860 500" stroke="#FF8A65" strokeWidth="24" opacity="0.8" />
        </svg>

        {/* Floating Clouds */}
        <div className="absolute top-16 left-[8%] animate-float">
          <Cloud className="h-24 w-24 text-white fill-current" />
        </div>
        <div className="absolute bottom-16 right-[8%] animate-float-reverse">
          <Cloud className="h-32 w-32 text-white fill-current" />
        </div>
        <div className="absolute top-28 right-[15%] animate-float">
          <Cloud className="h-20 w-20 text-[#FFD93D] fill-current" />
        </div>

        {/* Twinkling Stars */}
        <div className="absolute top-20 left-[25%] animate-pulse-glow">
          <Star className="h-8 w-8 text-[#FFD93D] fill-current" />
        </div>
        <div className="absolute bottom-24 left-[20%] animate-pulse-glow">
          <Star className="h-6 w-6 text-[#FFD93D] fill-current" />
        </div>
        <div className="absolute top-40 right-[25%] animate-pulse-glow">
          <Star className="h-10 w-10 text-[#FF4D4D] fill-current" />
        </div>

        {/* Musical Notes */}
        <div className="absolute bottom-1/3 left-[12%] animate-float-reverse">
          <Music className="h-10 w-10 text-[#FFD93D]" />
        </div>
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Celebration Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-5 py-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#FFD93D] mb-6 shadow-lg border border-white/30 animate-bounce">
          <Sparkles className="h-4 w-4" />
          <span>Join 1.16K+ Happy Families Worldwide</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-2xl">
          Ready for More <br />
          <span className="text-[#FFD93D]">Fun Learning?</span>
        </h2>

        {/* Text */}
        <p className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 font-medium leading-relaxed mb-10 drop-shadow-md">
          Join thousands of families enjoying fun-filled Hindi nursery rhymes, educational
          songs and Chintu&apos;s exciting adventures every week.
        </p>

        {/* Large Subscribe Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <button
            onClick={handleSubscribe}
            className="btn-3d-red w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 text-base sm:text-lg md:text-xl lg:text-2xl font-black flex items-center justify-center gap-3 cursor-pointer shadow-2xl transition-transform hover:scale-105"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#FF4D4D] text-sm">
              🔴
            </span>
            <span>Subscribe on YouTube</span>
          </button>
        </div>

        {/* Supporting trust badges below CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-extrabold text-white/90">
          <span>✓ 100% Free &amp; Safe</span>
          <span>✓ New 4K Videos Weekly</span>
          <span>✓ Loved by Preschool Kids</span>
        </div>
      </div>
    </section>
  );
};
