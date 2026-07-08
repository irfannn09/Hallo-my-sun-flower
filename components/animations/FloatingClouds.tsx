"use client";

// A row of soft, semi-transparent clouds drifting slowly across the top
// of a section for a dreamy sky effect.
export function FloatingClouds() {
  const clouds = [
    { top: "5%", size: 90, duration: "0s", opacity: 0.8 },
    { top: "15%", size: 60, duration: "2s", opacity: 0.6 },
    { top: "8%", size: 120, duration: "1s", opacity: 0.5 },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {clouds.map((c, i) => (
        <div
          key={i}
          className="absolute left-[-20%] animate-float-slow"
          style={{
            top: c.top,
            width: c.size,
            height: c.size * 0.5,
            opacity: c.opacity,
            animationDelay: c.duration,
          }}
        >
          <svg viewBox="0 0 100 50" className="w-full h-full">
            <ellipse cx="30" cy="30" rx="26" ry="16" fill="white" />
            <ellipse cx="55" cy="22" rx="22" ry="20" fill="white" />
            <ellipse cx="75" cy="32" rx="20" ry="14" fill="white" />
          </svg>
        </div>
      ))}
    </div>
  );
}
