import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pramod Joshi - Computer Engineering Student | Nepal | Portfolio",
  description:
    "The official portfolio of Pramod Joshi, a Computer Engineering graduate from United Technical College, Nepal. Explore my projects in web development, software engineering, and more. Contact me for collaboration.",
  keywords:
    "Pramod Joshi, Aashish Joshi, Computer Engineer, Nepal, United Technical College, spyaj, web developer, software engineer, portfolio, pramodjoshi.com.np",
  authors: [{ name: "Pramod Joshi" }, { name: "Aashish Joshi" }],
  creator: "Pramod Joshi",
  openGraph: {
    title: "Pramod Joshi - Computer Engineer Portfolio (Nepal)",
    description:
      "Discover the work of Pramod Joshi, a Computer Engineering professional from Nepal. Specializing in Nextjs, React, QA.",
    url: "https://pramodjoshi.com.np",
    siteName: "Pramod Joshi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pramod Joshi - Tech Portfolio | Nepal",
    description:
      "Explore the projects and skills of Pramod Joshi, a computer engineer based in Nepal.",
    creator: "@jaashish_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
