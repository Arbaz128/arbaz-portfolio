"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Are you available for new roles?",
    a: "Yes — I'm available immediately and open to international remote positions, Dubai/UAE relocation, and Pakistan-based roles.",
  },
  {
    q: "What time zones can you work in?",
    a: "I'm based in Lahore, Pakistan and comfortably overlap EST, PST, GST and GMT working hours for remote teams.",
  },
  {
    q: "What's your core stack?",
    a: "Next.js, React and TypeScript on the frontend; Node.js, Express and NestJS on the backend; PostgreSQL, MongoDB and Prisma for data. I also integrate Stripe, the Meta Graph API, and AI/LLM APIs (Claude, OpenAI) in production.",
  },
  {
    q: "How much production experience do you have?",
    a: "1.5+ years shipping production B2B SaaS — Click2Deploy at Techfy, and Floww (a social-media automation SaaS) as a freelance project — serving real paying customers, plus an internship at Ashwiz building full-stack web apps.",
  },
  {
    q: "Can you handle AI/LLM features end to end?",
    a: "Yes. I've built agentic workflows, automation triggers and AI-powered features in NestJS using Claude and OpenAI-compatible APIs, with prompt engineering and n8n for pipelines.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
      <Reveal>
        <span className="inline-block rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan">
          FAQ
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Questions? <span className="grad-text">Answered.</span>
        </h2>
      </Reveal>

      <div className="mt-12 max-w-3xl space-y-4">
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.06}>
            <div className="overflow-hidden rounded-2xl border border-line bg-card">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-7 py-6 text-left font-display text-base font-semibold"
              >
                {f.q}
                <Plus
                  className={`shrink-0 text-violet transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                  size={22}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-7 pb-6 text-sm leading-relaxed text-muted">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
