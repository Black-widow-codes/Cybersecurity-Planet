export default function DigitalCitizenshipPage() {
  const principles = [
    {
      title: "Think Before You Share",
      description:
        "Pause before posting, forwarding, or reacting to content online.",
    },
    {
      title: "Protect Your Digital Footprint",
      description:
        "Understand that online actions can affect reputation, privacy, and opportunities.",
    },
    {
      title: "Respect Others Online",
      description:
        "Communicate responsibly and avoid harmful, abusive, or misleading behavior.",
    },
    {
      title: "Evaluate Information",
      description:
        "Check sources, evidence, and context before trusting or sharing information.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Digital Citizenship
      </h1>

      <p className="mt-6 text-lg text-gray-700 max-w-3xl">
        Digital citizenship means using technology responsibly, safely,
        ethically, and confidently. It includes how we communicate, share
        information, protect privacy, manage our digital footprint, and
        participate in online spaces.
      </p>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900">
          Why It Matters
        </h2>

        <p className="mt-4 text-gray-700 text-lg max-w-3xl">
          Technology affects education, work, healthcare, relationships,
          public information, and personal identity. Being a digital citizen
          means understanding both the opportunities and responsibilities that
          come with digital life.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900">
          Key Principles
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {principle.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-gray-50 p-8">
        <h2 className="text-3xl font-bold text-blue-900">
          Real-Life Examples
        </h2>

        <ul className="mt-6 space-y-4 text-gray-700">
          <li>
            • Checking whether a health claim is credible before sharing it.
          </li>
          <li>
            • Reviewing privacy settings before posting personal information.
          </li>
          <li>
            • Using respectful language during online disagreements.
          </li>
          <li>
            • Understanding how AI-generated content can influence opinions.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900">
          What You Can Do
        </h2>

        <ul className="mt-6 space-y-3 text-gray-700">
          <li>✓ Use strong passwords and multi-factor authentication.</li>
          <li>✓ Review privacy settings on apps and social media.</li>
          <li>✓ Verify information before sharing it.</li>
          <li>✓ Think about how your digital footprint represents you.</li>
          <li>✓ Use technology in ways that support wellbeing and respect.</li>
        </ul>
      </section>

      <section className="mt-12 rounded-2xl bg-blue-900 p-8 text-white">
        <h2 className="text-3xl font-bold">
          Key Takeaway
        </h2>

        <p className="mt-4 text-blue-100 text-lg">
          Digital citizenship is not just about being online. It is about
          understanding how your actions, choices, privacy, and responsibilities
          shape your participation in the digital world.
        </p>
      </section>
    </main>
  );
}