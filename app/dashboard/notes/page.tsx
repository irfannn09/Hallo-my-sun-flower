"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { NoteItem } from "../../../types";
import { useNoteList, useDeleteNote } from "../../../hooks/useNotes";
import { DataTable } from "../../../components/dashboard/DataTable";
import { NoteForm } from "../../../components/dashboard/NoteForm";
import { Modal } from "../../../components/ui/Modal";
import { Button } from "../../../components/ui/Button";
import { formatDate } from "../../../utils/formatDate";

export default function DashboardNotesPage() {
  const { data, isLoading } = useNoteList();
  const deleteMutation = useDeleteNote();
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<NoteItem | null>(null);
  const [deleting, setDeleting] = useState<NoteItem | null>(null);

  function openCreate() {
    setEditing(null);
    setModalOpen(true);
  }

  function openEdit(item: NoteItem) {
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
        <h1 className="font-display text-2xl text-love-red">Kelola Notes</h1>
        <Button onClick={openCreate}>
          <Plus className="h-4 w-4" /> Tambah Catatan
        </Button>
      </div>

      <DataTable
        data={data}
        isLoading={isLoading}
        emptyLabel="Belum ada catatan"
        onEdit={openEdit}
        onDelete={setDeleting}
        columns={[
          { header: "Judul", render: (item) => item.title },
          {
            header: "Isi",
            render: (item) => (
              <span className="line-clamp-2 max-w-xs text-gray-600">{item.content}</span>
            ),
          },
          { header: "Warna", render: (item) => item.color },
          { header: "Tanggal", render: (item) => formatDate(item.createdAt) },
        ]}
      />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? "Edit Catatan" : "Tambah Catatan"}
      >
        <NoteForm initialData={editing} onSuccess={() => setModalOpen(false)} />
      </Modal>

      <Modal open={!!deleting} onClose={() => setDeleting(null)} title="Hapus Catatan?">
        <p className="mb-4 text-sm text-gray-600">
          Apakah kamu yakin ingin menghapus catatan <strong>{deleting?.title}</strong>? Tindakan
          ini tidak dapat dibatalkan.
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
