"use client";

import React, { useState, useEffect } from "react";
import { Play, Sparkles, Menu, X, Heart } from "lucide-react";
import confetti from "canvas-confetti";
import { YouTubeIcon } from "../ui/SocialIcons";
import { useYouTube } from "../../context/YouTubeContext";

interface NavbarProps {
  onSubscribeClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSubscribeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { stats, incrementSubscribers } = useYouTube();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = () => {
    incrementSubscribers();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.2 },
      colors: ["#FF4D4D", "#FFD93D", "#3B82F6", "#22C55E"],
    });
    if (onSubscribeClick) {
      onSubscribeClick();
    } else {
      window.open("https://www.youtube.com/@SaihejMotion?sub_confirmation=1", "_blank", "noopener,noreferrer");
    }
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Videos", href: "#featured-videos" },
    { name: "Playlists", href: "#playlists" },
    { name: "About", href: "#chintu" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? "bg-white/85 backdrop-blur-xl border-b border-[#FFD93D]/30 shadow-lg py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2 sm:gap-3 text-decoration-none focus:outline-none"
          >
            <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FF4D4D] via-[#FFD93D] to-[#3B82F6] p-0.5 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#FFFDF7]">
                <Play className="h-5 w-5 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#FF4D4D] fill-current ml-0.5" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#22C55E] text-[9px] font-black text-white shadow">
                4K
              </span>
            </div>
            <div className="flex flex-col">
              <span className={`font-extrabold text-lg sm:text-xl lg:text-2xl leading-none tracking-tight transition-colors ${
                isScrolled ? "text-[#1F2937]" : "text-white"
              }`}>
                Saihej <span className="text-[#FF4D4D]">Motion</span>
              </span>
              <span className={`text-[9px] sm:text-[10px] lg:text-xs font-bold uppercase tracking-wider transition-colors ${
                isScrolled ? "text-zinc-500" : "text-white/80"
              }`}>
                Kids Songs • 3D Animation
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1.5 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-2.5 py-1.5 lg:px-3.5 lg:py-2 rounded-full text-xs lg:text-sm font-bold transition-all ${isScrolled
                  ? "text-zinc-600 hover:bg-[#FFD93D]/20 hover:text-[#1F2937]"
                  : "text-white hover:bg-white/20 hover:text-[#FFD93D] drop-shadow-sm"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side: Subscribe CTA + Stats */}
          <div className="hidden lg:flex items-center gap-3">
            <div className={`hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold shadow-sm ${
              isScrolled ? "bg-[#FF4D4D]/10 text-[#FF4D4D] border border-[#FF4D4D]/20" : "bg-white/20 text-white backdrop-blur-md"
            }`}>
              <span>❤️</span>
              <span>{stats.subscriberCount} Subs</span>
            </div>

            <button
              onClick={handleSubscribe}
              className="btn-3d-red px-5 py-2.5 text-sm flex items-center gap-2 cursor-pointer"
            >
              <YouTubeIcon className="h-4 w-4" />
              <span>Subscribe</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all ${
                isScrolled
                  ? "bg-white/80 border-zinc-200 text-[#1F2937]"
                  : "bg-white/20 border-white/30 text-white backdrop-blur-md"
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-4 rounded-3xl bg-[#FFFDF7] p-4 shadow-2xl border-2 border-[#FFD93D] md:hidden animate-in slide-in-from-top-3 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-1 text-base font-bold text-[#1F2937] hover:bg-[#FFD93D]/30 hover:text-[#FF4D4D] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="border-t border-zinc-200 pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    handleSubscribe();
                    setIsMobileMenuOpen(false);
                  }}
                  className="btn-3d-red w-full py-3 text-center text-sm"
                >
                  Subscribe on YouTube
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
