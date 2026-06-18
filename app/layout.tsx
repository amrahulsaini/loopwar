import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import CursorSparkle from "./components/CursorSparkle";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";

const patrick = Patrick_Hand({ variable: "--font-patrick", weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://loopwar.dev"),
  title: {
    default: "LOOPWAR — Product & Engineering Studio",
    template: "%s · LOOPWAR",
  },
  description:
    "LOOPWAR is a product & engineering studio. We design, build and ship websites, apps and AI products — for clients and as our own ventures.",
  openGraph: {
    title: "LOOPWAR — Product & Engineering Studio",
    description: "We design, build and ship digital products that earn their keep.",
    url: "https://loopwar.dev",
    siteName: "LOOPWAR",
    type: "website",
  },
  icons: {
    icon: [{ url: "/loopwar-shortlogoforfaviconsadnicons.png", type: "image/png" }],
    shortcut: [{ url: "/loopwar-shortlogoforfaviconsadnicons.png", type: "image/png" }],
    apple: [{ url: "/loopwar-shortlogoforfaviconsadnicons.png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={patrick.variable}>
      <body>
        <SmoothScroll />
        <ScrollProgress />
        <CursorSparkle />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
