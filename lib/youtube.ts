import { VideoModalData } from "../components/modals/VideoPlayerModal";

export interface YouTubeStats {
  subscriberCount: string;
  rawSubscribers: number;
  videoCount: string;
  rawVideos: number;
  viewCount: string;
  rawViews: number;
}

export interface YouTubePlaylist {
  title: string;
  shortDescription: string;
  videoCount: string;
  badge: string;
  playlistId?: string;
  thumbnailUrl?: string;
}

export interface YouTubeChannelData {
  stats: YouTubeStats;
  featuredVideos: VideoModalData[];
  latestVideos: VideoModalData[];
  shorts: VideoModalData[];
  playlists: YouTubePlaylist[];
  isLiveApi: boolean;
}

export interface YouTubeThumbnails {
  maxres?: { url: string };
  high?: { url: string };
  medium?: { url: string };
  default?: { url: string };
}

export interface YouTubeSnippet {
  title?: string;
  description?: string;
  publishedAt?: string;
  thumbnails?: YouTubeThumbnails;
}

export interface YouTubeVideoItem {
  id?: string;
  snippet?: YouTubeSnippet;
  contentDetails?: {
    duration?: string;
  };
  statistics?: {
    viewCount?: string;
  };
}

export interface YouTubeSearchItem {
  id?: {
    videoId?: string;
  };
  snippet?: YouTubeSnippet;
}

export interface YouTubePlaylistItem {
  id?: string;
  snippet?: YouTubeSnippet;
  contentDetails?: {
    itemCount?: number;
  };
}

// Fallback data representing @SaihejMotion YouTube Kids Channel with real videoIds and thumbnails
const FALLBACK_STATS: YouTubeStats = {
  subscriberCount: "1.16K+",
  rawSubscribers: 1160,
  videoCount: "252+",
  rawVideos: 252,
  viewCount: "107K+",
  rawViews: 107400,
};

const FALLBACK_FEATURED_VIDEOS: VideoModalData[] = [
  {
    title: "Aloo Kachaloo Beta Kahan Gaye The | Hindi Rhymes for Babies | Kids Cartoon | Chintu 4K",
    duration: "3:30",
    views: "29.1K",
    uploadDate: "1 month ago",
    category: "4K HINDI RHYME",
    description: "Teach toddlers about vegetables and family bonds with playful singing potatoes and brinjals!",
    videoId: "SDXfWhIjxaE",
    thumbnailUrl: "https://i.ytimg.com/vi/SDXfWhIjxaE/maxresdefault.jpg",
  },
  {
    title: "Aaj Mangalwar Hai + Kalu Madari Aaya + Lakdi Ki Kathi | Hindi Rhymes for Kids | Chintu 4K",
    duration: "4:12",
    views: "34.5K",
    uploadDate: "3 weeks ago",
    category: "POPULAR RHYMES",
    description: "Aaj Mangalwar hai chuhe ko bukhar hai! Fun-filled non-stop Hindi nursery rhymes for children.",
    videoId: "xdyykKifm3w",
    thumbnailUrl: "https://i.ytimg.com/vi/xdyykKifm3w/maxresdefault.jpg",
  },
  {
    title: "Billi Mausi Billi Mausi | Hindi Rhymes for Babies | Animal Cartoon | Chintu 4K",
    duration: "3:15",
    views: "42.8K",
    uploadDate: "2 weeks ago",
    category: "ANIMALS",
    description: "Sing along with cute Billi Mausi and her little kittens in a vibrant courtyard full of flowers.",
    videoId: "0PKhCycLdb8",
    thumbnailUrl: "https://i.ytimg.com/vi/0PKhCycLdb8/maxresdefault.jpg",
  },
  {
    title: "Kalu Madari Aaya & More | कालू मदारी आया | Non Stop Hindi Rhymes for Kids",
    duration: "5:20",
    views: "38.2K",
    uploadDate: "1 month ago",
    category: "CLASSIC RHYMES",
    description: "Watch Chintu and his monkey friend dance to the classic Kalu Madari song in stunning 4K 3D animation!",
    videoId: "arPdeDmLJGM",
    thumbnailUrl: "https://i.ytimg.com/vi/arPdeDmLJGM/maxresdefault.jpg",
  },
  {
    title: "Mummy Ki Roti Gol Gol + More | Hindi Rhymes for Babies | Kids Cartoon | Chintu 4K",
    duration: "3:45",
    views: "25.4K",
    uploadDate: "3 weeks ago",
    category: "FAMILY",
    description: "Mummy ki roti gol gol, papa ka paisa gol gol! Joyful family nursery rhymes in Hindi.",
    videoId: "LOqBz7Fy0Hw",
    thumbnailUrl: "https://i.ytimg.com/vi/LOqBz7Fy0Hw/maxresdefault.jpg",
  },
  {
    title: "Gaiya Meri Gaiya + Billi + Chidiya Rani | Hindi Rhymes for Kids | Chintu Cartoon 4K",
    duration: "4:05",
    views: "31.0K",
    uploadDate: "2 weeks ago",
    category: "ANIMALS",
    description: "A soothing, melodious Hindi rhyme about our gentle cow friend, perfect for preschool kids.",
    videoId: "9pKDZzVCj_U",
    thumbnailUrl: "https://i.ytimg.com/vi/9pKDZzVCj_U/maxresdefault.jpg",
  },
];

