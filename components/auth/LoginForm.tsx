"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import toast from "react-hot-toast";
import { Heart, Loader2 } from "lucide-react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useAuth } from "../../contexts/AuthContext";

const schema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

type FormValues = z.infer<typeof schema>;

export function LoginForm() {
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      await login(values.email, values.password);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Login gagal, periksa kembali email dan password");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm space-y-4 border border-lavender-dark/30 bg-white/90 p-8 shadow-xl backdrop-blur-sm"
    >
      <div className="mb-2 flex flex-col items-center gap-2 text-center">
        <Heart className="h-8 w-8 fill-love-red text-love-red" />
        <h1 className="font-display text-2xl italic text-ink">Masuk sebagai Admin</h1>
        <p className="text-xs text-ink-soft">Masuk untuk mengelola kenangan kalian</p>
      </div>

      <Input
        label="Email"
        type="email"
        placeholder="admin@gmail.com"
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Kata Sandi"
        type="password"
        placeholder="••••••••"
        {...register("password")}
        error={errors.password?.message}
      />

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Masuk"}
      </Button>
    </form>
  );
}
