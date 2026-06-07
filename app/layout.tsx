import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

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
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
