import React from "react";
import { hobbies } from "../mock";
import { Film, Mountain, Car, Sparkles } from "lucide-react";

const iconMap = {
  Cinema: Film,
  Trekking: Mountain,
  "Road Therapy": Car,
  "Competitive Stillness": Sparkles
};

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-24 md:py-32 bg-[#F3EADA] relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <p className="font-mono-kc text-xs tracking-[0.3em] uppercase text-[#D96E3A]">B-roll</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.02] mt-4 text-[#141210]">
              Hobbies, with footnotes.
            </h2>
          </div>
          <span className="kc-tape">also: strong opinions.</span>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {hobbies.map((h, i) => {
            const Icon = iconMap[h.title] || Sparkles;
            return (
              <article
                key={h.title}
                className="group kc-glass rounded-3xl p-6 md:p-7 flex flex-col min-h-[280px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(46,26,36,0.35)]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: h.accent, color: "#FAF5EC" }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-2xl text-[#141210]">{h.title}</h3>
                <p className="font-mono-kc text-[11px] uppercase tracking-[0.2em] text-[#2E1A24]/60 mt-1">
                  {h.meta}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-[#2E1A24]/85 flex-1">{h.body}</p>
                <div className="mt-5 flex items-center gap-2 font-mono-kc text-[11px] uppercase tracking-[0.2em] text-[#2E1A24]/50 group-hover:text-[#D96E3A] transition-colors">
                  <span>{String(i + 1).padStart(2, "0")} / {String(hobbies.length).padStart(2, "0")}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
