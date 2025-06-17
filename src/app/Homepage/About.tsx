import Image from "next/image";

import { Avatar } from "@/assets/images";
import { Mail, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container grid items-center gap-12 md:grid-cols-5">
        <div className="relative flex justify-center md:col-span-2">
          <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-30 blur-xl"></div>
          <Image
            src={Avatar}
            alt="Pramod Joshi"
            className="relative h-64 w-64 rounded-full border-4 border-card object-cover shadow-2xl md:h-80 md:w-80"
            width={400}
            height={400}
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/400x400/FFFFFF/333333?text=PJ";
            }}
          />
        </div>
        <div className="md:col-span-3">
          <h1 className="mb-4 text-h1 font-extrabold tracking-tighter">
            <span className="block">Disciplined & Enthusiastic</span>
            <span className="block bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
              Tech Developer
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-secondary">
            Currently enrolled in a Bachelor of Computer Engineering with freelancing experience.
            I'm passionate about building beautiful and functional web experiences, always aiming
            for superb customer service and communication.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-secondary">
              <MapPin className="h-5 w-5 text-emerald-500" /> Bharatpur, Nepal
            </div>
            <div className="flex items-center gap-2 text-sm text-secondary">
              <Mail className="h-5 w-5 text-rose-500" /> jaashish151@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
