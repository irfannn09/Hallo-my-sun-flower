"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";

// Surat cinta digital: amplop tertutup yang terbuka dengan animasi saat
// diklik, menampilkan pesan romantis di dalamnya.
export function LoveLetter({
  message = "Untuk orang favoritku,\n\nSetiap hari bersamamu terasa seperti halaman favorit dari cerita hidupku. Terima kasih untuk semua tawa, petualangan kecil, dan juga momen-momen tenang yang kita lalui bersama.\n\nSemoga masih ada banyak bab lagi yang akan kita tulis bersama. 💕",
}: {
  message?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-5 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-love-red">
        Sepucuk surat cinta
      </p>
      <p className="mt-2 font-display text-2xl italic text-ink">Ketuk amplopnya untuk membuka</p>

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
              className="relative flex h-full w-full items-center justify-center rounded-sm bg-blossom shadow-lg"
            >
              <Mail className="h-14 w-14 text-white" />
            </motion.button>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              className="h-full w-full overflow-y-auto rounded-sm bg-white p-5 text-left shadow-lg"
            >
              <p className="whitespace-pre-line font-body text-sm text-ink-soft">{message}</p>
              <button
                onClick={() => setOpen(false)}
                className="mt-3 text-xs font-semibold text-love-red underline"
              >
                Tutup surat
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
