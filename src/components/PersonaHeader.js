import React from "react";

function PersonaHeader({
  personaName,
  personaRole,
  darkMode,
  onDarkModeToggle,
}) {
  return (
    <div
      className={`px-6 py-4 flex justify-between items-center border-b transition-all duration-300 ${
        darkMode
          ? "bg-slate-900/50 border-indigo-500/20"
          : "bg-white/50 border-indigo-100"
      }`}
    >
      {/* Left Section - Avatar & Info */}
      <div className="flex items-center gap-4">
        {/* Animated Avatar */}
        <div className="relative">
          <img
            src="/JennyMam.png"
            alt={personaName}
            className="w-12 h-12 rounded-2xl object-cover shadow-lg shadow-indigo-500/30"
          />
          {/* Online Status Dot */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center">
            <div className="w-2 h-2 bg-emerald-300 rounded-full animate-ping" />
          </div>
        </div>

        {/* Persona Info */}
        <div className="flex flex-col">
          <div
            className={`text-base font-bold tracking-tight ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
          >
            {personaName}
          </div>
          <div
            className={`text-xs font-medium ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            {personaRole}
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        {/* Dark Mode Toggle */}
        <button
          onClick={onDarkModeToggle}
          title="Toggle theme"
          className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${
            darkMode
              ? "bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700"
              : "bg-white/60 hover:bg-white/80 border border-slate-200"
          }`}
        >
          {darkMode ? (
            <svg
              className="w-5 h-5 text-amber-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* More Options */}
        <button
          title="More options"
          className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${
            darkMode
              ? "bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 border border-slate-700"
              : "bg-white/60 hover:bg-white/80 text-slate-600 border border-slate-200"
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PersonaHeader;
