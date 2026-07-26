"use client";

import React from "react";
import { Play, Sparkles, Eye } from "lucide-react";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import { VideoModalData } from "../modals/VideoPlayerModal";

interface ShortsSectionProps {
  onSelectShort?: (short: VideoModalData) => void;
}

export const ShortsSection: React.FC<ShortsSectionProps> = ({ onSelectShort }) => {
  const shortsData: VideoModalData[] = [
    {
      title: "Chintu's Funny Dance Challenge #Shorts",
      duration: "0:58",
      views: "48.2K",
      uploadDate: "3 days ago",
      category: "Kids Shorts",
      description: "Watch Chintu do the funny monkey dance in 60 seconds! Can your toddler follow along?",
    },
    {
      title: "A B C D E F G Rapid Song #Shorts",
      duration: "0:45",
      views: "35.7K",
      uploadDate: "5 days ago",
      category: "Learning Shorts",
      description: "Quick alphabet song with 3D colorful letters popping up on screen!",
    },
    {
      title: "Machli Jal Ki Rani Splash #Shorts",
      duration: "0:50",
      views: "62.1K",
      uploadDate: "1 week ago",
      category: "Trending #1",
      description: "Our famous underwater goldfish rhyme condensed into an instant shorts favourite.",
    },
    {
      title: "Clap Your Hands Happy Song #Shorts",
      duration: "0:55",
      views: "29.4K",
      uploadDate: "1 week ago",
      category: "Sing & Dance",
      description: "If you're happy and you know it clap your hands! Chintu and friends clapping.",
    },
    {
      title: "Red Blue Yellow Colors Quick #Shorts",
      duration: "0:42",
      views: "38.9K",
      uploadDate: "2 weeks ago",
      category: "Colours",
      description: "Balloons bursting in red, blue, and yellow! Can you shout the color names?",
    },
    {
      title: "Good Night Chanda Mama Lullaby #Shorts",
      duration: "0:59",
      views: "41.0K",
      uploadDate: "2 weeks ago",
      category: "Bedtime",
      description: "Sweet dreams with Chintu and Chanda Mama looking down from the peaceful sky.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FFFDF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 lg:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FF4D4D]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FF4D4D] mb-3">
              <Sparkles className="h-4 w-4" />
              <span>Quick 60-Second Learning</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-tight">
              Trending <span className="text-[#FF4D4D]">Shorts</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 font-medium max-w-2xl leading-relaxed">
              Bite-sized 4K Hindi nursery rhyme clips and fun dance challenges for instant smiles!
            </p>
          </div>

          <a
            href="https://www.youtube.com/@SaihejMotion/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d-red self-start md:self-auto px-5 py-2.5 sm:px-6 sm:py-3 lg:px-7 lg:py-3.5 text-xs sm:text-sm lg:text-base flex items-center gap-2"
          >
            <span>Watch More Shorts</span>
            <span className="text-xs">→</span>
          </a>
        </div>

        {/* 6 Vertical Shorts Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {shortsData.map((short) => (
            <div
              key={short.title}
              onClick={() => onSelectShort && onSelectShort(short)}
              className="group relative flex flex-col rounded-3xl bg-white border-2 border-zinc-200/80 shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#FF4D4D]"
            >
              {/* Vertical 9:16 Placeholder Thumbnail */}
              <div className="relative overflow-hidden aspect-[9/16] w-full bg-zinc-900">
                <PlaceholderImage
                  category="video"
                  title={short.title}
                  alt={`${short.category} • Shorts`}
                  aspectRatio="vertical"
                  badge="SHORTS"
                  className="h-full w-full transition-transform duration-500 group-hover:scale-110 !rounded-none"
                />

                {/* Shorts Duration tag */}
                <div className="absolute top-3 right-3 rounded-md bg-black/70 backdrop-blur-md px-2 py-0.5 text-[10px] font-extrabold text-white">
                  {short.duration}
                </div>

                {/* Animated Hover Play button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF4D4D] text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom title and views overlay */}
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
        </div>
      </div>
    </section>
  );
};
