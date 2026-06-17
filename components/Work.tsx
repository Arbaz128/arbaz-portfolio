import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    name: "Floww",
    url: "https://floww.build",
    domain: "floww.build",
    desc: "B2B social media automation SaaS. Built Instagram & Facebook automation on the Meta Graph API — DM triggers, comment replies, story mentions and a visual flow builder with dynamic edge management and webhook deduplication.",
    tag: "Next.js · NestJS · PostgreSQL · Meta Graph API",
  },
  {
    name: "Click2Deploy",
    url: "https://click2deploy.com",
    domain: "click2deploy.com",
    desc: "Multi-tenant cloud deployment platform. Implemented Stripe subscriptions, billing webhooks and plan-upgrade flows, plus prefetch-on-boot latency optimization and plan-access control.",
    tag: "Next.js · NestJS · PostgreSQL · Stripe",
  },
  {
    name: "Toolrift",
    url: "https://toolrift.co",
    domain: "toolrift.co",
    desc: "AI tools platform — 50+ utilities for creators, marketers and developers. Zero-cost serverless architecture, launched on Product Hunt.",
    tag: "Next.js · Neon · Groq API",
  },
  {
    name: "Zimiso",
    url: "https://zimiso.com",
    domain: "zimiso.com",
    desc: "Minimalist skincare brand storefront — a clean, conversion-focused e-commerce experience.",
    tag: "Next.js · E-commerce",
  },
];

export default function Work() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <span className="inline-block rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan">
          Projects
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Real products. <span className="grad-text">Live right now.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted">
          Products I&apos;ve engineered and shipped to production — from B2B SaaS
          platforms to AI tools and e-commerce. Click any of them, they&apos;re
          live.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full rounded-3xl border border-line bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan/40"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-violet">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold">
                    {p.name}
                  </h3>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/5 transition-all group-hover:border-cyan/50 group-hover:bg-cyan/10">
                  <ArrowUpRight
                    className="text-cyan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    size={20}
                  />
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{p.desc}</p>
              <span className="mt-5 inline-block text-xs font-medium text-white/40">
                {p.domain}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
