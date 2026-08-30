import Link from "next/link";

export const metadata = {
  title: "Understanding AI in Your Healthcare | Cybersecurity Planet",
  description:
    "Learn how artificial intelligence may be used in healthcare, what it can and cannot do, and what patients should know about privacy, bias, and human oversight.",
};

export default function AIInYourHealthcarePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Understanding AI in Your Healthcare
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Artificial intelligence is increasingly used to support healthcare
        professionals, analyze medical information, organize clinical
        workflows, and help identify patterns in health data. As a patient, it
        is useful to understand where AI may appear in your care and why human
        judgment still matters.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-blue-900">
          Where AI May Be Used in Healthcare
        </h2>

        <p>
          Healthcare organizations can use AI for different purposes. Some
          systems work behind the scenes, while others may directly influence
          information presented to healthcare professionals or patients.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Analyzing medical images.</li>
          <li>Identifying patterns in health records.</li>
          <li>Supporting clinical decision-making.</li>
          <li>Helping prioritize or organize patient information.</li>
          <li>Automating administrative tasks.</li>
          <li>Supporting virtual assistants and patient communication.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          AI Can Support Decisions, Not Replace Every Decision
        </h2>

        <p>
          AI systems can process large amounts of information and identify
          patterns that may be useful to healthcare professionals. However,
          healthcare decisions often require context that cannot be understood
          from data alone.
        </p>

        <p>
          A healthcare professional may need to consider your symptoms, medical
          history, preferences, medications, circumstances, and other factors
          before making a decision about your care.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          AI Can Make Mistakes
        </h2>

        <p>
          An AI system is not automatically correct because it uses advanced
          technology. Its output depends on factors such as the data used to
          develop it, how the system was designed, and the information available
          when it is used.
        </p>

        <p>
          AI may produce incorrect predictions, miss important information, or
          generate recommendations that require further review.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Bias Can Affect AI Systems
        </h2>

        <p>
          If the data used to develop or evaluate an AI system does not
          adequately represent different populations, the system may perform
          differently for different groups of people.
        </p>

        <p>
          Healthcare organizations and professionals therefore need to consider
          fairness, accuracy, and whether an AI system is appropriate for the
          people whose care it may affect.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Your Health Data May Be Involved
        </h2>

        <p>
          Some healthcare AI systems rely on medical images, laboratory results,
          clinical notes, health records, or other patient information.
        </p>

        <p>
          This makes privacy and security important. Organizations using health
          information should have appropriate safeguards governing who can
          access the data and how it is handled.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Healthcare AI and General-Purpose AI Are Not the Same
        </h2>

        <p>
          An AI system used within a healthcare organization for a specific
          clinical purpose is different from a public chatbot or general-purpose
          AI assistant available on the internet.
        </p>

        <p>
          Do not assume that a public AI tool has access to your complete
          medical history or has been designed and evaluated for medical
          decision-making.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Be Careful When Sharing Health Information With AI
        </h2>

        <p>
          People may use public AI tools to explain symptoms, medical reports,
          medications, or test results. Before entering sensitive information,
          consider what personal details you are providing and how the service
          may handle them.
        </p>

        <p>
          Avoid sharing identifying or sensitive health information when it is
          unnecessary.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          AI Explanations Can Sound More Certain Than They Are
        </h2>

        <p>
          AI-generated responses can be written in confident and convincing
          language even when the information is incomplete or incorrect.
        </p>

        <p>
          Confidence in the wording should not be confused with medical
          accuracy. Important health information should be checked against
          reliable sources and appropriate professional advice.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Human Oversight Matters
        </h2>

        <p>
          Healthcare professionals can question an AI recommendation, compare
          it with other clinical information, and consider factors that may not
          be represented in the system.
        </p>

        <p>
          Responsible use of healthcare AI should support human expertise rather
          than encourage people to accept automated output without appropriate
          review.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Questions Patients Can Ask
        </h2>

        <p>
          You may not always know when AI is involved in a healthcare process.
          When its role is relevant to an important decision, useful questions
          can include:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>How is this technology being used in my care?</li>
          <li>Is the AI providing information or making a recommendation?</li>
          <li>Will a healthcare professional review the result?</li>
          <li>What information about me is being used?</li>
          <li>What are the limitations of the system?</li>
          <li>Are there other options if I have concerns?</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          AI Should Not Delay Urgent Care
        </h2>

        <p>
          A chatbot, symptom checker, or other automated tool should not become
          a barrier to appropriate medical attention.
        </p>

        <p>
          If a situation may require urgent or emergency care, use the
          appropriate healthcare or emergency services rather than relying on an
          AI system to make the final decision.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          What You Can Do
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Ask how AI is being used when it affects an important decision.</li>
          <li>Remember that AI output can contain errors.</li>
          <li>Protect sensitive health information when using public AI tools.</li>
          <li>Verify important health claims with reliable sources.</li>
          <li>Discuss significant medical decisions with qualified professionals.</li>
          <li>Do not treat confident AI language as proof of accuracy.</li>
        </ul>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Learn More About AI
          </h3>

          <p className="mt-2">
            Continue with our AI Literacy article to learn more about how AI is
            used across healthcare systems and why responsible use matters.
          </p>

          <Link
            href="/learn/ai-literacy/ai-in-healthcare"
            className="mt-4 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
          >
            Explore AI in Healthcare
          </Link>
        </div>
      </section>
    </div>
  );
}


