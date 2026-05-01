import React from "react";
import { profile } from "../mock";
import { Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#141210] text-[#FAF5EC] border-t border-[#FAF5EC]/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#D96E3A] text-[#FAF5EC] font-display font-bold flex items-center justify-center">
              {profile.name}
            </span>
            <div>
              <p className="font-display text-lg leading-none">{profile.fullTitle}</p>
              <p className="font-mono-kc text-[11px] uppercase tracking-[0.25em] text-[#FAF5EC]/50 mt-1">
                A self-produced feature
              </p>
            </div>
          </div>
        </div>

        <p className="font-mono-kc text-[11px] uppercase tracking-[0.25em] text-[#FAF5EC]/50 flex items-center gap-2">
          Built with <Heart size={12} className="text-[#D96E3A]" /> &nbsp;•&nbsp; © {year} KC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
