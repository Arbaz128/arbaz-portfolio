const LINKEDIN_URL =
  "https://www.linkedin.com/in/muhammad-arbaz-asif/";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-10 border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-12">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Muhammad Arbaz Asif — Full Stack
          Developer. Built with Next.js.
        </p>
        <div className="flex gap-7">
          <a
            href="#projects"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Contact
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-white"
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.1 20.45H3.53V9H7.1v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>{" "}
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
