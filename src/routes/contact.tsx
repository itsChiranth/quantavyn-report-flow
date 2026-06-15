import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Quantavyn" },
      { name: "description", content: "Get in touch with the Quantavyn team. We read every message." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <div className="mx-auto max-w-6xl px-6 pb-32 pt-24">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Left: Intro */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Contact</div>
            <h1 className="mt-3 text-5xl font-medium tracking-[-0.035em] sm:text-6xl">
              We read every
              <br />
              <span className="font-serif italic text-gradient-brand">message.</span>
            </h1>
            <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
              Whether you have a bug to report, a feature you'd love to see, or just want to tell us what's not working for you — we're listening.
            </p>

            <div className="mt-12 space-y-6">
              <ContactItem label="General inquiries" href="mailto:hello@quantavyn.com" value="hello@quantavyn.com" />
              <ContactItem label="Privacy & data requests" href="mailto:privacy@quantavyn.com" value="privacy@quantavyn.com" />
              <ContactItem label="Legal & billing" href="mailto:legal@quantavyn.com" value="legal@quantavyn.com" />
            </div>

            <div className="mt-12 rounded-2xl border border-border bg-surface p-6">
              <div className="text-sm font-medium">Typical response time</div>
              <div className="mt-1 text-sm text-muted-foreground">
                We reply to every message within 2 business days. For urgent issues, include "URGENT" in the subject line.
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {status === "sent" ? (
              <div className="flex h-full flex-col items-start justify-center rounded-3xl border border-border bg-surface p-10">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-foreground text-background text-xl">✓</div>
                <h2 className="mt-6 text-2xl font-medium">Message received</h2>
                <p className="mt-3 text-muted-foreground">Thanks for reaching out. We'll get back to you within 2 business days.</p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-8 text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-surface p-8 sm:p-10 space-y-5">
                <h2 className="text-xl font-medium">Send a message</h2>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Name" required>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="field-input"
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="field-input"
                    />
                  </Field>
                </div>

                <Field label="Subject" required>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    className="field-input"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="feedback">Product feedback</option>
                    <option value="bug">Bug report</option>
                    <option value="billing">Billing question</option>
                    <option value="privacy">Privacy / data request</option>
                    <option value="press">Press / media</option>
                    <option value="other">Other</option>
                  </select>
                </Field>

                <Field label="Message" required>
                  <textarea
                    rows={6}
                    required
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="field-input resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background hover:bg-foreground/85 transition"
                >
                  Send message <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />

      <style>{`
        .field-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--border);
          background: var(--background);
          padding: 0.625rem 1rem;
          font-size: 0.875rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.15s;
        }
        .field-input:focus {
          border-color: var(--foreground);
        }
        .field-input::placeholder {
          color: var(--muted-foreground);
        }
      `}</style>
    </main>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-foreground/70">
        {label}{required && <span className="text-foreground/40 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

function ContactItem({ label, href, value }: { label: string; href: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <a href={href} className="mt-1 text-sm text-foreground hover:text-foreground/70 underline underline-offset-2 transition">
        {value}
      </a>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <span className="text-[17px] font-medium tracking-tight">Quantavyn</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-foreground/75 md:flex">
          <Link to="/about" className="hover:text-foreground transition">About</Link>
          <Link to="/reportflow" className="hover:text-foreground transition">ReportFlow</Link>
          <Link to="/contact" className="text-foreground font-medium">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Quantavyn. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-foreground transition">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition">Terms</Link>
            <Link to="/contact" className="text-foreground font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
