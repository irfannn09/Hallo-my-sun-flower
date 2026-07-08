"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useGalleryList } from "../../hooks/useGallery";
import { Skeleton } from "../ui/Skeleton";

// Memilih kenangan "acak" yang di-seed dari tanggal hari ini, jadi tetap
// sama sepanjang hari tapi berganti setiap hari.
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
      <div className="mx-auto max-w-2xl -rotate-1 overflow-hidden rounded-sm bg-white p-3 pb-6 shadow-xl">
        <div className="relative h-72 w-full">
          <Image
            src={memory.imageUrl}
            alt={memory.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="pt-4 text-center">
          <p className="font-display text-xl italic text-ink">{memory.title}</p>
          {memory.caption && <p className="mt-1 text-sm text-ink-soft">{memory.caption}</p>}
        </div>
      </div>
    </section>
  );
}
