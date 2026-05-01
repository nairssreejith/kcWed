import React, { useEffect, useState } from "react";
import { ArrowDownRight, Play } from "lucide-react";
import { profile } from "../mock";
import { Button } from "./ui/button";

const Hero = () => {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const taglines = [profile.tagline, ...profile.taglineAlt];

  useEffect(() => {
    const id = setInterval(() => setTaglineIdx((i) => (i + 1) % taglines.length), 3800);
    return () => clearInterval(id);
  }, [taglines.length]);

  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* warm radial wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 10%, rgba(217,110,58,0.18), transparent 60%), radial-gradient(900px 500px at 90% 30%, rgba(31,74,67,0.12), transparent 60%)"
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* top meta row */}
        <div className="flex items-center justify-between mb-8 md:mb-12 kc-rise">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#D96E3A] animate-pulse" />
            <span className="font-mono-kc text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#2E1A24]/70">
              Reel 01 · Feature Length · Now Playing
            </span>
          </div>
          <span className="hidden md:block font-mono-kc text-xs tracking-[0.25em] uppercase text-[#2E1A24]/60">
            {profile.city}
          </span>
        </div>

        {/* Headline */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-8 kc-rise">
            <p className="font-hand text-2xl md:text-3xl text-[#D96E3A] mb-2">a life, slightly dramatized —</p>
            <h1 className="font-display font-semibold tracking-tight leading-[0.92] text-[#141210] text-[56px] sm:text-[84px] md:text-[120px] lg:text-[148px]">
              {profile.name}.
            </h1>
            <div className="mt-4 md:mt-6 max-w-xl">
              <p className="text-lg md:text-xl text-[#2E1A24]/80 leading-relaxed min-h-[56px] transition-all duration-500">
                {taglines[taglineIdx]}
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 flex md:justify-end">
            <div className="relative">
              <span className="kc-tape absolute -top-4 -left-4 rotate-[-6deg] z-10">engineer, mostly.</span>
              <div className="w-[280px] md:w-[320px] h-[360px] md:h-[420px] rounded-[28px] bg-[#2E1A24] text-[#FAF5EC] p-6 flex flex-col justify-between shadow-[0_20px_60px_-20px_rgba(46,26,36,0.45)] relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06]" style={{
                  background: "repeating-linear-gradient(45deg, #FAF5EC 0 2px, transparent 2px 8px)"
                }} />
                <div className="relative">
                  <p className="font-mono-kc text-[10px] tracking-[0.25em] uppercase text-[#E8B95E]">The Cast</p>
                  <p className="font-display text-2xl mt-2">{profile.fullTitle}</p>
                  <p className="font-mono-kc text-xs text-[#FAF5EC]/70 mt-1">as himself</p>
                </div>
                <div className="relative font-mono-kc text-xs space-y-1 text-[#FAF5EC]/80">
                  <div className="flex justify-between"><span>Age</span><span>{profile.age}</span></div>
                  <div className="flex justify-between"><span>Role</span><span>{profile.profession}</span></div>
                  <div className="flex justify-between"><span>Location</span><span>{profile.city}</span></div>
                  <div className="flex justify-between"><span>Wheels</span><span>{profile.car}</span></div>
                </div>
                <div className="relative flex items-center justify-between border-t border-[#FAF5EC]/15 pt-4">
                  <span className="font-mono-kc text-[10px] tracking-[0.25em] uppercase text-[#E8B95E]">Rated P</span>
                  <span className="font-mono-kc text-[10px] uppercase tracking-[0.2em] text-[#FAF5EC]/60">for Personality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats + CTA */}
        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-6">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl text-[#2E1A24]">{s.value}</div>
                <div className="font-mono-kc text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#2E1A24]/60 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-wrap gap-3 md:justify-end">
            <a href="#about">
              <Button className="kc-btn-primary rounded-full h-12 px-6 text-sm">
                <Play size={16} className="mr-2" /> Watch the trailer
              </Button>
            </a>
            <a href="#contact">
              <Button variant="ghost" className="kc-btn-ghost rounded-full h-12 px-6 text-sm">
                Say hi <ArrowDownRight size={16} className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
