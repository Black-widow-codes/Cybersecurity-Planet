import Link from "next/link";

export default function Footer() {
  const footerLinkClass =
    "rounded-sm transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 dark:text-slate-300 dark:hover:text-cyan-300 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-950";

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10 text-white transition-colors dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold text-blue-200">
            Cybersecurity Planet
          </p>

          <p className="mt-3 text-slate-400">
            Helping digital citizens navigate technology with confidence.
          </p>
        </div>

        <div>
          <p className="font-semibold text-blue-200">Explore</p>

          <nav className="mt-3" aria-label="Footer navigation">
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/learn" className={footerLinkClass}>
                  Learn
                </Link>
              </li>

              <li>
                <Link href="/resources" className={footerLinkClass}>
                  Resources
                </Link>
              </li>

              <li>
                <Link href="/tools" className={footerLinkClass}>
                  Tools
                </Link>
              </li>

              <li>
                <Link href="/insights" className={footerLinkClass}>
                  Insights
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p className="font-semibold text-blue-200">Project Focus</p>

          <ul className="mt-3 space-y-2 text-slate-400">
            <li>Digital Citizenship</li>
            <li>Privacy &amp; Digital Rights</li>
            <li>Digital Health</li>
            <li>AI Literacy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}