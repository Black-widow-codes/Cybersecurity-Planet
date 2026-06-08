export default function StatsSection() {
    const stats = [
      { number: "6", label: "Learning Tracks" },
      { number: "1", label: "Interactive Checkup" },
      { number: "5+", label: "Core Topics" },
      { number: "100%", label: "Built for Digital Citizens" },
    ];
  
    return (
      <section className="bg-blue-900 px-6 py-16 text-white">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold">{stat.number}</p>
              <p className="mt-2 text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }