import Link from "next/link";

const resources = [
  {
    title: "Privacy Protection Checklist",
    description:
      "Simple actions to improve privacy and control personal data.",
    href: "/resources/privacy-protection-checklist",
  },
  {
    title: "Digital Safety Guide",
    description:
      "Learn how to identify scams, phishing attacks, and online threats.",
    href: "/resources/digital-safety-guide",
  },
  {
    title: "AI Literacy Starter Guide",
    description:
      "Understand AI tools, algorithms, deepfakes, and responsible AI use.",
    href: "/resources/ai-literacy-starter-guide",
  },
];

export default function FeaturedResourcesSection() {
  return (
    <section className="bg-white px-6 py-20 transition-colors dark:bg-slate-900">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Featured Resources
        </h2>

        <p className="mt-4 text-center text-gray-700 transition-colors dark:text-slate-300">
          Explore practical guides and educational resources.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.href}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800"
            >
              <h3 className="text-xl font-bold text-blue-900 transition-colors dark:text-blue-200">
                {resource.title}
              </h3>

              <p className="mt-3 text-gray-600 transition-colors dark:text-slate-300">
                {resource.description}
              </p>

              <Link
                href={resource.href}
                aria-label={`View ${resource.title}`}
                className="mt-5 inline-block rounded-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:text-cyan-300 dark:hover:text-cyan-200 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
              >
                View Resource <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}