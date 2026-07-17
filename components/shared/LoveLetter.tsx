"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";

// A digital love letter: a sealed envelope that opens with an animation
// when clicked, revealing a heartfelt message.
export function LoveLetter({
  message = "To my favorite person,\n\nEvery day with you feels like a page from my favorite story. Thank you for all the laughter, the little adventures, and the quiet moments too.\n\nHere's to many more chapters together. 💕",
}: {
  message?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-5 py-16 text-center">
      <p className="font-display text-2xl text-love-red drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">💌 A Little Love Letter</p>
      <p className="mt-2 text-xs text-ink-soft">Tap the envelope to open it</p>

      <div className="relative mx-auto mt-8 h-48 w-72 max-w-full">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="envelope"
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -4 }}
              className="relative flex h-full w-full items-center justify-center rounded-2xl bg-indigo-950/70 border border-violet-500/20 shadow-2xl backdrop-blur-sm"
            >
              <Mail className="h-14 w-14 text-love-red drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]" />
              <motion.div
                className="absolute -top-[1px] left-1/2 h-0 w-0 -translate-x-1/2 border-l-[143px] border-r-[143px] border-t-[72px] border-l-transparent border-r-transparent border-t-indigo-800/40"
                style={{ maxWidth: "100%" }}
              />
            </motion.button>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              className="h-full w-full overflow-y-auto rounded-2xl bg-slate-900 border border-white/10 p-5 text-left shadow-2xl backdrop-blur-md"
            >
              <p className="whitespace-pre-line font-body text-sm text-slate-100 leading-relaxed">{message}</p>
              <button
                onClick={() => setOpen(false)}
                className="mt-4 text-xs font-semibold text-love-red hover:underline"
              >
                Close letter
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
