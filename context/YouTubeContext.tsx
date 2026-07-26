"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { YouTubeChannelData, YouTubeStats, YouTubePlaylist, formatCount } from "../lib/youtube";
import { VideoModalData } from "../components/modals/VideoPlayerModal";

interface YouTubeContextType {
  stats: YouTubeStats;
  featuredVideos: VideoModalData[];
  latestVideos: VideoModalData[];
  shorts: VideoModalData[];
  playlists: YouTubePlaylist[];
  isLiveApi: boolean;
  isLoading: boolean;
  error: string | null;
  incrementSubscribers: () => void;
}

const DEFAULT_STATS: YouTubeStats = {
  subscriberCount: "1.16K+",
  rawSubscribers: 1160,
  videoCount: "252+",
  rawVideos: 252,
  viewCount: "107K+",
  rawViews: 107400,
};

const YouTubeContext = createContext<YouTubeContextType | undefined>(undefined);

export const YouTubeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stats, setStats] = useState<YouTubeStats>(DEFAULT_STATS);
  const [featuredVideos, setFeaturedVideos] = useState<VideoModalData[]>([]);
  const [latestVideos, setLatestVideos] = useState<VideoModalData[]>([]);
  const [shorts, setShorts] = useState<VideoModalData[]>([]);
  const [playlists, setPlaylists] = useState<YouTubePlaylist[]>([]);
  const [isLiveApi, setIsLiveApi] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchYouTubeData() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/youtube");
        if (!res.ok) {
          throw new Error(`Failed to fetch /api/youtube: ${res.statusText}`);
        }
        const data: YouTubeChannelData = await res.json();
        if (isMounted && data) {
          if (data.stats) setStats(data.stats);
          if (data.featuredVideos) setFeaturedVideos(data.featuredVideos);
          if (data.latestVideos) setLatestVideos(data.latestVideos);
          if (data.shorts) setShorts(data.shorts);
          if (data.playlists) setPlaylists(data.playlists);
          if (typeof data.isLiveApi === "boolean") setIsLiveApi(data.isLiveApi);
          setError(null);
        }
      } catch (err: unknown) {
        console.warn("YouTubeContext fetch error, retaining default fallback data:", err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Error fetching YouTube data");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchYouTubeData();
    return () => {
      isMounted = false;
    };
  }, []);

  const incrementSubscribers = () => {
    setStats((prev) => {
      const nextRaw = prev.rawSubscribers + 1;
      return {
        ...prev,
        rawSubscribers: nextRaw,
        subscriberCount: formatCount(nextRaw),
      };
    });
  };

  return (
    <YouTubeContext.Provider
      value={{
        stats,
        featuredVideos,
        latestVideos,
        shorts,
        playlists,
        isLiveApi,
        isLoading,
        error,
        incrementSubscribers,
      }}
    >
      {children}
    </YouTubeContext.Provider>
  );
};

export function useYouTube(): YouTubeContextType {
  const context = useContext(YouTubeContext);
  if (!context) {
    throw new Error("useYouTube must be used within a YouTubeProvider");
  }
  return context;
}
