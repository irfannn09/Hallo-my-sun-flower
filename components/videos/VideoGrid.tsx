"use client";

import { motion } from "framer-motion";
import { Film } from "lucide-react";
import { useVideoList } from "../../hooks/useVideos";
import { Skeleton } from "../ui/Skeleton";
import { EmptyState } from "../ui/EmptyState";
import { formatDate } from "../../utils/formatDate";

export function VideoGrid() {
  const { data, isLoading } = useVideoList();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-56 w-full" />
        ))}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <EmptyState
        icon={<Film className="mx-auto h-10 w-10 text-blossom" />}
        title="Belum ada video"
        description="Video kenangan kalian akan tampil di sini setelah admin menambahkannya."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: (i % 6) * 0.05 }}
          className="overflow-hidden rounded-sm bg-white shadow-md"
        >
          <video src={item.videoUrl} controls className="aspect-video w-full bg-ink" />
          <div className="p-4">
            <p className="font-display text-lg italic text-ink">{item.title}</p>
            {item.caption && <p className="mt-1 text-sm text-ink-soft">{item.caption}</p>}
            <p className="mt-2 text-xs uppercase tracking-wide text-ink-soft/70">
              {formatDate(item.createdAt)}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
