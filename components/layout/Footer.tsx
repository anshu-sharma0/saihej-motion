"use client";

import React from "react";
import { Play, Mail, Heart, Sparkles, Send } from "lucide-react";
import { YouTubeIcon, InstagramIcon, FacebookIcon } from "../ui/SocialIcons";

export const Footer: React.FC = () => {
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
    <footer id="footer" className="relative bg-[#1F2937] text-white pt-16 pb-12 overflow-hidden border-t-8 border-[#FFD93D]">
      {/* Decorative top sparkles */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#FF4D4D] via-[#FFD93D] to-[#3B82F6]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-700/80">
          {/* Col 1: Logo & Channel Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#hero" className="flex items-center gap-3 text-decoration-none group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FF4D4D] via-[#FFD93D] to-[#3B82F6] p-0.5 shadow-lg">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#1F2937]">
                  <Play className="h-6 w-6 text-[#FF4D4D] fill-current ml-0.5" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-white">
                  Saihej <span className="text-[#FF4D4D]">Motion</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFD93D]">
                  Kids Songs • 3D Animation
                </span>
              </div>
            </a>

            <p className="mt-4 text-sm text-zinc-400 leading-relaxed font-medium">
              Welcome to Saihej Motion – your home for the best 4K Hindi Nursery Rhymes,
              Kids Songs, Educational Videos and Disney-Pixar style 3D Animations. Perfect
              for toddlers and preschool children aged 2–8 years.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.youtube.com/@SaihejMotion"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF0000] text-white hover:scale-110 transition-transform shadow-md"
              >
                <YouTubeIcon className="h-6 w-6" />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Page"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:scale-110 transition-transform shadow-md"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1877F2] text-white hover:scale-110 transition-transform shadow-md"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>

              <a
                href="mailto:punjab.sabbi@gmail.com"
                aria-label="Business Email"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#22C55E] text-white hover:scale-110 transition-transform shadow-md"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
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
            <div className="rounded-2xl bg-zinc-800 p-4 border border-zinc-700">
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
            </div>
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
