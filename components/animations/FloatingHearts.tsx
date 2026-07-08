"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeartItem {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

// Renders a batch of small floating hearts drifting upward across the
// screen, each with a randomized position, delay, and size for variety.
//
// NOTE: positions are randomized, so they are generated only after mount
// (client-side) to avoid a server/client hydration mismatch.
export function FloatingHearts({ count = 10 }: { count?: number }) {
  const [hearts, setHearts] = useState<HeartItem[]>([]);

  useEffect(() => {
    setHearts(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 6,
        size: 12 + Math.random() * 16,
      }))
    );
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          className="absolute bottom-0 text-love-red/70"
          style={{ left: `${h.left}%`, fontSize: h.size }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: "-110vh", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          💗
        </motion.span>
      ))}
    </div>
  );
}
