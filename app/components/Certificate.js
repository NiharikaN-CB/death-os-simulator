"use client";

import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";

export default function Certificate() {
  const ref = useRef();
  const [name, setName] = useState("");

  const reasons = [
    "Grim got distracted by a pigeon 🐦",
    "System bug 😵",
    "Too cool to die 😎",
    "Universe said nope ✨",
    "Main character energy 💅",
    "Plot armor activated 🛡️",
  ];

  const [randomReason, setRandomReason] = useState("");

useEffect(() => {
  const reason =
    reasons[Math.floor(Math.random() * reasons.length)];
  setRandomReason(reason);
}, []);

  const generate = async () => {
    const canvas = await html2canvas(ref.current);
    const link = document.createElement("a");
    link.download = "death-denied.png";
    link.href = canvas.toDataURL();
    link.click();
  };



  return (
    <div>
      <input
        placeholder="Enter your name"
        className="text-black p-1 mb-2 w-full rounded"
        onChange={(e) => setName(e.target.value)}
      />

      <div
        ref={ref}
        className="bg-white text-black p-4 rounded text-center"
      >
        <h2 className="font-bold text-lg">SURVIVAL CERTIFICATE</h2>
        <p className="mt-2">{name || "Certified Human"}</p>
        <p className="mt-2">Survived today because:</p>
        <p className="italic mt-1">{randomReason}</p>
      </div>

      <button
        onClick={generate}
        className="mt-2 bg-blue-500 px-3 py-1 rounded text-white"
      >
        Download Certificate
      </button>
    </div>
  );
}