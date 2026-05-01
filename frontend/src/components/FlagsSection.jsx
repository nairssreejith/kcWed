import React from "react";
import { flags } from "../mock";
import { Flag, Leaf } from "lucide-react";

const Column = ({ title, subtitle, items, color, Icon }) => (
  <div className="rounded-3xl p-8 md:p-10 bg-[#FAF5EC] border border-[#2E1A24]/10 relative overflow-hidden">
    <div className="flex items-center gap-3">
      <span
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: color, color: "#FAF5EC" }}
      >
        <Icon size={18} />
      </span>
      <div>
        <p className="font-mono-kc text-[11px] tracking-[0.25em] uppercase text-[#2E1A24]/60">{subtitle}</p>
        <h3 className="font-display text-2xl md:text-3xl text-[#141210]">{title}</h3>
      </div>
    </div>
    <ul className="mt-7 space-y-3">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-3 text-[15px] md:text-[16px] text-[#2E1A24]/90 leading-relaxed">
          <span
            className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: color }}
          />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  </div>
);

const FlagsSection = () => {
  return (
    <section id="flags" className="py-24 md:py-32 bg-[#2E1A24] text-[#FAF5EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="font-mono-kc text-xs tracking-[0.3em] uppercase text-[#E8B95E]">Full Disclosure</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.02] mt-4">
            Green flags. Red-ish flags.
          </h2>
          <p className="mt-4 text-lg text-[#FAF5EC]/80">
            Radical honesty, lightly edited for entertainment. No surprises in the third act.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Column
            title="The Green Flags"
            subtitle="(we're proud of these)"
            items={flags.green}
            color="#1F4A43"
            Icon={Leaf}
          />
          <Column
            title="The Red-ish Flags"
            subtitle="(quirks, really)"
            items={flags.red}
            color="#D96E3A"
            Icon={Flag}
          />
        </div>
      </div>
    </section>
  );
};

export default FlagsSection;