const FALLBACK_LATEST_VIDEOS: VideoModalData[] = [
  {
    title: "Gaiya Meri Aati Hai | Dancing Cow Song | गइया गइया ठुम ठुम | Kids Hindi Rhymes | Saihej Motion 4K",
    duration: "2:07",
    views: "14.2K",
    uploadDate: "1 day ago",
    category: "NEW UPLOAD",
    description: "Gaiya Gaiya Thum Thum! Chintu aur uski pyaari dancing gaiya ka dhamakedaar 3D dance song!",
    videoId: "iZC7_cmOzWM",
    thumbnailUrl: "https://i.ytimg.com/vi/iZC7_cmOzWM/maxresdefault.jpg",
  },
  {
    title: "Billi Mausi Billi Mausi | Meow Meow Billi | Hindi Rhymes for Babies | Animal Cartoon | Chintu 4K",
    duration: "3:24",
    views: "18.9K",
    uploadDate: "4 days ago",
    category: "ANIMALS",
    description: "Dekho Chintu ki pyari si Billi Mausi! Yeh funny 3D animated Hindi nursery rhyme aapke babies ko nachne pe majboor kar degi.",
    videoId: "RQpkycuiO_8",
    thumbnailUrl: "https://i.ytimg.com/vi/RQpkycuiO_8/maxresdefault.jpg",
  },
  {
    title: "Aloo Kachaloo + Main Tota Hare Rang Ka + Chanda Mama Door Ke | 3 Best Hindi Rhymes | Chintu 4K",
    duration: "3:50",
    views: "22.4K",
    uploadDate: "1 week ago",
    category: "BEST RHYMES",
    description: "Aaj hum laye hain 3 superhit Hindi nursery rhymes ek hi video mein! Watch Mithu the parrot fly and more!",
    videoId: "cMuYu0IDFiY",
    thumbnailUrl: "https://i.ytimg.com/vi/cMuYu0IDFiY/maxresdefault.jpg",
  },
  {
    title: "Upar Pankha Chalta Hai | Hindi Rhymes for Babies | Kids Cartoon | Chintu 4K",
    duration: "2:55",
    views: "19.6K",
    uploadDate: "1 week ago",
    category: "CLASSIC",
    description: "Upar pankha chalta hai niche munna sota hai! Beloved nursery lullaby with Chintu.",
    videoId: "UbFu-SBcBHs",
    thumbnailUrl: "https://i.ytimg.com/vi/UbFu-SBcBHs/maxresdefault.jpg",
  },
  {
    title: "Gubbare Wala Aaya | Hindi Rhymes for Babies | Bal Geet | Chintu Cartoon 4K",
    duration: "3:10",
    views: "16.8K",
    uploadDate: "2 weeks ago",
    category: "FUN RHYME",
    description: "Rang birange gubbare wala aaya! Colorful balloon rhyme for toddlers.",
    videoId: "Dx42YS9WO_k",
    thumbnailUrl: "https://i.ytimg.com/vi/Dx42YS9WO_k/maxresdefault.jpg",
  },
  {
    title: "Nani Teri Morni | The Peacocks Took Your Peacock | Hindi Rhyme For Kids",
    duration: "3:40",
    views: "21.1K",
    uploadDate: "2 weeks ago",
    category: "FAMILY",
    description: "Nani teri morni ko mor le gaye! A heartwarming and funny peacock adventure.",
    videoId: "jDpIkWwuz8c",
    thumbnailUrl: "https://i.ytimg.com/vi/jDpIkWwuz8c/maxresdefault.jpg",
  },
];

