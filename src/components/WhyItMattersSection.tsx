export default function WhyItMattersSection() {
  const approachItems = [
    "Simplify complex digital issues",
    "Build confidence, not fear",
    "Support privacy and digital rights",
    "Promote critical thinking",
    "Connect cybersecurity, AI, and digital health",
  ];

  return (
    <section className="bg-white px-6 py-20 transition-colors dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 transition-colors dark:text-blue-200">
            Why Cybersecurity Planet Matters
          </h2>

          <p className="mt-5 text-lg text-gray-700 transition-colors dark:text-slate-300">
            Technology now shapes how people learn, work, communicate, access
            health services, use AI tools, and participate in society.
            Understanding the digital world is no longer optional.
          </p>

          <p className="mt-4 text-lg text-gray-700 transition-colors dark:text-slate-300">
            Cybersecurity Planet helps digital citizens simplify complex
            issues, recognize risks, protect privacy, evaluate information, and
            make confident decisions online.
          </p>
        </div>

        <div className="rounded-2xl bg-blue-900 p-8 text-white transition-colors dark:bg-slate-800 dark:ring-1 dark:ring-slate-700">
          <h3 className="text-2xl font-bold text-white">Our Approach</h3>

          <ul className="mt-6 space-y-4">
            {approachItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="font-bold text-cyan-200"
                >
                  ✓
                </span>

                <span className="text-slate-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}