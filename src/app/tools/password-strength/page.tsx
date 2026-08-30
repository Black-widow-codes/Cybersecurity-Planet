import { permanentRedirect } from "next/navigation";

export default function PasswordStrengthPage() {
  permanentRedirect("/tools/password-strength-checker");
}