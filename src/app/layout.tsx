import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MD Asif Afroj Shayon - Flutter Developer Portfolio",
  description: "Professional portfolio of MD Asif Afroj Shayon, Full-Stack Developer specializing in Flutter. 5+ years of experience building mobile applications.",
  keywords: "Flutter Developer, Mobile App Development, Full Stack Developer, Next.js, React, Dart",
  authors: [{ name: "MD Asif Afroj Shayon" }],
  metadataBase: new URL("https://aashayon.github.io"),
  icons: {
    icon: "/images/avatar.png",
    apple: "/images/avatar.png",
  },
  openGraph: {
    title: "MD Asif Afroj Shayon - Flutter Developer",
    description: "Professional Flutter Developer with 5+ years of experience",
    type: "website",
    images: [{ url: "/images/avatar.png" }],
  },
  twitter: {
    card: "summary",
    title: "MD Asif Afroj Shayon - Flutter Developer",
    description: "Professional Flutter Developer with 5+ years of experience",
    images: ["/images/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
