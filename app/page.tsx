"use client";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { TrustSection } from "../components/sections/TrustSection";
import { FeaturedVideosSection } from "../components/sections/FeaturedVideosSection";
import { WhyParentsLoveUsSection } from "../components/sections/WhyParentsLoveUsSection";
import { LatestVideosSection } from "../components/sections/LatestVideosSection";
import { ShortsSection } from "../components/sections/ShortsSection";
import { FaqSection } from "../components/sections/FaqSection";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";
import { FloatingElements } from "../components/ui/FloatingElements";
import { VideoModalData } from "../components/modals/VideoPlayerModal";
import confetti from "canvas-confetti";

export default function Home() {
  const handleOpenVideoDirectly = (video: VideoModalData) => {
    if (video.videoId) {
      if (video.category === "SHORTS") {
        window.open(`https://www.youtube.com/shorts/${video.videoId}`, "_blank", "noopener,noreferrer");
      } else {
        window.open(`https://www.youtube.com/watch?v=${video.videoId}`, "_blank", "noopener,noreferrer");
      }
    } else {
      window.open("https://www.youtube.com/@SaihejMotion/videos", "_blank", "noopener,noreferrer");
    }
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
        />

        {/* Parent Trust Cards Section */}
        <TrustSection />

        {/* Featured Popular Videos Section (6 premium cards) */}
        <FeaturedVideosSection onSelectVideo={handleOpenVideoDirectly} />

        {/* Why Parents Love Us Section (8 large cards) */}
        <WhyParentsLoveUsSection />

        {/* Latest Videos Carousel Section */}
        <LatestVideosSection onSelectVideo={handleOpenVideoDirectly} />

        {/* Trending Shorts Grid Section (Vertical 9:16) */}
        <ShortsSection onSelectShort={handleOpenVideoDirectly} />

        {/* FAQ Accordion Section (5 questions) */}
        {/* <FaqSection /> */}

        {/* Final CTA Rainbow & Confetti Section */}
        <FinalCtaSection onSubscribe={handleGlobalSubscribe} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
