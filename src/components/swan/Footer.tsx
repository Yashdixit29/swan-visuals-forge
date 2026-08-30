import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import swanMark from "@/assets/swan-mark.png";
import { contact, navLinks } from "@/content/swan";

const foodLinks = ["Burgers", "Pizza", "Fast Food", "Chinese", "Bakery", "Beverages"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={swanMark} alt="" width={36} height={36} loading="lazy" className="h-9 w-9" />
            <span className="font-display text-2xl font-semibold tracking-[0.32em]">SWAN</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            An independent food & beverage brand serving burgers, pizza, fast food, Indo-Chinese,
            fresh bakery and cold beverages — with quality and hygiene first.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { icon: Instagram, href: contact.instagram, label: "Instagram" },
              { icon: Facebook, href: contact.facebook, label: "Facebook" },
              { icon: Linkedin, href: contact.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${contact.email}`, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                <s.icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">Navigate</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">Food Categories</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {foodLinks.map((f) => (
              <li key={f}>
                <a href="#food" className="transition-colors hover:text-primary">
                  {f}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>{contact.phone}</li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-primary">
                {contact.email}
              </a>
            </li>
            <li>{contact.address}</li>
          </ul>
          <a
            href="#contact"
            className="mt-5 inline-flex rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white"
          >
            Email Enquiry
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} SWAN. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#contact" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-primary">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
