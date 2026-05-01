import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../mock";
import { Button } from "./ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FAF5EC]/90 backdrop-blur-md border-b border-[#2E1A24]/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#2E1A24] text-[#FAF5EC] font-display font-bold flex items-center justify-center text-base md:text-lg group-hover:bg-[#D96E3A] transition-colors">
            {profile.name}
          </span>
          <span className="hidden md:inline font-mono-kc text-xs tracking-[0.2em] text-[#2E1A24]/70 uppercase">
            now showing
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-mono-kc text-xs uppercase tracking-[0.18em] text-[#2E1A24]/80 hover:text-[#D96E3A] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact">
            <Button className="kc-btn-primary rounded-full px-5 h-10 text-sm font-medium">
              Connect
            </Button>
          </a>
        </div>

        <button
          className="md:hidden p-2 text-[#2E1A24]"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#FAF5EC] border-t border-[#2E1A24]/10">
          <div className="px-5 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="font-mono-kc text-xs uppercase tracking-[0.18em] py-2 text-[#2E1A24]/80"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button className="kc-btn-primary w-full rounded-full h-11">Connect</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
