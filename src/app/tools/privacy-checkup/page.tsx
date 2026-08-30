import type { Metadata } from "next";
import PrivacyCheckupClient from "./PrivacyCheckupClient";

export const metadata: Metadata = {
  title: "Privacy Checkup | Cybersecurity Planet",
  description:
    "Review your privacy habits across passwords, multi-factor authentication, privacy settings, personal information sharing, and app permissions.",
};

export default function PrivacyCheckupPage() {
  return <PrivacyCheckupClient />;
}