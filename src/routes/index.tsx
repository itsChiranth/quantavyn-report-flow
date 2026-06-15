import { createFileRoute, Link } from "@tanstack/react-router";
import featSources from "@/assets/feat-sources.jpg";
import featTemplate from "@/assets/feat-template.jpg";
import { ArrowRight, Check, Zap, Layers, Target, Brain } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quantavyn — Building AI-Powered Documentation Software" },
      {
        name: "description",
        content:
          "Quantavyn develops intelligent software that helps students and professionals create high-quality documentation faster.",
      },
      { property: "og:title", content: "Quantavyn — AI-Powered Documentation Software" },
      { property: "og:description", content: "Intelligent software that eliminates hours of manual documentation work." },
    ],
  }),
  component: QuantavynHome,
});

function QuantavynHome() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <TrustStrip />
      <ProductShowcase />
      <Mission />
      <Vision />
      <Footer />
    </main>
  );
}

/* ───────────────────────── LOGO ───────────────────────── */

function QuantavynLogo() {
  return (
    <div className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="15.5" width="18" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="5.5" y="10" width="13" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="8.5" y="4.5" width="7" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </div>
  );
}

/* ───────────────────────── NAV ───────────────────────── */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <QuantavynLogo />
          <span className="text-[17px] font-medium tracking-tight">Quantavyn</span>
        </Link>
        <nav className="hidden items-center gap-9 text-sm text-foreground/75 md:flex">
          <Link to="/" className="hover:text-foreground transition font-medium text-foreground">Home</Link>
          <Link to="/reportflow" className="hover:text-foreground transition">Product</Link>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <Link
          to="/reportflow"
          className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-foreground px-4 text-sm font-medium text-background transition hover:bg-foreground/85"
        >
          Explore ReportFlow <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </header>
  );
}

/* ───────────────────────── HERO ───────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.78_0.18_142/0.15),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 text-center sm:pt-32">
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-foreground/70">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Flagship product: ReportFlow is live · Try it free
        </div>

        <h1 className="mx-auto max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.045em]">
          Building{" "}
          <span className="font-serif italic text-gradient-brand">AI-Powered</span>
          <br className="hidden sm:block" />
          Documentation Software
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
          Quantavyn develops intelligent software that helps students and professionals create
          high-quality documentation faster.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/reportflow"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-background shadow-soft transition hover:bg-foreground/85 hover:-translate-y-0.5"
          >
            Explore ReportFlow
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#about"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-medium hover:bg-surface transition"
          >
            Learn About Quantavyn
          </a>
        </div>

        <p className="mt-5 text-xs text-muted-foreground">One focused product. Designed for real results.</p>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-20 max-w-4xl">
      <div className="absolute -inset-8 -z-10 rounded-[44px] bg-gradient-to-br from-emerald-200/30 via-sky-200/30 to-violet-300/30 blur-3xl" />
      <div className="grain-overlay relative overflow-hidden rounded-3xl border border-border bg-foreground shadow-card">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="text-[11px] text-white/40">quantavyn.com · ReportFlow — AI Report Generator</div>
          <div className="w-12" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          <div className="bg-[#0f1115] p-6 text-left col-span-1">
            <div className="mb-3 text-[10px] uppercase tracking-widest text-white/40">Quantavyn</div>
            <div className="space-y-1.5">
              {["Home", "Products", "About", "Contact"].map((i) => (
                <div key={i} className={`rounded-md px-3 py-2 text-xs ${i === "Products" ? "bg-white/10 text-white/90" : "text-white/50"}`}>{i}</div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-3">Our Products</div>
              <div className="flex items-center gap-2 rounded-md bg-accent/20 px-3 py-2">
                <div className="h-5 w-5 rounded bg-accent/40 grid place-items-center">
                  <div className="h-2.5 w-2.5 rounded-sm bg-accent" />
                </div>
                <span className="text-xs text-white/80">ReportFlow</span>
              </div>
            </div>
          </div>
          <div className="bg-[#0b0d11] p-6 text-left col-span-2">
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-4">ReportFlow — Flagship Product</div>
            <div className="rounded-xl bg-white/[0.04] p-5">
              <div className="text-base font-medium text-white/90 mb-2">Generate Academic Reports in Minutes</div>
              <div className="space-y-1.5 mb-4">
                {[100, 90, 80].map((w, i) => (
                  <div key={i} className="h-1.5 rounded-full bg-white/10" style={{ width: `${w}%` }} />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {["Sources", "AI Synthesis", "Export"].map((label) => (
                  <div key={label} className="rounded-lg bg-white/[0.05] p-2.5 text-center">
                    <div className="text-[10px] text-white/40 uppercase tracking-wider">{label}</div>
                    <div className="mt-1 text-xs font-medium text-white/70">✓ Ready</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── TRUST STRIP ───────────────────────── */

