import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pramodjoshi.com.np"),
  title: {
    default: "Pramod Joshi | Frontend and Full-Stack Developer",
    template: "%s | Pramod Joshi",
  },
  description:
    "Portfolio of Pramod Joshi, a Computer Engineering student and freelance web developer building clean, responsive web experiences with React, Next.js, and Django.",
  applicationName: "Pramod Joshi Portfolio",
  keywords: [
    "Pramod Joshi",
    "portfolio",
    "frontend developer",
    "full-stack developer",
    "React",
    "Next.js",
    "Django",
    "Nepal developer",
  ],
  authors: [{ name: "Pramod Joshi" }],
  creator: "Pramod Joshi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Pramod Joshi | Frontend and Full-Stack Developer",
    description:
      "Explore projects, certifications, and contact details for Pramod Joshi.",
    siteName: "Pramod Joshi Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pramod Joshi | Frontend and Full-Stack Developer",
    description:
      "Minimal portfolio with projects, skills, certifications, and contact details.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
