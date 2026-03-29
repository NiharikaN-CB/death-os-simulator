"use client";

export default function ChaosButton({ triggerChaos }) {
  return (
    <button
      onClick={triggerChaos}
      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-bold"
    >
      INITIATE CHAOS
    </button>
  );
}