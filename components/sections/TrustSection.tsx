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
    <section className="relative py-16 md:py-24 bg-[#FFFDF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FF4D4D]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FF4D4D] mb-3">
            <CheckCircle2 className="h-4 w-4" />
            <span>Why Parents &amp; Families Trust Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            Designed for <span className="text-[#3B82F6]">Safe</span>,{" "}
            <span className="text-[#FF4D4D]">Joyful</span> &amp;{" "}
            <span className="text-[#22C55E]">Educational</span> Screen Time
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 font-medium">
            We combine high-end 3D animation with early childhood development principles
            so your toddlers learn while having fun!
          </p>
        </div>

        {/* Premium Colourful Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className={`group relative flex flex-col rounded-3xl bg-white p-7 border-2 ${item.borderColor} shadow-lg transition-all duration-300 card-hover-glow`}
              >
                {/* Checkmark badge */}
                <div className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFDF7] shadow-sm border border-zinc-200">
                  <span className="text-xs font-black text-[#22C55E]">✓</span>
                </div>
                <div className="flex items-center mb-4 gap-4">
                  {/* Icon wrapper */}
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bgColor} ${item.textColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <IconComponent className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#1F2937] group-hover:text-[#FF4D4D] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-zinc-600 font-medium leading-relaxed">
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
