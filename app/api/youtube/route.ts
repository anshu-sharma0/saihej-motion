import { NextResponse } from "next/server";
import { getYouTubeChannelData } from "../../../lib/youtube";

// Force dynamic execution so Next.js fetches fresh YouTube stats on every API call
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const forceRefresh = searchParams.get("refresh") === "true";
    const data = await getYouTubeChannelData(forceRefresh);
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": forceRefresh
          ? "no-store, max-age=0"
          : "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch (error) {
    console.error("Error in /api/youtube route:", error);
    // Even if route crashes, getYouTubeChannelData() handles fallback gracefully
    const fallbackData = await getYouTubeChannelData(false);
    return NextResponse.json(fallbackData, { status: 200 });
  }
}
