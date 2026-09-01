import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
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
      suppressHydrationWarning
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only z-50 rounded-md bg-white px-4 py-3 font-semibold text-blue-900 shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 dark:bg-slate-900 dark:text-blue-200 dark:focus:ring-cyan-400 dark:focus:ring-offset-slate-950"
          >
            Skip to main content
          </a>

          <Navbar />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}