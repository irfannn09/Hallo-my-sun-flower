"use client";

import { useRelationshipCounter } from "../../hooks/useRelationshipCounter";
import { RELATIONSHIP_START_DATE } from "../../constants";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

const bulan = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

function formatEyebrowDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
}

export function RelationshipCounter() {
  const { days, hours, minutes, seconds } = useRelationshipCounter();

  return (
    <section className="px-5 py-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-violet-500/15 bg-slate-900/50 p-6 text-center shadow-xl backdrop-blur-md">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-love-red">
          Bersama sejak {formatEyebrowDate(RELATIONSHIP_START_DATE)}
        </p>
        <p className="mt-3 font-display text-4xl text-ink md:text-5xl tracking-wide">
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text font-bold text-transparent">
            {days}
          </span>{" "}
          <span className="text-sm font-body font-medium uppercase tracking-wider text-ink-soft">hari</span>
          <span className="mx-3 text-violet-500/40">·</span>
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text font-bold text-transparent">
            {pad(hours)}
          </span>
          <span className="text-sm font-body font-medium uppercase tracking-wider text-ink-soft">j</span>{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text font-bold text-transparent">
            {pad(minutes)}
          </span>
          <span className="text-sm font-body font-medium uppercase tracking-wider text-ink-soft">m</span>{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text font-bold text-transparent">
            {pad(seconds)}
          </span>
          <span className="text-sm font-body font-medium uppercase tracking-wider text-ink-soft">d</span>
        </p>
        <p className="mt-2 text-xs italic text-ink-soft/80">...dan akan terus bertambah. 💜</p>
      </div>
    </section>
  );
}
