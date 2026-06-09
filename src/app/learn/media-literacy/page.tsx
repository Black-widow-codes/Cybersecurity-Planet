export default function MediaLiteracyPage() {
    const topics = [
      {
        title: "Source Evaluation",
        description:
          "Learn how to check who created information, why it was created, and whether the source is trustworthy.",
      },
      {
        title: "Misinformation",
        description:
          "Understand false or misleading information that spreads online, sometimes unintentionally.",
      },
      {
        title: "Disinformation",
        description:
          "Recognize false information that is deliberately created to mislead or manipulate people.",
      },
      {
        title: "Emotional Manipulation",
        description:
          "Identify content designed to trigger fear, anger, urgency, or outrage instead of careful thinking.",
      },
      {
        title: "AI-Generated Content",
        description:
          "Understand how AI can create realistic text, images, audio, and video that may be misleading.",
      },
      {
        title: "Fact-Checking",
        description:
          "Develop habits for checking evidence, context, dates, sources, and expert confirmation.",
      },
    ];
  
    return (
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-blue-900">
          Media & Information Literacy
        </h1>
  
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          Media and information literacy means being able to find, evaluate,
          understand, and responsibly share information. In a digital world full
          of social media, AI-generated content, headlines, videos, and health
          claims, digital citizens need strong critical thinking skills.
        </p>
  
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-900">
            Why Media Literacy Matters
          </h2>
  
          <p className="mt-4 text-lg text-gray-700 max-w-3xl">
            Information shapes opinions, health choices, political views,
            financial decisions, and public trust. When people cannot evaluate
            information carefully, misinformation can spread quickly and cause
            real harm.
          </p>
        </section>
  
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {topic.title}
              </h3>
  
              <p className="mt-3 text-gray-600">
                {topic.description}
              </p>
            </div>
          ))}
        </section>
  
        <section className="mt-12 rounded-2xl bg-gray-50 p-8">
          <h2 className="text-3xl font-bold text-blue-900">
            Real-World Examples
          </h2>
  
          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• A viral health claim spreads without evidence.</li>
            <li>• An old photo is shared as if it happened today.</li>
            <li>• A headline exaggerates a study to attract clicks.</li>
            <li>• A fake account shares emotionally charged information.</li>
            <li>• An AI-generated image is mistaken for a real event.</li>
          </ul>
        </section>
  
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-900">
            What You Can Do
          </h2>
  
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✓ Check the original source before sharing information.</li>
            <li>✓ Look for evidence, dates, author names, and context.</li>
            <li>✓ Be cautious with content that creates strong emotional reactions.</li>
            <li>✓ Compare important claims with trusted sources.</li>
            <li>✓ Use verification tools before trusting health, AI, or crisis-related claims.</li>
          </ul>
        </section>
  
        <section className="mt-12 rounded-2xl bg-blue-900 p-8 text-white">
          <h2 className="text-3xl font-bold">
            Key Takeaway
          </h2>
  
          <p className="mt-4 text-blue-100 text-lg">
            Media literacy is not about doubting everything. It is about slowing
            down, checking evidence, understanding context, and making informed
            decisions before trusting or sharing information.
          </p>
        </section>
      </main>
    );
  }