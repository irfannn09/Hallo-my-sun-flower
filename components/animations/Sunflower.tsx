"use client";

interface SunflowerProps {
  className?: string;
  size?: number;
  delay?: number;
}

// A gently swaying sunflower, used as decoration in hero/section corners.
export function Sunflower({ className = "", size = 60, delay = 0 }: SunflowerProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none inline-block origin-bottom animate-sway ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64">
        {Array.from({ length: 10 }).map((_, i) => (
          <ellipse
            key={i}
            cx="32"
            cy="14"
            rx="6"
            ry="14"
            fill="#FFE066"
            transform={`rotate(${i * 36} 32 32)`}
          />
        ))}
        <circle cx="32" cy="32" r="12" fill="#8B5E34" />
        <circle cx="32" cy="32" r="12" fill="url(#seedPattern)" opacity="0.3" />
      </svg>
    </div>
  );
}
