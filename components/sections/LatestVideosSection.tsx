"use client";

import React from "react";
import { Clock, Eye, Calendar, Play, Sparkles } from "lucide-react";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import { VideoModalData } from "../modals/VideoPlayerModal";
import { Carousel } from "../ui/Carousel";
import { useYouTube } from "../../context/YouTubeContext";

interface LatestVideosSectionProps {
  onSelectVideo?: (video: VideoModalData) => void;
}

export const LatestVideosSection: React.FC<LatestVideosSectionProps> = ({
  onSelectVideo,
}) => {
  const { latestVideos } = useYouTube();

  return (
    <section className="relative py-8 lg:py-14 bg-gradient-playground-warm overflow-hidden">
      {/* Decorative Ambient Background Orbs */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-[#FF4D4D]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-[#3B82F6]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-8 lg:mb-12 flex justify-center flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF4D4D]/15 to-[#3B82F6]/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FF4D4D] mb-3 ring-1 ring-[#FF4D4D]/20 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#FF4D4D]" />
            <span>New Videos Every Week</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-tight">
            Latest <span className="text-[#3B82F6]">Uploads</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 text-center font-medium max-w-2xl leading-relaxed">
            Fresh 4K Hindi nursery rhymes and cartoon adventures uploaded every single week!
          </p>
        </div>

        {/* Reusable Carousel Viewport (Carousel mode on Mobile, Tablet, and Desktop) */}
        <Carousel
          desktopMode="carousel"
          desktopSlidesPerView={3}
          mobileSlidesPerView={1.15}
          tabletSlidesPerView={2.15}
          gapPx={24}
        >
          {latestVideos.map((video) => (
            <div
              key={video.title}
              onClick={() => onSelectVideo && onSelectVideo(video)}
              className="group relative flex flex-col h-full rounded-3xl card-glass-playground overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#3B82F6]"
            >
              {/* Rainbow Card Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#3B82F6] via-[#FFD93D] to-[#FF4D4D] z-10" />

              {/* Thumbnail Placeholder */}
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
                    alt={`${video.category || "Video"} • New Upload`}
                    badge={video.category}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-110 !rounded-none"
                  />
                )}

                {/* Duration */}
                <div className="absolute bottom-3 right-3 rounded-lg bg-black/80 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-white flex items-center gap-1 shadow-md">
                  <Clock className="h-3 w-3" />
                  <span>{video.duration}</span>
                </div>

                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#3B82F6] text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-7 w-7 sm:h-8 sm:w-8 fill-current ml-1" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow p-5 sm:p-6 lg:p-7">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-500 mb-2">
                  <span className="flex items-center gap-1 text-[#22C55E]">
                    <Eye className="h-3.5 w-3.5" />
                    <span>{video.views} views</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{video.uploadDate}</span>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#1F2937] group-hover:text-[#3B82F6] transition-colors line-clamp-1 mb-2">
                  {video.title}
                </h3>

                <p className="text-xs sm:text-sm lg:text-base text-zinc-600 line-clamp-2 leading-relaxed">
                  {video.description}
                </p>

                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-extrabold text-[#3B82F6]">
                  <span>▶ Watch Preview</span>
                  <span>4K HD</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
