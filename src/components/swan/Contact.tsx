import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { z } from "zod";
import { contact, enquiryTypes } from "@/content/swan";
import { Reveal, SectionHeading } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(160),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Phone can contain digits and + - ( ) only"),
  type: z.string().min(1, "Select an enquiry type"),
  message: z.string().trim().min(10, "Tell us a little more (min 10 characters)").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field =
  "w-full rounded-xl border border-border bg-card/80 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as keyof Errors;
        if (!next[k]) next[k] = i.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
    form.reset();
  }

  const details = [
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contact.whatsapp,
      href: `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`,
    },
    { icon: MapPin, label: "Address", value: contact.address },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-soft-gradient py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch with SWAN"
          subtitle="General, business, partnership or catering — tell us what you need and we will reply quickly."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-4">
            {details.map((d) => (
              <div key={d.label} className="glass flex items-start gap-4 rounded-2xl p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <d.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="text-sm font-semibold break-words text-foreground hover:text-primary"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-foreground">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="glass flex items-center gap-3 rounded-2xl p-5">
              {[
                { icon: Instagram, href: contact.instagram, label: "Instagram" },
                { icon: Facebook, href: contact.facebook, label: "Facebook" },
                { icon: Linkedin, href: contact.linkedin, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/70 text-foreground transition-transform hover:scale-110 hover:text-primary"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="glass relative rounded-[1.75rem] p-7">
              {sent ? (
                <div className="animate-scale-in flex min-h-96 flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-16 w-16 text-primary" />
                  <h3 className="mt-5 text-3xl font-semibold">Enquiry received</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thank you for reaching out to SWAN. Our team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-7 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                      Full Name
                    </label>
                    <input id="name" name="name" className={field} placeholder="Your name" />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={field}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                      Phone Number
                    </label>
                    <input id="phone" name="phone" className={field} placeholder="+91 90000 00000" />
                    {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="type" className="mb-1.5 block text-sm font-medium">
                      Enquiry Type
                    </label>
                    <select id="type" name="type" defaultValue="" className={field}>
                      <option value="" disabled>
                        Select an option
                      </option>
                      {enquiryTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.type && <p className="mt-1 text-xs text-destructive">{errors.type}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={field}
                      placeholder="How can SWAN help you?"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="sm:col-span-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
