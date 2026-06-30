import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Space_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const title = `${site.profile.name} — ${site.profile.role}`;
const description = `${site.profile.shortName} is a ${site.profile.role} based in ${site.profile.location}. ${site.profile.summary}`;

// Self-hosted via next/font (no render-blocking external requests). Each exposes
// a CSS variable consumed by the Tailwind @theme tokens in globals.css.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  title: {
    default: title,
    template: `%s · ${site.profile.shortName} Shayon`,
  },
  description,
  applicationName: `${site.profile.shortName} Shayon — Portfolio`,
  authors: [{ name: site.profile.name, url: site.seo.url }],
  creator: site.profile.name,
  keywords: [
    "Flutter developer",
    "cross-platform mobile developer",
    "Full-stack developer",
    "Next.js developer",
    "React developer",
    site.profile.name,
    site.profile.location,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.seo.url,
    siteName: `${site.profile.shortName} Shayon`,
    title,
    description,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ECE7DC",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        {/* Keyboard skip-link: first focusable element, visually hidden until focused. */}
        <a
          href="#main"
          className="sr-only rounded-full bg-accent px-4 py-2 text-sm font-medium text-cream-text focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
