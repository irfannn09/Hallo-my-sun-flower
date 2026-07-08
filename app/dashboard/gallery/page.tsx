"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { GalleryItem } from "../../../types";
import { useGalleryList, useDeleteGallery } from "../../../hooks/useGallery";
import { DataTable } from "../../../components/dashboard/DataTable";
import { GalleryForm } from "../../../components/dashboard/GalleryForm";
import { Modal } from "../../../components/ui/Modal";
import { Button } from "../../../components/ui/Button";
import { formatDate } from "../../../utils/formatDate";

export default function DashboardGalleryPage() {
  const { data, isLoading } = useGalleryList();
  const deleteMutation = useDeleteGallery();
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<GalleryItem | null>(null);
  const [deleting, setDeleting] = useState<GalleryItem | null>(null);

  function openCreate() {
    setEditing(null);
    setModalOpen(true);
  }

  function openEdit(item: GalleryItem) {
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
        <h1 className="font-display text-2xl text-love-red">Kelola Gallery</h1>
        <Button onClick={openCreate}>
          <Plus className="h-4 w-4" /> Tambah Foto
        </Button>
      </div>

      <DataTable
        data={data}
        isLoading={isLoading}
        emptyLabel="Belum ada foto"
        onEdit={openEdit}
        onDelete={setDeleting}
        columns={[
          {
            header: "Foto",
            render: (item) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.imageUrl} alt={item.title} className="h-14 w-14 rounded-xl object-cover" />
            ),
          },
          { header: "Judul", render: (item) => item.title },
          { header: "Keterangan", render: (item) => item.caption || "-" },
          { header: "Tanggal", render: (item) => formatDate(item.createdAt) },
        ]}
      />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? "Edit Foto" : "Tambah Foto"}
      >
        <GalleryForm initialData={editing} onSuccess={() => setModalOpen(false)} />
      </Modal>

      <Modal open={!!deleting} onClose={() => setDeleting(null)} title="Hapus Foto?">
        <p className="mb-4 text-sm text-gray-600">
          Apakah kamu yakin ingin menghapus foto <strong>{deleting?.title}</strong>? Tindakan ini
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
