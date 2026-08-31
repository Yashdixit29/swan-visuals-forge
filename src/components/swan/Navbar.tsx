import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import swanLogo from "@/assets/swan-logo.png.asset.json";
import { navLinks } from "@/content/swan";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-6",
          scrolled ? "glass mx-3 sm:mx-6" : "mx-3 bg-transparent sm:mx-6",
        )}
      >
        <a href="#home" className="flex items-center gap-3">
          <img
            src={swanLogo.url}
            alt="SWAN logo"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full"
          />
          <span className="leading-tight">
            <span className="font-display block text-xl font-semibold tracking-[0.3em] text-foreground">
              SWAN
            </span>
            <span className="hidden text-[0.55rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase sm:block">
              Taste • Quality • Experience
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.04] sm:inline-flex"
          >
            Enquire
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "mx-3 overflow-hidden transition-all duration-500 sm:mx-6 lg:hidden",
          open ? "mt-2 max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="glass rounded-2xl p-3">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
