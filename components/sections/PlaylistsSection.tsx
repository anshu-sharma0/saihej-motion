"use client";

import React from "react";
import { ListVideo, Play, Sparkles } from "lucide-react";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import { VideoModalData } from "../modals/VideoPlayerModal";

interface PlaylistsSectionProps {
  onSelectPlaylist?: (playlist: { title: string; count: string; description: string }) => void;
  onOpenVideo?: (video: VideoModalData) => void;
}

export const PlaylistsSection: React.FC<PlaylistsSectionProps> = ({
  onSelectPlaylist,
  onOpenVideo,
}) => {
  const playlists = [
    {
      title: "🎭 Chintu Cartoon Series",
      videoCount: "18+ Videos",
      shortDescription:
        "Hilarious 4K animated stories and moral adventures with Chintu and his woodland friends.",
      badge: "Series",
    },
    {
      title: "🐵 Bandar Mama Series",
      videoCount: "14+ Videos",
      shortDescription:
        "Bandar Mama Pahan Pajama! Funny monkey songs and jungle escapades for preschoolers.",
      badge: "Kids Favorite",
    },
    {
      title: "🌟 Top Hindi Rhymes Collection",
      videoCount: "45+ Videos",
      shortDescription:
        "Non-stop Hindi nursery rhymes and traditional songs perfect for sing-alongs and bedtime.",
      badge: "Best Seller",
    },
    {
      title: "😂 Funny Kids Shorts",
      videoCount: "80+ Shorts",
      shortDescription:
        "Bite-sized 60-second fun rhymes, quick dances, and Chintu's hilarious moments.",
      badge: "Trending",
    },
    {
      title: "🎉 Festival Songs",
      videoCount: "12+ Videos",
      shortDescription:
        "Celebrate Diwali, Holi, Raksha Bandhan, and Indian festivals with festive children's songs.",
      badge: "Cultural",
    },
  ];

  const handlePlaylistClick = (pl: typeof playlists[0]) => {
    if (onOpenVideo) {
      onOpenVideo({
        title: pl.title,
        duration: "35:00 Playlist",
        views: "64K",
        uploadDate: "Updated weekly",
        category: pl.badge,
        description: pl.shortDescription,
      });
    } else if (onSelectPlaylist) {
      onSelectPlaylist({
        title: pl.title,
        count: pl.videoCount,
        description: pl.shortDescription,
      });
    } else {
      window.open("https://www.youtube.com/@SaihejMotion/playlists", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="playlists" className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FFFDF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#3B82F6]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#3B82F6] mb-3">
            <ListVideo className="h-4 w-4" />
            <span>Curated Collections</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-tight">
            Explore Our <span className="text-[#3B82F6]">Playlists</span> &amp; Series
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 font-medium leading-relaxed">
            Hand-picked video collections grouped by theme, character, and learning topic.
            Perfect for continuous, uninterrupted safe viewing!
          </p>
        </div>

        {/* Playlists Grid - First 2 large, next 3 standard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {playlists.map((playlist, idx) => (
            <div
              key={playlist.title}
              onClick={() => handlePlaylistClick(playlist)}
              className={`group relative flex flex-col rounded-3xl bg-white border-2 border-zinc-200 shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#3B82F6] ${
                idx === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Cover Placeholder */}
              <div className="relative aspect-video w-full bg-zinc-900">
                <PlaceholderImage
                  category="playlist"
                  title={playlist.title}
                  alt={playlist.shortDescription}
                  badge={playlist.badge}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105 !rounded-none"
                />

                {/* Video Count Tag */}
                <div className="absolute bottom-4 right-4 rounded-xl bg-black/80 backdrop-blur-md px-3 py-1.5 text-xs font-extrabold text-[#FFD93D] flex items-center gap-1.5 shadow-lg border border-white/10">
                  <ListVideo className="h-4 w-4" />
                  <span>{playlist.videoCount}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-grow p-5 sm:p-6 lg:p-7 xl:p-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6]">
                    Playlist Collection
                  </span>
                  <span className="text-xs font-bold text-zinc-500">
                    {playlist.videoCount}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#1F2937] group-hover:text-[#3B82F6] transition-colors mb-2">
                  {playlist.title}
                </h3>

                <p className="text-xs sm:text-sm lg:text-base text-zinc-600 font-medium mb-5 leading-relaxed">
                  {playlist.shortDescription}
                </p>

                {/* Footer Action */}
                <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between font-extrabold text-xs sm:text-sm text-[#3B82F6]">
                  <span className="inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    <span>Play Full Collection</span>
                    <span>→</span>
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3B82F6]/10 text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                    <Play className="h-4 w-4 fill-current ml-0.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
