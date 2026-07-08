"use client";

import { Music, VolumeX } from "lucide-react";
import { useMusic } from "../../contexts/MusicContext";

export function MusicToggle() {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <button
      onClick={toggleMusic}
      title={isPlaying ? "Matikan musik" : "Putar musik"}
      className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-baby-blue text-gray-700 hover:bg-baby-blue-dark transition-colors"
    >
      {isPlaying ? <Music className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
    </button>
  );
}
