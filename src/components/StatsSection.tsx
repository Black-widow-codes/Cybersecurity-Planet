export default function StatsSection() {
  const stats = [
    { number: "6", label: "Learning Tracks" },
    { number: "7", label: "Interactive Tools" },
    { number: "5+", label: "Core Topics" },
    { number: "100%", label: "Built for Digital Citizens" },
  ];

  return (
    <section
      className="border-y border-slate-200 bg-slate-100 px-6 py-16 transition-colors dark:border-slate-800 dark:bg-slate-950"
      aria-label="Cybersecurity Planet at a glance"
    >
      <ul className="mx-auto grid max-w-6xl gap-8 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <li key={stat.label}>
            <p className="text-4xl font-bold text-blue-900 dark:text-blue-200">
              {stat.number}
            </p>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}