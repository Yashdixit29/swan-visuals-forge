import { ArrowDown, ArrowRight } from "lucide-react";
import founderImg from "@/assets/swan-founder.jpg.asset.json";
import swanMark from "@/assets/swan-mark.png";
import { brand } from "@/content/swan";

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.3) % 100}%`,
  delay: `${(i % 7) * 1.4}s`,
  size: 4 + (i % 4) * 3,
  duration: `${9 + (i % 5) * 2}s`,
}));

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-soft-gradient pt-32 pb-20 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="blob top-[-6rem] left-[-4rem] h-80 w-80 bg-violet" />
        <div
          className="blob top-24 right-[-6rem] h-96 w-96 bg-cyan"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="blob bottom-[-8rem] left-1/3 h-80 w-80 bg-blush"
          style={{ animationDelay: "6s" }}
        />
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.9)]"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animation: `drift ${p.duration} linear ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3">
            <img src={swanMark} alt="SWAN logo" width={64} height={64} className="h-14 w-14" />
            <span className="font-display text-5xl font-semibold tracking-[0.42em] sm:text-6xl">
              SWAN
            </span>
          </div>

          <h1 className="mt-8 text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
            <span className="text-gradient">More than food.</span>
            <br />A complete experience.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {brand.statement}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#food"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.04]"
            >
              Explore SWAN
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Our Story
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary underline-offset-4 transition-colors hover:underline"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="animated-mesh absolute -inset-3 rounded-[2.5rem] opacity-40 blur-xl"
          />
          <div className="glass relative overflow-hidden rounded-[2rem] p-2">
            <img
              src={founderImg.url}
              alt="SWAN founder in the brand's signature uniform"
              width={1231}
              height={1247}
              className="w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 left-4 rounded-2xl px-5 py-4 sm:left-8">
            <p className="font-display text-2xl font-semibold text-foreground">Independent</p>
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Self-owned brand
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-20 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-xs tracking-[0.24em] text-muted-foreground uppercase"
        >
          Scroll
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
