import React from "react";
import { whyKC } from "../mock";
import { CheckCircle2 } from "lucide-react";

const WhyKC = () => {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono-kc text-xs tracking-[0.3em] uppercase text-[#D96E3A]">Critics' Notes</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.02] mt-4 text-[#141210]">
              Why you might like KC.
            </h2>
            <p className="mt-5 text-lg text-[#2E1A24]/80 max-w-md">
              A short, unofficial list. Assembled by friends, denied by me, confirmed by data.
            </p>
            <div className="mt-8 inline-block">
              <span className="kc-tape">approved by mom ✓</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <ul className="space-y-4">
              {whyKC.map((line, i) => (
                <li
                  key={i}
                  className="group flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-[#FAF5EC] border border-[#2E1A24]/10 transition-all duration-300 hover:border-[#D96E3A]/40 hover:-translate-y-0.5"
                >
                  <span className="mt-0.5 text-[#D96E3A] shrink-0">
                    <CheckCircle2 size={22} strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="font-mono-kc text-[11px] uppercase tracking-[0.25em] text-[#2E1A24]/50">
                      Point {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-[17px] md:text-lg text-[#141210] leading-relaxed">{line}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKC;
