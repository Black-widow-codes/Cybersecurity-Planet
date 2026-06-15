import Link from "next/link";

export default function ToolsPage() {
  const availableTools = [
    {
      title: "🔐 Password Strength Checker",
      description:
        "Test password strength and learn how to create safer passwords using cybersecurity best practices.",
      link: "/tools/password-strength-checker",
    },
    {
      title: "🛡️ Digital Safety Assessment",
      description:
        "Answer simple questions and receive a digital safety score with practical recommendations.",
      link: "/tools/digital-safety-assessment",
    },
  ];

  const comingSoonTools = [
    {
      title: "Digital Citizenship Checkup",
      description:
        "Assess your digital habits and receive a simple awareness score.",
    },
    {
      title: "Privacy Checkup",
      description:
        "Evaluate your privacy habits and discover ways to better protect your personal information.",
    },
    {
      title: "Misinformation Evaluation Tool",
      description:
        "Evaluate online claims, headlines, and social media posts using a structured critical-thinking framework.",
    },
    {
      title: "🤖 AI Literacy Assessment",
      description:
        "Check your understanding of AI tools, deepfakes, bias, and responsible AI use.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">Digital Tools</h1>

      <p className="mt-6 max-w-3xl text-lg text-gray-700">
        Explore interactive tools designed to help digital citizens build
        confidence, improve privacy, and strengthen critical thinking.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-blue-900">Available Tools</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {availableTools.map((tool) => (
            <div
              key={tool.title}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-blue-900">
                {tool.title}
              </h3>

              <p className="mt-3 text-gray-600">{tool.description}</p>

              <Link
                href={tool.link}
                className="inline-block mt-5 rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white"
              >
                Open Tool
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-blue-900">Coming Soon</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {comingSoonTools.map((tool) => (
            <div
              key={tool.title}
              className="rounded-xl border bg-gray-50 p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-blue-900">
                {tool.title}
              </h3>

              <p className="mt-3 text-gray-600">{tool.description}</p>

              <span className="inline-block mt-5 rounded-lg bg-gray-200 px-5 py-3 font-semibold text-gray-700">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}