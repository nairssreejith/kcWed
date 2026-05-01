import React from "react";
import { about, profile } from "../mock";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono-kc text-xs tracking-[0.3em] uppercase text-[#D96E3A]">{about.kicker}</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.02] mt-4 text-[#141210]">
              {about.heading}
            </h2>
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3 font-mono-kc text-xs text-[#2E1A24]/70">
                <span className="w-8 h-px bg-[#2E1A24]/40" />
                <span>Chapter 01</span>
              </div>
              <span className="kc-tape self-start">hi, i'm {profile.name.toLowerCase()} —</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="space-y-6">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === 0 ? "text-xl md:text-2xl text-[#141210] font-display font-medium" : "text-base md:text-lg text-[#2E1A24]/85"
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-12 pl-6 md:pl-10 border-l-2 border-[#D96E3A]">
              <p className="font-display italic text-2xl md:text-3xl text-[#2E1A24] leading-snug">
                “{about.pullQuote}”
              </p>
              <p className="mt-3 font-mono-kc text-xs uppercase tracking-[0.25em] text-[#2E1A24]/60">
                — KC, on record
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
