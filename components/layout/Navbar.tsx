"use client";

import React, { useState, useEffect } from "react";
import { Play, Sparkles, Menu, X, Heart } from "lucide-react";
import confetti from "canvas-confetti";
import { YouTubeIcon } from "../ui/SocialIcons";

interface NavbarProps {
  onSubscribeClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSubscribeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(1160);
  const [hasSubscribed, setHasSubscribed] = useState(false);

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
    setHasSubscribed(true);
    setSubscriberCount((prev) => prev + 1);
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
            className="group flex items-center gap-3 text-decoration-none focus:outline-none"
          >
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FF4D4D] via-[#FFD93D] to-[#3B82F6] p-0.5 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#FFFDF7]">
                <Play className="h-6 w-6 text-[#FF4D4D] fill-current ml-0.5" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#22C55E] text-[9px] font-black text-white shadow">
                4K
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl leading-none tracking-tight text-[#1F2937]">
                Saihej <span className="text-[#FF4D4D]">Motion</span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-500">
                Kids Songs • 3D Animation
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 rounded-full text-sm font-bold transition-all ${isScrolled
                    ? "text-[#1F2937] hover:bg-[#FFD93D]/20 hover:text-[#FF4D4D]"
                    : "text-[#1F2937] hover:bg-white/30 hover:text-[#FF4D4D]"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side: Subscribe CTA + Stats */}
          <div className="hidden sm:flex items-center gap-3">

            <button
              onClick={handleSubscribe}
              className="btn-3d-red px-5 py-2.5 text-sm flex items-center gap-2 cursor-pointer"
            >
              <YouTubeIcon className="h-4 w-4" />
              <span>{hasSubscribed ? "✓ Subscribed!" : "Subscribe"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleSubscribe}
              className="btn-3d-red px-3 py-1.5 text-xs"
            >
              Subscribe
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 border border-zinc-200 text-[#1F2937]"
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
                  className="rounded-2xl px-4 py-2.5 text-base font-bold text-[#1F2937] hover:bg-[#FFD93D]/30 hover:text-[#FF4D4D] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-2 border-t border-zinc-200 pt-3 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-600 px-2">
                  <span>Channel Stats</span>
                  <span className="text-[#FF4D4D]">1.16K+ Subscribers • 252+ Videos</span>
                </div>
                <button
                  onClick={() => {
                    handleSubscribe();
                    setIsMobileMenuOpen(false);
                  }}
                  className="btn-3d-red w-full py-3 text-center text-sm"
                >
                  🔴 Subscribe on YouTube
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
