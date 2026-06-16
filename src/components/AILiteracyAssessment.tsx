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
    </main>
  );
}