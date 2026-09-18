import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito, Poppins } from "next/font/google";
import "./globals.css";
import { YouTubeProvider } from "../context/YouTubeContext";
import { JsonLdSchema } from "../components/seo/JsonLdSchema";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saihej-motion.com";

export const viewport: Viewport = {
  themeColor: "#FFD93D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saihej Motion – 4K Hindi Nursery Rhymes, Kids Songs & 3D Cartoons",
    template: "%s | Saihej Motion",
  },
  description:
    "Official website of Saihej Motion (@SaihejMotion)! Watch 4K 3D animated Hindi nursery rhymes, popular kids songs, Chintu cartoon stories, Aloo Kachaloo, Billi Mausi, and Gaiya Meri for toddlers & preschoolers.",
  keywords: [
    "Saihej Motion",
    "@SaihejMotion",
    "Hindi Nursery Rhymes",
    "Kids Songs Hindi",
    "3D Cartoon Rhymes",
    "Chintu Cartoon",
    "Aloo Kachaloo Beta",
    "Billi Mausi Billi Mausi",
    "Gaiya Meri Gaiya",
    "Lakdi Ki Kathi",
    "4K Animation Kids",
    "Toddler Songs",
    "Preschool Learning",
    "Bal Geet",
    "Indian Rhymes for Kids",
  ],
  authors: [{ name: "Saihej Motion", url: "https://www.youtube.com/@SaihejMotion" }],
  creator: "Saihej Motion",
  publisher: "Saihej Motion",
  formatDetection: {
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: siteUrl,
    title: "Saihej Motion – 4K Hindi Nursery Rhymes, Kids Songs & 3D Cartoons",
    description:
      "Watch high-quality 4K 3D Animated Hindi Nursery Rhymes and moral cartoon stories with Chintu, Mithu, and Gaiya! 100% kid-safe entertainment.",
    siteName: "Saihej Motion",
    images: [
      {
        url: `${siteUrl}/banner.png`,
        width: 1200,
        height: 630,
        alt: "Saihej Motion 4K Hindi Nursery Rhymes & 3D Cartoons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saihej Motion – 4K Hindi Nursery Rhymes & Kids Songs",
    description:
      "Cheerful 4K 3D animated Hindi rhymes for toddlers & kids! Aloo Kachaloo, Billi Mausi, Lakdi Ki Kathi & Chintu Cartoons.",
    images: [`${siteUrl}/banner.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <JsonLdSchema />
      </head>
      <body className="min-h-full flex flex-col bg-[#FFFDF7] text-[#1F2937] overflow-x-hidden selection:bg-[#FFD93D] selection:text-[#1F2937]">
        <YouTubeProvider>{children}</YouTubeProvider>
      </body>
    </html>
  );
}
