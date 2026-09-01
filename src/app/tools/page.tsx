import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Tools | Cybersecurity Planet",
  description:
    "Explore interactive tools for password security, digital safety, privacy, AI literacy, digital citizenship, misinformation, and health misinformation.",
};

const availableTools = [
  {
    title: "Password Strength Checker",
    description:
      "Test password strength and learn how to create safer passwords using cybersecurity best practices.",
    link: "/tools/password-strength-checker",
  },
  {
    title: "Digital Safety Assessment",
    description:
      "Answer simple questions and receive a digital safety score with practical recommendations.",
    link: "/tools/digital-safety-assessment",
  },
  {
    title: "AI Literacy Assessment",
    description:
      "Check your understanding of AI tools, deepfakes, hallucinations, bias, and responsible AI use.",
    link: "/tools/ai-literacy-assessment",
  },
  {
    title: "Privacy Checkup",
    description:
      "Assess your privacy habits and discover ways to better protect your personal information.",
    link: "/tools/privacy-checkup",
  },
  {
    title: "Digital Citizenship Checkup",
    description:
      "Assess your everyday digital habits and receive feedback on responsible online behaviour.",
    link: "/tools/digital-citizenship-checkup",
  },
  {
    title: "Misinformation Evaluation Tool",
    description:
      "Evaluate online claims, headlines, and social media posts using a structured critical-thinking framework.",
    link: "/tools/misinformation-check",
  },
  {
    title: "Health Misinformation Check",
    description:
      "Evaluate online health claims for credibility, evidence, miracle-cure promises, and other misinformation warning signs.",
    link: "/tools/health-misinformation-check",
  },
];

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 transition-colors dark:text-blue-200">
        Digital Tools
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-gray-700 transition-colors dark:text-slate-300">
        Explore interactive tools designed to help digital citizens build
        confidence, improve privacy, strengthen cybersecurity awareness,
        and develop critical thinking skills.
      </p>

      <section className="mt-12" aria-label="Digital tools">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {availableTools.map((tool) => (
            <article
              key={tool.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
            >
              <h2 className="text-xl font-bold text-blue-900 transition-colors dark:text-blue-200">
                {tool.title}
              </h2>

              <p className="mt-3 text-gray-600 transition-colors dark:text-slate-300">
                {tool.description}
              </p>

              <Link
                href={tool.link}
                className="mt-5 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
              >
                Open Tool
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}