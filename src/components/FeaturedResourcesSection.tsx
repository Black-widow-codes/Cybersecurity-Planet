import Link from "next/link";

export default function FeaturedResourcesSection() {
  const resources = [
    {
      title: "Privacy Protection Checklist",
      description:
        "Simple actions to improve privacy and control personal data.",
    },
    {
      title: "Digital Safety Guide",
      description:
        "Learn how to identify scams, phishing attacks, and online threats.",
    },
    {
      title: "AI Literacy Starter Guide",
      description:
        "Understand AI tools, algorithms, deepfakes, and responsible AI use.",
    },
  ];

  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center">
          Featured Resources
        </h2>

        <p className="mt-4 text-center text-gray-700">
          Explore practical guides and educational resources.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {resource.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {resource.description}
              </p>

              <Link
                href="/resources"
                className="inline-block mt-5 text-cyan-600 font-semibold"
              >
                View Resource →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}