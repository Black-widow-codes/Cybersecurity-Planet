import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 px-6 py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold">Cybersecurity Planet</p>
          <p className="mt-3 text-blue-100">
            Helping digital citizens navigate technology with confidence.
          </p>
        </div>

        <div>
          <p className="font-semibold">Explore</p>

          <nav className="mt-3" aria-label="Footer navigation">
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link
                  href="/learn"
                  className="rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
                >
                  Learn
                </Link>
              </li>

              <li>
                <Link
                  href="/resources"
                  className="rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
                >
                  Resources
                </Link>
              </li>

              <li>
                <Link
                  href="/tools"
                  className="rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
                >
                  Tools
                </Link>
              </li>

              <li>
                <Link
                  href="/insights"
                  className="rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p className="font-semibold">Project Focus</p>

          <ul className="mt-3 space-y-2 text-blue-100">
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
