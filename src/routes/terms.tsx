import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Quantavyn" },
      { name: "description", content: "Terms governing your use of Quantavyn products including ReportFlow." },
    ],
  }),
  component: Terms,
});

const LAST_UPDATED = "June 2025";

function Terms() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <div className="mx-auto max-w-3xl px-6 pb-32 pt-24">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Legal</div>
        <h1 className="mt-3 text-5xl font-medium tracking-[-0.035em]">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <div className="mt-12 space-y-10 text-[15px] leading-[1.8] text-foreground/80">
          <Section title="1. Acceptance">
            By accessing or using any Quantavyn service including ReportFlow ("Service"), you agree to these Terms of Service ("Terms"). If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization. If you do not agree to these Terms, do not use the Service.
          </Section>

          <Section title="2. Service description">
            ReportFlow is a report-drafting tool that processes source material you provide and generates structured document drafts. The Service is a writing aid — you are responsible for reviewing, editing, and verifying all output before submission or use.
          </Section>

          <Section title="3. Accounts">
            <ul className="space-y-2 pl-5 list-disc marker:text-muted-foreground">
              <li>You must provide accurate information when registering.</li>
              <li>You are responsible for maintaining the confidentiality of your credentials.</li>
              <li>You must notify us immediately of unauthorized access at <a href="mailto:security@quantavyn.com" className="text-foreground underline underline-offset-2 hover:no-underline">security@quantavyn.com</a>.</li>
              <li>One account per person. You may not share or transfer accounts.</li>
            </ul>
          </Section>

          <Section title="4. Acceptable use">
            You agree not to use the Service to:
            <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-muted-foreground">
              <li>Submit or generate content that is unlawful, harmful, or infringes third-party rights.</li>
              <li>Attempt to reverse-engineer, scrape, or extract underlying models or systems.</li>
              <li>Circumvent rate limits or access controls via automation.</li>
              <li>Violate the academic integrity policies of your institution — we provide a tool; compliance with your institution's rules is your responsibility.</li>
            </ul>
          </Section>

          <Section title="5. Your content">
            You retain all intellectual property rights to content you upload ("Your Content"). By uploading, you grant Quantavyn a limited, non-exclusive license to process Your Content solely to provide the Service. We do not use Your Content to train models, and we do not share it with third parties except as required to operate the Service (e.g., cloud storage providers under DPA).
          </Section>

          <Section title="6. Quantavyn IP">
            The Service, including all software, design, and documentation, is owned by Quantavyn and protected by applicable intellectual property law. These Terms do not grant you any rights in Quantavyn's intellectual property beyond what is explicitly stated.
          </Section>

          <Section title="7. Billing & cancellation">
            <ul className="space-y-2 pl-5 list-disc marker:text-muted-foreground">
              <li>Paid plans are billed in advance on a monthly or annual basis.</li>
              <li>You may cancel at any time; cancellation takes effect at the end of the current billing period.</li>
              <li>Refunds are issued at our discretion, except where required by law.</li>
              <li>We may change pricing with 30 days' notice. Continued use after the notice period constitutes acceptance.</li>
            </ul>
          </Section>

          <Section title="8. Disclaimers">
            The Service is provided "as is" without warranties of any kind, express or implied. We do not warrant that the Service will be error-free, uninterrupted, or that outputs will be accurate or suitable for any particular purpose. You use output at your own risk.
          </Section>

          <Section title="9. Limitation of liability">
            To the maximum extent permitted by law, Quantavyn's total liability for any claim arising from or related to the Service will not exceed the amounts you paid to us in the 12 months prior to the claim. We are not liable for indirect, incidental, special, or consequential damages.
          </Section>

          <Section title="10. Termination">
            We may suspend or terminate your account if you violate these Terms or for any reason with reasonable notice. On termination, your access ends immediately. Provisions that by their nature survive termination (IP, disclaimers, dispute resolution) will continue.
          </Section>

          <Section title="11. Governing law">
            These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. Disputes will be resolved by binding arbitration under the AAA Commercial Arbitration Rules, except you may bring claims in small claims court.
          </Section>

          <Section title="12. Changes">
            We may update these Terms. We will notify you via email at least 14 days before material changes take effect. Continued use after that period constitutes acceptance.
          </Section>

          <Section title="13. Contact">
            Questions about these Terms: <a href="mailto:legal@quantavyn.com" className="text-foreground underline underline-offset-2 hover:no-underline">legal@quantavyn.com</a>
          </Section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-[17px] font-medium text-foreground">{title}</h2>
      {typeof children === "string" ? <p>{children}</p> : children}
    </section>
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
            <Link to="/terms" className="text-foreground font-medium">Terms</Link>
            <Link to="/contact" className="hover:text-foreground transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
