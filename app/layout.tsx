import "./globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { PreloadResources } from "@/app/preload";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://ariellegoodman22.com"),
  title: {
    default: "Arielle Goodman",
    template: "%s | Arielle Goodman",
  },
  description: "Innovator, researcher, and strategist.",
  openGraph: {
    title: "Arielle Goodman",
    description: "Innovator, researcher, and strategist.",
    url: "https://www.ariellegoodman.com",
    siteName: "Arielle Goodman",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "Arielle Goodman",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased text-neutral-900 bg-white dark:text-neutral-100 dark:bg-[#111010]">
        <main className="">
          <Providers>
            <Navbar />
            {children}
            <Analytics />
            <PreloadResources />
          </Providers>
        </main>
      </body>
    </html>
  );
}