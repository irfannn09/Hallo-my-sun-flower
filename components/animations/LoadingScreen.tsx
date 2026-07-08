"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Butterfly } from "./Butterfly";
import { Sunflower } from "./Sunflower";

export function LoadingScreen({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dreamy-gradient"
        >
          <div className="relative flex flex-col items-center gap-4">
            <Sunflower size={70} className="absolute -left-16 -top-2" />
            <motion.h1
              className="font-display text-3xl italic text-ink drop-shadow-sm md:text-4xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              Memuat kisah kami... 🌻
            </motion.h1>
            <Butterfly className="absolute left-16 top-2" color="#9c5cc4" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
