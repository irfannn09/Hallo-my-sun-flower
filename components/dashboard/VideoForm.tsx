"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { Button } from "../ui/Button";
import { VideoItem } from "../../types";
import { useCreateVideo, useUpdateVideo } from "../../hooks/useVideos";

const schema = z.object({
  title: z.string().min(1, "Judul wajib diisi"),
  caption: z.string().optional(),
  video: z.any().optional(),
});

type FormValues = z.infer<typeof schema>;

export function VideoForm({
  initialData,
  onSuccess,
}: {
  initialData?: VideoItem | null;
  onSuccess: () => void;
}) {
  const isEdit = !!initialData;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { title: "", caption: "" },
  });

  const createMutation = useCreateVideo();
  const updateMutation = useUpdateVideo();
  const isSubmitting = createMutation.isPending || updateMutation.isPending;

  useEffect(() => {
    reset({ title: initialData?.title ?? "", caption: initialData?.caption ?? "" });
  }, [initialData, reset]);

  async function onSubmit(values: FormValues) {
    if (isEdit && initialData) {
      await updateMutation.mutateAsync({ id: initialData.id, values });
    } else {
      await createMutation.mutateAsync(values as any);
    }
    onSuccess();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="Judul Video" placeholder="Contoh: Momen Lamaran" {...register("title")} error={errors.title?.message} />
      <TextArea label="Keterangan (opsional)" rows={3} placeholder="Ceritakan momen ini..." {...register("caption")} />
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {isEdit ? "Ganti Video (opsional)" : "Upload Video"}
        </label>
        <input
          type="file"
          accept="video/*"
          {...register("video")}
          className="w-full rounded-2xl border-2 border-pink-pastel-dark/50 bg-white/80 px-4 py-2.5 text-sm"
        />
        {isEdit && (
          <p className="mt-1 text-xs text-gray-400">Biarkan kosong jika tidak ingin mengganti video.</p>
        )}
      </div>
      <Button type="submit" isLoading={isSubmitting} className="w-full">
        {isEdit ? "Simpan Perubahan" : "Tambah Video"}
      </Button>
    </form>
  );
}