function TrustStrip() {
  const items = ["Stanford", "MIT", "Oxford", "ETH Zürich", "NUS", "Berkeley", "Imperial", "TU Delft"];
  const list = [...items, ...items];
  return (
    <section className="border-y border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          ReportFlow trusted by students at
        </p>
        <div className="mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee flex w-max gap-14 whitespace-nowrap">
            {list.map((l, i) => (
              <span key={i} className="font-serif text-2xl text-foreground/55">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PRODUCT SHOWCASE ───────────────────────── */

function ProductShowcase() {
  return (
    <section id="product" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Our Product</div>
        <h2 className="mt-3 text-4xl font-medium tracking-[-0.025em] sm:text-5xl">
          Meet <span className="font-serif italic text-gradient-brand">ReportFlow</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Our flagship product. Generate complete academic, project, internship, and technical reports in minutes using AI.
        </p>
      </div>

      <div className="grain-overlay relative overflow-hidden rounded-[32px] border border-border bg-foreground shadow-card">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Info */}
          <div className="flex flex-col justify-center p-10 sm:p-14">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/70">
              <ReportFlowIcon />
              ReportFlow · A Quantavyn Product
            </div>
            <h3 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Write anything.<br />
              <span className="text-white/50">In minutes, not hours.</span>
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              Drop in your sources — PDFs, slides, web links, lecture notes — and ReportFlow's AI agents synthesize,
              structure, and format a complete, fully-cited report ready for submission.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Upload up to 200 sources per report",
                "Multiple frontier AI models in parallel",
                "APA, MLA, Chicago, IEEE templates",
                "Export to DOCX, PDF, and LaTeX",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-white/80">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/30 text-accent">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/reportflow"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-foreground transition hover:bg-white/90"
              >
                Launch ReportFlow
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/reportflow"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
              >
                See how it works
              </Link>
            </div>
          </div>

          {/* Right: Screenshots */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-foreground/20" />
            <div className="h-full p-8 pr-0">
              <div className="relative h-full overflow-hidden rounded-l-2xl">
                <img
                  src={featTemplate}
                  alt="ReportFlow — submission-ready reports"
                  className="h-full w-full object-cover object-left rounded-l-2xl opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent rounded-l-2xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 p-4">
                    <div className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Agent Status</div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                      </span>
                      <span className="text-xs text-white/80">Synthesizing sources · 4 models active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { k: "3.5h", v: "Saved per report" },
          { k: "4+", v: "AI models per draft" },
          { k: "200", v: "Sources supported" },
          { k: "10k+", v: "Students on waitlist" },
        ].map((s) => (
          <div key={s.k} className="rounded-2xl border border-border bg-surface px-5 py-6 text-center">
            <div className="text-3xl font-medium tracking-tight">{s.k}</div>
            <p className="mt-1.5 text-xs text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReportFlowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 4a1.5 1.5 0 0 1 1.5-1.5h6l3.5 3.5v6A1.5 1.5 0 0 1 12 13.5H4A1.5 1.5 0 0 1 2.5 12V4Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9.5 2.5v4h4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/* ───────────────────────── MISSION ───────────────────────── */

function Mission() {
  const pillars = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Reduce repetitive work",
      body: "Eliminate hours spent on manual formatting, citation gathering, and structural drafting. Let AI handle the scaffolding.",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Automate documentation",
      body: "From outline to polished submission — our software automates the full documentation pipeline, not just parts of it.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Improve productivity",
      body: "Students and professionals get their time back. Focus on ideas, arguments, and creativity — not formatting rules.",
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Build practical AI products",
      body: "We build AI tools that solve real, everyday friction — not novelties. Every Quantavyn product must earn its place in your workflow.",
    },
  ];

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Why Quantavyn</div>
        <h2 className="mt-3 text-4xl font-medium tracking-[-0.025em] sm:text-5xl">
          Software with a{" "}
          <span className="font-serif italic text-muted-foreground">clear purpose.</span>
        </h2>
        <p className="mt-5 max-w-lg text-muted-foreground">
          We're not building AI for the sake of it. Every product we ship must measurably reduce real work for real people.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-3xl border border-border bg-surface p-8 transition hover:bg-background">
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-foreground text-background">
              {p.icon}
            </div>
            <h3 className="text-[17px] font-medium">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── VISION ───────────────────────── */

function Vision() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28">
      <div className="grain-overlay relative overflow-hidden rounded-[36px] bg-foreground px-8 py-20 text-center text-background sm:py-28">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, oklch(0.78 0.18 142 / 0.35), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.62 0.22 290 / 0.35), transparent 50%), radial-gradient(circle at 60% 10%, oklch(0.7 0.18 235 / 0.25), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-8 text-[11px] uppercase tracking-[0.22em] text-white/50">Our Vision</div>
          <blockquote className="text-2xl font-medium leading-relaxed tracking-[-0.02em] text-white sm:text-3xl sm:leading-relaxed">
            "Our goal is to build software that{" "}
            <span className="font-serif italic text-gradient-brand">eliminates hours of manual work</span>{" "}
            and enables people to focus on creating, learning, and building."
          </blockquote>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/reportflow"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-foreground transition hover:bg-white/90"
            >
              Try ReportFlow free
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */

function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <QuantavynLogo />
              <span className="text-lg font-medium tracking-tight">Quantavyn</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Building AI-powered productivity software. Focused. Practical. Built to last.
            </p>
            <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted-foreground">
              <ReportFlowIcon />
              ReportFlow — A Quantavyn Product
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Products</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/reportflow" className="text-foreground/75 hover:text-foreground transition">
                  ReportFlow
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Company</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["About", "Blog", "Careers"].map((i) => (
                <li key={i}><a href="#" className="text-foreground/75 hover:text-foreground transition">{i}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Legal</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Privacy Policy", "Terms", "Contact"].map((i) => (
                <li key={i}><a href="#" className="text-foreground/75 hover:text-foreground transition">{i}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Quantavyn. All rights reserved.</div>
          <div>Built to reduce the work nobody wants to do.</div>
        </div>
      </div>
    </footer>
  );
}
