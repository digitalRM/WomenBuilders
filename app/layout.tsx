import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Women Builders: The After Party | YC AI Startup School",
  description:
    "Join us for an afterparty following Y Combinator's YC AI Startup School on June 18, 2025. Come hang out with interns, engineers, and fellow founders & builders! Demo sessions, mini talks, and networking with lunch & snacks provided.",
  keywords: [
    "Women Builders",
    "Y Combinator",
    "YC AI Startup School",
    "After Party",
    "Networking",
    "Founders",
    "Engineers",
    "Startup",
    "AI",
    "Demo",
    "Mintlify",
    "Same.dev",
    "Koel Labs",
    "Tech Event",
    "San Francisco",
    "June 2025",
  ],
  authors: [{ name: "Women Builders Community" }],
  creator: "Women Builders",
  publisher: "Women Builders",
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
    locale: "en_US",
    url: "https://womenbuilders.dev",
    title: "Women Builders: The After Party | YC AI Startup School",
    description:
      "Join us for an afterparty following Y Combinator's YC AI Startup School on June 18, 2025. Come hang out with interns, engineers, and fellow founders & builders!",
    images: [
      {
        url: "/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Women Builders After Party - June 18, 2025",
      },
    ],
    siteName: "Women Builders",
  },
  twitter: {
    card: "summary_large_image",
    title: "Women Builders: The After Party | YC AI Startup School",
    description:
      "Join us for an afterparty following Y Combinator's YC AI Startup School on June 18, 2025. Demo sessions, networking, and more!",
    images: ["/openGraph.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "technology",
  alternates: {
    canonical: "https://womenbuilders.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
