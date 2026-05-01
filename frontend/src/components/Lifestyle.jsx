import React from "react";
import { lifestyle } from "../mock";

const Block = ({ data, dark }) => (
  <div
    className={`rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
      dark ? "bg-[#2E1A24] text-[#FAF5EC]" : "bg-[#FAF5EC] text-[#141210] border border-[#2E1A24]/10"
    }`}
  >
    <p
      className={`font-mono-kc text-xs tracking-[0.3em] uppercase ${
        dark ? "text-[#E8B95E]" : "text-[#D96E3A]"
      }`}
    >
      {data.kicker}
    </p>
    <h3 className="font-display font-semibold text-3xl md:text-4xl mt-3 leading-[1.08]">{data.title}</h3>
    <p className={`mt-5 text-base md:text-lg leading-relaxed ${dark ? "text-[#FAF5EC]/80" : "text-[#2E1A24]/85"}`}>
      {data.body}
    </p>
    <div className="mt-7 flex flex-wrap gap-2">
      {data.chips.map((c) => (
        <span
          key={c}
          className={`font-mono-kc text-[11px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full ${
            dark
              ? "bg-[#FAF5EC]/10 text-[#FAF5EC]/90 border border-[#FAF5EC]/15"
              : "bg-[#F3EADA] text-[#2E1A24]/80 border border-[#2E1A24]/10"
          }`}
        >
          {c}
        </span>
      ))}
    </div>
  </div>
);

const Lifestyle = () => {
  return (
    <section id="lifestyle" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="font-mono-kc text-xs tracking-[0.3em] uppercase text-[#D96E3A]">Act III</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.02] mt-4 text-[#141210]">
            Two rooms, one life.
          </h2>
          <p className="mt-4 text-lg text-[#2E1A24]/80">
            A neat split: the weekday self and the weekend self. Both are friends, mostly.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Block data={lifestyle.career} />
          <Block data={lifestyle.daily} dark />
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
