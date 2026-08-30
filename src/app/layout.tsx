import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cybersecurity Planet",
  description:
    "Cybersecurity Planet provides education on digital citizenship, digital safety, privacy and digital rights, digital health, AI literacy, and media literacy.",

  openGraph: {
    title: "Cybersecurity Planet",
    description:
      "Cybersecurity Planet provides education on digital citizenship, digital safety, privacy and digital rights, digital health, AI literacy, and media literacy.",
    siteName: "Cybersecurity Planet",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Cybersecurity Planet",
    description:
      "Cybersecurity Planet provides education on digital citizenship, digital safety, privacy and digital rights, digital health, AI literacy, and media literacy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-white px-4 py-3 font-semibold text-blue-900 shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}