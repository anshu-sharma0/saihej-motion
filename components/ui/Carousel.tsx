"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export interface CarouselProps {
  children: React.ReactNode;
  /**
   * Slides per view on mobile (< 640px).
   * E.g., 1.15 shows 1 full card and peeks 15% of the next card.
   */
  mobileSlidesPerView?: number;
  /**
   * Slides per view on tablet (640px - 1024px).
   * E.g., 2.15 shows 2 cards and peeks 15% of the next card.
   */
  tabletSlidesPerView?: number;
  /**
   * Slides per view on desktop (>= 1024px) when desktopMode is 'carousel'.
   */
  desktopSlidesPerView?: number;
  /**
   * Layout mode on desktop (>= 1024px).
   * 'grid': clean grid layout on desktop, carousel on mobile/tablet.
   * 'carousel': interactive carousel on all screen sizes.
   */
  desktopMode?: "grid" | "carousel";
  /**
   * Number of grid columns on desktop when desktopMode is 'grid'.
   * Defaults to 3.
   */
  desktopGridCols?: number;
  /**
   * Whether to show Left/Right navigation arrows.
   */
  showArrows?: boolean;
  /**
   * Whether to show pagination indicator pills.
   */
  showDots?: boolean;
  /**
   * Optional custom className for the top-level container.
   */
  className?: string;
  /**
   * Gap between slides in pixels. Defaults to 24px (1.5rem).
   */
  gapPx?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  mobileSlidesPerView = 1.15,
  tabletSlidesPerView = 2.15,
  desktopSlidesPerView = 3,
  desktopMode = "grid",
  desktopGridCols = 3,
  showArrows = true,
  showDots = true,
  className = "",
  gapPx = 24,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const rawId = React.useId();
  const uniqueId = rawId.replace(/[^a-zA-Z0-9]/g, "");
  const containerClass = `carousel-container-${uniqueId}`;
  const slideClass = `carousel-slide-${uniqueId}`;

  const items = React.Children.toArray(children);
  const totalItems = items.length;
  const isDesktopGrid = desktopMode === "grid";

  // Calculate maximum slide index
  const maxIndex = Math.max(0, totalItems - 1);

  // Throttled onScroll handler to track active slide index
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container || totalItems === 0) return;
    const scrollLeft = container.scrollLeft;
    const slideWidth = container.scrollWidth / totalItems;
    const newIndex = Math.round(scrollLeft / slideWidth);
    if (newIndex !== activeIndex) {
      setActiveIndex(Math.min(maxIndex, Math.max(0, newIndex)));
    }
  };

  const scrollToSlide = (index: number) => {
    const container = containerRef.current;
    if (!container || totalItems === 0) return;
    const slideWidth = container.scrollWidth / totalItems;
    container.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const scrollPrev = useCallback(() => {
    const container = containerRef.current;
    if (!container || totalItems === 0) return;
    const slideWidth = container.scrollWidth / totalItems;
    container.scrollBy({
      left: -slideWidth,
      behavior: "smooth",
    });
  }, [totalItems]);

  const scrollNext = useCallback(() => {
    const container = containerRef.current;
    if (!container || totalItems === 0) return;
    const slideWidth = container.scrollWidth / totalItems;
    container.scrollBy({
      left: slideWidth,
      behavior: "smooth",
    });
  }, [totalItems]);

  // Keyboard navigation support
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        scrollNext();
      }
    };

    container.addEventListener("keydown", handleKeyDown);
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, [totalItems, scrollPrev, scrollNext]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Responsive Inline CSS Styles for zero SSR-flicker layout */}
      <style>{`
        .${containerClass} {
          display: flex;
          gap: ${gapPx}px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding-bottom: 12px;
          -webkit-overflow-scrolling: touch;
        }
        .${slideClass} {
          flex: 0 0 calc(100% / ${mobileSlidesPerView} - ${Math.round(
        (gapPx * (mobileSlidesPerView - 1)) / mobileSlidesPerView
      )}px);
          scroll-snap-align: start;
        }
        @media (min-width: 640px) {
          .${slideClass} {
            flex: 0 0 calc(100% / ${tabletSlidesPerView} - ${Math.round(
        (gapPx * (tabletSlidesPerView - 1)) / tabletSlidesPerView
      )}px);
          }
        }
        @media (min-width: 1024px) {
          .${containerClass} {
            display: ${isDesktopGrid ? "grid" : "flex"};
            grid-template-columns: ${isDesktopGrid
          ? `repeat(${desktopGridCols}, minmax(0, 1fr))`
          : "none"
        };
            overflow-x: ${isDesktopGrid ? "visible" : "auto"};
            padding-bottom: ${isDesktopGrid ? "0px" : "12px"};
          }
          .${slideClass} {
            flex: ${isDesktopGrid
          ? "none"
          : `0 0 calc(100% / ${desktopSlidesPerView} - ${Math.round(
            (gapPx * (desktopSlidesPerView - 1)) / desktopSlidesPerView
          )}px)`
        };
            width: ${isDesktopGrid ? "100%" : "auto"};
          }
        }
      `}</style>

      {/* Carousel Track */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        tabIndex={0}
        aria-label="Carousel content"
        className={`${containerClass} no-scrollbar focus:outline-none focus:ring-2 focus:ring-[#FF4D4D]/30 rounded-3xl`}
      >
        {items.map((child, index) => (
          <div
            key={index}
            className={`${slideClass} transition-transform duration-300`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Pagination Indicator Pills */}
      {showDots && totalItems > 1 && (
        <div
          className={`mt-4 flex items-center justify-center gap-2 ${isDesktopGrid ? "lg:hidden" : ""
            }`}
        >
          {items.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive ? "true" : "false"}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${isActive
                  ? "w-7 bg-gradient-to-r from-[#FF4D4D] to-[#FF8A8A] shadow-md scale-105"
                  : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
                  }`}
              />
            );
          })}
        </div>
      )}

      {/* Large Navigation Arrows for Tablet / Carousel Desktop Mode */}
      {showArrows && (
        <div
          className={`hidden sm:flex items-center justify-between pointer-events-none absolute inset-y-0 -left-4 -right-4 lg:-left-6 lg:-right-6 z-20 ${isDesktopGrid ? "lg:hidden" : ""
            }`}
        >
          <button
            onClick={scrollPrev}
            disabled={activeIndex === 0}
            aria-label="Previous slide"
            className={`pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/95 backdrop-blur-md border-2 border-zinc-200 text-[#1F2937] shadow-lg transition-all duration-300 cursor-pointer ${activeIndex === 0
              ? "opacity-30 cursor-not-allowed scale-95"
              : "hover:border-[#FF4D4D] hover:text-[#FF4D4D] hover:scale-110 hover:shadow-xl"
              }`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={scrollNext}
            disabled={activeIndex >= maxIndex}
            aria-label="Next slide"
            className={`pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/95 backdrop-blur-md border-2 border-zinc-200 text-[#1F2937] shadow-lg transition-all duration-300 cursor-pointer ${activeIndex >= maxIndex
              ? "opacity-30 cursor-not-allowed scale-95"
              : "hover:border-[#FF4D4D] hover:text-[#FF4D4D] hover:scale-110 hover:shadow-xl"
              }`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};
