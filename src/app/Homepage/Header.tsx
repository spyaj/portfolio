"use client";

import React, { useState } from "react";

import dynamic from "next/dynamic";
import Link from "next/link";

import { Download } from "lucide-react";

// Dynamic import for theme toggle (client-only)
const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary sticky top-0 z-40 w-full border-b border-border backdrop-blur-lg transition-colors duration-500">
      <div className="container flex items-center justify-between py-4 sm:py-6 lg:py-8">
        <Link
          href="/"
          className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-2xl font-bold tracking-tighter text-transparent"
        >
          Pramod Joshi
        </Link>
        <nav className="hidden items-center gap-x-6 md:flex">
          <Link
            href="#about"
            className="text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Projects
          </Link>
          <Link
            href="#fun"
            className="text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Fun Zone
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden items-center gap-x-4 md:flex">
          <a
            href="/resume.pdf"
            download="My_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-500"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <button
            className="rounded-lg p-2 text-foreground"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container pb-6 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-foreground">
            <Link href="#about" onClick={handleMenuToggle}>
              About
            </Link>
            <Link href="#skills" onClick={handleMenuToggle}>
              Skills
            </Link>
            <Link href="#projects" onClick={handleMenuToggle}>
              Projects
            </Link>
            <Link href="#fun" onClick={handleMenuToggle}>
              Fun Zone
            </Link>
            <Link href="#contact" onClick={handleMenuToggle}>
              Contact
            </Link>
          </nav>
          <div className="mt-6 flex flex-col gap-4">
            <a
              href="/resume.pdf"
              download="My_Resume.pdf"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-500"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
