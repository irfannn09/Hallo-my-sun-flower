"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";
import { Sparkles } from "../animations/Sparkles";

const links = [
  { label: "Galeri", href: "/gallery" },
  { label: "Catatan", href: "/notes" },
  { label: "Tentang Kami", href: "/about" },
];

// Kartu polaroid dekoratif yang ditumpuk & dimiringkan dengan gaya glassmorphic mewah.
// Menggunakan ilustrasi romantis hasil generate untuk menggantikan SVG ilustrasi lama.
function PolaroidStack() {
  return (
    <div className="relative mx-auto h-80 w-72 sm:h-96 sm:w-80">
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: -9 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute left-0 top-6 flex w-48 -rotate-6 flex-col items-center gap-2 rounded bg-slate-900/80 p-2.5 pb-5 shadow-2xl border border-white/10 backdrop-blur-md sm:w-52"
      >
        <span className="tape -top-3 left-6 -rotate-6" />
        <div className="relative h-32 w-full overflow-hidden rounded bg-slate-950 sm:h-36">
          <Image
            src="/images/couple_stars.jpg"
            alt="Mimpi indah kita"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
        <p className="font-display text-xs italic text-ink-soft sm:text-sm">mimpi indah kita 🌌</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 10 }}
        animate={{ opacity: 1, y: 0, rotate: 7 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute right-0 top-0 flex w-48 rotate-6 flex-col items-center gap-2 rounded bg-slate-900/80 p-2.5 pb-5 shadow-2xl border border-white/10 backdrop-blur-md sm:w-52"
      >
        <span className="tape -top-3 right-6 rotate-3" />
        <div className="relative h-32 w-full overflow-hidden rounded bg-slate-950 sm:h-36">
          <Image
            src="/images/couple_cozy.jpg"
            alt="Secangkir cerita"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
        <p className="font-display text-xs italic text-ink-soft sm:text-sm">secangkir cerita ☕</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute bottom-0 left-8 flex w-48 flex-col items-center gap-2 rounded bg-slate-900/80 p-2.5 pb-5 shadow-2xl border border-white/10 backdrop-blur-md sm:w-52"
      >
        <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-1" />
        <div className="relative h-32 w-full overflow-hidden rounded bg-slate-950 sm:h-36">
          <Image
            src="/images/couple_sunset.jpg"
            alt="Selamanya bersama"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
        <p className="font-display text-xs italic text-ink-soft sm:text-sm">selamanya bersama 🌅</p>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dreamy-gradient px-5 pb-20 pt-16 border-b border-white/5">
      <Sparkles count={18} />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
        {/* Kolom teks — asimetris, rata kiri */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-love-red"
          >
            <span className="h-px w-8 bg-love-red" />
            Sebuah arsip kecil untuk kami berdua
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl leading-[1.1] text-ink md:text-6xl"
          >
            Kisah cinta
            <br />
            kecil <span className="italic bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">kami.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-md text-ink-soft leading-relaxed"
          >
            Setiap foto dan catatan kecil kami simpan di sini — bukan
            supaya sempurna, tapi supaya tidak lupa betapa kami saling
            menyayangi hari demi hari.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-1 text-sm font-semibold text-ink underline decoration-lavender-dark decoration-2 underline-offset-4 transition-colors hover:text-love-red"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Kolom visual — tumpukan polaroid */}
        <PolaroidStack />
      </div>
    </section>
  );
}
