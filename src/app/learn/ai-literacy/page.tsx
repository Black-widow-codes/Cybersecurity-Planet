export default function AILiteracyPage() {
    const topics = [
      {
        title: "What AI Is",
        description:
          "Understand artificial intelligence as technology that can recognize patterns, generate content, and support decision-making.",
      },
      {
        title: "Algorithms",
        description:
          "Learn how digital systems use rules and data to recommend content, rank results, and personalize experiences.",
      },
      {
        title: "Deepfakes",
        description:
          "Recognize AI-generated or manipulated images, audio, and video that can mislead people.",
      },
      {
        title: "AI Bias",
        description:
          "Understand how unfair or incomplete data can lead to biased digital decisions.",
      },
      {
        title: "AI in Healthcare",
        description:
          "Explore how AI can support diagnosis, workflow, patient safety, and health decision-making.",
      },
      {
        title: "Responsible AI Use",
        description:
          "Learn how to use AI tools carefully, ethically, and with awareness of privacy and accuracy limits.",
      },
    ];
  
    return (
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-blue-900">
          AI Literacy
        </h1>
  
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          AI literacy means understanding how artificial intelligence works,
          how it affects daily life, and how to use AI tools responsibly.
          Digital citizens need AI literacy to evaluate information, protect
          privacy, recognize manipulation, and make informed decisions.
        </p>
  
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-900">
            Why AI Literacy Matters
          </h2>
  
          <p className="mt-4 text-lg text-gray-700 max-w-3xl">
            AI systems are increasingly used in search engines, social media,
            education, healthcare, hiring, customer service, and security.
            Understanding AI helps people question outputs, identify risks,
            and avoid relying blindly on automated systems.
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
            <li>• A chatbot gives an answer that sounds confident but may be wrong.</li>
            <li>• A social media platform recommends content based on engagement.</li>
            <li>• A deepfake video makes someone appear to say something they never said.</li>
            <li>• An AI tool supports healthcare workers by organizing patient information.</li>
            <li>• A hiring platform uses algorithms to screen applications.</li>
          </ul>
        </section>
  
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-900">
            What You Can Do
          </h2>
  
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✓ Verify important AI-generated information with trusted sources.</li>
            <li>✓ Avoid uploading sensitive personal or health information into AI tools.</li>
            <li>✓ Be aware that AI systems can make mistakes or reflect bias.</li>
            <li>✓ Question images, videos, or audio that seem suspicious or emotionally manipulative.</li>
            <li>✓ Use AI as support, not as a replacement for judgment or professional advice.</li>
          </ul>
        </section>
  
        <section className="mt-12 rounded-2xl bg-blue-900 p-8 text-white">
          <h2 className="text-3xl font-bold">
            Key Takeaway
          </h2>
  
          <p className="mt-4 text-blue-100 text-lg">
            AI literacy helps digital citizens understand the power and limits
            of artificial intelligence. The goal is not to fear AI, but to use
            it carefully, critically, and responsibly.
          </p>
        </section>
      </main>
    );
  }