import React, { useState } from "react";
import { contact, credits, profile } from "../mock";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const CreditRow = ({ label, value }) => (
  <div className="grid grid-cols-12 gap-4 py-3 border-b border-[#FAF5EC]/10">
    <div className="col-span-5 md:col-span-4 font-mono-kc text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#E8B95E]">
      {label}
    </div>
    <div className="col-span-7 md:col-span-8 font-display text-base md:text-lg text-[#FAF5EC]">{value}</div>
  </div>
);

const RollCredits = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Almost there —", description: "Please fill in all three fields." });
      return;
    }
    setSubmitting(true);
    // Mock submission (frontend only)
    setTimeout(() => {
      const saved = JSON.parse(localStorage.getItem("kc_messages") || "[]");
      saved.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem("kc_messages", JSON.stringify(saved));
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      toast({
        title: "Message received 🎬",
        description: "KC will reply when the credits stop rolling."
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#141210] text-[#FAF5EC] relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          background:
            "repeating-linear-gradient(0deg, #FAF5EC 0 1px, transparent 1px 14px)"
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="font-mono-kc text-xs tracking-[0.3em] uppercase text-[#E8B95E]">Final Scene</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.02] mt-4">
            {contact.heading}
          </h2>
          <p className="mt-5 text-lg text-[#FAF5EC]/80">{contact.subheading}</p>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-8 md:gap-12">
          {/* Credits */}
          <div className="col-span-12 md:col-span-5">
            <p className="font-display italic text-2xl text-[#E8B95E]">Roll Credits.</p>
            <div className="mt-5">
              <CreditRow label="Directed by" value={credits.directedBy} />
              <CreditRow label="Produced by" value={credits.producedBy} />
              <CreditRow label="Music by" value={credits.musicBy} />
              <CreditRow label="Starring" value={`${profile.fullTitle} as himself`} />
            </div>

            <div className="mt-8 space-y-3 font-mono-kc text-sm">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-[#FAF5EC]/85 hover:text-[#D96E3A] transition-colors">
                <Mail size={16} className="text-[#E8B95E]" /> {contact.email}
              </a>
              <div className="flex items-center gap-3 text-[#FAF5EC]/85">
                <Phone size={16} className="text-[#E8B95E]" /> {contact.phone}
              </div>
              <div className="flex items-center gap-3 text-[#FAF5EC]/85">
                <MapPin size={16} className="text-[#E8B95E]" /> {contact.city}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {contact.socials.map((s) => (
                <span
                  key={s.label}
                  className="font-mono-kc text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-[#FAF5EC]/10 border border-[#FAF5EC]/15 text-[#FAF5EC]/90"
                >
                  {s.label} · {s.handle}
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="col-span-12 md:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-[#FAF5EC] text-[#141210] p-6 md:p-10"
            >
              <p className="font-mono-kc text-xs tracking-[0.3em] uppercase text-[#D96E3A]">Audition Form</p>
              <h3 className="font-display text-3xl md:text-4xl mt-3 leading-tight">Send a note. We'll be in touch.</h3>

              <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono-kc text-[11px] uppercase tracking-[0.25em] text-[#2E1A24]/60">
                    Your name
                  </label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g., Ananya"
                    className="mt-2 h-12 bg-[#F3EADA] border-[#2E1A24]/10 focus:border-[#D96E3A] focus-visible:ring-[#D96E3A]/30 rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-mono-kc text-[11px] uppercase tracking-[0.25em] text-[#2E1A24]/60">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@nicepeople.com"
                    className="mt-2 h-12 bg-[#F3EADA] border-[#2E1A24]/10 focus:border-[#D96E3A] focus-visible:ring-[#D96E3A]/30 rounded-xl"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="font-mono-kc text-[11px] uppercase tracking-[0.25em] text-[#2E1A24]/60">
                  A short note
                </label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your favourite film, an honest hello, or both."
                  rows={5}
                  className="mt-2 bg-[#F3EADA] border-[#2E1A24]/10 focus:border-[#D96E3A] focus-visible:ring-[#D96E3A]/30 rounded-xl resize-none"
                />
              </div>

              <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                <p className="font-mono-kc text-[11px] uppercase tracking-[0.2em] text-[#2E1A24]/50">
                  No spam. No scripts. Just humans.
                </p>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="kc-btn-primary rounded-full h-12 px-6 text-sm"
                >
                  {submitting ? "Sending..." : (<>Send <Send size={16} className="ml-2" /></>)}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RollCredits;
