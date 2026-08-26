import Link from "next/link";
import DigitalSafetyAssessment from "@/components/DigitalSafetyAssessment";

export const metadata = {
  title: "Digital Safety Assessment | Cybersecurity Planet",
  description:
    "Check your online safety habits and receive simple cybersecurity recommendations.",
};

export default function DigitalSafetyAssessmentPage() {
  return (
    <main className="px-6 py-12">
      <DigitalSafetyAssessment />

      <section className="mx-auto mt-10 max-w-3xl rounded-xl border bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-blue-900">
          Strengthen Your Digital Safety Skills
        </h2>

        <p className="mt-3 text-gray-700">
          Explore practical lessons about passwords, phishing, malware, scams,
          and safer downloading to strengthen the habits covered by this
          assessment.
        </p>

        <Link
          href="/learn/digital-safety"
          className="mt-5 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
        >
          Explore Digital Safety Lessons
        </Link>
      </section>
    </main>
  );
}