export default function ResourcesPage() {
    const resources = [
      {
        title: "Digital Citizenship Checklist",
        description:
          "A practical guide for responsible and informed participation online.",
      },
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
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-blue-900">
          Resource Library
        </h1>
  
        <p className="mt-6 text-lg text-gray-700">
          Explore practical guides, checklists, and educational resources.
        </p>
  
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-blue-900">
                {resource.title}
              </h2>
  
              <p className="mt-3 text-gray-600">
                {resource.description}
              </p>
  
              <button className="mt-5 bg-cyan-600 text-white px-5 py-2 rounded-lg">
                View Resource
              </button>
            </div>
          ))}
        </div>
      </main>
    );
  }