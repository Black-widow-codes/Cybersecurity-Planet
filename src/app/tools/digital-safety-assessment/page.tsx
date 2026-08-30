import type { Metadata } from "next";
import DigitalSafetyAssessmentClient from "./DigitalSafetyAssessmentClient";

export const metadata: Metadata = {
  title: "Digital Safety Assessment | Cybersecurity Planet",
  description:
    "Check your digital safety habits across passwords, multi-factor authentication, software updates, suspicious links, and privacy settings.",
};

export default function DigitalSafetyAssessmentPage() {
  return (
    <div className="px-6 py-12">
      <DigitalSafetyAssessmentClient />
    </div>
  );
}