"use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { QueryProvider } from "./QueryProvider";
import { AuthProvider } from "../contexts/AuthContext";
import { MusicProvider } from "../contexts/MusicContext";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <AuthProvider>
        <MusicProvider>
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#FFFBF5",
                color: "#5A3E4D",
                borderRadius: "16px",
                border: "1px solid #FFD6E8",
              },
            }}
          />
        </MusicProvider>
      </AuthProvider>
    </QueryProvider>
  );
}
