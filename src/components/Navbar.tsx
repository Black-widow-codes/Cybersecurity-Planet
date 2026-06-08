import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Logo />

        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="/learn">Learn</a>
          <a href="/resources">Resources</a>
          <a href="/tools">Tools</a>
          <a href="/insights">Insights</a>
          <a href="/about">About</a>
        </div>

        <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold">
          Start Learning
        </button>
      </div>
    </nav>
  );
}