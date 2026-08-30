import { useState } from "react";
import {
  Award,
  BadgeCheck,
  Clock,
  Croissant,
  CupSoda,
  Flame,
  HandPlatter,
  Leaf,
  Pizza,
  Sandwich,
  ShieldCheck,
  Soup,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useCountUp, useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";
import loop1 from "@/assets/swan-loop-1.mp4.asset.json";
import loop2 from "@/assets/swan-loop-2.mp4.asset.json";
import interiorImg from "@/assets/interior.jpg";
import hygieneImg from "@/assets/hygiene.jpg";
import teamImg from "@/assets/team.jpg";
import burgerImg from "@/assets/food-burger.jpg";
import pizzaImg from "@/assets/food-pizza.jpg";
import fastfoodImg from "@/assets/food-fastfood.jpg";
import chineseImg from "@/assets/food-chinese.jpg";
import bakeryImg from "@/assets/food-bakery.jpg";
import beveragesImg from "@/assets/food-beverages.jpg";

function LoopVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  return (
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
  );
}


/* ---------------- About ---------------- */

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] p-2">
            <div className="aspect-4/3 overflow-hidden rounded-[1.6rem]">
              <LoopVideo src={loop1.url} />
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Brand Introduction"
            title="What SWAN stands for"
            subtitle="SWAN is an independent food & beverage brand created to bring quality food, refreshing beverages and a premium service experience under one roof."
          />
          <Reveal delay={120} className="mt-8 space-y-5 text-muted-foreground">
            <p className="leading-relaxed">
              We are not a franchise and not a coffee-only counter. SWAN is a complete
              cafe-and-restaurant brand — burgers, pizzas, fast food, Indo-Chinese, fresh bakery and
              a full range of cold beverages, all prepared in one clean, well-run kitchen.
            </p>
            <p className="leading-relaxed">
              Everything carries the same signature: fresh ingredients, careful preparation, elegant
              presentation and consistent taste — visit after visit.
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

/* ---------------- Food ---------------- */

const categories = [
  {
    key: "Burgers",
    icon: Sandwich,
    image: burgerImg,
    items: ["Classic burgers", "Cheese burgers", "Crispy burgers", "Premium veg & non-veg"],
  },
  {
    key: "Pizza",
    icon: Pizza,
    image: pizzaImg,
    items: ["Classic pizzas", "Cheese pizzas", "Loaded pizzas", "Veg & non-veg options"],
  },
  {
    key: "Fast Food",
    icon: Flame,
    image: fastfoodImg,
    items: ["Fries & loaded fries", "Sandwiches & wraps", "Nuggets & garlic bread", "Pasta & combos"],
  },
  {
    key: "Chinese",
    icon: Soup,
    image: chineseImg,
    items: ["Noodles & fried rice", "Manchurian", "Chilli paneer", "Momos & spring rolls"],
  },
  {
    key: "Bakery",
    icon: Croissant,
    image: bakeryImg,
    items: ["Croissants & puffs", "Cookies & brownies", "Donuts", "Fresh daily bread"],
  },
  {
    key: "Beverages",
    icon: CupSoda,
    image: beveragesImg,
    items: ["Cold coffee & shakes", "Iced beverages", "Mocktails", "Soft drinks & refreshers"],
  },
] as const;

