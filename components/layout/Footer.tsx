"use client";

import React, { useState } from "react";
import {
  Heart,
  Mail, Sparkles
} from "lucide-react";
import Image from "next/image";
import { YouTubeIcon, InstagramIcon } from "../ui/SocialIcons";

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (email: string) => {
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopiedEmail(true);
      setTimeout(() => {
        setCopiedEmail(false);
      }, 2500);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Videos", href: "#featured-videos" },
    { name: "Playlists", href: "#playlists" },
    { name: "About Chintu", href: "#chintu" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#footer" },
  ];

  const popularVideoLinks = [
    { name: "Kalu Madari Aaya", href: "https://www.youtube.com/@SaihejMotion/videos" },
    { name: "Ek Mota Hathi", href: "https://www.youtube.com/@SaihejMotion/videos" },
    { name: "Gaiya Meri Gaiya", href: "https://www.youtube.com/@SaihejMotion/videos" },
    { name: "Billi Mausi", href: "https://www.youtube.com/@SaihejMotion/videos" },
    { name: "Machli Jal Ki Rani", href: "https://www.youtube.com/@SaihejMotion/videos" },
    { name: "Aloo Kachaloo", href: "https://www.youtube.com/@SaihejMotion/videos" },
  ];

  const playlistLinks = [
    { name: "🎭 Chintu Cartoon Series", href: "#playlists" },
    { name: "🐵 Bandar Mama Series", href: "#playlists" },
    { name: "🌟 Top Hindi Rhymes", href: "#playlists" },
    { name: "😂 Funny Kids Shorts", href: "#playlists" },
    { name: "🎉 Festival Songs", href: "#playlists" },
  ];

  return (
    <footer id="footer" className="relative bg-gradient-to-b from-[#1E2530] via-[#1A202C] to-[#0F131A] text-white pt-12 pb-8 overflow-hidden">
      {/* Dynamic 4-Color Rainbow Top Accent Strip */}
      <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#FF4D4D] via-[#FFD93D] via-[#22C55E] to-[#3B82F6]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 xl:gap-10 pb-8 border-b border-zinc-700/80">
          {/* Col 1: Logo, Channel Bio & Social Media Pills (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start">
            <a href="#hero" className="flex items-center gap-3 text-decoration-none group">
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl text-white">
                  Saihej <span className="text-[#FF4D4D]">Motion</span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#FFD93D]">
                  Kids Songs • 3D Animation
                </span>
              </div>
            </a>

            <p className="mt-4 text-xs sm:text-sm lg:text-base text-zinc-400 leading-relaxed font-medium">
              Welcome to Saihej Motion – your home for the best 4K Hindi Nursery Rhymes,
              Kids Songs, Educational Videos and Disney-Pixar style 3D Animations. Perfect
              for toddlers and preschool children aged 2–8 years.
            </p>

            {/* Social Media Icons Bar */}
            <div className="mt-6 border-t border-zinc-800/80 w-full">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FFD93D] flex items-center gap-1.5 mb-3">
                <Sparkles className="h-3.5 w-3.5 text-[#FFD93D]" />
                <span>Follow &amp; Connect Across Socials</span>
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {/* YouTube Pill */}
                <a
                  href="https://www.youtube.com/@SaihejMotion/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-800/80 hover:bg-[#FF4D4D]/15 border border-zinc-700/80 hover:border-[#FF4D4D]/50 text-white hover:text-[#FF4D4D] text-xs font-extrabold transition-all duration-200 group/pill shadow-sm"
                >
                  <YouTubeIcon className="w-4 h-4 text-[#FF4D4D]" />
                  <span>YouTube</span>
                </a>

                {/* Instagram Pill */}
                <a
                  href="https://www.instagram.com/saihejmotion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-800/80 hover:bg-pink-500/15 border border-zinc-700/80 hover:border-pink-500/50 text-white hover:text-pink-400 text-xs font-extrabold transition-all duration-200 group/pill shadow-sm"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span>Instagram</span>
                </a>

                {/* Gmail Pill */}
                <a
                  href="mailto:punjab.sabbi@gmail.com"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-800/80 hover:bg-emerald-500/15 border border-zinc-700/80 hover:border-emerald-500/50 text-white hover:text-emerald-400 text-xs font-extrabold transition-all duration-200 group/pill shadow-sm"
                >
                  <Mail className="w-4 h-4 text-emerald-500" />
                  <span>Gmail</span>
                </a>

              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h4 className="font-extrabold text-base text-[#FFD93D] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-bold text-zinc-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#FF4D4D] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#FFD93D] text-xs">▸</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Videos (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-extrabold text-base text-[#FFD93D] uppercase tracking-wider mb-4">
              Popular Videos
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-bold text-zinc-300">
              {popularVideoLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF4D4D] transition-colors flex items-center gap-1.5 line-clamp-1"
                  >
                    <span className="text-[#FF4D4D] text-xs">★</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Playlists & Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-extrabold text-base text-[#FFD93D] uppercase tracking-wider mb-4">
              Playlists &amp; Contact
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-bold text-zinc-300 mb-6">
              {playlistLinks.map((pl) => (
                <li key={pl.name}>
                  <a
                    href={pl.href}
                    className="hover:text-[#3B82F6] transition-colors flex items-center gap-1.5 line-clamp-1"
                  >
                    <span>{pl.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Business Email Banner */}
            {/* <div className="rounded-2xl bg-zinc-800 p-4 border border-zinc-700">
              <span className="text-xs font-extrabold uppercase text-[#22C55E] block mb-1">
                Business &amp; Rhyme Requests
              </span>
              <a
                href="mailto:punjab.sabbi@gmail.com"
                className="text-sm font-extrabold text-white hover:text-[#FFD93D] transition-colors break-all flex items-center gap-2"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#FFD93D]" />
                <span>punjab.sabbi@gmail.com</span>
              </a>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-zinc-400">
          <p>
            © {new Date().getFullYear()} <span className="text-white">Saihej Motion</span>. All rights reserved.
            Official YouTube Kids Entertainment Brand.
          </p>

          <div className="flex items-center gap-2 text-zinc-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-[#FF4D4D] fill-current inline animate-pulse" />
            <span>for Toddlers &amp; Families Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
