import { Quote } from "lucide-react";
import founderImg from "@/assets/swan-founder.jpg.asset.json";
import { founder } from "@/content/swan";
import { Reveal, SectionHeading } from "./Reveal";

export function Founder() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative">
            <div
              aria-hidden
              className="animated-mesh absolute -inset-2 rounded-[2.5rem] opacity-35 blur-xl"
            />
            <div className="glass relative overflow-hidden rounded-[2rem] p-2">
              <img
                src={founderImg.url}
                alt="Founder of SWAN"
                loading="lazy"
                width={1231}
                height={1247}
                className="w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading align="left" eyebrow="The Founder" title={founder.heading} />
          <Reveal delay={100} className="mt-7 space-y-4 text-muted-foreground">
            {founder.story.map((p) => (
              <p key={p.slice(0, 24)} className="leading-relaxed">
                {p}
              </p>
            ))}
            <div className="glass mt-6 flex items-start gap-3 rounded-2xl p-6">
              <Quote className="h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm font-medium text-foreground italic">
                “Quality is not an occasion at SWAN. It is the default.” — {founder.name}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
