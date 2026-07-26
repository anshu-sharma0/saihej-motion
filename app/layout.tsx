import type { Metadata } from "next";
import { Fredoka, Nunito, Poppins } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Saihej Motion – Kids Songs | Rhymes | 3D Animation",
  description:
    "Welcome to Saihej Motion – your home for the best 4K Hindi Nursery Rhymes, Kids Songs, Educational Videos and Disney-Pixar style 3D Animations. Perfect for kids aged 2–8 years.",
  keywords: [
    "Saihej Motion",
    "Hindi Nursery Rhymes",
    "Kids Songs",
    "3D Animation",
    "Chintu Cartoon",
    "4K Animation",
    "Educational Kids Videos",
    "Toddler Songs",
    "Preschool Learning",
  ],
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
      <body className="min-h-full flex flex-col bg-[#FFFDF7] text-[#1F2937] overflow-x-hidden selection:bg-[#FFD93D] selection:text-[#1F2937]">
        {children}
      </body>
    </html>
  );
}
