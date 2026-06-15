import { createFileRoute, Link } from "@tanstack/react-router";
import featSources from "@/assets/feat-sources.jpg";
import featChat from "@/assets/feat-chat.jpg";
import featTemplate from "@/assets/feat-template.jpg";
import { ArrowRight, Check, FileText, Quote, Sparkles, Star } from "lucide-react";

export const Route = createFileRoute("/reportflow")({
  head: () => ({
    meta: [
      { title: "ReportFlow — Write Anything" },
      {
        name: "description",
        content:
          "Your AI report partner. Drop in your sources, get a fully-formatted academic report in minutes — powered by the best frontier AI models.",
      },
      { property: "og:title", content: "ReportFlow — Write Anything" },
      { property: "og:description", content: "Drop in your sources, get a fully-formatted report in minutes." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <LogosStrip />
      <FeatureBlock
        eyebrow="01 — Sources"
        title="Drop in everything. We'll read it."
        body="Upload PDFs, slides, lecture notes, lab data, websites, or your professor's brief. ReportFlow ingests it all and builds a structured outline before a single word is written."
        bullets={["Up to 200 sources per report", "PDFs, DOCX, slides, web links", "Auto-extracted citations"]}
        image={featSources}
        bg="from-[#9affc5] via-[#9ad9ff] to-[#c4b8ff]"
      />
      <FeatureBlock
        reverse
        eyebrow="02 — Synthesis"
        title="The best ideas from every model."
        body="An agent queries multiple frontier models in parallel — comparing arguments, weighing evidence, and synthesizing the strongest content into one cohesive voice."
        bullets={["4+ premium LLMs per draft", "Always cites its sources", "Tunable tone and reading level"]}
        image={featChat}
        bg="from-[#ffb199] via-[#ff8fa3] to-[#ff6b6b]"
      />
      <FeatureBlock
        eyebrow="03 — Format"
        title="Submission-ready. Every time."
        body="Headings, margins, abstract, references, page numbers — ReportFlow applies your course template automatically. Hand-in ready, no reformatting required."
        bullets={["APA, MLA, Chicago, IEEE", "Custom course templates", "Export to DOCX, PDF, LaTeX"]}
        image={featTemplate}
        bg="from-[#a5b4fc] via-[#818cf8] to-[#6366f1]"
      />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

/* ───────────────────────── NAV ───────────────────────── */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/reportflow" className="flex items-center gap-2.5">
          <Logo />
          <div className="flex flex-col leading-none">
            <span className="text-[17px] font-medium tracking-tight">ReportFlow</span>
            <Link to="/" className="text-[10px] text-muted-foreground hover:text-foreground transition tracking-wide">by Quantavyn</Link>
          </div>
        </Link>
        <nav className="hidden items-center gap-9 text-sm text-foreground/75 md:flex">
          <a href="#features" className="hover:text-foreground transition">Product</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#cta" className="hidden text-sm font-medium text-foreground/75 hover:text-foreground sm:inline">Sign in</a>
          <a
            href="#cta"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-foreground px-4 text-sm font-medium text-background transition hover:bg-foreground/85"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6c0-1.1.9-2 2-2h9l5 5v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" stroke="currentColor" strokeWidth="2" />
        <path d="M14 4v6h6" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
}

/* ───────────────────────── HERO ───────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.78_0.18_142/0.18),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 text-center sm:pt-32">
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-foreground/70">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Now in private beta · Join the waitlist
        </div>
        <h1 className="mx-auto max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.045em]">
          Write <span className="font-serif italic text-gradient-brand">Anything</span>
          <br className="hidden sm:block" />
          in minutes, not hours.
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
          Your AI report partner. Drop in your sources, get a fully-formatted
          academic report — powered by the best frontier AI models.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#cta"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-background shadow-soft transition hover:bg-foreground/85 hover:-translate-y-0.5"
          >
            Try ReportFlow free
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-medium hover:bg-surface transition"
          >
            See how it works
          </a>
        </div>
        <p className="mt-5 text-xs text-muted-foreground">No credit card · 1 free report on signup</p>

        <HeroPreview />
      </div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="relative mx-auto mt-20 max-w-5xl">
      <div className="absolute -inset-8 -z-10 rounded-[44px] bg-gradient-to-br from-emerald-200/40 via-sky-200/40 to-violet-300/40 blur-3xl" />
      <div className="grain-overlay relative overflow-hidden rounded-3xl border border-border bg-foreground shadow-card">
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="hidden text-[11px] text-white/40 sm:block">reportflow.app · Final Thesis Draft</div>
          <div className="w-12" />
        </div>
        <div className="grid grid-cols-1 gap-px bg-white/5 md:grid-cols-[220px_1fr_280px]">
          <PreviewSources />
          <PreviewDoc />
          <PreviewAgent />
        </div>
      </div>
    </div>
  );
}

function PreviewSources() {
  const items = ["Lecture_07.pdf", "Lab_results.xlsx", "Smith_2021.pdf", "Brief.docx", "Notes.md"];
  return (
    <div className="bg-[#0f1115] p-5 text-left">
      <div className="mb-4 text-[10px] uppercase tracking-widest text-white/40">Sources · 5</div>
      <ul className="space-y-1.5">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-white/80 hover:bg-white/5">
            <FileText className="h-3.5 w-3.5 text-white/40" />
            <span className="truncate">{i}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-md border border-dashed border-white/15 p-3 text-center text-[11px] text-white/40">
        + Add source
      </div>
    </div>
  );
}

function PreviewDoc() {
  return (
    <div className="bg-[#0b0d11] p-6 text-left">
      <div className="mx-auto max-w-md rounded-lg bg-white/[0.04] p-6 text-white/85">
        <div className="text-[10px] uppercase tracking-widest text-white/40">Abstract</div>
        <div className="mt-2 font-serif text-lg leading-snug">
          On the role of catalytic surfaces in low-temperature ammonia synthesis
        </div>
        <div className="mt-4 space-y-1.5">
          {[100, 92, 96, 70].map((w, i) => (
            <div key={i} className="h-2 rounded-full bg-white/10" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="mt-5 text-[10px] uppercase tracking-widest text-white/40">1 · Introduction</div>
        <div className="mt-2 space-y-1.5">
          {[100, 98, 94, 88, 60].map((w, i) => (
            <div key={i} className="h-2 rounded-full bg-white/10" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewAgent() {
  return (
    <div className="bg-[#0f1115] p-5 text-left">
      <div className="mb-4 text-[10px] uppercase tracking-widest text-white/40">Agent · synthesizing</div>
      <div className="space-y-2">
        <AgentLine model="GPT-4o" status="✓ Drafted intro" />
        <AgentLine model="Gemini" status="✓ Cross-checked sources" />
        <AgentLine model="GPT-5" status="⏵ Composing methodology" active />
        <AgentLine model="Reviewer" status="… queued" muted />
      </div>
      <div className="mt-5 rounded-lg bg-white/[0.04] p-3">
        <div className="text-[10px] uppercase tracking-widest text-white/40">Template</div>
        <div className="mt-1 text-xs text-white/80">IEEE · 12pt · Single column</div>
      </div>
    </div>
  );
}

function AgentLine({ model, status, active, muted }: { model: string; status: string; active?: boolean; muted?: boolean }) {
  return (
    <div className={`flex items-center justify-between rounded-md px-2.5 py-2 text-xs ${active ? "bg-white/10" : "bg-white/[0.03]"} ${muted ? "opacity-50" : ""}`}>
      <span className="font-medium text-white/85">{model}</span>
      <span className="text-white/55">{status}</span>
    </div>
  );
}

/* ───────────────────────── LOGOS STRIP ───────────────────────── */

function LogosStrip() {
  const items = ["Stanford", "MIT", "Oxford", "ETH Zürich", "NUS", "Berkeley", "Imperial", "TU Delft"];
  const list = [...items, ...items];
  return (
    <section className="border-y border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Built by researchers · Trusted by students at
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

/* ───────────────────────── FEATURE BLOCKS ───────────────────────── */

function FeatureBlock({
  eyebrow,
  title,
  body,
  bullets,
  image,
  bg,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  bg: string;
  reverse?: boolean;
}) {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-20 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <div className="lg:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</div>
          <h3 className="mt-3 text-3xl font-medium tracking-[-0.025em] sm:text-[42px] sm:leading-[1.05]">{title}</h3>
          <p className="mt-5 max-w-md text-muted-foreground">{body}</p>
          <ul className="mt-7 space-y-2.5 text-sm">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-foreground text-background">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-foreground/85">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className={`grain-overlay relative overflow-hidden rounded-[28px] bg-gradient-to-br ${bg} p-6 shadow-card sm:p-10`}>
            <img
              src={image}
              alt={title}
              width={1280}
              height={960}
              loading="lazy"
              className="mx-auto h-auto w-full max-w-2xl rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── STATS ───────────────────────── */

function Stats() {
  const items = [
    { k: "3.5h", v: "Saved per report" },
    { k: "4+", v: "Models synthesized" },
    { k: "99%", v: "Template accuracy" },
    { k: "10k+", v: "Students on waitlist" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
        {items.map((i) => (
          <div key={i.k} className="bg-background px-6 py-10 text-center">
            <div className="text-5xl font-medium tracking-tight">{i.k}</div>
            <p className="mt-2 text-sm text-muted-foreground">{i.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── TESTIMONIALS ───────────────────────── */

function Testimonials() {
  const quotes = [
    {
      q: "I wrote my final econ paper between two lectures. The footnote formatting alone saved me 90 minutes.",
      n: "Aanya R.",
      r: "MSc Economics, LSE",
    },
    {
      q: "It actually cites the right pages. I've stopped second-guessing every paragraph.",
      n: "Marcus W.",
      r: "Biology PhD, Berkeley",
    },
    {
      q: "The template engine is the killer feature. APA, IEEE, my prof's weird custom one — handled.",
      n: "Lina K.",
      r: "Engineering, TU Delft",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Testimonials</div>
        <h2 className="mt-3 text-4xl font-medium tracking-[-0.025em] sm:text-5xl">
          Students don't have time. <span className="font-serif italic text-muted-foreground">We get it.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {quotes.map((t) => (
          <figure key={t.n} className="rounded-3xl border border-border bg-surface p-7">
            <Quote className="h-5 w-5 text-foreground/30" />
            <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/90">"{t.q}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-xs font-medium text-background">
                {t.n.split(" ").map((w) => w[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-medium">{t.n}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </div>
              <div className="ml-auto flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-foreground text-foreground" />
                ))}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── PRICING ───────────────────────── */

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      desc: "Try your first report on us.",
      feats: ["1 report total", "All LLMs included", "Standard templates"],
      cta: "Start free",
      highlight: false,
    },
    {
      name: "Student",
      price: "$12",
      per: "/month",
      desc: "For the weekly grind.",
      feats: ["20 reports / month", "Custom templates", "Citation export", "Priority queue"],
      cta: "Get Student",
      highlight: true,
    },
    {
      name: "Cohort",
      price: "$8",
      per: "/seat / mo",
      desc: "For study groups & TAs.",
      feats: ["Unlimited reports", "Shared templates", "Admin dashboard", "SSO"],
      cta: "Contact sales",
      highlight: false,
    },
  ];
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Pricing</div>
        <h2 className="mt-3 text-4xl font-medium tracking-[-0.025em] sm:text-5xl">
          Simple plans. <span className="font-serif italic">No surprises.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">Usage-based. Cancel any time.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-3xl border p-8 transition ${
              p.highlight
                ? "border-foreground bg-foreground text-background shadow-card"
                : "border-border bg-background hover:bg-surface"
            }`}
          >
            {p.highlight && (
              <div className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-background px-3 py-1 text-[11px] font-medium text-foreground">
                <Sparkles className="h-3 w-3" /> Most popular
              </div>
            )}
            <h3 className="text-xl font-medium">{p.name}</h3>
            <p className={`mt-1 text-sm ${p.highlight ? "text-white/60" : "text-muted-foreground"}`}>{p.desc}</p>
            <div className="mt-7 flex items-baseline gap-1">
              <span className="text-5xl font-medium tracking-tight">{p.price}</span>
              {p.per && <span className={p.highlight ? "text-white/50" : "text-muted-foreground"}>{p.per}</span>}
            </div>
            <ul className="mt-7 space-y-3 text-sm">
              {p.feats.map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <Check className={`h-4 w-4 ${p.highlight ? "text-white/60" : "text-foreground/50"}`} strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-medium transition ${
                p.highlight
                  ? "bg-background text-foreground hover:bg-background/90"
                  : "bg-foreground text-background hover:bg-foreground/85"
              }`}
            >
              {p.cta} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */

function FAQ() {
  const qs = [
    { q: "Is this just ChatGPT with extra steps?", a: "No. ReportFlow orchestrates multiple frontier models, grounds every claim in your uploaded sources, and applies a strict template — three things a single chatbot can't do reliably." },
    { q: "Will my professor know?", a: "ReportFlow is a writing assistant, not a ghostwriter. We help you structure, draft, and format faster — the ideas, edits, and final voice are yours. Always check your institution's policy." },
    { q: "What sources can I upload?", a: "PDFs, DOCX, slides, lecture audio, web links, Markdown, and plain text. Up to 200 sources per report." },
    { q: "Do I keep the rights to my work?", a: "Yes, 100%. We don't train on your content, and your sources are deleted on request." },
  ];
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-12 text-center">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">FAQ</div>
        <h2 className="mt-3 text-4xl font-medium tracking-[-0.025em] sm:text-5xl">Questions, answered.</h2>
      </div>
      <div className="divide-y divide-border rounded-3xl border border-border bg-surface/50">
        {qs.map((item) => (
          <details key={item.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-medium">
              {item.q}
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border bg-background text-foreground transition group-open:rotate-45">
                <span className="text-lg leading-none">+</span>
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */

function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 pb-28">
      <div className="grain-overlay relative overflow-hidden rounded-[36px] bg-foreground px-8 py-20 text-center text-background sm:py-28">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, oklch(0.78 0.18 142 / 0.4), transparent 45%), radial-gradient(circle at 85% 80%, oklch(0.62 0.22 290 / 0.4), transparent 50%), radial-gradient(circle at 70% 10%, oklch(0.7 0.18 235 / 0.3), transparent 45%)",
          }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-4xl font-medium tracking-[-0.03em] sm:text-6xl">
            Get your <span className="font-serif italic text-gradient-brand">weekends</span> back.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-white/65">
            Join thousands of students writing better reports in a fraction of the time.
          </p>
          <form className="mx-auto mt-10 flex max-w-md flex-col gap-2.5 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@university.edu"
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/[0.06] px-5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30 focus:bg-white/10"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-background px-6 text-sm font-medium text-foreground hover:bg-background/90 transition"
            >
              Join waitlist <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-5 text-xs text-white/40">No spam. Unsubscribe any time.</p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */

function Footer() {
  const cols = [
    { h: "Product", l: ["Overview", "Templates", "Integrations", "Changelog"] },
    { h: "Company", l: ["About", "Careers", "Blog", "Press"] },
    { h: "Resources", l: ["Help center", "Academic policy", "API docs", "Status"] },
    { h: "Legal", l: ["Privacy", "Terms", "Security", "Contact"] },
  ];
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="text-lg font-medium tracking-tight">ReportFlow</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Your AI report partner. Built by researchers, for students.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{c.h}</div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.l.map((i) => (
                  <li key={i}><a href="#" className="text-foreground/75 hover:text-foreground transition">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} ReportFlow. All rights reserved.</div>
          <div>Made with care for the deadline-stricken.</div>
        </div>
      </div>
    </footer>
  );
}
