"use client";

import { motion } from "framer-motion";
import { NotebookPen } from "lucide-react";
import { useNoteList } from "../../hooks/useNotes";
import { Skeleton } from "../ui/Skeleton";
import { EmptyState } from "../ui/EmptyState";
import { NOTE_COLORS } from "../../constants";
import { formatDate } from "../../utils/formatDate";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0"];
const tapeRotations = ["-rotate-6", "rotate-3", "rotate-6", "-rotate-3"];

export function NotesGrid() {
  const { data, isLoading } = useNoteList();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-48 w-full" />
        ))}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <EmptyState
        icon={<NotebookPen className="mx-auto h-10 w-10 text-blossom" />}
        title="Belum ada catatan"
        description="Catatan romantis kalian akan muncul di sini setelah admin menambahkannya."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((note, i) => {
        const colorSet = NOTE_COLORS[note.color] || NOTE_COLORS.pink;
        const rotation = rotations[i % rotations.length];
        const tapeRotation = tapeRotations[i % tapeRotations.length];
        return (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.05 }}
            whileHover={{ scale: 1.04, rotate: 0 }}
            className={`relative ${colorSet.bg} ${colorSet.border} ${rotation} rounded-2xl border p-6 pt-8 shadow-xl shadow-slate-950/30 transition-transform`}
          >
            <span className={`tape -top-2 left-1/2 -translate-x-1/2 ${tapeRotation}`} />
            <p className="font-display text-lg italic text-ink">{note.title}</p>
            <p className="mt-2 whitespace-pre-line text-sm text-ink-soft leading-relaxed">{note.content}</p>
            <p className="mt-4 text-right text-xs text-ink-soft/70">{formatDate(note.createdAt)}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