const FALLBACK_SHORTS: VideoModalData[] = [
  {
    title: "मैं तोता हरे रंग का हूँ! #cartoon#shorts #animation #hindiryhmes",
    duration: "0:38",
    views: "35.2K",
    uploadDate: "5 days ago",
    category: "SHORTS",
    videoId: "xulcKzvDoeg",
    thumbnailUrl: "https://i.ytimg.com/vi/xulcKzvDoeg/hqdefault.jpg",
  },
  {
    title: "मिठू मिठू मैं करता! #shorts #animation #maintotamaintotahararang #nuseryrhymes",
    duration: "0:35",
    views: "28.4K",
    uploadDate: "1 week ago",
    category: "SHORTS",
    videoId: "sJxtEKK2o_I",
    thumbnailUrl: "https://i.ytimg.com/vi/sJxtEKK2o_I/hqdefault.jpg",
  },
  {
    title: "Chintu Ne Seekha SORRY Bolna! 🐱✨ | Bachon Ki Kahani #shorts",
    duration: "0:45",
    views: "41.9K",
    uploadDate: "1 week ago",
    category: "SHORTS",
    videoId: "wohbncbGGp8",
    thumbnailUrl: "https://i.ytimg.com/vi/wohbncbGGp8/hqdefault.jpg",
  },
  {
    title: "Green Balloon Escapes! Chaos at the Fair! #shorts #hindirhymes",
    duration: "0:40",
    views: "19.5K",
    uploadDate: "2 weeks ago",
    category: "SHORTS",
    videoId: "PBUZmTS6QoU",
    thumbnailUrl: "https://i.ytimg.com/vi/PBUZmTS6QoU/hqdefault.jpg",
  },
  {
    title: "चिन्तू की मंडी में आलू कचालू ने कद्दू को देखा! 🎃#shorts #funny",
    duration: "0:42",
    views: "32.1K",
    uploadDate: "2 weeks ago",
    category: "SHORTS",
    videoId: "a-68yVrWKIA",
    thumbnailUrl: "https://i.ytimg.com/vi/a-68yVrWKIA/hqdefault.jpg",
  },
  {
    title: "आलू कचालू का कांड! 😂🥕 #shorts #funny",
    duration: "0:39",
    views: "48.0K",
    uploadDate: "3 weeks ago",
    category: "SHORTS",
    videoId: "RBr5xnZh3z8",
    thumbnailUrl: "https://i.ytimg.com/vi/RBr5xnZh3z8/hqdefault.jpg",
  },
  {
    title: "Laloo the Red Balloon — Main Hoon Sabse Khaas! #shorts",
    duration: "0:50",
    views: "24.6K",
    uploadDate: "3 weeks ago",
    category: "SHORTS",
    videoId: "zmVKio-q6-c",
    thumbnailUrl: "https://i.ytimg.com/vi/zmVKio-q6-c/hqdefault.jpg",
  },
  {
    title: "डमरू की थाप पर भालू का अनोखा नाच #kidscartoon #shorts",
    duration: "0:48",
    views: "29.3K",
    uploadDate: "1 month ago",
    category: "SHORTS",
    videoId: "UPfRfNpynnc",
    thumbnailUrl: "https://i.ytimg.com/vi/UPfRfNpynnc/hqdefault.jpg",
  },
];

