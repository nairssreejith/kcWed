import React from "react";
import { hobbies } from "../mock";
import { Film, Mountain, Car, Sparkles } from "lucide-react";
import kcCinema from "../assets/kc-cinema.png";
import kcKedarnath from "../assets/kc-kedarnath.png";
import kcBrezza from "../assets/kc-brezza.png";

const iconMap = {
  Cinema: Film,
  Trekking: Mountain,
  "Road Therapy": Car,
  "Competitive Stillness": Sparkles
};

const imageMap = {
  Cinema: kcCinema,
  Trekking: kcKedarnath,
  "Road Therapy": kcBrezza
};

// Object position keeps face visible inside the framed photo
const focalMap = {
  Cinema: "center 25%",
  Trekking: "center 30%",
  "Road Therapy": "center 25%"
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
            const photo = imageMap[h.title];
            return (
              <article
                key={h.title}
                data-testid={`hobby-card-${h.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group kc-glass rounded-3xl p-6 md:p-7 flex flex-col min-h-[280px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(46,26,36,0.35)]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {photo ? (
                  <div
                    className="relative w-full h-40 md:h-44 rounded-2xl overflow-hidden mb-5"
                    style={{ boxShadow: "0 12px 30px -16px rgba(46,26,36,0.45)" }}
                  >
                    <img
                      src={photo}
                      alt={`KC — ${h.title}`}
                      data-testid={`hobby-image-${h.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: focalMap[h.title] || "center" }}
                    />
                    <div
                      className="absolute left-3 bottom-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md"
                      style={{ background: `${h.accent}E6`, color: "#FAF5EC" }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>
                ) : (
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: h.accent, color: "#FAF5EC" }}
                  >
                    <Icon size={20} />
                  </div>
                )}
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
