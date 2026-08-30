import GlobeLogo from "./GlobeLogo";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <GlobeLogo size={48} />

      <div>
        <div className="text-lg font-bold text-blue-900 transition-colors dark:text-blue-300">
          Cybersecurity Planet
        </div>

        <div className="text-xs text-gray-500 transition-colors dark:text-slate-400">
          Navigate Technology with Confidence
        </div>
      </div>
    </div>
  );
}