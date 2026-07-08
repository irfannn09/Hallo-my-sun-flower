"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { videoService, VideoFormValues } from "../services/videoService";

export function useVideoList() {
  return useQuery({
    queryKey: ["videos"],
    queryFn: videoService.getAll,
  });
}

export function useCreateVideo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: VideoFormValues) => videoService.create(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      toast.success("Video berhasil ditambahkan 💕");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Gagal menambahkan video");
    },
  });
}

export function useUpdateVideo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, values }: { id: string; values: VideoFormValues }) =>
      videoService.update(id, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      toast.success("Video berhasil diperbarui ✨");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Gagal memperbarui video");
    },
  });
}

export function useDeleteVideo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => videoService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      toast.success("Video berhasil dihapus 🗑️");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Gagal menghapus video");
    },
  });
}
