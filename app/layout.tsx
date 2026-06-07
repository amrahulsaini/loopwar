import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import SmoothScroll from "./components/SmoothScroll";

const display = Inter_Tight({
  variable: "--font-display-face",
  display: "swap",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const sans = Inter({
  variable: "--font-sans-face",
  display: "swap",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loopwar.dev"),
  title: {
    default: "LoopWar — Product & Engineering Studio",
    template: "%s · LoopWar",
  },
  description:
    "LoopWar is a product & engineering studio that designs, builds and ships high‑performing websites, apps and AI products — and our own ventures like Xirevoa, MyAIDiary and CRMRS.",
  keywords: ["LoopWar", "web development", "app development", "AI products", "UI/UX design", "Xirevoa", "MyAIDiary", "CRMRS"],
  openGraph: {
    title: "LoopWar — Product & Engineering Studio",
    description:
      "We design, build and ship smart, beautiful digital products — websites, apps, AI tools and ventures.",
    url: "https://loopwar.dev",
    siteName: "LoopWar",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <SmoothScroll />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
