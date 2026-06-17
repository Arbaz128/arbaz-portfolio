"use client";

import { motion, useInView } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const tick = () => {
      current += step;
      if (current >= target) {
        setValue(target);
      } else {
        setValue(current);
        requestAnimationFrame(tick);
      }
    };
    tick();
  }, [inView, target]);

  return (
    <h3
      ref={ref}
      className="grad-text font-display text-4xl font-bold md:text-5xl"
    >
      {value}
      {suffix}
    </h3>
  );
}

const STATS = [
  { target: 1, suffix: ".5+ yrs", label: "production experience shipping SaaS" },
  { target: 3, suffix: "+", label: "live B2B SaaS products built & shipped" },
  { target: 50, suffix: "+", label: "AI tools launched on Product Hunt" },
];

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-36 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-9 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/5 px-5 py-2 text-sm text-muted"
      >
        <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
        Available for remote roles · Open to Dubai/UAE relocation
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="max-w-5xl font-display text-5xl font-bold leading-[1.06] tracking-tight md:text-7xl"
      >
        Hi, I&apos;m Arbaz — I build{" "}
        <span className="grad-text">production SaaS</span> end to end.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted"
      >
        Full Stack Developer &amp; AI Integration Specialist with 1.5+ years
        shipping real B2B SaaS products. Currently building Click2Deploy at
        Techfy, and shipped Floww — a social-media automation SaaS — as a
        freelance project, with Next.js, NestJS, TypeScript and PostgreSQL.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mt-11 flex flex-wrap justify-center gap-4"
      >
        <a
          href="#projects"
          className="grad-bg rounded-xl px-8 py-3.5 font-display font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,.35)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_44px_rgba(139,92,246,.5)]"
        >
          View My Work →
        </a>
        <a
          href="/resume.pdf"
          download="Muhammad_Arbaz_Asif_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-xl border border-line px-8 py-3.5 font-display font-semibold text-white transition-all hover:-translate-y-1 hover:border-cyan"
        >
          <Download size={18} /> Download Resume
        </a>
        <a
          href="#contact"
          className="rounded-xl border border-line px-8 py-3.5 font-display font-semibold text-white transition-all hover:-translate-y-1 hover:border-violet"
        >
          Get In Touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 flex flex-wrap justify-center gap-12 md:gap-20"
      >
        {STATS.map((s) => (
          <div key={s.label} className="max-w-[220px]">
            <Counter target={s.target} suffix={s.suffix} />
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
