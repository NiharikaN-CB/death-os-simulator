"use client";

import { useEffect, useState } from "react";
import { messages } from "../utils/randomMessages";

export default function Countdown() {
  const [text, setText] = useState("Loading...");

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        messages[Math.floor(Math.random() * messages.length)];
      setText(random);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl font-mono animate-pulse">
      {text}
    </div>
  );
}