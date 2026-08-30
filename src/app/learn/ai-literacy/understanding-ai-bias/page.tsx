import Link from "next/link";

export const metadata = {
  title: "Understanding AI Bias | Cybersecurity Planet",
  description:
    "Learn what AI bias is, how biased data can affect automated decisions, and why human oversight matters.",
};

export default function UnderstandingAIBiasPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Understanding AI Bias
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Artificial intelligence can help people make decisions, organize
        information, and automate tasks. But AI systems can also produce unfair
        or misleading results when the data or design behind them contains
        bias.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-blue-900">
          What Is AI Bias?
        </h2>

        <p>
          AI bias happens when an automated system produces results that
          unfairly favor, disadvantage, or misrepresent certain people or
          groups.
        </p>

        <p>
          Bias does not always mean that someone intentionally designed the
          system to be unfair. It can enter an AI system through the data used
          to train it, the way a problem is defined, the rules used to evaluate
          results, or the decisions made during development.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          How Data Can Create Bias
        </h2>

        <p>
          AI systems often learn patterns from large datasets. If those datasets
          are incomplete, unbalanced, outdated, or influenced by past
          discrimination, the AI may learn those same patterns.
        </p>

        <p>
          For example, if a system is trained mostly on information from one
          group of people, it may perform less accurately for people who are
          poorly represented in the training data.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Where AI Bias Can Matter
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Hiring and job screening systems.</li>
          <li>Healthcare decision-support tools.</li>
          <li>Credit and financial risk assessments.</li>
          <li>Facial recognition systems.</li>
          <li>Search and recommendation systems.</li>
          <li>Automated fraud or security detection.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          AI Results Are Not Automatically Objective
        </h2>

        <p>
          A computer-generated result can look neutral because it comes from a
          machine, but AI systems are built by people and rely on human-selected
          data, rules, goals, and assumptions.
        </p>

        <p>
          This is why an AI recommendation should not automatically be treated
          as fair, accurate, or complete simply because it was produced by an
          algorithm.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Why Human Oversight Matters
        </h2>

        <p>
          People should be able to review important automated decisions,
          question unexpected results, and correct problems when an AI system
          makes a mistake.
        </p>

        <p>
          Human oversight is especially important when AI affects people&apos;s
          health, employment, education, finances, safety, or access to
          services.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Questions to Ask About an AI System
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>What data was used to develop or train the system?</li>
          <li>Are different groups adequately represented?</li>
          <li>How accurate is the system for different users?</li>
          <li>Can a person review or challenge the result?</li>
          <li>Who is responsible when the system makes a mistake?</li>
          <li>Is the system being used for a decision it was designed to make?</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          What You Can Do
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Do not assume AI-generated decisions are automatically fair.</li>
          <li>Question results that seem unusual or discriminatory.</li>
          <li>Look for human review when important decisions are involved.</li>
          <li>Consider whether the data behind a system represents different people fairly.</li>
          <li>Use AI as a decision-support tool rather than unquestioned authority.</li>
        </ul>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Check Your AI Literacy
          </h3>

          <p className="mt-2">
            AI bias is one of the reasons people should evaluate automated
            systems critically. Try the AI Literacy Assessment to check your
            understanding of AI, deepfakes, bias, and responsible AI use.
          </p>

          <Link
            href="/tools/ai-literacy-assessment"
            className="mt-4 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
          >
            Open AI Literacy Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}