export function Food() {
  const [active, setActive] = useState<string>("All");
  const filters = ["All", ...categories.map((c) => c.key)];
  const shown = active === "All" ? categories : categories.filter((c) => c.key === active);

  return (
    <section id="food" className="relative overflow-hidden bg-soft-gradient py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Our Food"
          title="One brand, many cravings"
          subtitle="A wide, well-organised menu built across six signature categories — prepared fresh, plated with care."
        />

        <Reveal delay={80} className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                active === f
                  ? "border-transparent bg-brand-gradient text-white shadow-[var(--shadow-soft)]"
                  : "border-border bg-card/70 text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((c, i) => (
            <Reveal as="li" key={c.key} delay={i * 70}>
              <article className="glass group h-full overflow-hidden rounded-[1.75rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={c.image}
                    alt={`${c.key} at SWAN`}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white">
                      <c.icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="text-2xl font-semibold">{c.key}</h3>
                  </div>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {c.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Quality ---------------- */

const qualityPoints = [
  { icon: Leaf, title: "Freshly Prepared", text: "Cooked to order, never held over. Freshness is the recipe." },
  { icon: Award, title: "Quality Ingredients", text: "Trusted suppliers, checked stock and strict rejection standards." },
  { icon: ShieldCheck, title: "High Hygiene Standards", text: "Sanitised stations, gloves and disciplined food handling." },
  { icon: HandPlatter, title: "Professional Service", text: "Trained staff, clean uniforms and consistent presentation." },
];

export function Quality() {
  return (
    <section id="quality" className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Quality & Freshness"
          title="Standards you can taste"
          subtitle="From the first delivery of the day to the last plate served, SWAN follows a fixed quality routine."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {qualityPoints.map((q, i) => (
            <Reveal as="li" key={q.title} delay={i * 80}>
              <div className="glass group h-full rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1.5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white transition-transform duration-500 group-hover:scale-110">
                  <q.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{q.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Hygiene ---------------- */

export function Hygiene() {
  return (
    <section className="relative overflow-hidden bg-soft-gradient py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Cleanliness & Hygiene"
            title="Clean kitchen. Clear conscience."
            subtitle="Hygiene is not a checklist at SWAN — it is part of the brand identity."
          />
          <Reveal delay={100}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Sanitised preparation areas",
                "Gloves for direct handling",
                "Clean, pressed uniforms",
                "Daily deep-clean routine",
                "Organised food displays",
                "Safe storage & temperature control",
              ].map((t) => (
                <li
                  key={t}
                  className="glass flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium"
                >
                  <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={80}>
          <div className="glass overflow-hidden rounded-[2rem] p-2">
            <div className="aspect-4/3 overflow-hidden rounded-[1.6rem]">
              <LoopVideo src={loop2.url} />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <img
              src={hygieneImg}
              alt="Gloved staff plating food in a clean SWAN kitchen"
              loading="lazy"
              width={1200}
              height={900}
              className="h-40 w-full rounded-2xl object-cover"
            />
            <img
              src={interiorImg}
              alt="Bright SWAN counter with organised food display"
              loading="lazy"
              width={1200}
              height={900}
              className="h-40 w-full rounded-2xl object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Team ---------------- */

const team = [
  { role: "Kitchen Team", text: "Trained on every category — from burgers to Indo-Chinese woks." },
  { role: "Service Team", text: "Friendly, quick and attentive at the counter and on the floor." },
  { role: "Hygiene Team", text: "Owns the cleaning routine, storage checks and station sanitation." },
];

export function Team() {
  return (
    <section id="team" className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind the plate"
          subtitle="Professional appearance, friendly service and a customer-first attitude — in clean SWAN uniforms every shift."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <Reveal>
            <div className="glass overflow-hidden rounded-[2rem] p-2">
              <img
                src={teamImg}
                alt="SWAN staff in clean cream uniforms"
                loading="lazy"
                width={1200}
                height={900}
                className="w-full rounded-[1.6rem] object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <ul className="space-y-4">
            {team.map((t, i) => (
              <Reveal as="li" key={t.role} delay={i * 90}>
                <div className="glass flex items-start gap-4 rounded-2xl p-6 transition-transform duration-500 hover:translate-x-1.5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <Users className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{t.role}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Experience + counters ---------------- */

function Counter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.4);
  const value = useCountUp(target, visible);
  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center">
      <p className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-xs tracking-[0.16em] text-muted-foreground uppercase">{label}</p>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-soft-gradient py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="The SWAN Experience"
          title="Elegance, on every visit"
          subtitle="The swan in our identity stands for calm, grace and effortless quality — the same feeling we want at the counter."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Counter target={6} suffix="+" label="Food categories" />
          <Counter target={120} suffix="+" label="Menu items" />
          <Counter target={98} suffix="%" label="Repeat guests" />
          <Counter target={5} suffix=" min" label="Average serve time" />
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Clock, t: "Quick service", d: "Fast counters without rushing the food." },
            { icon: Leaf, t: "Fresh every day", d: "Daily prep, daily bakes, daily checks." },
            { icon: Sparkles, t: "Clean environment", d: "Spotless seating, counters and displays." },
            { icon: HandPlatter, t: "Comfortable ordering", d: "Clear menus and helpful staff." },
            { icon: CupSoda, t: "Quality beverages", d: "Cold coffee, shakes and mocktails made to order." },
            { icon: Award, t: "Premium presentation", d: "Plated and packed like it matters — because it does." },
          ].map((x, i) => (
            <Reveal as="li" key={x.t} delay={i * 60}>
              <div className="glass flex h-full items-start gap-4 rounded-2xl p-6">
                <x.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">{x.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Display ---------------- */

export function Display() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass overflow-hidden rounded-[2rem] p-2">
            <img
              src={interiorImg}
              alt="SWAN bakery display counter"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-[1.6rem] object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </div>
        </Reveal>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Food Display"
            title="Presented the way it deserves"
            subtitle="Organised shelves, protected displays, labelled trays and warm lighting — so what you see is exactly what you get."
          />
          <Reveal delay={120} className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Organised", "Fresh", "Attractive", "Hygienic"].map((t) => (
              <div key={t} className="glass rounded-xl px-5 py-4 text-sm font-semibold">
                {t}
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why SWAN ---------------- */

const why = [
  { n: "01", t: "Independent Brand", d: "Fully self-owned. No franchise playbook, no compromises." },
  { n: "02", t: "Wide Food Selection", d: "Burgers, pizza, fast food, Chinese, bakery and beverages." },
  { n: "03", t: "Fresh & Quality Ingredients", d: "Checked, stored and used within strict standards." },
  { n: "04", t: "Hygiene First", d: "Clean stations, gloves and disciplined handling." },
  { n: "05", t: "Professional Staff", d: "Trained, uniformed and customer-focused." },
  { n: "06", t: "Premium Experience", d: "Presentation and service that feel a level above." },
];

export function WhySwan() {
  return (
    <section className="relative overflow-hidden bg-soft-gradient py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading eyebrow="Why SWAN" title="Why choose SWAN?" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <Reveal as="li" key={w.n} delay={i * 70}>
              <div className="glass group h-full rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <span className="font-display text-3xl font-semibold text-gold">{w.n}</span>
                <h3 className="mt-3 text-xl font-semibold">{w.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
