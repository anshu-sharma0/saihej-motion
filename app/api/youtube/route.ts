import { NextResponse } from "next/server";
import { getYouTubeChannelData } from "../../../lib/youtube";

// Revalidate server cache every 5 minutes (300 seconds)
export const revalidate = 300;

export async function GET() {
  try {
    const data = await getYouTubeChannelData();
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Error in /api/youtube route:", error);
    // Even if route crashes, getYouTubeChannelData() handles fallback gracefully
    const fallbackData = await getYouTubeChannelData();
    return NextResponse.json(fallbackData, { status: 200 });
  }
}
