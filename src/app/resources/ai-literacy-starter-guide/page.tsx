import Link from "next/link";

export const metadata = {
  title: "AI Literacy Starter Guide | Cybersecurity Planet",
  description:
    "A practical introduction to artificial intelligence, verification, bias, deepfakes, and responsible AI use.",
};

export default function AILiteracyStarterGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-200">
        AI Literacy Starter Guide
      </h1>

      <p className="mt-4 text-gray-600 dark:text-slate-400">
        Use this guide as a quick introduction to understanding AI tools,
        recognizing their limitations, and making more informed decisions when
        using AI-generated information.
      </p>

      <section className="mt-10 space-y-8 text-gray-700 dark:text-slate-300">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200">
            Understand What AI Can and Cannot Do
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              AI systems can generate text, images, audio, recommendations, and
              predictions.
            </li>
            <li>
              AI responses can sound confident even when the information is
              incorrect.
            </li>
            <li>
              AI does not automatically understand truth, context, or human
              intentions the way a person does.
            </li>
            <li>
              Different AI systems may produce different answers to the same
              question.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200">
            Verify Important Information
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Check important claims against reliable independent sources.
            </li>
            <li>
              Do not treat an AI-generated citation or reference as trustworthy
              until you verify that it exists.
            </li>
            <li>
              Use extra caution with medical, legal, financial, safety, or
              academic information.
            </li>
            <li>
              Ask where the information came from instead of relying only on
              how convincing the answer sounds.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200">
            Watch for AI Bias
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              AI systems learn patterns from data that may contain human bias.
            </li>
            <li>
              Results may not represent every community, culture, or
              perspective equally.
            </li>
            <li>
              Question outputs that make broad assumptions about groups of
              people.
            </li>
            <li>
              Compare important decisions with other sources and human
              expertise.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200">
            Be Careful With AI-Generated Media
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Images, videos, and audio can be generated or manipulated using
              AI.
            </li>
            <li>
              Do not assume a realistic-looking video or image proves that an
              event actually happened.
            </li>
            <li>
              Look for the original source and supporting reporting when media
              seems surprising or controversial.
            </li>
            <li>
              Be especially cautious with content designed to create fear,
              anger, urgency, or outrage.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200">
            Use AI Responsibly
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Avoid entering sensitive personal or confidential information
              into AI tools unless you understand how the data will be used.
            </li>
            <li>
              Follow school, workplace, and professional rules about AI use.
            </li>
            <li>
              Review AI-generated work before sharing or submitting it.
            </li>
            <li>
              Use AI to support your judgment rather than replacing your
              judgment completely.
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition-colors dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-200">
            Check Your AI Literacy
          </h2>

          <p className="mt-2">
            Use the AI Literacy Assessment to identify areas where your
            understanding of AI could be strengthened.
          </p>

          <Link
            href="/tools/ai-literacy-assessment"
            className="mt-4 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
          >
            Take the AI Literacy Assessment
          </Link>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 transition-colors dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-200">
            Learn More About Artificial Intelligence
          </h2>

          <p className="mt-2">
            Explore Cybersecurity Planet&apos;s AI Literacy learning module for
            deeper explanations of artificial intelligence, algorithms, bias,
            deepfakes, responsible use, and AI in healthcare.
          </p>

          <Link
            href="/learn/ai-literacy"
            className="mt-4 inline-block rounded-sm font-semibold text-cyan-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
          >
            Explore AI Literacy Learning
          </Link>
        </div>
      </section>
    </div>
  );
}



