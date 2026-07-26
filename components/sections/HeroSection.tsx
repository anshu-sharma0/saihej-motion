"use client";

import React from "react";
import confetti from "canvas-confetti";
import { SectionDivider } from "../ui/SectionDivider";
import Image from "next/image";
import { useYouTube } from "../../context/YouTubeContext";

interface HeroSectionProps {
  onWatchLatest?: () => void;
  onSubscribe?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onWatchLatest,
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

  const handleScrollToVideos = () => {
    if (onWatchLatest) {
      onWatchLatest();
    } else {
      const el = document.getElementById("featured-videos");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full aspect-[864/1821] md:aspect-auto md:min-h-screen flex flex-col items-center justify-center overflow-hidden"
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
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0F1123] via-[#0F1123]/60 to-[#0F1123]/70" /> */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0F1123]/40 to-[#0F1123]/80" />
      </div>

      {/* CENTERED HERO CONTENT */}
      {/* <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col items-center justify-between my-auto">
        <div className="mb-8 space-y-2">
          <p className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.35em] text-yellow-300 drop-shadow-lg">
            Hindi Nursery Rhymes
          </p>

          <h1 className="select-none leading-[0.82] tracking-tight">
            <span
              className="
      block
      text-[3.5rem]
      sm:text-[5.5rem]
      md:text-[7rem]
      lg:text-[8rem]
      xl:text-[9rem]
      font-black
      uppercase
      bg-gradient-to-b
      from-sky-200
      via-cyan-300
      to-sky-600
      bg-clip-text
      text-transparent
      drop-shadow-[0_8px_30px_rgba(0,0,0,.45)]
    "
              style={{
                WebkitTextStroke: "6px #ffffff",
                textShadow: `
      0 2px 0 #ffffff,
      0 4px 0 #ffffff,
      0 6px 0 #4f46e5,
      0 10px 18px rgba(0,0,0,.35)
    `,
              }}
            >
              SAIHEJ
            </span>

            <span
              className="
      -mt-3
      block
      text-[3.5rem]
      sm:text-[5.5rem]
      md:text-[7rem]
      lg:text-[8rem]
      xl:text-[9rem]
      font-black
      uppercase
      bg-gradient-to-b
      from-yellow-100
      via-yellow-300
      to-orange-500
      bg-clip-text
      text-transparent
      drop-shadow-[0_10px_35px_rgba(0,0,0,.45)]
    "
              style={{
                WebkitTextStroke: "6px #ffffff",
                textShadow: `
      0 2px 0 #ffffff,
      0 4px 0 #ffffff,
      0 6px 0 #2563eb,
      0 12px 20px rgba(0,0,0,.4)
    `,
              }}
            >
              MOTION
            </span>
          </h1>

          <div className="inline-flex rounded-full bg-gradient-to-r from-red-500 to-red-600 px-6 py-2 shadow-2xl">
            <span className="text-base sm:text-lg md:text-xl font-black text-white tracking-wide">
              Hindi Nursery Rhymes
            </span>
          </div>
        </div>

        <p className="mx-auto mb-10 max-w-3xl text-base sm:text-lg md:text-xl leading-8 font-medium text-white/95 drop-shadow-xl">
          Welcome to <span className="font-extrabold text-yellow-300">Saihej Motion</span>,
          where learning becomes an exciting adventure! Discover colourful
          <span className="font-semibold text-sky-300"> 4K Hindi Nursery Rhymes</span>,
          fun-filled cartoon stories, educational songs, alphabet & number learning,
          and lovable characters like <span className="font-semibold text-yellow-300">Chintu</span>.
          Every video is thoughtfully created to help toddlers and preschoolers
          <span className="font-semibold text-green-300"> learn, sing, dance, imagine, and grow</span>
          in a safe, joyful, and entertaining world.
        </p>

        <div className="mt-10 flex sm:hidden flex-wrap items-center justify-center gap-2">
          <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-extrabold text-white">
            ❤️ 1.16K+ Subscribers
          </span>
          <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-extrabold text-white">
            🎥 252+ Videos
          </span>
          <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-extrabold text-white">
            👀 {stats.viewCount} Views
          </span>
        </div>
      </div> */}

      {/* Floating Live YouTube Stats Bar */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-30 flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 sm:px-6 py-2.5 rounded-full bg-[#0F1123]/75 backdrop-blur-xl border border-white/20 shadow-2xl">
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
    </section >
  );
};
