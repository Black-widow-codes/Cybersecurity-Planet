import Link from "next/link";

export default function ToolsPage() {
  const tools = [
    {
      title: "Digital Citizenship Checkup",
      description:
        "Assess your digital habits and receive a simple awareness score.",
      link: "/tools/checkup",
    },
    {
      
      title: "Privacy Checkup",
      description:
        "Evaluate your privacy habits and discover ways to better protect your personal information.",
      link: "/tools/privacy-checkup",
    },
    {
      title: "Misinformation Evaluation Tool",
      description:
        "Evaluate online claims, headlines, and social media posts using a structured critical-thinking framework.",
      link: "/tools/misinformation-check",
    },
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


  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Digital Tools
      </h1>

      <p className="mt-6 text-lg text-gray-700">
        Explore interactive tools designed to help digital citizens build
        confidence, improve privacy, and strengthen critical thinking.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tools.map((tool) => (
          <div
            key={tool.title}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-blue-900">
              {tool.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {tool.description}
            </p>

            <Link
              href={tool.link}
              className="inline-block mt-5 rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white"
            >
              Open Tool
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}