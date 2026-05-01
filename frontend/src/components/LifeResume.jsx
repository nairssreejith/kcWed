import React from "react";
import { lifeResume } from "../mock";

const LifeResume = () => {
  return (
    <section id="resume" className="py-24 md:py-32 bg-[#F3EADA] relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="font-mono-kc text-xs tracking-[0.3em] uppercase text-[#D96E3A]">Act II</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.02] mt-4 text-[#141210]">
            The Life Resume.
          </h2>
          <p className="mt-4 text-lg text-[#2E1A24]/80">
            A timeline, only mildly dramatized. Years in monospace because — old habits.
          </p>
        </div>

        <div className="mt-14 md:mt-20 relative">
          {/* vertical line */}
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-[#2E1A24]/25" />

          <ol className="space-y-10 md:space-y-14">
            {lifeResume.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <li key={item.year} className="relative grid grid-cols-12 gap-4 md:gap-10 items-start">
                  {/* dot */}
                  <span
                    aria-hidden
                    className="kc-dot absolute top-2 left-[13px] md:left-1/2 md:-translate-x-1/2"
                  />

                  {/* mobile layout */}
                  <div className="col-span-12 md:hidden pl-12">
                    <div className="font-mono-kc text-sm text-[#D96E3A]">{item.year}</div>
                    <div className="font-display text-xl md:text-2xl mt-1 text-[#141210]">{item.title}</div>
                    <p className="mt-2 text-[#2E1A24]/80">{item.note}</p>
                  </div>

                  {/* desktop layout */}
                  <div className={`hidden md:block col-span-6 ${left ? "" : "col-start-7"}`}>
                    {left ? (
                      <div className="text-right pr-10">
                        <div className="font-mono-kc text-sm text-[#D96E3A]">{item.year}</div>
                        <div className="font-display text-2xl mt-1 text-[#141210]">{item.title}</div>
                        <p className="mt-2 text-[#2E1A24]/80">{item.note}</p>
                      </div>
                    ) : (
                      <div className="pl-10">
                        <div className="font-mono-kc text-sm text-[#D96E3A]">{item.year}</div>
                        <div className="font-display text-2xl mt-1 text-[#141210]">{item.title}</div>
                        <p className="mt-2 text-[#2E1A24]/80">{item.note}</p>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default LifeResume;
