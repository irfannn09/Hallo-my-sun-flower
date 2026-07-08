"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { galleryService, GalleryFormValues } from "../services/galleryService";

export function useGalleryList() {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: galleryService.getAll,
  });
}

export function useCreateGallery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: GalleryFormValues) => galleryService.create(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      toast.success("Foto berhasil ditambahkan 💕");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Gagal menambahkan foto");
    },
  });
}

export function useUpdateGallery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, values }: { id: string; values: GalleryFormValues }) =>
      galleryService.update(id, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      toast.success("Foto berhasil diperbarui ✨");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Gagal memperbarui foto");
    },
  });
}

export function useDeleteGallery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => galleryService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      toast.success("Foto berhasil dihapus 🗑️");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Gagal menghapus foto");
    },
  });
}
