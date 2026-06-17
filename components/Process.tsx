import Reveal from "./Reveal";

const ROLES = [
  {
    role: "Associate Software Engineer",
    company: "Techfy",
    mode: "Remote",
    period: "Dec 2024 – Present",
    points: [
      "Build and maintain Click2Deploy, a live multi-tenant B2B cloud-deployment SaaS used by real paying customers — from feature work through deployment on Vercel.",
      "Implemented Stripe subscriptions, billing webhooks and plan upgrade/downgrade flows; fixed a critical production bug where subscription upgrades weren't syncing to the database.",
      "Built plan-based access control with JWT authentication, RBAC and multi-tenant data isolation.",
      "Engineered a prefetch-on-boot latency architecture (global cache + localStorage TTL) and resolved localStorage cross-tab contamination across 51 files via a URL-prefixed storage utility.",
      "Collaborated with UI/UX, QA and product teams in an agile workflow using ClickUp and Airtable.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Ashwiz",
    mode: "On-site",
    period: "May 2024 – Aug 2024",
    points: [
      "Contributed to responsive, full-stack web applications using React.js, Node.js, Express.js and MongoDB.",
      "Built and integrated RESTful APIs and implemented front-end to back-end communication; assisted with database design.",
      "Participated in bug fixing, code reviews, testing and deployment workflows under senior-developer guidance.",
      "Applied Git/GitHub version-control best practices in a collaborative team environment.",
    ],
  },
];

export default function Process() {
  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28"
    >
      <Reveal>
        <span className="inline-block rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan">
          Experience
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
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
