import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dominick99.github.io"),
  title: "Dominick Martinez | AI/ML Engineer",
  description: "AI/ML engineer and researcher working across scientific machine learning, high-performance computing, and intelligent systems.",
  openGraph: {
    title: "Dominick Martinez | AI/ML Engineer",
    description: "Scientific machine learning, high-performance computing, and intelligent systems.",
    url: "https://dominick99.github.io",
    siteName: "Dominick Martinez",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "Dominick Martinez - AI / ML Engineer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominick Martinez | AI/ML Engineer",
    description: "Scientific machine learning, high-performance computing, and intelligent systems.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
