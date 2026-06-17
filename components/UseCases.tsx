import { GraduationCap, Award } from "lucide-react";
import Reveal from "./Reveal";

const EDUCATION = [
  {
    title: "BS (Lateral) Computer Science",
    place: "Virtual University of Pakistan",
    period: "2026 – Present",
  },
  {
    title: "Bachelor of Science in Computer Science",
    place: "Government Islamia College Civil Lines, Lahore · University of the Punjab",
    period: "2023 – 2025",
  },
];

const CERTS = [
  {
    title: "Web Development",
    place: "Ideoversity",
    period: "2023",
  },
  {
    title: "Advanced Python Programming",
    place: "PNY & Pearson",
    period: "2025",
  },
];

export default function UseCases() {
  return (
    <section
      id="education"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28"
    >
      <Reveal>
        <span className="inline-block rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan">
          Education & Certifications
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Always <span className="grad-text">learning.</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-line bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-gradient-to-br from-cyan/15 to-violet/15">
                <GraduationCap className="text-cyan" size={22} />
              </span>
              <h3 className="font-display text-lg font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {EDUCATION.map((e) => (
                <div key={e.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-base font-semibold">
                      {e.title}
                    </h4>
                    <span className="text-xs font-medium text-muted">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {e.place}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-3xl border border-line bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-gradient-to-br from-violet/15 to-pink/15">
                <Award className="text-violet" size={22} />
              </span>
              <h3 className="font-display text-lg font-semibold">
                Certifications
              </h3>
            </div>
            <div className="space-y-6">
              {CERTS.map((c) => (
                <div key={c.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-base font-semibold">
                      {c.title}
                    </h4>
                    <span className="text-xs font-medium text-muted">
                      {c.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {c.place}
                  </p>
                </div>
              ))}
              <div className="pt-2">
                <h4 className="font-display text-base font-semibold">
                  Languages
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  English (Professional) · Urdu (Native)
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
