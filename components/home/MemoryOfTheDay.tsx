"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useGalleryList } from "../../hooks/useGallery";
import { Skeleton } from "../ui/Skeleton";

// Memilih kenangan "acak" yang di-seed dari tanggal hari ini.
function pickDailyIndex(length: number) {
  const today = new Date();
  const seed = today.getFullYear() * 372 + today.getMonth() * 31 + today.getDate();
  return length > 0 ? seed % length : 0;
}

export function MemoryOfTheDay() {
  const { data, isLoading } = useGalleryList();

  const memory = useMemo(() => {
    if (!data || data.length === 0) return null;
    return data[pickDailyIndex(data.length)];
  }, [data]);

  if (isLoading) {
    return (
      <section className="px-5 py-16">
        <Skeleton className="mx-auto h-72 w-full max-w-2xl" />
      </section>
    );
  }

  if (!memory) return null;

  return (
    <section className="px-5 py-16">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-love-red">
        Kenangan hari ini
      </p>
      <div className="mx-auto max-w-xl -rotate-1 overflow-hidden rounded-2xl bg-slate-900/60 p-3 pb-6 shadow-2xl border border-white/15 backdrop-blur-md">
        <div className="relative h-72 w-full overflow-hidden rounded-xl bg-slate-950">
          <Image
            src={memory.imageUrl}
            alt={memory.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            unoptimized
          />
        </div>
        <div className="pt-4 text-center">
          <p className="font-display text-xl italic text-ink">{memory.title}</p>
          {memory.caption && <p className="mt-2 text-sm text-ink-soft">{memory.caption}</p>}
        </div>
      </div>
    </section>
  );
}
