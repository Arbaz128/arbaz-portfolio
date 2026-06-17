import Reveal from "./Reveal";

const ROLES = [
  {
    role: "Associate Software Engineer",
    company: "Techfy",
    mode: "Remote",
    period: "Dec 2024 – Present",
    points: [
      "Built and shipped features across two live B2B SaaS products — Floww (social media automation) and Click2Deploy (cloud deployment) — serving real paying customers.",
      "Integrated the Meta Graph API for Instagram & Facebook automation: DM triggers, comment replies, story mentions and webhook deduplication via canonical ID matching.",
      "Implemented Stripe subscriptions, billing webhooks and plan-upgrade flows; fixed a production planId sync bug in Click2Deploy.",
      "Built a React flow visual automation builder with dynamic edge management, orphaned-node pruning and PostgreSQL cascade deletes.",
      "Integrated Claude and OpenAI-compatible APIs to build agentic workflows, automation triggers and AI-powered features in NestJS.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Ashwiz",
    mode: "On-site",
    period: "May 2024 – Aug 2024",
    points: [
      "Developed responsive full-stack web apps using React.js, Node.js, Express.js and MongoDB.",
      "Built and integrated RESTful APIs; participated in code reviews, debugging and Git-based version control.",
    ],
  },
];

export default function Process() {
  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28"
    >
      <Reveal>
        <span className="inline-block rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan">
          Experience
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Where I&apos;ve <span className="grad-text">shipped.</span>
        </h2>
      </Reveal>

      <div className="mt-16 space-y-6">
        {ROLES.map((r) => (
          <Reveal key={r.company}>
            <div className="rounded-3xl border border-line bg-card p-8 transition-all duration-300 hover:border-violet/40 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold md:text-2xl">
                    {r.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-cyan">
                    {r.company}{" "}
                    <span className="text-muted">· {r.mode}</span>
                  </p>
                </div>
                <span className="rounded-full border border-line bg-white/5 px-4 py-1.5 text-xs font-medium text-muted">
                  {r.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {r.points.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
