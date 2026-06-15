import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Quantavyn" },
      { name: "description", content: "Quantavyn builds focused software products that eliminate wasted time in research and knowledge work." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <div className="mx-auto max-w-3xl px-6 pb-32 pt-24">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">About</div>
        <h1 className="mt-3 text-5xl font-medium tracking-[-0.035em] sm:text-6xl">
          Built for the
          <br />
          <span className="font-serif italic text-gradient-brand">deadline economy.</span>
        </h1>

        <div className="mt-12 space-y-8 text-[16px] leading-[1.75] text-foreground/80">
          <p>
            Quantavyn is a software company founded on a simple observation: the most time-consuming
            parts of knowledge work — formatting, citation management, structural editing — add no
            intellectual value. We build products that eliminate them.
          </p>
          <p>
            Our first product is ReportFlow, a report-writing tool built for students and researchers
            who need high-quality, submission-ready documents without spending hours on structure and
            formatting. Drop in your sources. Get back a formatted draft. Focus on the thinking, not
            the typing.
          </p>
          <p>
            We're a small team of researchers and engineers who spent years in universities watching
            talented people waste hours on tasks that software should handle. That frustration is
            the company.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              title: "Research-first",
              body: "Every feature starts with how researchers actually work — not how we imagine they should.",
            },
            {
              title: "Outcome-driven",
              body: "We measure success by time saved and quality gained. Nothing else.",
            },
            {
              title: "Honest tools",
              body: "We don't hide what our software does. No black boxes. No mystery outputs.",
            },
            {
              title: "Student-priced",
              body: "Great tools shouldn't require a research budget. We keep pricing fair, always.",
            },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-medium">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-surface p-8">
          <h2 className="text-xl font-medium">Get in touch</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We read every message. Whether you have feedback on ReportFlow or want to talk about what we're building next — reach us at{" "}
            <a href="mailto:hello@quantavyn.com" className="text-foreground underline underline-offset-2 hover:no-underline">
              hello@quantavyn.com
            </a>
          </p>
          <div className="mt-5">
            <Link
              to="/contact"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/85 transition"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
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
          <Link to="/about" className="text-foreground font-medium">About</Link>
          <Link to="/reportflow" className="hover:text-foreground transition">ReportFlow</Link>
          <Link to="/contact" className="hover:text-foreground transition">Contact</Link>
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
            <Link to="/contact" className="hover:text-foreground transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
