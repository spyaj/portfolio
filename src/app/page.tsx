"use client";

import About from "./Homepage/About";
import Footer from "./Homepage/Footer";
import FunZone from "./Homepage/FunZone";
import Header from "./Homepage/Header";
import Projects from "./Homepage/Projects";
import ScrollToTop from "./Homepage/ScrollToTop";
import Skills from "./Homepage/Skills";

export default function Home() {
  return (
    <div className="bg-background text-foreground transition-colors duration-500">
      <Header />
      <main className="container py-12 md:py-20">
        <About />
        <Skills />
        <Projects />
        <FunZone />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
