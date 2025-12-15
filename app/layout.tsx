import type { Metadata } from "next";
import { Inconsolata, Montserrat } from "next/font/google";
import "./globals.css";

// Fonts: Headings -> Montserrat, Body -> Inconsolata (Daktilo/typewriter vibe)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  display: "swap",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loopwar",
  description: "Loopwar – brochure site",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={`${montserrat.variable} ${inconsolata.variable}`}>
        <header className="container-page" style={{ paddingBlock: "0.75rem" }}>
          <a href="/" className="inline-flex items-center gap-3" aria-label="LoopWar home">
            <img
              src="/favicon.svg"
              alt="LoopWar logo"
              width={40}
              height={40}
              style={{ borderRadius: "12px", objectFit: "cover", border: "1px solid var(--color-border)" }}
            />
            <span style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, color: "var(--color-primary)" }}>
              LoopWar
            </span>
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}
