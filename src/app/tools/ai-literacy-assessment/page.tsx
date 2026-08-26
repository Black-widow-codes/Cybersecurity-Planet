import Link from "next/link";
import AILiteracyAssessment from "@/components/AILiteracyAssessment";

export const metadata = {
  title: "AI Literacy Assessment | Cybersecurity Planet",
  description:
    "Check your understanding of AI tools, deepfakes, hallucinations, bias, and responsible AI use.",
};

export default function AILiteracyAssessmentPage() {
  return (
    <main className="px-6 py-12">
      <AILiteracyAssessment />

      <section className="mx-auto mt-10 max-w-3xl rounded-xl border bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-blue-900">
          Build Your AI Literacy
        </h2>

        <p className="mt-3 text-gray-700">
          Explore lessons about artificial intelligence, AI bias, deepfakes,
          algorithms, responsible AI use, and AI in healthcare.
        </p>

        <Link
          href="/learn/ai-literacy"
          className="mt-5 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
        >
          Explore AI Literacy Lessons
        </Link>
      </section>
    </main>
  );
}