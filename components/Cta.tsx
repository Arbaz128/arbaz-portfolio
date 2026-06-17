import { MessageCircle, Mail, Download } from "lucide-react";
import Reveal from "./Reveal";

function LinkedInIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.1 20.45H3.53V9H7.1v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const WHATSAPP_NUMBER = "923004339095";
const EMAIL = "a4arbazchaudhary@gmail.com";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/muhammad-arbaz-asif-5316b225b/";

export default function Cta() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] border border-violet/25 bg-gradient-to-br from-cyan/10 via-violet/10 to-pink/10 px-8 py-20 text-center md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-72 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,.22), transparent 65%)",
            }}
          />
          <h2 className="relative font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s <span className="grad-text">work together.</span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl leading-relaxed text-muted">
            Open to on-site, hybrid and remote roles, Dubai/UAE relocation, and
            freelance work. If you&apos;re building something and need a full
            stack developer who ships to production — let&apos;s talk.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi Arbaz! I came across your portfolio and would like to connect."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="grad-bg inline-flex items-center gap-2.5 rounded-xl px-8 py-3.5 font-display font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,.35)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_44px_rgba(139,92,246,.5)]"
            >
              <MessageCircle size={20} /> WhatsApp Me
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
                "Hello Arbaz"
              )}&body=${encodeURIComponent(
                "Hi Arbaz,\n\nI came across your portfolio and would like to connect about:\n\n"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border border-line px-8 py-3.5 font-display font-semibold text-white transition-all hover:-translate-y-1 hover:border-violet"
            >
              <Mail size={20} /> Email Me
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border border-line px-8 py-3.5 font-display font-semibold text-white transition-all hover:-translate-y-1 hover:border-cyan"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download="Muhammad_Arbaz_Asif_Resume.pdf"
              className="inline-flex items-center gap-2.5 rounded-xl border border-line px-8 py-3.5 font-display font-semibold text-white transition-all hover:-translate-y-1 hover:border-cyan"
            >
              <Download size={20} /> Download Resume
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
