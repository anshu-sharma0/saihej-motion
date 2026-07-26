"use client";

import React, { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { TrustSection } from "../components/sections/TrustSection";
import { FeaturedVideosSection } from "../components/sections/FeaturedVideosSection";
import { ChintuSection } from "../components/sections/ChintuSection";
import { PlaylistsSection } from "../components/sections/PlaylistsSection";
import { WhyParentsLoveUsSection } from "../components/sections/WhyParentsLoveUsSection";
import { LatestVideosSection } from "../components/sections/LatestVideosSection";
import { ShortsSection } from "../components/sections/ShortsSection";
import { FaqSection } from "../components/sections/FaqSection";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";
import { FloatingElements } from "../components/ui/FloatingElements";
import { VideoPlayerModal, VideoModalData } from "../components/modals/VideoPlayerModal";
import confetti from "canvas-confetti";

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<VideoModalData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (video: VideoModalData) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const handleGlobalSubscribe = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.3 },
      colors: ["#FF4D4D", "#FFD93D", "#3B82F6", "#22C55E"],
    });
    window.open("https://www.youtube.com/@SaihejMotion?sub_confirmation=1", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#FFFDF7] text-[#1F2937] overflow-x-hidden">
      {/* Background Floating Ambient Elements (Clouds, Stars, Musical Notes) */}
      <FloatingElements />

      {/* Navbar with Glassmorphism and Subscribe CTA */}
      <Navbar onSubscribeClick={handleGlobalSubscribe} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Full-width 100vh Hero Banner */}
        <HeroSection
          onSubscribe={handleGlobalSubscribe}
          onWatchLatest={() => {
            const el = document.getElementById("featured-videos");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Parent Trust Cards Section */}
        <TrustSection />

        {/* Featured Popular Videos Section (6 premium cards) */}
        <FeaturedVideosSection onSelectVideo={handleOpenModal} />

        {/* Chintu Cartoon Character Section */}
        {/* <ChintuSection
          onExplore={() => {
            const el = document.getElementById("playlists");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        /> */}

        {/* Curated Playlists & Series Section */}
        {/* <PlaylistsSection onOpenVideo={handleOpenModal} /> */}

        {/* Why Parents Love Us Section (8 large cards) */}
        <WhyParentsLoveUsSection />

        {/* Latest Videos Carousel Section */}
        <LatestVideosSection onSelectVideo={handleOpenModal} />

        {/* Trending Shorts Grid Section (Vertical 9:16) */}
        <ShortsSection onSelectShort={handleOpenModal} />

        {/* FAQ Accordion Section (5 questions) */}
        <FaqSection />

        {/* Final CTA Rainbow & Confetti Section */}
        <FinalCtaSection onSubscribe={handleGlobalSubscribe} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive 4K Video Player Modal */}
      <VideoPlayerModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        video={selectedVideo}
      />
    </div>
  );
}
