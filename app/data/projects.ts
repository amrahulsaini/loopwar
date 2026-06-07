export type Project = {
  name: string;
  url: string;
  domain: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;       // full‑page screenshot
  logo?: string;       // brand mark for small avatars
  accent: string;
};

export type Venture = Project & {
  role: string; // Owner / Founder / CTO
};

/* ---- Client / freelance work ---- */
export const clientProjects: Project[] = [
  {
    name: "CaseBuddy",
    url: "https://casebuddy.co.in",
    domain: "casebuddy.co.in",
    category: "E‑Commerce",
    tagline: "Premium custom phone cases, designed online",
    description:
      "A direct‑to‑consumer store where customers design their own phone cases in a live editor and order premium, vibrant prints delivered across India.",
    features: ["Design‑your‑own editor", "Secure checkout & payments", "Catalog & order management", "Fast pan‑India delivery"],
    image: "/shots/casebuddy.png",
    logo: "/projects/casebuddy.png",
    accent: "#2563eb",
  },
  {
    name: "Mridang",
    url: "https://mridang.co.in",
    domain: "mridang.co.in",
    category: "Handcrafted Décor",
    tagline: "Handcrafted ring, haldi & mehendi platters",
    description:
      "An elegant storefront for a handcrafted décor brand — bespoke ring platters and wedding trays, with a curated catalog, custom‑order requests and rich product galleries.",
    features: ["Product catalog & galleries", "Custom order requests", "Banner / campaign management", "Mobile‑first storefront"],
    image: "/shots/mridang.png",
    logo: "/projects/mridang-logo.png",
    accent: "#d97706",
  },
  {
    name: "Tirupati Medix",
    url: "https://tirupatimedix.com",
    domain: "tirupatimedix.com",
    category: "Healthcare",
    tagline: "Your trusted online medicine store",
    description:
      "An online pharmacy and medical‑supplies platform for authentic medicines, wellness essentials, ostomy care and pathology products — with brand carousels and category browsing.",
    features: ["Medicine & product catalog", "Category & brand browsing", "Search & cart", "Wellness + medical supplies"],
    image: "/shots/tirupatimedix.png",
    logo: "/projects/tirupatimedix-logo.webp",
    accent: "#059669",
  },
  {
    name: "Carry Pack Logistics",
    url: "https://carrypacklogistics.com",
    domain: "carrypacklogistics.com",
    category: "Logistics",
    tagline: "Structured logistics. Transparent commitments.",
    description:
      "A logistics and warehousing company site offering vehicle transport, secure storage and door‑to‑door delivery across India, with online order booking and transparent pricing.",
    features: ["Online order booking", "Dedicated & shared transport", "Warehouse / storage solutions", "Door‑to‑door delivery"],
    image: "/shots/carrypack.png",
    logo: "/projects/carrypack-logo.webp",
    accent: "#0891b2",
  },
];

/* ---- Our own ventures / startups ---- */
export const ventures: Venture[] = [
  {
    name: "Xirevoa AI",
    role: "Founder & Owner",
    url: "https://xirevoa.com",
    domain: "xirevoa.com",
    category: "AI · Generative Media",
    tagline: "Showcase yourself in 500+ creative templates",
    description:
      "An AI photo platform that transforms your photos using 500+ ready‑made templates — new hairstyles, outfits and artistic looks in seconds. No prompts, no watermarks.",
    features: ["500+ AI templates", "No prompts needed", "Watermark‑free exports", "Instant transformations"],
    image: "/shots/xirevoa.png",
    accent: "#a855f7",
  },
  {
    name: "MyAIDiary",
    role: "Founder",
    url: "https://myaidiary.me",
    domain: "myaidiary.me",
    category: "AI · Productivity",
    tagline: "A privacy‑first diary with AI voice & insights",
    description:
      "A privacy‑first journaling app built for daily reflection. Capture notes by voice, surface patterns with AI insights, and own your data — with more AI features on the roadmap.",
    features: ["Voice‑to‑text journaling", "AI insights & patterns", "Privacy‑first by design", "Daily reflection flow"],
    image: "/shots/myaidiary.png",
    logo: "/projects/myaidiary.svg",
    accent: "#6366f1",
  },
  {
    name: "CRMRS",
    role: "Co‑founder & CTO",
    url: "https://crmrecoverysoftware.com",
    domain: "crmrecoverysoftware.com",
    category: "Fintech · SaaS",
    tagline: "Loan recovery & repossession, done right",
    description:
      "A multi‑tenant loan‑recovery platform with true per‑agency data isolation, live GPS agent tracking, instant offline record search and audit‑grade logging — shipping on Android & Windows.",
    features: ["Multi‑tenant isolation", "Live GPS agent tracking", "Offline record search", "Audit‑grade logging"],
    image: "/shots/crmrs.png",
    logo: "/projects/crmrs-logo.webp",
    accent: "#0ea5e9",
  },
];
