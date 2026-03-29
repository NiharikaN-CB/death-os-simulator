"use client";

import Window from "./Window";

export default function Desktop({ children }) {
  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-black to-green-900 opacity-30"></div>

      {/* Title */}
      <div className="absolute top-4 left-4 font-mono text-lg z-10">
        404: Death Not Found
      </div>

      {/* Windows Area */}
      {children}
    </div>
  );
}