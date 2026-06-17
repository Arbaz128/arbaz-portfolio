import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const SITE_URL = "https://arbaz-portfolio-kappa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Muhammad Arbaz Asif — Full Stack Developer & AI Integration",
    template: "%s | Muhammad Arbaz Asif",
  },
  description:
    "Full Stack Developer with 1.5+ years shipping production B2B SaaS remotely. Next.js, NestJS, TypeScript, PostgreSQL and AI/LLM integration (Claude, OpenAI). Open to remote roles and Dubai/UAE relocation.",
  keywords: [
    "Full Stack Developer",
    "Next.js developer",
    "NestJS developer",
    "React developer",
    "TypeScript developer",
    "PostgreSQL",
    "AI integration developer",
    "LLM integration",
    "Stripe integration",
    "Meta Graph API",
    "remote software engineer",
    "Dubai developer",
    "Pakistan developer",
  ],
  authors: [{ name: "Muhammad Arbaz Asif", url: SITE_URL }],
  creator: "Muhammad Arbaz Asif",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Muhammad Arbaz Asif",
    title: "Muhammad Arbaz Asif — Full Stack Developer & AI Integration",
    description:
      "Full Stack Developer shipping production B2B SaaS — Next.js, NestJS, TypeScript, PostgreSQL and AI/LLM integration. Open to remote roles & Dubai relocation.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Arbaz Asif — Full Stack Developer",
    description:
      "Full Stack Developer shipping production B2B SaaS with Next.js, NestJS & AI/LLM integration.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Arbaz Asif",
  url: SITE_URL,
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer with 1.5+ years shipping production B2B SaaS remotely, specializing in Next.js, NestJS, TypeScript, PostgreSQL and AI/LLM integration.",
  email: "mailto:a4arbazchaudhary@gmail.com",
  telephone: "+923004339095",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: ["https://www.linkedin.com/in/muhammad-arbaz-asif/"],
  knowsAbout: [
    "Next.js",
    "NestJS",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Stripe",
    "Meta Graph API",
    "AI/LLM Integration",
    "Prompt Engineering",
  ],
  worksFor: { "@type": "Organization", name: "Techfy" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
