import Link from "next/link";

export const metadata = {
  title: "AI in Healthcare | Cybersecurity Planet",
  description:
    "Learn how artificial intelligence is used in healthcare, where it can help, and why privacy, accuracy, bias, and human oversight matter.",
};

export default function AIInHealthcarePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        AI in Healthcare
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Artificial intelligence is increasingly used in healthcare to support
        diagnosis, organize information, improve workflows, and help
        professionals make decisions. These systems can be useful, but they
        also raise important questions about privacy, accuracy, bias, and
        responsibility.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-blue-900">
          How AI Is Used in Healthcare
        </h2>

        <p>
          AI systems can process large amounts of health information and look
          for patterns that may help healthcare professionals understand a
          patient's condition or manage clinical work more efficiently.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Analyzing medical images.</li>
          <li>Supporting clinical decision-making.</li>
          <li>Organizing patient records.</li>
          <li>Identifying patterns in health data.</li>
          <li>Helping with scheduling and administrative tasks.</li>
          <li>Supporting remote monitoring and digital health tools.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          AI Can Support, Not Replace, Healthcare Professionals
        </h2>

        <p>
          AI can provide recommendations, identify possible patterns, or
          highlight information that deserves attention. However, healthcare
          decisions often require professional judgment, patient history,
          context, communication, and ethical consideration.
        </p>

        <p>
          For this reason, AI should generally be treated as a support tool
          rather than an unquestioned replacement for qualified healthcare
          professionals.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Accuracy and Errors
        </h2>

        <p>
          AI systems can make mistakes. A model may miss important information,
          misunderstand unusual cases, or produce inaccurate recommendations.
          Performance can also vary depending on the data used to develop and
          test the system.
        </p>

        <p>
          Important health decisions therefore need appropriate review and
          should not rely blindly on automated output.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Bias in Healthcare AI
        </h2>

        <p>
          If certain populations are poorly represented in training data, an AI
          system may perform differently for those groups. This can create
          unfair or less accurate outcomes.
        </p>

        <p>
          Healthcare AI should be evaluated carefully to understand whether it
          works fairly and accurately across different populations.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Health Data and Privacy
        </h2>

        <p>
          Health information can be highly sensitive. AI systems may process
          medical histories, test results, images, symptoms, or other personal
          information.
        </p>

        <p>
          Organizations using AI in healthcare need strong safeguards for data
          access, storage, security, consent, and appropriate use.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Be Careful With Public AI Tools
        </h2>

        <p>
          General-purpose AI chatbots can provide educational information, but
          users should be cautious about entering private medical details into
          tools when they do not understand how that information may be stored
          or used.
        </p>

        <p>
          AI-generated health information should also be verified because an AI
          system can produce information that sounds confident even when it is
          incomplete or incorrect.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Questions to Ask About Healthcare AI
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>What is the AI system designed to do?</li>
          <li>How accurate is it?</li>
          <li>Who reviews its recommendations?</li>
          <li>What health data does it use?</li>
          <li>How is patient information protected?</li>
          <li>Has the system been evaluated for bias?</li>
          <li>Who is responsible when the system makes an error?</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          What You Can Do
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Verify important AI-generated health information.</li>
          <li>Do not use AI output as a substitute for professional care.</li>
          <li>Avoid sharing unnecessary sensitive health information with public AI tools.</li>
          <li>Ask how AI is being used when it affects your healthcare.</li>
          <li>Remember that automated recommendations can contain errors or bias.</li>
        </ul>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Check Your AI Literacy
          </h3>

          <p className="mt-2">
            Understanding AI in healthcare also requires awareness of privacy,
            bias, accuracy, and responsible use. Try the AI Literacy Assessment
            to check your understanding.
          </p>

          <Link
            href="/tools/ai-literacy-assessment"
            className="mt-4 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
          >
            Open AI Literacy Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}