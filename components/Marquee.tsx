const TOOLS = [
  "NEXT.JS",
  "NESTJS",
  "TYPESCRIPT",
  "REACT",
  "NODE.JS",
  "POSTGRESQL",
  "PRISMA",
  "CLAUDE",
  "OPENAI",
  "STRIPE",
  "META GRAPH API",
  "VERCEL",
];

export default function Marquee() {
  const row = [...TOOLS, ...TOOLS];
  return (
    <div className="relative z-10 overflow-hidden whitespace-nowrap border-y border-line bg-white/[0.015] py-5">
      <div className="animate-marquee inline-block">
        {[...row, ...row].map((tool, i) => (
          <span
            key={i}
            className="mx-10 font-display text-base font-semibold tracking-[0.08em] text-white/35"
          >
            {tool} <span className="ml-10 text-violet/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
