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
    icon: "/logo-final.ico",
    shortcut: "/logo-final.ico",
    apple: "/logo-final.ico",
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
        {/* Explicit favicon links (in addition to metadata). The version param busts cache. */}
        <link rel="icon" href="/logo-final.ico?v=2" sizes="any" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/logo-final.ico?v=2" />
        <link rel="shortcut icon" href="/logo-final.ico?v=2" type="image/x-icon" />
        {/* Ensure our favicon wins if a default /favicon.ico is injected by the framework */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{const head=document.head;const defaults=[...head.querySelectorAll('link[rel="icon"]')];defaults.forEach(l=>{const href=l.getAttribute('href')||'';if(/favicon\.ico/i.test(href)&&!/logo-final/.test(href)) l.parentElement&&l.parentElement.removeChild(l);});let link=[...head.querySelectorAll('link[rel="icon"]')].find(l=>/(logo-final\.ico)/.test(l.getAttribute('href')||''));if(!link){link=document.createElement('link');link.rel='icon';link.type='image/x-icon';link.sizes='any';link.href='/logo-final.ico?v=3';head.appendChild(link);} }catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${inconsolata.variable}`}>
        <header className="container-page" style={{ paddingBlock: "0.75rem" }}>
          <a href="/" className="inline-flex items-center gap-3" aria-label="LoopWar home">
            <img
              src="/logo-final.jpg"
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
