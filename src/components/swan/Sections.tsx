import { useState } from "react";
import {
  BadgeCheck,
  Croissant,
  CupSoda,
  Flame,
  Leaf,
  Pizza,
  Sandwich,
  ShieldCheck,
  Soup,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";
import { menu } from "@/content/swan";
import loop1 from "@/assets/swan-loop-1.mp4.asset.json";
import loop2 from "@/assets/swan-loop-2.mp4.asset.json";
import interiorImg from "@/assets/interior.jpg";
import hygieneImg from "@/assets/hygiene.jpg";

function LoopVideo({ src, poster, className }: { src: string; poster: string; className?: string }) {
  return (
    <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${poster})` }}>
      <video
        className={cn("h-full w-full object-cover", className)}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden
      />
    </div>
  );
}

/* ---------------- About ---------------- */

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[1.75rem] p-2">
            <div className="aspect-4/3 overflow-hidden rounded-[1.4rem]">
              <LoopVideo src={loop1.url} poster={interiorImg} />
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            align="left"
            eyebrow="About"
            title="What SWAN stands for"
            subtitle="An independent food & beverage brand bringing quality food, refreshing beverages and a premium service experience under one roof."
          />
          <Reveal delay={100} className="mt-7 space-y-5 text-muted-foreground">
            <p className="leading-relaxed">
              Burgers, pizza, fast food, Chinese, fresh bakery and cold beverages — all prepared in
              one clean, well-run kitchen, with the same standard every single day.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Self-owned & independent",
                "Multi-category kitchen",
                "Consistent recipes",
                "Premium presentation",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                  <BadgeCheck className="h-4.5 w-4.5 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Menu ---------------- */

const icons = [Sandwich, Pizza, Flame, Soup, Croissant, CupSoda];

export function Food() {
  const [active, setActive] = useState(menu[0]!.category);
  const current = menu.find((m) => m.category === active) ?? menu[0]!;

  return (
    <section id="food" className="relative overflow-hidden bg-soft-gradient py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Our Menu"
          title="Six categories, one standard"
          subtitle="Freshly prepared, served warm and presented the way it deserves."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {menu.map((m, i) => {
            const Icon = icons[i] ?? Sandwich;
            const on = m.category === active;
            return (
              <button
                key={m.category}
                type="button"
                onClick={() => setActive(m.category)}
                aria-pressed={on}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all",
                  on
                    ? "border-transparent bg-brand-gradient text-white shadow-[var(--shadow-soft)]"
                    : "border-border bg-card/70 text-foreground hover:border-gold hover:text-primary",
                )}
              >
                <Icon className="h-4 w-4" />
                {m.category}
              </button>
            );
          })}
        </div>

        <Reveal key={current.category} className="glass mt-10 rounded-[1.75rem] p-7 sm:p-9">
          <h3 className="font-display text-3xl font-semibold">{current.category}</h3>
          <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {current.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b border-border/70 pb-3 text-[0.95rem] font-medium text-foreground"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Quality & Hygiene ---------------- */

const standards = [
  { icon: Leaf, t: "Fresh Ingredients", d: "Sourced and checked daily before anything is prepared." },
  { icon: ShieldCheck, t: "Hygienic Kitchen", d: "Gloves, sanitised stations and disciplined handling." },
  { icon: Sparkles, t: "Clean Environment", d: "Spotless counters, seating and food displays." },
  { icon: Users, t: "Professional Staff", d: "Trained, uniformed and customer-focused." },
];

export function Quality() {
  return (
    <section id="quality" className="py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Quality & Hygiene"
            title="Made fresh. Served warm. Always SWAN."
            subtitle="Quality is not an occasion here — it is the default standard behind every order."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {standards.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 70}>
                <div className="glass h-full rounded-2xl p-6">
                  <s.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={80}>
          <div className="glass overflow-hidden rounded-[1.75rem] p-2">
            <div className="aspect-4/5 overflow-hidden rounded-[1.4rem]">
              <LoopVideo src={loop2.url} poster={hygieneImg} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
