import Link from "next/link";

export const metadata = {
  title: "Responsible AI Use | Cybersecurity Planet",
  description:
    "Learn how to use AI tools responsibly by protecting privacy, checking accuracy, recognizing limits, and maintaining human judgment.",
};

export default function ResponsibleAIUsePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Responsible AI Use
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Artificial intelligence can be useful for learning, creativity,
        research, productivity, and problem-solving. Responsible AI use means
        understanding both its benefits and its limits before relying on it.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-blue-900">
          AI Can Be Helpful, but It Is Not Always Correct
        </h2>

        <p>
          AI systems can generate answers that sound confident even when the
          information is incomplete, outdated, misleading, or incorrect.
        </p>

        <p>
          Important information should therefore be checked against reliable
          sources rather than accepted simply because an AI system produced it.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Protect Your Privacy
        </h2>

        <p>
          Information entered into an AI tool may be processed or stored in ways
          you do not fully understand. Avoid sharing sensitive information
          unless you know how the service handles your data.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Passwords and security codes.</li>
          <li>Financial information.</li>
          <li>Private medical information.</li>
          <li>Confidential workplace information.</li>
          <li>Personal identification documents.</li>
          <li>Information about other people without their permission.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Verify Important AI-Generated Information
        </h2>

        <p>
          AI can be useful for explaining ideas or helping you begin research,
          but important claims should be verified independently.
        </p>

        <p>
          This is especially important when information affects health, safety,
          finances, education, legal decisions, employment, or other serious
          situations.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Watch for Bias
        </h2>

        <p>
          AI systems learn from data and can reflect problems found in that
          data. Their responses may contain stereotypes, missing perspectives,
          or unfair assumptions.
        </p>

        <p>
          Responsible use means questioning whether an AI response represents
          different people fairly and whether another perspective should be
          considered.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Be Transparent About AI Use
        </h2>

        <p>
          In school, work, publishing, or professional environments, there may
          be rules about when AI can be used and whether its use must be
          disclosed.
        </p>

        <p>
          Responsible users should follow those rules and avoid presenting
          AI-generated work as entirely their own when disclosure is required.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Do Not Use AI to Harm or Deceive Others
        </h2>

        <p>
          AI tools should not be used to impersonate people, spread false
          information, harass others, create fraudulent content, or manipulate
          people into unsafe decisions.
        </p>

        <p>
          The fact that technology can perform an action does not automatically
          make that action responsible or ethical.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Keep Human Judgment Involved
        </h2>

        <p>
          AI can support decisions, but people remain responsible for how its
          output is interpreted and used.
        </p>

        <p>
          Human judgment is especially important when decisions affect another
          person&apos;s rights, opportunities, safety, privacy, or wellbeing.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Questions to Ask Before Using AI Output
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Could this information be wrong?</li>
          <li>Can I verify it with another reliable source?</li>
          <li>Am I sharing private or sensitive information?</li>
          <li>Could bias affect this response?</li>
          <li>Am I following the rules for AI use in this situation?</li>
          <li>Could using this output harm or mislead someone?</li>
          <li>Should a qualified person review this decision?</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          What You Can Do
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Use AI as support rather than unquestioned authority.</li>
          <li>Verify important information before acting on it.</li>
          <li>Protect sensitive personal information.</li>
          <li>Be transparent when AI use should be disclosed.</li>
          <li>Question bias and missing perspectives.</li>
          <li>Keep human judgment involved in important decisions.</li>
        </ul>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Check Your AI Literacy
          </h3>

          <p className="mt-2">
            Responsible AI use brings together many of the ideas covered in
            Cybersecurity Planet&apos;s AI Literacy section, including accuracy,
            algorithms, deepfakes, bias, privacy, and human oversight.
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



