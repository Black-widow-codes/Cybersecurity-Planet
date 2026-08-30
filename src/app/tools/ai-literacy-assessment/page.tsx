import type { Metadata } from "next";
import AILiteracyAssessmentClient from "./AILiteracyAssessmentClient";

export const metadata: Metadata = {
  title: "AI Literacy Assessment | Cybersecurity Planet",
  description:
    "Check your understanding of AI tools, deepfakes, AI-generated information, bias, and responsible AI use.",
};

export default function AILiteracyAssessmentPage() {
  return (
    <div className="px-6 py-12">
      <AILiteracyAssessmentClient />
    </div>
  );
}