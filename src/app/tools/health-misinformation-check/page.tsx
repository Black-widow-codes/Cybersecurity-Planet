import type { Metadata } from "next";
import HealthMisinformationCheckClient from "./HealthMisinformationCheckClient";

export const metadata: Metadata = {
  title: "Health Misinformation Check | Cybersecurity Planet",
  description:
    "Evaluate online health claims by checking the source, supporting evidence, miracle promises, and whether the information conflicts with professional medical advice.",
};

export default function HealthMisinformationCheckPage() {
  return <HealthMisinformationCheckClient />;
}