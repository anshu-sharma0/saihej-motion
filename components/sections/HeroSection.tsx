"use client";

import React from "react";
import confetti from "canvas-confetti";
import { SectionDivider } from "../ui/SectionDivider";
import Image from "next/image";
import { useYouTube } from "../../context/YouTubeContext";

interface HeroSectionProps {
  onSubscribe?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSubscribe,
}) => {
  const { stats } = useYouTube();
  const handleSubscribe = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ["#FF4D4D", "#FFD93D", "#3B82F6", "#22C55E"],
    });
    if (onSubscribe) {
      onSubscribe();
    } else {
      window.open("https://www.youtube.com/@SaihejMotion?sub_confirmation=1", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full aspect-[864/1821] sm:aspect-[4/3] md:aspect-auto md:min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* FULL-WIDTH EDGE-TO-EDGE HERO ILLUSTRATION PLACEHOLDER */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Banner Image */}
        <Image
          src="/banner.png"
          fill
          priority
          quality={100}
          alt="Saihej Motion Hero Banner"
          className="hidden md:block object-cover object-center"
        />
        {/* Tablet Banner Image */}
        <Image
          src="/tabBanner.png"
          fill
          priority
          quality={100}
          alt="Saihej Motion Tablet Hero Banner"
          className="hidden sm:block md:hidden object-cover object-top"
        />
        {/* Mobile Banner Image */}
        <Image
          src="/mobBanner.png"
          fill
          priority
          quality={100}
          alt="Saihej Motion Mobile Hero Banner"
          className="block sm:hidden object-cover object-top"
        />
        {/* Top subtle vignette for header readability */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0F1123]/65 via-[#0F1123]/20 to-transparent pointer-events-none z-10" />
        {/* Ambient bottom transition wash for UI clarity */}
        <div className="absolute inset-x-0 bottom-0 h-72 sm:h-80 bg-gradient-to-t from-[#0F1123]/95 via-[#0F1123]/50 to-transparent pointer-events-none z-10" />
        {/* Final cream blend wash into playground background */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FFFDF7] via-[#FFFDF7]/60 to-transparent pointer-events-none z-20" />
      </div>

      {/* Bottom Interactive Zone: Badges, Action Buttons & YouTube Stats Bar */}
      <div className="absolute bottom-42 md:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center justify-center gap-3.5 sm:gap-4 md:gap-5 w-full max-w-4xl px-3 sm:px-4">
        {/* Hero Action Buttons (Subscribe Now & Explore Videos) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
          <button
            onClick={handleSubscribe}
            className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF0000] via-[#FF3333] to-[#FF0000] px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-extrabold text-white shadow-[0_8px_30px_rgba(255,0,0,0.55)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(255,0,0,0.8)] active:scale-95 cursor-pointer border-2 border-white/30"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#FF0000] shadow-sm transition-transform duration-300 group-hover:rotate-12 group-hover:scale-11">
              ▶
            </span>
            <span>Subscribe Now</span>
          </button>
        </div>

        {/* Floating Live YouTube Stats Bar - Exactly ONE LINE on all screen sizes */}
        <div className="flex flex-row items-center justify-center whitespace-nowrap gap-2 sm:gap-4 md:gap-6 px-3.5 sm:px-6 md:px-7 py-2 sm:py-2.5 rounded-full bg-[#0F1123]/85 backdrop-blur-2xl border-2 border-[#FFD93D]/60 shadow-[0_0_35px_rgba(255,217,61,0.35)] hover:scale-105 hover:border-[#FFD93D] hover:shadow-[0_0_45px_rgba(255,217,61,0.5)] transition-all duration-300 max-w-[96vw] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* Subscribers */}
          <span className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs md:text-sm font-black text-white">
            <span className="text-sm sm:text-base">❤️</span>
            <span className="text-[#FFD93D] font-extrabold">{stats.subscriberCount}</span>
            <span className="text-white/90">
              <span className="inline sm:hidden">Subs</span>
              <span className="hidden sm:inline">Subscribers</span>
            </span>
          </span>

          <span className="text-white/35 sm:text-white/40 font-bold select-none">•</span>

          {/* Videos */}
          <span className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs md:text-sm font-black text-white">
            <span className="text-sm sm:text-base">🎥</span>
            <span className="text-sky-400 font-extrabold">{stats.videoCount}</span>
            <span className="text-white/90">
              <span className="inline sm:hidden">Videos</span>
              <span className="hidden sm:inline">4K Videos</span>
            </span>
          </span>

          <span className="text-white/35 sm:text-white/40 font-bold select-none">•</span>

          {/* Views */}
          <span className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs md:text-sm font-black text-white">
            <span className="text-sm sm:text-base">👀</span>
            <span className="text-green-400 font-extrabold">{stats.viewCount}</span>
            <span>Views</span>
          </span>
        </div>
      </div>

      {/* Curved Section Divider transitioning to white/cream background */}
      <SectionDivider position="bottom" color="#FFFDF7" variant="curved" />
    </section>
  );
};
