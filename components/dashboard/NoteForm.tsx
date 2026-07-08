"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { Button } from "../ui/Button";
import { NoteItem, NoteColor } from "../../types";
import { useCreateNote, useUpdateNote } from "../../hooks/useNotes";
import { cn } from "../../utils/cn";

const schema = z.object({
  title: z.string().min(1, "Judul wajib diisi"),
  content: z.string().min(1, "Isi catatan wajib diisi"),
  color: z.enum(["pink", "blue", "white", "lavender"]),
});

type FormValues = z.infer<typeof schema>;

const colorOptions: { value: NoteColor; className: string }[] = [
  { value: "pink", className: "bg-blossom" },
  { value: "blue", className: "bg-skymist" },
  { value: "white", className: "bg-white border border-gray-300" },
  { value: "lavender", className: "bg-lavender" },
];

export function NoteForm({
  initialData,
  onSuccess,
}: {
  initialData?: NoteItem | null;
  onSuccess: () => void;
}) {
  const isEdit = !!initialData;
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { title: "", content: "", color: "pink" },
  });

  const createMutation = useCreateNote();
  const updateMutation = useUpdateNote();
  const isSubmitting = createMutation.isPending || updateMutation.isPending;
  const selectedColor = watch("color");

  useEffect(() => {
    reset({
      title: initialData?.title ?? "",
      content: initialData?.content ?? "",
      color: initialData?.color ?? "pink",
    });
  }, [initialData, reset]);

  async function onSubmit(values: FormValues) {
    if (isEdit && initialData) {
      await updateMutation.mutateAsync({ id: initialData.id, values });
    } else {
      await createMutation.mutateAsync(values);
    }
    onSuccess();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="Judul Catatan" placeholder="Contoh: Untukmu, Sayang" {...register("title")} error={errors.title?.message} />
      <TextArea label="Isi Catatan" rows={4} placeholder="Tulis catatan romantis..." {...register("content")} error={errors.content?.message} />
      <div>
        <p className="mb-1 text-sm font-medium text-gray-700">Warna Kartu</p>
        <div className="flex gap-3">
          {colorOptions.map((opt) => (
            <button
              type="button"
              key={opt.value}
              onClick={() => setValue("color", opt.value)}
              className={cn(
                "h-9 w-9 rounded-full transition-all",
                opt.className,
                selectedColor === opt.value && "ring-2 ring-love-red ring-offset-2"
              )}
              aria-label={opt.value}
            />
          ))}
        </div>
      </div>
      <Button type="submit" isLoading={isSubmitting} className="w-full">
        {isEdit ? "Simpan Perubahan" : "Tambah Catatan"}
      </Button>
    </form>
  );
}
