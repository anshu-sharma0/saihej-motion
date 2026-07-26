"use client";

import React from "react";
import { Sparkles, Music, Heart, Star, Smile, Award } from "lucide-react";
import { PlaceholderImage } from "../ui/PlaceholderImage";

interface ChintuSectionProps {
  onExplore?: () => void;
}

export const ChintuSection: React.FC<ChintuSectionProps> = ({ onExplore }) => {
  const handleExplore = () => {
    if (onExplore) {
      onExplore();
    } else {
      const el = document.getElementById("playlists");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="chintu"
      className="relative py-20 md:py-28 bg-gradient-to-br from-[#FF4D4D] via-[#FF6B6B] to-[#FF8787] text-white overflow-hidden"
    >
      {/* Playful animated background stars and circles */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-10 left-[10%] h-64 w-64 rounded-full bg-[#FFD93D] blur-3xl" />
        <div className="absolute bottom-10 right-[10%] h-80 w-80 rounded-full bg-[#3B82F6] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
          {/* Left / Character Illustration Placeholder */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative badge behind character */}
              <div className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-2 rounded-2xl bg-white text-[#1F2937] px-4 py-2 font-extrabold text-xs shadow-2xl animate-bounce">
                <Star className="h-4 w-4 text-[#FFD93D] fill-current" />
                <span>👑 Kids&apos; Favourite Friend!</span>
              </div>

              {/* Large Chintu Character Artwork Placeholder */}
              <div className="relative z-10 rounded-3xl bg-white/10 backdrop-blur-md p-3 border-4 border-white/40 shadow-2xl">
                <PlaceholderImage
                  category="chintu"
                  title="Chintu • Character Guide"
                  alt="Fun-loving cartoon friend teaching through songs & adventures"
                  aspectRatio="square"
                  className="!rounded-2xl"
                />
              </div>

              {/* Decorative card floating on bottom right */}
              <div className="absolute -bottom-6 -right-6 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl bg-[#FFFDF7] text-[#1F2937] px-5 py-3 shadow-2xl border-2 border-[#FFD93D]">
                <Smile className="h-6 w-6 text-[#22C55E]" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase text-[#FF4D4D]">
                    Safe Learning
                  </span>
                  <span className="text-sm font-black">50+ Animated Adventures</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right / Storytelling & Details */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FFD93D] mb-4">
              <Sparkles className="h-4 w-4 text-[#FFD93D]" />
              <span>Channel Character &amp; Guide</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-lg">
              Meet <span className="text-[#FFD93D]">Chintu!</span>
            </h2>

            <p className="text-lg sm:text-xl text-white/95 font-medium leading-relaxed mb-8">
              Chintu is your child&apos;s fun-loving cartoon friend who teaches children
              through songs, adventures and colourful stories! Whether he&apos;s exploring the
              jungle with monkey friends, counting stars in the sky, or singing classic Hindi
              nursery rhymes, Chintu turns every moment into a joyful learning discovery.
            </p>

            {/* Character Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              <div className="flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur-md px-4 py-3 border border-white/25">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFD93D] text-[#1F2937]">
                  <Music className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white/80">Melodic Memory</span>
                  <span className="text-sm font-extrabold text-white">Sings Hindi Rhymes</span>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur-md px-4 py-3 border border-white/25">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22C55E] text-white">
                  <Heart className="h-5 w-5 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white/80">Positive Values</span>
                  <span className="text-sm font-extrabold text-white">Teaches Good Manners</span>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur-md px-4 py-3 border border-white/25">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6] text-white">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white/80">Curiosity &amp; Wonder</span>
                  <span className="text-sm font-extrabold text-white">3D Cartoon Stories</span>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur-md px-4 py-3 border border-white/25">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFFDF7] text-[#1F2937]">
                  <Award className="h-5 w-5 text-[#FF4D4D]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white/80">Aged 2–8 Years</span>
                  <span className="text-sm font-extrabold text-white">Preschool Approved</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleExplore}
              className="btn-3d-yellow px-8 py-4 text-base md:text-lg flex items-center gap-3 shadow-xl cursor-pointer"
            >
              <span>Explore Chintu Adventures</span>
              <span className="text-sm">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
