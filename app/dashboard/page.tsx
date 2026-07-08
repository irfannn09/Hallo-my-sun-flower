"use client";

import { Camera, NotebookPen } from "lucide-react";
import { useGalleryList } from "../../hooks/useGallery";
import { useNoteList } from "../../hooks/useNotes";
import { useAuth } from "../../contexts/AuthContext";

export default function DashboardHomePage() {
  const { admin } = useAuth();
  const { data: gallery } = useGalleryList();
  const { data: notes } = useNoteList();

  const stats = [
    { label: "Total Foto", value: gallery?.length ?? 0, icon: Camera, color: "bg-blossom" },
    { label: "Total Catatan", value: notes?.length ?? 0, icon: NotebookPen, color: "bg-skymist" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl italic text-ink">
        Selamat datang kembali{admin ? `, ${admin.email.split("@")[0]}` : ""} 👋
      </h1>
      <p className="mt-1 text-sm text-ink-soft">
        Kelola seluruh kenangan kalian dari sini.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:max-w-xl">
        {stats.map((s) => (
          <div key={s.label} className={`${s.color} p-6 shadow-sm`}>
            <s.icon className="h-6 w-6 text-ink" />
            <p className="mt-3 font-display text-3xl text-ink">{s.value}</p>
            <p className="text-sm text-ink-soft">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
