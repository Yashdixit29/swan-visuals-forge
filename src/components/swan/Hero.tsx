import { ArrowRight } from "lucide-react";
import founderImg from "@/assets/swan-founder.jpg.asset.json";
import swanLogo from "@/assets/swan-logo.png.asset.json";
import { brand } from "@/content/swan";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-soft-gradient pt-32 pb-16 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="blob top-[-6rem] left-[-4rem] h-80 w-80 bg-gold opacity-40" />
        <div
          className="blob right-[-6rem] bottom-[-6rem] h-96 w-96 bg-accent opacity-40"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-in">
          <div className="flex items-center gap-4">
            <img
              src={swanLogo.url}
              alt="SWAN logo"
              width={96}
              height={96}
              className="h-20 w-20 rounded-full shadow-[var(--shadow-soft)] sm:h-24 sm:w-24"
            />
            <div>
              <span className="font-display block text-4xl leading-none font-semibold tracking-[0.34em] sm:text-5xl">
                SWAN
              </span>
              <span className="mt-2 block text-[0.7rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
                {brand.tagline}
              </span>
            </div>
          </div>

          <h1 className="mt-9 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
            More than just food.
            <br />
            <span className="text-gradient">It&apos;s an experience.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            {brand.statement}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#food"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.03]"
            >
              View Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Email Enquiry
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="glass relative overflow-hidden rounded-[1.75rem] p-2">
            <img
              src={founderImg.url}
              alt="SWAN founder in the brand's signature uniform"
              width={1231}
              height={1247}
              className="w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
