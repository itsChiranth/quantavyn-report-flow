import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Quantavyn" },
      { name: "description", content: "How Quantavyn and ReportFlow collect, use, and protect your data." },
    ],
  }),
  component: Privacy,
});

const LAST_UPDATED = "June 2025";

function Privacy() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <div className="mx-auto max-w-3xl px-6 pb-32 pt-24">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Legal</div>
        <h1 className="mt-3 text-5xl font-medium tracking-[-0.035em]">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <div className="mt-12 space-y-10 text-[15px] leading-[1.8] text-foreground/80">
          <Section title="1. Introduction">
            Quantavyn ("we", "our", "us") operates ReportFlow and any related services. This Privacy Policy explains what data we collect, why we collect it, how we use it, and your rights over that data. By using our services you agree to this policy.
          </Section>

          <Section title="2. What we collect">
            <p>We collect the minimum data necessary to provide the service:</p>
            <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-muted-foreground">
              <li><strong>Account data:</strong> email address and password (hashed) when you register.</li>
              <li><strong>Uploaded sources:</strong> documents, links, and files you provide to generate reports. These are processed in memory and stored temporarily for the duration of your session unless you save them explicitly.</li>
              <li><strong>Usage data:</strong> page views, feature interactions, and error logs used to improve the product. This data is aggregated and not linked to individuals beyond a session ID.</li>
              <li><strong>Payment data:</strong> handled entirely by our payment processor (Stripe). We do not store card numbers.</li>
            </ul>
          </Section>

          <Section title="3. How we use your data">
            <ul className="space-y-2 pl-5 list-disc marker:text-muted-foreground">
              <li>Generating and formatting your reports</li>
              <li>Communicating about your account (billing, product updates)</li>
              <li>Diagnosing errors and improving service quality</li>
              <li>Complying with legal obligations</li>
            </ul>
            <p className="mt-4">We do not sell your data. We do not use your uploaded documents to train models or share them with third parties.</p>
          </Section>

          <Section title="4. Data retention">
            Uploaded source files are automatically deleted 30 days after you last access a report, or immediately on request. Account data is retained while your account is active and deleted within 30 days of account closure. Aggregated usage logs are retained for 24 months.
          </Section>

          <Section title="5. Cookies & tracking">
            We use strictly necessary cookies to keep you logged in. We use one analytics tool (self-hosted Plausible) that collects no personal identifiers and does not use cookies for tracking. We do not use third-party advertising cookies.
          </Section>

          <Section title="6. Third-party services">
            We share data with third parties only to operate the service: Stripe for payments, AWS for hosting, and Postmark for transactional email. All processors are under data processing agreements consistent with applicable privacy law.
          </Section>

          <Section title="7. Your rights">
            Depending on your jurisdiction you may have the right to: access a copy of your data, correct inaccuracies, request deletion, object to processing, or export your data in a portable format. To exercise any of these rights, contact{" "}
            <a href="mailto:privacy@quantavyn.com" className="text-foreground underline underline-offset-2 hover:no-underline">
              privacy@quantavyn.com
            </a>.
          </Section>

          <Section title="8. Security">
            We use TLS for all data in transit, AES-256 encryption for data at rest, and role-based access controls internally. No method of transmission over the internet is 100% secure; we maintain and improve our security posture continuously.
          </Section>

          <Section title="9. Children">
            Our services are not directed to children under 13. If you believe we have inadvertently collected data from a child, contact us immediately and we will delete it.
          </Section>

          <Section title="10. Changes to this policy">
            We may update this policy as the service evolves. We will notify registered users of material changes via email at least 14 days before they take effect.
          </Section>

          <Section title="11. Contact">
            For privacy questions: <a href="mailto:privacy@quantavyn.com" className="text-foreground underline underline-offset-2 hover:no-underline">privacy@quantavyn.com</a>
            <br />
            Quantavyn, Inc. · Registered in Delaware, United States
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
            <Link to="/privacy" className="text-foreground font-medium">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition">Terms</Link>
            <Link to="/contact" className="hover:text-foreground transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
