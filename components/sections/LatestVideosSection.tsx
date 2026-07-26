"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Eye, Calendar, Play, Sparkles } from "lucide-react";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import { VideoModalData } from "../modals/VideoPlayerModal";

interface LatestVideosSectionProps {
  onSelectVideo?: (video: VideoModalData) => void;
}

export const LatestVideosSection: React.FC<LatestVideosSectionProps> = ({
  onSelectVideo,
}) => {
  const latestVideos: VideoModalData[] = [
    {
      title: "Chintu's Birthday Surprise Song",
      duration: "3:30",
      views: "12.4K",
      uploadDate: "2 days ago",
      category: "New Upload",
      description: "Celebrate with Chintu and all his friends as they sing happy birthday in 4K!",
    },
    {
      title: "Lakdi Ki Kathi Kathi Pe Ghoda",
      duration: "2:55",
      views: "18.9K",
      uploadDate: "5 days ago",
      category: "Classic Rhyme",
      description: "The beloved wooden horse ride song brought to life with 3D Disney style animation.",
    },
    {
      title: "Nani Teri Morni Ko Mor Le Gaye",
      duration: "3:15",
      views: "21.6K",
      uploadDate: "1 week ago",
      category: "Hindi Nursery Rhyme",
      description: "Nani teri morni ko mor le gaye! A heartwarming and funny peacock adventure.",
    },
    {
      title: "Counting Stars 1 to 10 Song",
      duration: "2:40",
      views: "16.2K",
      uploadDate: "1 week ago",
      category: "Educational",
      description: "Look up at the night sky and learn to count from 1 to 10 with twinkling stars.",
    },
    {
      title: "Hathi Raja Kahan Chale",
      duration: "3:00",
      views: "24.1K",
      uploadDate: "2 weeks ago",
      category: "Animal Rhymes",
      description: "Hathi raja kahan chale? Watch Elephant King visit Chintu's house for delicious sweets!",
    },
    {
      title: "Chanda Mama Door Ke",
      duration: "3:25",
      views: "29.8K",
      uploadDate: "2 weeks ago",
      category: "Bedtime Rhyme",
      description: "Gentle lullaby for preschoolers featuring Chanda Mama in the starry sky.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, latestVideos.length - 3) : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= latestVideos.length - 3 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FFFDF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 lg:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FF4D4D]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FF4D4D] mb-3">
              <Sparkles className="h-4 w-4" />
              <span>New Videos Every Week</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-tight">
              Latest <span className="text-[#3B82F6]">Uploads</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 font-medium max-w-2xl leading-relaxed">
              Fresh 4K Hindi nursery rhymes and cartoon adventures uploaded every single week!
            </p>
          </div>

          {/* Carousel Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 self-end md:self-auto">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white border-2 border-zinc-200 text-[#1F2937] hover:border-[#FF4D4D] hover:text-[#FF4D4D] transition-colors shadow-md cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white border-2 border-zinc-200 text-[#1F2937] hover:border-[#FF4D4D] hover:text-[#FF4D4D] transition-colors shadow-md cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 transition-all duration-500">
          {latestVideos.slice(currentIndex, currentIndex + 3).map((video) => (
            <div
              key={video.title}
              onClick={() => onSelectVideo && onSelectVideo(video)}
              className="group relative flex flex-col rounded-3xl bg-white border-2 border-zinc-200/80 shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#3B82F6]"
            >
              {/* Thumbnail Placeholder */}
              <div className="relative overflow-hidden aspect-video w-full bg-zinc-900">
                <PlaceholderImage
                  category="video"
                  title={video.title}
                  alt={`${video.category} • New Upload`}
                  badge={video.category}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-110 !rounded-none"
                />

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
        </div>
      </div>
    </section>
  );
};
