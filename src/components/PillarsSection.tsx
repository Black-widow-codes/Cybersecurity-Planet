import Link from "next/link";

const pillars = [
  {
    title: "Digital Citizenship",
    href: "/learn/digital-citizenship",
  },
  {
    title: "Digital Safety",
    href: "/learn/digital-safety",
  },
  {
    title: "Privacy & Digital Rights",
    href: "/learn/privacy-rights",
  },
  {
    title: "Digital Health & Wellbeing",
    href: "/learn/digital-health",
  },
  {
    title: "AI & Emerging Technology",
    href: "/learn/ai-literacy",
  },
  {
    title: "Media Literacy",
    href: "/learn/media-literacy",
  },
];

export default function PillarsSection() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-blue-900">
          Explore Digital Citizenship
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-700">
          Learn the key areas every digital citizen needs to understand in
          today&apos;s connected world.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="rounded-xl border bg-white p-6 shadow-sm transition hover:border-cyan-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {pillar.title}
              </h3>

              <p className="mt-3 text-gray-600">
                Clear, practical education to help you understand and navigate
                this topic.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
