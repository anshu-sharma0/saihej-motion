"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
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
  refreshData: (force?: boolean) => Promise<void>;
}

const DEFAULT_STATS: YouTubeStats = {
  subscriberCount: "1.46K+",
  rawSubscribers: 1460,
  videoCount: "293+",
  rawVideos: 293,
  viewCount: "152K+",
  rawViews: 152000,
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

  const fetchYouTubeData = useCallback(async (force = false) => {
    try {
      setIsLoading(true);
      const url = force ? `/api/youtube?refresh=true&t=${Date.now()}` : `/api/youtube?t=${Date.now()}`;
      const res = await fetch(url, { cache: force ? "no-store" : "default" });
      if (!res.ok) {
        throw new Error(`Failed to fetch /api/youtube: ${res.statusText}`);
      }
      const data: YouTubeChannelData = await res.json();
      if (data) {
        if (data.stats) setStats(data.stats);
        if (data.featuredVideos) setFeaturedVideos(data.featuredVideos);
        if (data.latestVideos) setLatestVideos(data.latestVideos);
        if (data.shorts) setShorts(data.shorts);
        if (data.playlists) setPlaylists(data.playlists);
        if (typeof data.isLiveApi === "boolean") setIsLiveApi(data.isLiveApi);
        setError(null);
      }
    } catch (err: unknown) {
      console.warn("YouTubeContext fetch error, retaining fallback data:", err);
      setError(err instanceof Error ? err.message : "Error fetching YouTube data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchYouTubeData(false);
  }, [fetchYouTubeData]);

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
        refreshData: (force = true) => fetchYouTubeData(force),
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
