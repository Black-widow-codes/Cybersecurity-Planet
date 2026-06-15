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
    </main>
  );
}