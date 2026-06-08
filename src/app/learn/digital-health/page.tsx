export default function DigitalHealthPage() {
    const topics = [
      {
        title: "Health Information Online",
        description:
          "Learn how to evaluate online health claims and avoid misleading information.",
      },
      {
        title: "Telehealth Safety",
        description:
          "Understand how to use virtual care platforms safely and responsibly.",
      },
      {
        title: "Health Data Privacy",
        description:
          "Learn how health apps, portals, and wearables may collect and store personal data.",
      },
      {
        title: "Wearables & Health Apps",
        description:
          "Explore privacy and safety issues connected to fitness trackers and health applications.",
      },
      {
        title: "AI in Healthcare",
        description:
          "Understand how AI is used in healthcare and why transparency matters.",
      },
      {
        title: "Health Misinformation",
        description:
          "Build skills to recognize questionable health advice before trusting or sharing it.",
      },
    ];
  
    return (
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-blue-900">
          Digital Health & Wellbeing
        </h1>
  
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          Digital health includes the use of technology to access care,
          manage health information, use health apps, attend telehealth
          appointments, and understand online health content.
        </p>
  
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          This section helps digital citizens make informed choices about
          health information, privacy, wellbeing, and technology.
        </p>
  
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {topics.map((topic) => (
            <div key={topic.title} className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-blue-900">{topic.title}</h2>
              <p className="mt-3 text-gray-600">{topic.description}</p>
            </div>
          ))}
        </section>
      </main>
    );
  }