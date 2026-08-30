import type { Metadata } from "next";
import DigitalCitizenshipCheckupClient from "./DigitalCitizenshipCheckupClient";

export const metadata: Metadata = {
  title: "Digital Citizenship Checkup | Cybersecurity Planet",
  description:
    "Review your digital citizenship habits across responsible sharing, information evaluation, privacy, digital footprints, respectful communication, and digital wellbeing.",
};

export default function DigitalCitizenshipCheckupPage() {
  return <DigitalCitizenshipCheckupClient />;
}