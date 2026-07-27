"use client";

import React from "react";
import { ShieldCheck, BookOpen, Calendar, Music, HeartHandshake, Sparkles, CheckCircle2 } from "lucide-react";

export const TrustSection: React.FC = () => {
  const trustItems = [
    {
      title: "Safe for Kids",
      description: "100% child-friendly themes with positive moral storytelling and joyful melodies.",
      icon: ShieldCheck,
      color: "from-[#FF4D4D] to-[#FF6B6B]",
      bgColor: "bg-[#FF4D4D]/10",
      textColor: "text-[#FF4D4D]",
      borderColor: "border-[#FF4D4D]/30",
    },
    {
      title: "Educational Content",
      description: "Teaches alphabet, numbers, Hindi vocabulary, colours, animals, and good habits.",
      icon: BookOpen,
      color: "from-[#3B82F6] to-[#60A5FA]",
      bgColor: "bg-[#3B82F6]/10",
      textColor: "text-[#3B82F6]",
      borderColor: "border-[#3B82F6]/30",
    },
    {
      title: "Weekly Uploads",
      description: "New 4K cartoon adventures and Hindi nursery rhymes released every week.",
      icon: Calendar,
      color: "from-[#22C55E] to-[#4ADE80]",
      bgColor: "bg-[#22C55E]/10",
      textColor: "text-[#22C55E]",
      borderColor: "border-[#22C55E]/30",
    },
    {
      title: "Hindi Rhymes",
      description: "Authentic cultural nursery rhymes helping kids connect with Hindi language & traditions.",
      icon: Music,
      color: "from-[#F59E0B] to-[#FFD93D]",
      bgColor: "bg-[#F59E0B]/15",
      textColor: "text-[#D97706]",
      borderColor: "border-[#F59E0B]/30",
    },
    {
      title: "Family Friendly",
      description: "Delightful music that parents, grandparents, and children love singing together.",
      icon: HeartHandshake,
      color: "from-[#EC4899] to-[#F472B6]",
      bgColor: "bg-[#EC4899]/10",
      textColor: "text-[#EC4899]",
      borderColor: "border-[#EC4899]/30",
    },
    {
      title: "4K Animation",
      description: "Disney-Pixar quality 3D character animation with rich, vibrant visual aesthetics.",
      icon: Sparkles,
      color: "from-[#8B5CF6] to-[#A78BFA]",
      bgColor: "bg-[#8B5CF6]/10",
      textColor: "text-[#8B5CF6]",
      borderColor: "border-[#8B5CF6]/30",
    },
  ];

  return (
    <section className="relative py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-[#FFFDF7] via-[#FFF9EB] through-[#EFF6FF]/60 to-[#FFF5F5]/60 overflow-hidden">
      {/* Decorative Floating Gradient Blur Orbs */}
      <div className="absolute top-10 left-[10%] w-72 h-72 rounded-full bg-[#FFD93D]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[15%] w-80 h-80 rounded-full bg-[#3B82F6]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-[5%] w-64 h-64 rounded-full bg-[#FF4D4D]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF4D4D]/15 to-[#FFD93D]/25 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FF4D4D] mb-3 ring-1 ring-[#FF4D4D]/20 shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-[#FF4D4D]" />
            <span>Why Parents &amp; Families Trust Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-tight">
            Designed for <span className="text-[#3B82F6]">Safe</span>,{" "}
            <span className="text-[#FF4D4D]">Joyful</span> &amp;{" "}
            <span className="text-[#22C55E]">Educational</span> Screen Time
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 font-medium leading-relaxed">
            We combine high-end 3D animation with early childhood development principles
            so your toddlers learn while having fun!
          </p>
        </div>

        {/* Premium Colourful Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {trustItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className={`group relative flex flex-col rounded-3xl bg-white p-4 lg:p-6 border-2 ${item.borderColor} shadow-lg transition-all duration-300 `}
              >
                {/* Rainbow Card Top Accent */}
                <div className={`absolute top-0 left-6 right-6 h-1.5 rounded-b-full bg-gradient-to-r ${item.color}`} />
                <div className="flex items-center mb-4 gap-3 sm:gap-4">
                  {/* Icon wrapper */}
                  <div
                    className={`flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl ${item.bgColor} ${item.textColor} transition-transform`}
                  >
                    <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#1F2937] group-hover:text-[#FF4D4D] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm lg:text-base text-zinc-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
