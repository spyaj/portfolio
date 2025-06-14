"use client";

import { useEffect, useState } from "react";

import { ChevronsUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-8 bottom-8 z-50 transform animate-bounce rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] p-3 text-white shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="Scroll to top"
    >
      <ChevronsUp className="h-6 w-6" />
    </button>
  );
}
