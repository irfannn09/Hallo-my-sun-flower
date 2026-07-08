"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { noteService, NoteFormValues } from "../services/noteService";

export function useNoteList() {
  return useQuery({
    queryKey: ["notes"],
    queryFn: noteService.getAll,
  });
}

export function useCreateNote() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: NoteFormValues) => noteService.create(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      toast.success("Catatan berhasil ditambahkan 💌");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Gagal menambahkan catatan");
    },
  });
}

export function useUpdateNote() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, values }: { id: string; values: NoteFormValues }) =>
      noteService.update(id, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      toast.success("Catatan berhasil diperbarui ✨");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Gagal memperbarui catatan");
    },
  });
}

export function useDeleteNote() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => noteService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      toast.success("Catatan berhasil dihapus 🗑️");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Gagal menghapus catatan");
    },
  });
}
