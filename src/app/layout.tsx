import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pramod Joshi - Portfolio",
  description: "Portfolio website of Pramod Joshi, a passionate tech developer.",
  openGraph: {
    title: "Pramod Joshi - Portfolio",
    description: "Explore my tech projects and hobbies.",
    images: "/og-image.png",
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
