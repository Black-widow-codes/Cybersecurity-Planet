"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navigationLinks = [
  { href: "/learn", label: "Learn" },
  { href: "/resources", label: "Resources" },
  { href: "/tools", label: "Tools" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className="border-b border-gray-200 bg-white"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Cybersecurity Planet home"
            className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
          >
            <Logo />
          </Link>

          <div className="hidden items-center gap-6 font-medium text-gray-700 md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/learn"
              className="rounded-lg bg-cyan-700 px-4 py-2 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
            >
              Start Learning
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="rounded-lg border border-gray-300 px-3 py-2 font-medium text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 md:hidden"
            aria-expanded={isMenuOpen}
aria-controls="mobile-navigation"
aria-label={isMenuOpen ? "Close main navigation menu" : "Open main navigation menu"}
onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4 md:hidden"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 font-medium text-gray-700 hover:bg-gray-50 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/learn"
              className="mt-2 rounded-lg bg-cyan-700 px-4 py-2 text-center font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Learning
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
