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
      className="relative w-full aspect-[864/1821] md:aspect-auto md:min-h-[75vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden"
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
        {/* Mobile Banner Image */}
        <Image
          src="/mobBanner.png"
          fill
          priority
          quality={100}
          alt="Saihej Motion Mobile Hero Banner"
          className="block md:hidden object-cover object-top"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0F1123]/40 to-[#0F1123]/80" />
        {/* Ambient bottom transition wash into playground UI */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FFFDF7] via-[#FFD93D]/20 to-transparent pointer-events-none z-10" />
      </div>

      {/* Hero Action Buttons (Subscribe Now & Watch Videos) */}
      <div className="absolute bottom-36 md:bottom-32 lg:bottom-28 left-1/2 -translate-x-1/2 z-30 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full px-4">
        <button
          onClick={handleSubscribe}
          className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF0000] via-[#FF3333] to-[#FF0000] px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-extrabold text-white shadow-[0_8px_30px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(255,0,0,0.7)] active:scale-95 cursor-pointer border-2 border-white/30"
        >
          <span>Subscribe Now</span>
        </button>
      </div>

      {/* Floating Live YouTube Stats Bar with Rainbow Glow */}
      <div className="absolute bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 sm:px-6 py-2.5 rounded-full bg-[#0F1123]/85 backdrop-blur-xl border-2 border-[#FFD93D]/60 shadow-[0_0_35px_rgba(255,217,61,0.35)] hover:scale-105 transition-all duration-300">
        <span className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-white">
          <span>❤️</span>
          <span className="text-[#FFD93D]">{stats.subscriberCount}</span>
          <span>Subscribers</span>
        </span>
        <span className="hidden sm:inline text-white/40">•</span>
        <span className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-white">
          <span>🎥</span>
          <span className="text-sky-400">{stats.videoCount}</span>
          <span>4K Videos</span>
        </span>
        <span className="hidden sm:inline text-white/40">•</span>
        <span className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-white">
          <span>👀</span>
          <span className="text-green-400">{stats.viewCount}</span>
          <span>Views</span>
        </span>
      </div>

      {/* Curved Section Divider transitioning to white/cream background */}
      <SectionDivider position="bottom" color="#FFFDF7" variant="curved" />
    </section>
  );
};
