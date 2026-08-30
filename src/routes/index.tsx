import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/swan/Navbar";
import { Hero } from "@/components/swan/Hero";
import {
  About,
  Display,
  Experience,
  Food,
  Hygiene,
  Quality,
  Team,
  WhySwan,
} from "@/components/swan/Sections";
import { Founder } from "@/components/swan/Founder";
import { Contact } from "@/components/swan/Contact";
import { Footer } from "@/components/swan/Footer";

const title = "SWAN — Premium Food & Beverage Brand";
const description =
  "SWAN is an independent food & beverage brand serving burgers, pizza, fast food, Indo-Chinese, fresh bakery and cold beverages with quality, freshness and hygiene first.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Food />
        <Quality />
        <Hygiene />
        <Team />
        <Display />
        <Experience />
        <WhySwan />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
