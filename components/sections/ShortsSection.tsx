"use client";

import React from "react";
import { Play, Sparkles, Eye } from "lucide-react";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import { VideoModalData } from "../modals/VideoPlayerModal";
import { Carousel } from "../ui/Carousel";
import { useYouTube } from "../../context/YouTubeContext";

interface ShortsSectionProps {
  onSelectShort?: (short: VideoModalData) => void;
}

export const ShortsSection: React.FC<ShortsSectionProps> = ({ onSelectShort }) => {
  const { shorts } = useYouTube();

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FFFDF7] via-[#FFF5F0] to-[#FFFDF7] overflow-hidden">
      {/* Decorative floating blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#FF4D4D]/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FF4D4D]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FF4D4D] mb-3 ring-1 ring-[#FF4D4D]/20">
            <Sparkles className="h-4 w-4" />
            <span>Quick 60‑Second Learning</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-tight">
            Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#FF8A8A]">Shorts</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 font-medium leading-relaxed">
            Bite-sized 4K Hindi nursery rhyme clips and fun dance challenges for instant smiles!
          </p>
        </div>

        {/* 6 Vertical Shorts Cards Carousel across all screens */}
        <Carousel
          desktopMode="carousel"
          desktopSlidesPerView={4.2}
          mobileSlidesPerView={1.5}
          tabletSlidesPerView={3.2}
          gapPx={16}
        >
          {shorts.map((short) => (
            <div
              key={short.title}
              onClick={() => onSelectShort && onSelectShort(short)}
              className="group relative flex flex-col h-full rounded-3xl bg-white border-2 border-zinc-200/80 shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#FF4D4D]/20 hover:border-[#FF4D4D]"
            >
              {/* Vertical 9:16 Thumbnail */}
              <div className="relative overflow-hidden aspect-[9/16] w-full bg-zinc-900">
                {short.thumbnailUrl ? (
                  <img
                    src={short.thumbnailUrl}
                    alt={short.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <PlaceholderImage
                    category="video"
                    title={short.title}
                    alt={`${short.category || "Shorts"} • Shorts`}
                    aspectRatio="vertical"
                    badge="SHORTS"
                    className="h-full w-full transition-transform duration-500 group-hover:scale-110 !rounded-none"
                  />
                )}

                {/* Duration badge */}
                <div className="absolute top-3 right-3 rounded-md bg-black/70 backdrop-blur-md px-2 py-0.5 text-[10px] font-extrabold text-white">
                  {short.duration}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF4D4D] text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom overlay with title and views */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3.5 text-white">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#FFD93D] mb-1">
                    <Eye className="h-3 w-3" />
                    <span>{short.views} views</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold leading-tight text-white line-clamp-2">
                    {short.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* "Watch More Shorts" Button - Centered */}
        <div className="mt-10 sm:mt-12 lg:mt-14 flex justify-center">
          <a
            href="https://www.youtube.com/@SaihejMotion/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF4D4D] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            <span>Watch More Shorts</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};