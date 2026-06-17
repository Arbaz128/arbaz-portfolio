"use client";

import {
  LayoutTemplate,
  Server,
  Database,
  Bot,
  CreditCard,
  Wrench,
} from "lucide-react";
import type { MouseEvent } from "react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: LayoutTemplate,
    title: "Frontend Development",
    desc: "Responsive, fast interfaces with React, Next.js and TypeScript (ES6+). Redux Toolkit for state, Tailwind CSS and Material UI for polished, accessible UI — HTML5/CSS3 fundamentals throughout.",
    tag: "NEXT.JS · REACT · TS →",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    desc: "Production APIs with Node.js, Express and NestJS — REST and WebSockets, secured with JWT, RBAC and OAuth 2.0. Multi-tenant data isolation built in.",
    tag: "NESTJS · REST · WS →",
  },
  {
    icon: Database,
    title: "Databases",
    desc: "Schema design and query optimization across PostgreSQL (Neon Console), MongoDB and MySQL with Prisma ORM — including cascade-safe relations.",
    tag: "POSTGRES · PRISMA →",
  },
  {
    icon: Bot,
    title: "AI / LLM Integration",
    desc: "Shipping AI to production — Claude (Anthropic) and OpenAI-compatible APIs, prompt engineering, multi-step agentic workflows and automation pipelines with n8n.",
    tag: "CLAUDE · OPENAI →",
  },
  {
    icon: CreditCard,
    title: "Integrations & Payments",
    desc: "Stripe subscriptions, billing and webhooks; Meta Graph API for Instagram & Facebook automation; transactional messaging with Twilio and SendGrid.",
    tag: "STRIPE · META API →",
  },
  {
    icon: Wrench,
    title: "Tooling & DevOps",
    desc: "Vercel deployments, Git/GitHub, Postman, Linux CLI and Docker basics; agile delivery with ClickUp and Airtable — built to ship fast and stay stable.",
    tag: "VERCEL · DOCKER →",
  },
];

function onCardMove(e: MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  card.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export default function Services() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <span className="inline-block rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan">
          What I Do
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Full stack, <span className="grad-text">end to end.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted">
          I own features from database to UI — and I&apos;ve done it on live B2B
          SaaS products with real customers. Here&apos;s the stack I work in
          every day.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div
              onMouseMove={onCardMove}
              className="spotlight-card h-full rounded-3xl border border-line bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet/40"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-gradient-to-br from-cyan/15 to-violet/15">
                <s.icon className="text-cyan" size={26} />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
              <span className="mt-5 inline-block text-xs font-semibold tracking-wide text-cyan">
                {s.tag}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
