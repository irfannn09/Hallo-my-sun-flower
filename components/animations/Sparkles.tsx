"use client";

import { useEffect, useState } from "react";

interface SparkleItem {
  id: number;
  top: number;
  left: number;
  delay: number;
  size: number;
}

// Static field of twinkling sparkle dots, used to add a "dreamy" ambience
// over hero/background sections.
//
// NOTE: positions are randomized, so they are generated only after mount
// (client-side) to avoid a server/client hydration mismatch. Before mount,
// nothing is rendered — this matches what the server sent, then the
// sparkles "pop in" a moment after the page loads (barely noticeable).
export function Sparkles({ count = 20 }: { count?: number }) {
  const [sparkles, setSparkles] = useState<SparkleItem[]>([]);

  useEffect(() => {
    setSparkles(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        size: 4 + Math.random() * 6,
      }))
    );
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white animate-sparkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 6px 2px rgba(255,255,255,0.8)",
          }}
        />
      ))}
    </div>
  );
}
