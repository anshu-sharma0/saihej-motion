"use client";

import React from "react";
import { Play, Clock, Eye, Calendar, Sparkles } from "lucide-react";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import { VideoModalData } from "../modals/VideoPlayerModal";
import { Carousel } from "../ui/Carousel";
import { useYouTube } from "../../context/YouTubeContext";

interface FeaturedVideosSectionProps {
  onSelectVideo: (video: VideoModalData) => void;
}

export const FeaturedVideosSection: React.FC<FeaturedVideosSectionProps> = ({
  onSelectVideo,
}) => {
  const { featuredVideos } = useYouTube();

  return (
    <section
      id="featured-videos"
      className="relative py-8 lg:py-14 bg-gradient-playground-blue overflow-hidden"
    >
      {/* Decorative Ambient Background Orbs */}
      <div className="absolute top-1/4 right-[10%] w-80 h-80 rounded-full bg-[#3B82F6]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[10%] w-72 h-72 rounded-full bg-[#FFD93D]/25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#FF4D4D]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading - Centered */}
        <div className="mb-10 sm:mb-14 lg:mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFD93D]/30 to-[#FF4D4D]/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#D97706] mb-3 ring-1 ring-[#D97706]/30 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#D97706]" />
            <span>Watch • Sing • Enjoy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-tight">
            Popular <span className="text-[#FF4D4D]">Videos</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Our most loved 4K Hindi nursery rhymes and cartoon adventures!
          </p>
        </div>

        {/* 6 Premium Featured Video Cards Carousel across all screens */}
        <Carousel
          desktopMode="carousel"
          desktopSlidesPerView={3}
          mobileSlidesPerView={1.15}
          tabletSlidesPerView={2.15}
          gapPx={24}
        >
          {featuredVideos.map((video) => (
            <div
              key={video.title}
              onClick={() => onSelectVideo(video)}
              className="group relative flex flex-col h-full rounded-3xl card-glass-playground overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#3B82F6]"
            >
              {/* Rainbow Card Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF4D4D] via-[#FFD93D] to-[#3B82F6] z-10" />

              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video w-full bg-zinc-900">
                {video.thumbnailUrl ? (
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <PlaceholderImage
                    category="video"
                    title={video.title}
                    alt={`${video.category || "Video"} • 4K Hindi Rhyme`}
                    badge={video.category}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-110 !rounded-none"
                  />
                )}

                {/* Duration Tag */}
                <div className="absolute bottom-3 right-3 rounded-lg bg-black/80 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-white flex items-center gap-1 shadow-md">
                  <Clock className="h-3 w-3" />
                  <span>{video.duration}</span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#FF4D4D] text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-7 w-7 sm:h-8 sm:w-8 fill-current ml-1" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-grow p-5 sm:p-6 lg:p-7">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-500 mb-2">
                  <span className="flex items-center gap-1 text-[#3B82F6]">
                    <Eye className="h-3.5 w-3.5" />
                    <span>{video.views} views</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{video.uploadDate}</span>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#1F2937] group-hover:text-[#FF4D4D] transition-colors line-clamp-1 mb-2">
                  {video.title}
                </h3>

                <p className="text-xs sm:text-sm lg:text-base text-zinc-600 line-clamp-2 mb-4 leading-relaxed">
                  {video.description}
                </p>

                {/* Play CTA footer */}
                <div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-extrabold text-[#FF4D4D]">
                  <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    ▶ Watch Video Now
                  </span>
                  <span className="rounded-full bg-[#FF4D4D]/10 px-2.5 py-0.5 text-[#FF4D4D]">
                    4K
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* "View All Videos" Button – Centered below the grid */}
        <div className="mt-10 sm:mt-12 lg:mt-14 flex justify-center">
          <a
            href="https://www.youtube.com/@SaihejMotion/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF4D4D] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            <span>View All Videos</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};