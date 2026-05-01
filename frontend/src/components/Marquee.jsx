import React from "react";

const items = [
  "NOW SHOWING",
  "LIFE RESUME \u2022 2025 EDITION",
  "CASTING CALL OPEN",
  "RATED P FOR PERSONALITY",
  "ONE HUMAN \u2022 NO FILLERS",
  "CRITICS CALL IT: \u2018SURPRISINGLY WATCHABLE\u2019"
];

const Marquee = () => {
  return (
    <div className="border-y border-[#2E1A24]/20 bg-[#2E1A24] text-[#FAF5EC] overflow-hidden">
      <div className="kc-marquee-track py-4">
        {[0, 1].map((group) => (
          <div key={group} className="flex items-center shrink-0">
            {items.concat(items).map((t, i) => (
              <span key={`${group}-${i}`} className="flex items-center gap-6 px-6 font-mono-kc text-xs md:text-sm tracking-[0.3em] uppercase">
                {t}
                <span className="text-[#E8B95E]">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
