"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Camera } from "lucide-react";
import { GalleryItem } from "../../types";
import { useGalleryList } from "../../hooks/useGallery";
import { Skeleton } from "../ui/Skeleton";
import { EmptyState } from "../ui/EmptyState";
import { GalleryModal } from "./GalleryModal";

export function GalleryGrid() {
  const { data, isLoading } = useGalleryList();
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  if (isLoading) {
    return (
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="mb-4 h-64 w-full break-inside-avoid" />
        ))}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <EmptyState
        icon={<Camera className="mx-auto h-10 w-10 text-blossom" />}
        title="Belum ada foto"
        description="Kenangan pertama kalian akan muncul di sini setelah admin menambahkannya."
      />
    );
  }

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
        {data.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setSelected(item)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-sm shadow-md"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={500}
              height={500}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-left text-sm font-semibold text-white">{item.title}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <GalleryModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
