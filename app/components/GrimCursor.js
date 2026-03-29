"use client";

import { useEffect, useState } from "react";

export default function GrimCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        fontSize: "24px",
        zIndex: 9999,
      }}
    >
      💀
    </div>
  );
}