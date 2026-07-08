"use client";

import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-16 bg-romantic-gradient py-10 text-center">
      <p className="flex items-center justify-center gap-2 font-display text-lg italic text-white drop-shadow">
        Dibuat dengan <Heart className="h-5 w-5 fill-white text-white animate-pulse" /> untuk
        orang favoritku
      </p>
      <p className="mt-1 text-xs text-white/80">
        &copy; {new Date().getFullYear()} — Kisah Cinta Kecil Kami
      </p>
    </footer>
  );
}
