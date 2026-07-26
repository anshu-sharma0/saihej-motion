"use client";

import React from "react";
import {
  ShieldCheck,
  GraduationCap,
  Heart,
  Music,
  Palette,
  Cat,
  Languages,
  Lightbulb,
  Sparkles,
} from "lucide-react";

export const WhyParentsLoveUsSection: React.FC = () => {
  const reasons = [
    {
      title: "Safe Content",
      description:
        "100% ad-screened, age-appropriate themes without any scary elements or inappropriate language.",
      icon: ShieldCheck,
      badge: "Parent Approved",
      color: "from-[#FF4D4D] to-[#FF6B6B]",
      accent: "bg-[#FF4D4D]/10 text-[#FF4D4D]",
    },
    {
      title: "Educational Learning",
      description:
        "Every rhyme and cartoon is designed around early childhood curriculum goals and milestones.",
      icon: GraduationCap,
      badge: "Preschool Ready",
      color: "from-[#3B82F6] to-[#60A5FA]",
      accent: "bg-[#3B82F6]/10 text-[#3B82F6]",
    },
    {
      title: "Positive Values",
      description:
        "Stories emphasizing kindness, sharing, respecting elders, and helping family and friends.",
      icon: Heart,
      badge: "Moral Stories",
      color: "from-[#22C55E] to-[#4ADE80]",
      accent: "bg-[#22C55E]/10 text-[#22C55E]",
    },
    {
      title: "Interactive Songs",
      description:
        "Catchy melodies and repetitive lyrics that encourage toddlers to sing, clap, and dance along.",
      icon: Music,
      badge: "Sing-Along",
      color: "from-[#F59E0B] to-[#FFD93D]",
      accent: "bg-[#F59E0B]/15 text-[#D97706]",
    },
    {
      title: "Color Recognition",
      description:
        "Vibrant Disney-Pixar style palettes that help young children identify primary & pastel colours.",
      icon: Palette,
      badge: "Visual Art",
      color: "from-[#EC4899] to-[#F472B6]",
      accent: "bg-[#EC4899]/10 text-[#EC4899]",
    },
    {
      title: "Animal Learning",
      description:
        "Introduce kids to domestic and wild animals, their sounds, and natural habitats through fun characters.",
      icon: Cat,
      badge: "Animal World",
      color: "from-[#8B5CF6] to-[#A78BFA]",
      accent: "bg-[#8B5CF6]/10 text-[#8B5CF6]",
    },
    {
      title: "Hindi Language Learning",
      description:
        "Clear, beautifully enunciated Hindi lyrics that help children develop strong mother-tongue vocabulary.",
      icon: Languages,
      badge: "Hindi Culture",
      color: "from-[#14B8A6] to-[#2DD4BF]",
      accent: "bg-[#14B8A6]/10 text-[#0D9488]",
    },
    {
      title: "Problem Solving",
      description:
        "Chintu and his friends solve gentle mysteries and puzzles, fostering critical thinking.",
      icon: Lightbulb,
      badge: "Smart Kids",
      color: "from-[#F97316] to-[#FB923C]",
      accent: "bg-[#F97316]/10 text-[#EA580C]",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FFFDF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FF4D4D]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FF4D4D] mb-3">
            <Heart className="h-4 w-4 fill-current" />
            <span>Parent Testimonial &amp; Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-tight">
            Why Parents <span className="text-[#FF4D4D]">Love</span> Us
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 font-medium leading-relaxed">
            We know you care deeply about what your children watch. Here is how our content
            supports safe, enriching, and joyful development.
          </p>
        </div>

        {/* 8 Large Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-6 xl:gap-8">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative flex flex-col rounded-3xl bg-white p-5 sm:p-6 lg:p-6 xl:p-7 border-2 border-zinc-200/80 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#FF4D4D]"
              >
                {/* Top Badge */}
                <span className="self-start rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-zinc-600 mb-4">
                  {reason.badge}
                </span>

                <div className="flex items-center mb-2 gap-3 sm:gap-4">
                  {/* Icon wrapper */}
                  <div
                    className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${reason.accent} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <IconComponent className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-extrabold text-[#1F2937] group-hover:text-[#FF4D4D] transition-colors">
                    {reason.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm lg:text-sm xl:text-base text-zinc-600 font-medium leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
