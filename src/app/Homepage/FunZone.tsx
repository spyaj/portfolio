"use client";

import CricketAnimation from "./CricketAnimation";
import MusicAnimation from "./MusicAnimation";
import TicTacToe from "./TicTacToe";

export default function FunZone() {
  return (
    <section id="fun" className="py-20 md:py-28">
      <div className="container text-center">
        <h2 className="mb-4 text-h2 font-bold tracking-tight">The Fun Zone</h2>
        <p className="mb-16 text-lg text-secondary">When I'm not coding, here's what I enjoy...</p>
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Music section */}
          <div className="rounded-2xl bg-card p-8 shadow-xl">
            <h3 className="mb-4 text-2xl font-bold text-card-foreground">Enjoying Music 🎶</h3>
            <p className="mb-4 text-secondary">What i'm vibing to</p>
            <MusicAnimation />
          </div>
          <div className="rounded-2xl bg-card p-8 shadow-xl">
            <h3 className="mb-4 text-2xl font-bold text-card-foreground">Watching Cricket 🏏</h3>
            <p className="mb-4 text-secondary">Love the thrill and strategy of the game!</p>
            <CricketAnimation />
          </div>
        </div>
        <div className="mt-24">
          <h3 className="mb-4 text-2xl font-bold text-card-foreground">Fancy a Game?</h3>
          <p className="mb-8 text-secondary">Let's see if you can beat the computer!</p>
          <TicTacToe />
        </div>
      </div>
    </section>
  );
}
