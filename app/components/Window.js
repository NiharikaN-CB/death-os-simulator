"use client";

import { useState } from "react";

export default function Window({ title, children, top, left }) {
  const [position, setPosition] = useState({
    x: parseInt(left),
    y: parseInt(top),
  });

  const [dragging, setDragging] = useState(false);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    setPosition({
      x: e.clientX - 150,
      y: e.clientY - 20,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="absolute"
      style={{ left: position.x, top: position.y }}
    >
      <div className="bg-gray-900 border border-pink-500 rounded-xl shadow-lg w-[300px]">
        
        {/* Title Bar (DRAG AREA) */}
        <div
          onMouseDown={handleMouseDown}
          className="cursor-move bg-pink-600 text-black px-2 py-1 text-sm rounded-t-xl flex justify-between"
        >
          <span>{title}</span>
          <span>✖</span>
        </div>

        {/* Content */}
        <div className="p-3 text-white">{children}</div>
      </div>
    </div>
  );
}