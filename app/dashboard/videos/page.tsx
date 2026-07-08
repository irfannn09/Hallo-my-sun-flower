"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { VideoItem } from "../../../types";
import { useVideoList, useDeleteVideo } from "../../../hooks/useVideos";
import { DataTable } from "../../../components/dashboard/DataTable";
import { VideoForm } from "../../../components/dashboard/VideoForm";
import { Modal } from "../../../components/ui/Modal";
import { Button } from "../../../components/ui/Button";
import { formatDate } from "../../../utils/formatDate";

export default function DashboardVideosPage() {
  const { data, isLoading } = useVideoList();
  const deleteMutation = useDeleteVideo();
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<VideoItem | null>(null);
  const [deleting, setDeleting] = useState<VideoItem | null>(null);

  function openCreate() {
    setEditing(null);
    setModalOpen(true);
  }

  function openEdit(item: VideoItem) {
    setEditing(item);
    setModalOpen(true);
  }

  async function confirmDelete() {
    if (deleting) {
      await deleteMutation.mutateAsync(deleting.id);
      setDeleting(null);
    }
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-2xl text-love-red">Kelola Videos</h1>
        <Button onClick={openCreate}>
          <Plus className="h-4 w-4" /> Tambah Video
        </Button>
      </div>

      <DataTable
        data={data}
        isLoading={isLoading}
        emptyLabel="Belum ada video"
        onEdit={openEdit}
        onDelete={setDeleting}
        columns={[
          {
            header: "Pratinjau",
            render: (item) => <video src={item.videoUrl} className="h-14 w-24 rounded-xl object-cover" muted />,
          },
          { header: "Judul", render: (item) => item.title },
          { header: "Keterangan", render: (item) => item.caption || "-" },
          { header: "Tanggal", render: (item) => formatDate(item.createdAt) },
        ]}
      />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? "Edit Video" : "Tambah Video"}
      >
        <VideoForm initialData={editing} onSuccess={() => setModalOpen(false)} />
      </Modal>

      <Modal open={!!deleting} onClose={() => setDeleting(null)} title="Hapus Video?">
        <p className="mb-4 text-sm text-gray-600">
          Apakah kamu yakin ingin menghapus video <strong>{deleting?.title}</strong>? Tindakan ini
          tidak dapat dibatalkan.
        </p>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setDeleting(null)}>
            Batal
          </Button>
          <Button variant="danger" onClick={confirmDelete} isLoading={deleteMutation.isPending}>
            Hapus
          </Button>
        </div>
      </Modal>
    </div>
  );
}
