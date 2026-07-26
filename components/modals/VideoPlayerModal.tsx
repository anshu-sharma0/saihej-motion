"use client";

import React, { useState } from "react";
import { X, Play, Pause, Volume2, VolumeX, Heart, Share2, Sparkles, Award, ExternalLink } from "lucide-react";
import confetti from "canvas-confetti";

export interface VideoModalData {
  title: string;
  duration: string;
  views: string;
  uploadDate: string;
  category?: string;
  description?: string;
  lyricsSnippet?: string;
}

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: VideoModalData | null;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  isOpen,
  onClose,
  video,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  if (!isOpen || !video) return null;

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
    if (!isSubscribed) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF4D4D", "#FFD93D", "#3B82F6", "#22C55E"],
      });
    }
  };

  const handleYouTubeRedirect = () => {
    window.open("https://www.youtube.com/@SaihejMotion", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl bg-[#FFFDF7] shadow-2xl border-4 border-[#FFD93D] animate-in fade-in zoom-in-95 duration-200">
        {/* Top bar with close button */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#FF4D4D] via-[#FFD93D] to-[#3B82F6] px-6 py-3.5 text-white">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-black text-[#FF4D4D]">
              ▶
            </span>
            <span className="font-bold text-sm sm:text-base drop-shadow-sm">
              Saihej Motion • YouTube Kids 4K Player
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video Player Screen Simulation / Placeholder */}
        <div className="relative aspect-video w-full bg-gradient-to-br from-[#1F2937] via-[#111827] to-[#0A0E17] flex flex-col items-center justify-center overflow-hidden">
          {/* Animated equalizer waves in background */}
          <div className="absolute inset-0 flex items-end justify-center gap-1.5 pb-10 opacity-30">
            {[35, 60, 45, 80, 50, 90, 40, 75, 55, 65, 85, 45, 70, 50, 80, 40].map((h, i) => (
              <div
                key={i}
                className="w-3 rounded-t-full bg-gradient-to-t from-[#FF4D4D] via-[#FFD93D] to-[#22C55E] transition-all duration-300"
                style={{
                  height: isPlaying ? `${h}%` : "15%",
                  animation: isPlaying ? `pulse 1.2s infinite alternate ${i * 0.1}s` : "none",
                }}
              />
            ))}
          </div>

          {/* Central Animated Characters & Video Preview Art */}
          <div className="relative z-10 flex flex-col items-center text-center p-6">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF4D4D] to-[#FFD93D] p-1 shadow-2xl">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1F2937] text-white">
                {isPlaying ? (
                  <Sparkles className="h-10 w-10 text-[#FFD93D] animate-spin" style={{ animationDuration: "6s" }} />
                ) : (
                  <Play className="h-10 w-10 text-white ml-1" />
                )}
              </div>
            </div>
            <span className="rounded-full bg-[#FF4D4D] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white mb-2">
              4K Hindi Rhymes & 3D Animation
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white max-w-2xl drop-shadow-lg">
              {video.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-300">
              {video.views} views • {video.uploadDate} • Duration: {video.duration}
            </p>
          </div>

          {/* Player controls bar */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/60 backdrop-blur-md px-6 py-3 text-white">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center justify-center rounded-full bg-[#FF4D4D] p-2 hover:bg-[#FF3D3D] transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-zinc-300 hover:text-white transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              <span className="text-xs font-medium text-zinc-300">
                {isPlaying ? "Playing 4K Animation Preview..." : "Paused"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition-all ${
                  isLiked
                    ? "bg-[#FF4D4D] text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                <span>{isLiked ? "Liked!" : "Like"}</span>
              </button>

              <button
                onClick={handleYouTubeRedirect}
                className="flex items-center gap-1.5 rounded-full bg-[#FF0000] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#CC0000] transition-colors shadow-md"
              >
                <span>Watch Full on YouTube</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Info & Channel Subscribe Action Footer */}
        <div className="p-6 sm:p-8 bg-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FF4D4D] to-[#FFD93D] text-white font-extrabold text-xl shadow-md">
              SM
            </div>
            <div>
              <h4 className="font-bold text-lg text-[#1F2937]">
                Saihej Motion – Kids Songs | Rhymes | 3D Animation
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600">
                1.16K+ Subscribers • 252+ Videos • Safe & Fun for Toddlers
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={handleSubscribe}
              className={`btn-font px-6 py-3 rounded-full font-bold text-sm shadow-lg transition-all ${
                isSubscribed
                  ? "bg-[#22C55E] text-white"
                  : "btn-3d-red"
              }`}
            >
              {isSubscribed ? "✓ Subscribed to Saihej Motion!" : "🔴 Subscribe on YouTube"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
