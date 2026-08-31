import { Facebook, Instagram, Mail } from "lucide-react";
import swanLogo from "@/assets/swan-logo.png.asset.json";
import { contact, menu, navLinks } from "@/content/swan";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={swanLogo.url}
              alt="SWAN logo"
              width={48}
              height={48}
              loading="lazy"
              className="h-11 w-11 rounded-full"
            />
            <span className="font-display text-xl font-semibold tracking-[0.3em]">SWAN</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            An independent food & beverage brand — burgers, pizza, fast food, Chinese, bakery and
            beverages, with quality and hygiene first.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { icon: Instagram, href: contact.instagram, label: "Instagram" },
              { icon: Facebook, href: contact.facebook, label: "Facebook" },
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
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">Menu</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {menu.map((m) => (
              <li key={m.category}>
                <a href="#food" className="transition-colors hover:text-primary">
                  {m.category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="break-words hover:text-primary">
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
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} SWAN. All rights reserved.</p>
          <p>Sec 17A, Greater Noida</p>
        </div>
      </div>
    </footer>
  );
}
