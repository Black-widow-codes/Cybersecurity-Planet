export default function StatsSection() {
  const stats = [
    { number: "6", label: "Learning Tracks" },
    { number: "7", label: "Interactive Tools" },
    { number: "5+", label: "Core Topics" },
    { number: "100%", label: "Built for Digital Citizens" },
  ];

  return (
    <section
      className="bg-blue-900 px-6 py-16 text-white"
      aria-label="Cybersecurity Planet at a glance"
    >
      <ul className="mx-auto grid max-w-6xl gap-8 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <li key={stat.label}>
            <p className="text-4xl font-bold">{stat.number}</p>
            <p className="mt-2 text-blue-100">{stat.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}