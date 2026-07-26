"use client";

import React, { useState } from "react";
import { Sparkles, Music, Play, Star, Video, Heart, Award, Smile } from "lucide-react";

export type PlaceholderCategory =
  | "hero"
  | "chintu"
  | "video"
  | "playlist"
  | "learning"
  | "community"
  | "avatar"
  | "animal";

interface PlaceholderImageProps {
  src?: string;
  alt?: string;
  title?: string;
  category?: PlaceholderCategory;
  aspectRatio?: "video" | "square" | "wide" | "hero" | "vertical";
  badge?: string;
  className?: string;
  accentColor?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  src,
  alt = "Saihej Motion Placeholder",
  title = "3D Animation Content",
  category = "video",
  aspectRatio = "video",
  badge,
  className = "",
  accentColor = "#FF4D4D",
}) => {
  const [imageError, setImageError] = useState(false);

  // If a real image src is provided and hasn't errored, render an img tag easily replaceable later
  if (src && !imageError) {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-zinc-100 ${className}`}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          onError={() => setImageError(true)}
        />
        {badge && (
          <span className="absolute top-3 left-3 rounded-full bg-[#FF4D4D] px-3 py-1 text-xs font-bold text-white shadow-md">
            {badge}
          </span>
        )}
      </div>
    );
  }

  // Aspect ratio class mapping
  const aspectClass =
    aspectRatio === "hero"
      ? "w-full h-full min-h-[520px] md:min-h-[640px]"
      : aspectRatio === "video"
      ? "aspect-video"
      : aspectRatio === "square"
      ? "aspect-square"
      : aspectRatio === "vertical"
      ? "aspect-[9/16]"
      : "aspect-[16/9]";

  // Render Disney-Pixar & Duolingo style colourful illustrations for each category
  if (category === "hero") {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#1b1c3a] via-[#241f5e] to-[#0f1123] ${aspectClass} ${className}`}
      >
        {/* Animated background stars and nebula */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-[#FF4D4D] blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#3B82F6] blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#FFD93D] blur-3xl opacity-50" />
        </div>

        {/* 3D Disney-Pixar style Chintu & Musical World SVG Artwork */}
        <svg
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Whimsical clouds */}
          <path
            d="M150 150 C 130 150, 110 170, 110 190 C 90 190, 70 210, 70 230 C 70 250, 90 270, 110 270 L 300 270 C 320 270, 340 250, 340 230 C 340 210, 320 190, 300 190 C 300 170, 280 150, 260 150 Z"
            fill="url(#cloudGrad1)"
          />
          <path
            d="M850 100 C 830 100, 810 120, 810 140 C 790 140, 770 160, 770 180 C 770 200, 790 220, 810 220 L 1050 220 C 1070 220, 1090 200, 1090 180 C 1090 160, 1070 140, 1050 140 C 1050 120, 1030 100, 1010 100 Z"
            fill="url(#cloudGrad1)"
          />
          {/* Rainbow arch */}
          <path
            d="M 200 600 A 400 400 0 0 1 1000 600"
            stroke="url(#rainbowGrad)"
            strokeWidth="36"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="cloudGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFD93D" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="rainbowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF4D4D" />
              <stop offset="33%" stopColor="#FFD93D" />
              <stop offset="66%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Hero Character & 3D Artwork Composition */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#FFD93D]">
            <Sparkles className="h-4 w-4 text-[#FFD93D] animate-spin" style={{ animationDuration: "8s" }} />
            <span>Disney-Pixar Style 3D Animation Placeholder</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-extrabold text-white max-w-lg drop-shadow-lg">
            {title}
          </h3>
          <p className="text-sm md:text-base text-zinc-300 mt-2 max-w-md">
            {alt} • 4K Hindi Rhymes & Educational Kids World
          </p>
        </div>
      </div>
    );
  }

  if (category === "chintu") {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-tr from-[#FF4D4D]/20 via-[#FFD93D]/30 to-[#3B82F6]/20 border-2 border-dashed border-[#FF4D4D]/40 p-6 ${aspectClass} ${className}`}
      >
        {/* Animated ambient glow */}
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#FF4D4D]/20 blur-2xl animate-pulse" />
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#FFD93D]/30 blur-2xl animate-pulse" />

        {/* Chintu 3D Cartoon Character Artwork */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative mb-4 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF4D4D] to-[#FFD93D] p-1.5 shadow-2xl transition-transform duration-500 hover:rotate-6 hover:scale-110">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#FFFDF7] text-center">
              {/* Custom SVG Chintu Avatar */}
              <svg className="h-28 w-28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hoodie cap */}
                <circle cx="50" cy="48" r="34" fill="#FF4D4D" />
                {/* Face */}
                <circle cx="50" cy="50" r="26" fill="#FFDBAC" />
                {/* Hair */}
                <path d="M 28 42 C 28 28, 72 28, 72 42 Z" fill="#3E2723" />
                {/* Cap peak */}
                <path d="M 32 32 Q 50 20 68 32 Q 50 36 32 32 Z" fill="#D32F2F" />
                {/* Happy eyes */}
                <circle cx="41" cy="48" r="3.5" fill="#1F2937" />
                <circle cx="59" cy="48" r="3.5" fill="#1F2937" />
                <circle cx="42" cy="47" r="1.2" fill="#FFFFFF" />
                <circle cx="60" cy="47" r="1.2" fill="#FFFFFF" />
                {/* Rosy cheeks */}
                <circle cx="34" cy="54" r="5" fill="#FF8A80" opacity="0.6" />
                <circle cx="66" cy="54" r="5" fill="#FF8A80" opacity="0.6" />
                {/* Happy wide smile */}
                <path d="M 40 58 Q 50 68 60 58" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
                {/* Stars floating */}
                <path d="M 16 28 L 19 35 L 26 35 L 20 39 L 22 46 L 16 42 L 10 46 L 12 39 L 6 35 L 13 35 Z" fill="#FFD93D" />
                <path d="M 80 25 L 82 30 L 87 30 L 83 33 L 85 38 L 80 35 L 75 38 L 77 33 L 73 30 L 78 30 Z" fill="#3B82F6" />
              </svg>
            </div>
            {/* Crown/Star Badge */}
            <div className="absolute -top-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFD93D] text-[#1F2937] shadow-lg">
              <Star className="h-5 w-5 fill-current" />
            </div>
          </div>
          <span className="rounded-full bg-[#FF4D4D] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
            Character Illustration
          </span>
          <h4 className="mt-2 text-xl font-bold text-[#1F2937]">{title}</h4>
          <p className="mt-1 max-w-xs text-xs font-medium text-zinc-600">{alt}</p>
        </div>
      </div>
    );
  }

  if (category === "learning") {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#22C55E]/15 via-[#3B82F6]/15 to-[#FFD93D]/25 border border-white/80 p-6 shadow-sm ${aspectClass} ${className}`}
      >
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Colorful 3D Alphabet/Number cubes illustration */}
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF4D4D] text-lg font-black text-white shadow-md transform -rotate-6">
              A
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFD93D] text-lg font-black text-[#1F2937] shadow-md transform translate-y-2">
              1
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3B82F6] text-lg font-black text-white shadow-md transform rotate-6">
              B
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22C55E] text-lg font-black text-white shadow-md transform -rotate-3">
              2
            </div>
          </div>
          <span className="rounded-full bg-[#22C55E] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
            Educational Illustration
          </span>
          <h4 className="mt-2 text-lg font-bold text-[#1F2937]">{title}</h4>
          <p className="mt-0.5 text-xs text-zinc-600">{alt}</p>
        </div>
      </div>
    );
  }

  if (category === "playlist") {
    return (
      <div
        className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1E40AF] p-6 text-white shadow-lg ${aspectClass} ${className}`}
      >
        {/* Stacked playlist cards decorative background */}
        <div className="absolute -top-6 -right-6 h-36 w-36 rounded-full bg-white/10 blur-xl" />
        <div className="absolute -bottom-6 -left-6 h-36 w-36 rounded-full bg-[#FFD93D]/20 blur-xl" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-[#FFD93D] shadow-inner transition-transform duration-300 group-hover:scale-110">
            <Video className="h-8 w-8 text-white" />
          </div>
          <span className="rounded-full bg-[#FFD93D] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1F2937] shadow-sm">
            Playlist Cover
          </span>
          <h4 className="mt-2 text-lg font-extrabold leading-tight text-white line-clamp-2">{title}</h4>
          <p className="mt-1 text-xs text-blue-100 line-clamp-1">{alt}</p>
        </div>

        {badge && (
          <div className="absolute top-3 right-3 rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {badge}
          </div>
        )}
      </div>
    );
  }

  // Default "video" or "animal" or general placeholder
  // Choose gradient based on first character of title to give vibrant variety
  const charCode = title.charCodeAt(0) || 65;
  const gradients = [
    "from-[#FF4D4D] via-[#FF6B6B] to-[#FF8787]",
    "from-[#3B82F6] via-[#60A5FA] to-[#93C5FD]",
    "from-[#F59E0B] via-[#FFD93D] to-[#FCD34D]",
    "from-[#22C55E] via-[#4ADE80] to-[#86EFAC]",
    "from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD]",
    "from-[#EC4899] via-[#F472B6] to-[#FBCFE8]",
  ];
  const bgGradient = gradients[charCode % gradients.length];

  return (
    <div
      className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${bgGradient} p-5 text-white shadow-md transition-all duration-300 ${aspectClass} ${className}`}
    >
      {/* Playful abstract shapes in background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="20" cy="20" r="15" fill="white" />
          <circle cx="85" cy="75" r="20" fill="white" />
          <path d="M 0 80 Q 50 30 100 80 L 100 100 L 0 100 Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Play Button Badge or Icon */}
        <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#FF4D4D]">
          <Play className="h-7 w-7 fill-current ml-0.5" />
        </div>

        <span className="mb-1 rounded-full bg-black/30 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
          4K Animation • Hindi Rhymes
        </span>
        <h4 className="text-base md:text-lg font-extrabold leading-tight text-white line-clamp-2 drop-shadow-sm">
          {title}
        </h4>
      </div>

      {/* Top Left Badge if provided */}
      {badge && (
        <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-extrabold text-[#1F2937] shadow-sm">
          {badge}
        </span>
      )}
    </div>
  );
};
