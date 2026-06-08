import Link from "next/link";

export default function LearnPage() {
  const topics = [
    {
      title: "Digital Citizenship",
      link: "/learn/digital-citizenship",
      description:
        "Learn responsible, ethical, and confident participation in digital spaces.",
    },
    {
      title: "Digital Safety",
      link: "/learn/digital-safety",
      description:
        "Protect yourself from scams, phishing, and cyber threats.",
    },
    {
      title: "Privacy & Digital Rights",
      link: "/learn/privacy-rights",
      description:
        "Understand privacy, data protection, and digital rights.",
    },
    {
      title: "Digital Health",
      link: "/learn/digital-health",
      description:
        "Explore digital wellbeing, health information, and telehealth.",
    },
    {
      title: "AI Literacy",
      link: "/learn/ai-literacy",
      description:
        "Understand AI tools, algorithms, and responsible AI use.",
    },
    {
      title: "Media Literacy",
      link: "/learn/media-literacy",
      description:
        "Learn how to evaluate information and identify misinformation.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Learning Hub
      </h1>

      <p className="mt-6 text-lg text-gray-700">
        Explore learning paths designed to help digital citizens navigate technology with confidence.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {topics.map((topic) => (
          <div
            key={topic.title}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-blue-900">
              {topic.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {topic.description}
            </p>

            <Link
              href={topic.link}
              className="inline-block mt-5 bg-cyan-600 text-white px-5 py-2 rounded-lg"
            >
              Start Learning
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}