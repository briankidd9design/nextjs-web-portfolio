import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brian Kidd - UX Engineer & Front End Developer",
  description:
    "UX Engineer with 7+ years of experience creating accessible, intuitive interfaces. Specialized in React, TypeScript, and modern web development.",
  keywords:
    "UX Engineer, Front End Developer, React, TypeScript, Accessibility, WCAG, Web Development",
  authors: [{ name: "Brian Kidd", url: "https://briankiddmedia.com" }],
  creator: "Brian Kidd",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Brian Kidd - UX Engineer & Front End Developer",
    description:
      "Creating accessible, intuitive interfaces with 7+ years of experience in UX engineering and front-end development",
    url: "https://briankiddmedia.com",
    siteName: "Brian Kidd Portfolio",
    images: [
      {
        url: "/brian-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Brian Kidd - UX Engineer",
      },
    ],
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Kidd - UX Engineer & Front End Developer",
    description:
      "Creating accessible, intuitive interfaces with 7+ years of experience",
    images: ["/brian-photo.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