const FALLBACK_PLAYLISTS: YouTubePlaylist[] = [
  {
    title: "🎭 Chintu Cartoon Series",
    shortDescription: "Hilarious 4K animated stories and moral adventures with Chintu and his woodland friends.",
    videoCount: "30+ Videos",
    badge: "SERIES",
    playlistId: "PLq8CI5K1JJZfpdvX95lsbW3xBZXLQqRmA",
    thumbnailUrl: "https://i.ytimg.com/vi/iZC7_cmOzWM/maxresdefault.jpg",
  },
  {
    title: "🐵 Bandar Mama Series",
    shortDescription: "Bandar Mama Pahan Pajama! Funny monkey songs and jungle escapades for preschoolers.",
    videoCount: "7+ Videos",
    badge: "KIDS FAVORITE",
    playlistId: "PLq8CI5K1JJZfNKGeQ_VKk3eLdxRuu4FNk",
    thumbnailUrl: "https://i.ytimg.com/vi/RQpkycuiO_8/maxresdefault.jpg",
  },
  {
    title: "🌟 Top Hindi Rhymes Collection",
    shortDescription: "Non-stop Hindi nursery rhymes and traditional songs perfect for sing-alongs and bedtime.",
    videoCount: "23+ Videos",
    badge: "BEST SELLER",
    playlistId: "PLq8CI5K1JJZfAvrVgYGhmLxyOTSINf-WG",
    thumbnailUrl: "https://i.ytimg.com/vi/SDXfWhIjxaE/maxresdefault.jpg",
  },
  {
    title: "😂 Funny Kids Shorts",
    shortDescription: "Bite-sized 60-second fun rhymes, quick dances, and Chintu's hilarious moments.",
    videoCount: "28+ Shorts",
    badge: "TRENDING",
    playlistId: "PLq8CI5K1JJZefimjtkD6hgO-EakRN_ql-",
    thumbnailUrl: "https://i.ytimg.com/vi/xulcKzvDoeg/hqdefault.jpg",
  },
  {
    title: "🎉 Festival Songs for Kids",
    shortDescription: "Celebrate Diwali, Holi, Raksha Bandhan, and Indian festivals with festive children's songs.",
    videoCount: "9+ Videos",
    badge: "CULTURAL",
    playlistId: "PLq8CI5K1JJZfNx1y8n1rEFklzuPoQugFD",
    thumbnailUrl: "https://i.ytimg.com/vi/cMuYu0IDFiY/maxresdefault.jpg",
  },
];

/**
 * Helper to format raw numbers into readable strings (e.g. 1160 -> "1.16K+", 107400 -> "107K+")
 */
export function formatCount(count: number): string {
  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(2)}M+`;
  }
  if (count >= 1_000) {
    const formatted = (count / 1_000).toFixed(count >= 10_000 ? 0 : 2);
    return `${formatted.replace(/\.00$/, "")}K+`;
  }
  return `${count}+`;
}

/**
 * Helper to format ISO 8601 duration string from YouTube API (e.g. PT3M15S -> "3:15")
 */
export function formatDuration(isoDuration: string): string {
  if (!isoDuration) return "3:00";
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "3:00";
  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const seconds = match[3] ? parseInt(match[3], 10) : 0;
  const secStr = seconds.toString().padStart(2, "0");
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${secStr}`;
  }
  return `${minutes}:${secStr}`;
}

/**
 * Checks if a video is a YouTube Short based on title or duration
 */
export function isShortVideo(title: string, durationStr: string): boolean {
  if (title && title.toLowerCase().includes("#short")) return true;
  if (!durationStr) return false;
  const parts = durationStr.split(":").map(Number);
  if (parts.length === 2 && parts[0] === 0) return true; // e.g. 0:45
  if (parts.length === 2 && parts[0] === 1 && parts[1] === 0) return true; // exactly 1:00
  return false;
}

/**
 * Extracts the highest quality thumbnail available from YouTube API snippet
 */
