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

// Strip masthead tipis — pengganti grid 4 kartu kotak yang biasa dipakai di
// hampir semua situs "cute couple". Angka dibiarkan besar & inline seperti
// kop koran, dibingkai garis tipis di atas & bawah.
export function RelationshipCounter() {
  const { days, hours, minutes, seconds } = useRelationshipCounter();

  return (
    <section className="border-y border-lavender-dark/40 bg-white/60 px-5 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-love-red">
          Bersama sejak {formatEyebrowDate(RELATIONSHIP_START_DATE)}
        </p>
        <p className="font-display text-3xl text-ink md:text-4xl">
          {days}{" "}
          <span className="text-base font-body font-medium text-ink-soft">hari</span>
          <span className="mx-2 text-lavender-dark">·</span>
          {pad(hours)}
          <span className="text-base font-body font-medium text-ink-soft">j</span>{" "}
          {pad(minutes)}
          <span className="text-base font-body font-medium text-ink-soft">m</span>{" "}
          {pad(seconds)}
          <span className="text-base font-body font-medium text-ink-soft">d</span>
        </p>
        <p className="text-sm italic text-ink-soft">...dan akan terus bertambah. 💜</p>
      </div>
    </section>
  );
}
