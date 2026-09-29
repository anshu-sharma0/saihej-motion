"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

export const RecentFestivalsSection = () => {
  return (
    <section id="recent-festivals" className="relative w-full py-8 sm:py-12 px-4 sm:px-6 bg-[#FFFDF7] overflow-hidden">
      {/* Background Decorative Festive Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#FFD93D]/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#FF4D4D]/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col gap-5 sm:gap-6 z-10">
        {/* Section Header & Interactive Filter Selector */}
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linear-to-r from-[#FFD93D]/20 via-[#FF4D4D]/15 to-[#3B82F6]/20 border border-[#FFD93D]/60 text-xs sm:text-sm font-black text-[#B45309] mb-1.5 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#D97706] animate-pulse" />
            <span>FESTIVAL CELEBRATIONS & SPECIALS</span>
          </div>
        </div>

        {/* MAIN FULL-IMAGE 3:1 ASPECT RATIO HERO BANNER CONTAINER */}
        <div
          // onClick={handlePlayVideo}
          className="relative w-full aspect-3/1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.18)] border-4 border-[#FFD93D] group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(255,217,61,0.4)] hover:border-[#FFC107]"
        >
          {/* Full Banner Image */}
          <Image
            src={"/Dussehra.png"}
            alt={"Dussehra"}
            fill
            priority
            quality={100}
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />

          {/* Subtle Bottom linear Wash for text overlay readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

          {/* Floating Top Badge */}
          <div className="absolute top-3 sm:top-5 left-3 sm:left-6 z-10">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#FFD93D] shadow-md">
              FESTIVAL SPECIAL
            </span>
          </div>

          {/* Center Play Button Overlay */}
          {/* <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-[0_0_25px_rgba(255,0,0,0.8)] group-hover:scale-115 transition-transform duration-300 border-2 border-white/80">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-0.5" />
            </div>
          </div> */}

          {/* Bottom Info & Title Bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 z-10 flex items-end justify-between gap-4">
            <div className="max-w-3xl">
              <h3 className="text-sm sm:text-2xl md:text-3xl font-black text-white drop-shadow-md line-clamp-1">
                Dussehra & Diwali Specials with Chintu!
              </h3>
              <p className="hidden sm:block text-xs sm:text-sm font-semibold text-white/90 drop-shadow-sm mt-0.5 line-clamp-1">
                Bright Lights, Fireworks & Non-Stop 4K Festival Songs for Toddlers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
