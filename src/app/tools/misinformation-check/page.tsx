import type { Metadata } from "next";
import MisinformationCheckClient from "./MisinformationCheckClient";

export const metadata: Metadata = {
  title: "Misinformation Evaluation Tool | Cybersecurity Planet",
  description:
    "Evaluate online claims by checking their source, evidence, context, emotional language, independent confirmation, and possible AI-generated or manipulated content.",
};

export default function MisinformationCheckPage() {
  return <MisinformationCheckClient />;
}