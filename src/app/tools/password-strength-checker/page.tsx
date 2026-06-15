import PasswordStrengthChecker from "@/components/PasswordStrengthChecker";

export const metadata = {
  title: "Password Strength Checker | Cybersecurity Planet",
  description:
    "Check password strength and learn how to create safer passwords.",
};

export default function PasswordStrengthCheckerPage() {
  return (
    <main className="px-6 py-12">
      <PasswordStrengthChecker />
    </main>
  );
}