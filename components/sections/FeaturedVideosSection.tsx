"use client";

import React from "react";
import { Play, Clock, Eye, Calendar, Sparkles } from "lucide-react";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import { VideoModalData } from "../modals/VideoPlayerModal";

interface FeaturedVideosSectionProps {
  onSelectVideo: (video: VideoModalData) => void;
}

export const FeaturedVideosSection: React.FC<FeaturedVideosSectionProps> = ({
  onSelectVideo,
}) => {
  const popularVideos: VideoModalData[] = [
    {
      title: "Kalu Madari Aaya",
      duration: "2:45",
      views: "28.5K",
      uploadDate: "2 weeks ago",
      category: "Hindi Rhymes",
      description:
        "Join Chintu and his funny monkey friend in this classic 4K Hindi nursery rhyme Kalu Madari Aaya!",
    },
    {
      title: "Ek Mota Hathi",
      duration: "3:12",
      views: "34.2K",
      uploadDate: "1 month ago",
      category: "Animal Rhymes",
      description:
        "Watch the friendly elephant walk along the spider web in colourful Disney-style 3D animation!",
    },
    {
      title: "Gaiya Meri Gaiya",
      duration: "2:58",
      views: "19.8K",
      uploadDate: "3 weeks ago",
      category: "Hindi Nursery Rhymes",
      description:
        "A heartwarming song celebrating our lovely cows with gentle music and vibrant countryside scenes.",
    },
    {
      title: "Billi Mausi",
      duration: "2:20",
      views: "25.1K",
      uploadDate: "1 month ago",
      category: "Cartoon Stories",
      description:
        "Billi Mausi Billi Mausi kaho kahan se aayi ho! Sing along with the mischievous cat and mouse adventure.",
    },
    {
      title: "Machli Jal Ki Rani",
      duration: "2:50",
      views: "42.7K",
      uploadDate: "2 months ago",
      category: "Top Hindi Rhyme",
      description:
        "Our most popular underwater 3D animation! Machli Jal Ki Rani Hai, Jeevan Uska Paani Hai in 4K.",
    },
    {
      title: "Aloo Kachaloo",
      duration: "3:05",
      views: "31.4K",
      uploadDate: "3 weeks ago",
      category: "Fun Vegetable Song",
      description:
        "Aloo Kachaloo Beta Kahan Gaye They? Laugh and dance with happy vegetable characters in the garden!",
    },
  ];

  return (
    <section
      id="featured-videos"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FFFDF7] via-[#FFF9EB] to-[#FFFDF7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Centered */}
        <div className="mb-10 sm:mb-14 lg:mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD93D]/30 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#D97706] mb-3">
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

        {/* 6 Premium Featured Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {popularVideos.map((video) => (
            <div
              key={video.title}
              onClick={() => onSelectVideo(video)}
              className="group relative flex flex-col rounded-3xl bg-white border-2 border-zinc-200/80 shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#FF4D4D]"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video w-full bg-zinc-900">
                <PlaceholderImage
                  category="video"
                  title={video.title}
                  alt={`${video.category} • 4K Hindi Rhyme`}
                  badge={video.category}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-110 !rounded-none"
                />

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
        </div>

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