export function getBestThumbnailUrl(snippet: YouTubeSnippet | undefined, videoId: string): string {
  const t = snippet?.thumbnails;
  if (t?.maxres?.url) return t.maxres.url;
  if (t?.high?.url) return t.high.url;
  if (t?.medium?.url) return t.medium.url;
  if (t?.default?.url) return t.default.url;
  if (videoId) return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  return "";
}

/**
 * Helper to fetch detailed stats and snippet information for a list of video IDs
 */
async function fetchVideoDetails(videoIds: string[], apiKey: string): Promise<VideoModalData[]> {
  if (!videoIds || videoIds.length === 0) return [];
  const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds.join(",")}&key=${apiKey}`;
  const detailsRes = await fetch(detailsUrl, { next: { revalidate: 3600 } });
  if (!detailsRes.ok) return [];

  const detailsJson = await detailsRes.json();
  return (detailsJson.items || []).map((v: YouTubeVideoItem) => {
    const rawViews = parseInt(v.statistics?.viewCount || "15000", 10);
    const date = new Date(v.snippet?.publishedAt || Date.now());
    const diffDays = Math.max(1, Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24)));
    let uploadDate = `${diffDays} days ago`;
    if (diffDays > 30) {
      uploadDate = `${Math.floor(diffDays / 30)} months ago`;
    } else if (diffDays > 7) {
      uploadDate = `${Math.floor(diffDays / 7)} weeks ago`;
    }

    const duration = formatDuration(v.contentDetails?.duration || "");
    const title = v.snippet?.title || "";

    return {
      title,
      duration,
      views: formatCount(rawViews),
      uploadDate,
      category: isShortVideo(title, duration) ? "SHORTS" : "4K HINDI RHYME",
      description: v.snippet?.description || "Watch this delightful 4K Hindi nursery rhyme adventure on Saihej Motion!",
      videoId: v.id,
      thumbnailUrl: getBestThumbnailUrl(v.snippet, v.id || ""),
    };
  });
}

/**
 * Fetches channel statistics, videos, shorts, and playlists from YouTube Data API v3
 * with seamless fallback to curated @SaihejMotion channel data.
 */
export async function getYouTubeChannelData(): Promise<YouTubeChannelData> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID || "UC...";

  if (!apiKey || !channelId || channelId === "UC...") {
    return {
      stats: FALLBACK_STATS,
      featuredVideos: FALLBACK_FEATURED_VIDEOS,
      latestVideos: FALLBACK_LATEST_VIDEOS,
      shorts: FALLBACK_SHORTS,
      playlists: FALLBACK_PLAYLISTS,
      isLiveApi: false,
    };
  }

  try {
    // 1. Fetch channel statistics
    const statsUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
    const statsRes = await fetch(statsUrl, { next: { revalidate: 3600 } });
    let stats = FALLBACK_STATS;
    if (statsRes.ok) {
      const statsJson = await statsRes.json();
      const channelItem = statsJson.items?.[0];
      if (channelItem?.statistics) {
        const rawSubscribers = parseInt(channelItem.statistics.subscriberCount || "1160", 10);
        const rawVideos = parseInt(channelItem.statistics.videoCount || "252", 10);
        const rawViews = parseInt(channelItem.statistics.viewCount || "107400", 10);

        stats = {
          subscriberCount: formatCount(rawSubscribers),
          rawSubscribers,
          videoCount: formatCount(rawVideos),
          rawVideos,
          viewCount: formatCount(rawViews),
          rawViews,
        };
      }
    }

    // 2. Fetch Popular Videos (order=viewCount)
    let featuredVideos = FALLBACK_FEATURED_VIDEOS;
    try {
      const popUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=viewCount&type=video&maxResults=15&key=${apiKey}`;
      const popRes = await fetch(popUrl, { next: { revalidate: 3600 } });
      if (popRes.ok) {
        const popJson = await popRes.json();
        const items = popJson.items || [];
        const ids = items.map((i: YouTubeSearchItem) => i.id?.videoId || "").filter(Boolean);
        const fullDetails = await fetchVideoDetails(ids, apiKey);
        const onlyFullVideos = fullDetails.filter((v) => !isShortVideo(v.title, v.duration));
        if (onlyFullVideos.length >= 4) {
          featuredVideos = onlyFullVideos.slice(0, 6);
        }
      }
    } catch (e) {
      console.warn("Failed fetching popular videos:", e);
    }

    // 3. Fetch Latest Videos (order=date)
    let latestVideos = FALLBACK_LATEST_VIDEOS;
    let newShortsFromLatest: VideoModalData[] = [];
    try {
      const latestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=15&key=${apiKey}`;
      const latestRes = await fetch(latestUrl, { next: { revalidate: 3600 } });
      if (latestRes.ok) {
        const latestJson = await latestRes.json();
        const items = latestJson.items || [];
        const ids = items.map((i: YouTubeSearchItem) => i.id?.videoId || "").filter(Boolean);
        const fullDetails = await fetchVideoDetails(ids, apiKey);
        const onlyFullVideos = fullDetails.filter((v) => !isShortVideo(v.title, v.duration));
        newShortsFromLatest = fullDetails.filter((v) => isShortVideo(v.title, v.duration));
        if (onlyFullVideos.length >= 4) {
          latestVideos = onlyFullVideos.slice(0, 6);
        }
      }
    } catch (e) {
      console.warn("Failed fetching latest videos:", e);
    }

    // 4. Fetch Shorts specifically from channel
    let shorts = FALLBACK_SHORTS;
    try {
      const shortsUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&videoDuration=short&maxResults=15&key=${apiKey}`;
      const shortsRes = await fetch(shortsUrl, { next: { revalidate: 3600 } });
      if (shortsRes.ok) {
        const shortsJson = await shortsRes.json();
        const items = shortsJson.items || [];
        const ids = items.map((i: YouTubeSearchItem) => i.id?.videoId || "").filter(Boolean);
        const fullDetails = await fetchVideoDetails(ids, apiKey);
        const onlyShorts = fullDetails.filter((v) => isShortVideo(v.title, v.duration));

        // Combine and deduplicate shorts by videoId
        const combined = [...onlyShorts, ...newShortsFromLatest];
        const uniqueMap = new Map<string, VideoModalData>();
        for (const s of combined) {
          if (s.videoId && !uniqueMap.has(s.videoId)) {
            uniqueMap.set(s.videoId, s);
          }
        }
        const uniqueShorts = Array.from(uniqueMap.values());
        if (uniqueShorts.length >= 4) {
          shorts = uniqueShorts.slice(0, 8);
        }
      }
    } catch (e) {
      console.warn("Failed fetching shorts:", e);
    }

    // 5. Fetch Playlists from channel
    let playlists = FALLBACK_PLAYLISTS;
    try {
      const plUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${channelId}&maxResults=10&key=${apiKey}`;
      const plRes = await fetch(plUrl, { next: { revalidate: 3600 } });
      if (plRes.ok) {
        const plJson = await plRes.json();
        const items = plJson.items || [];
        if (items.length >= 3) {
          playlists = items.map((item: YouTubePlaylistItem) => ({
            title: item.snippet?.title || "Saihej Motion Playlist",
            shortDescription: item.snippet?.description || "Curated collection of 4K Hindi nursery rhymes and cartoon adventures.",
            videoCount: `${item.contentDetails?.itemCount || 10}+ Videos`,
            badge: "PLAYLIST",
            playlistId: item.id,
            thumbnailUrl: getBestThumbnailUrl(item.snippet, ""),
          }));
        }
      }
    } catch (e) {
      console.warn("Failed fetching playlists:", e);
    }

    return {
      stats,
      featuredVideos,
      latestVideos,
      shorts,
      playlists,
      isLiveApi: true,
    };
  } catch (err) {
    console.warn("YouTube Data API call failed, falling back to curated channel data:", err);
    return {
      stats: FALLBACK_STATS,
      featuredVideos: FALLBACK_FEATURED_VIDEOS,
      latestVideos: FALLBACK_LATEST_VIDEOS,
      shorts: FALLBACK_SHORTS,
      playlists: FALLBACK_PLAYLISTS,
      isLiveApi: false,
    };
  }
}
