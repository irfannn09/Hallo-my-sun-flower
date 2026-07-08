"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useState,
} from "react";

interface MusicContextValue {
  isPlaying: boolean;
  toggleMusic: () => void;
}

const MusicContext = createContext<MusicContextValue | undefined>(undefined);

// NOTE: Place your own royalty-free track at /public/music/background.mp3
// The player fails silently if the file doesn't exist yet.
export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleMusic() {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay / missing file — ignore gracefully
      });
      setIsPlaying(true);
    }
  }

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      <audio ref={audioRef} src="/music/background.mp3" loop />
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used within a MusicProvider");
  return ctx;
}
