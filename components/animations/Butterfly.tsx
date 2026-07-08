"use client";

import { motion } from "framer-motion";

interface ButterflyProps {
  className?: string;
  delay?: number;
  color?: string;
}

// A single decorative butterfly that flutters around in a loose loop while
// its wings flap. Purely decorative — aria-hidden.
export function Butterfly({ className = "", delay = 0, color = "#FF9EC4" }: ButterflyProps) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none inline-block animate-butterfly-fly ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <motion.svg
        width="36"
        height="30"
        viewBox="0 0 36 30"
        animate={{ scaleX: [1, 0.55, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M18 15 C10 -2 -4 2 4 14 C-4 26 10 32 18 15Z" fill={color} opacity="0.9" />
        <path d="M18 15 C26 -2 40 2 32 14 C40 26 26 32 18 15Z" fill={color} opacity="0.9" />
        <line x1="18" y1="6" x2="18" y2="24" stroke="#7A4B60" strokeWidth="1.5" />
      </motion.svg>
    </motion.div>
  );
}
