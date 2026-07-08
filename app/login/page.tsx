"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginForm } from "../../components/auth/LoginForm";
import { FloatingHearts } from "../../components/animations/FloatingHearts";
import { Sparkles } from "../../components/animations/Sparkles";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isLoading, isAuthenticated, router]);

  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-dreamy-gradient px-5 py-16">
      <Sparkles count={20} />
      <FloatingHearts count={8} />
      <LoginForm />
    </main>
  );
}
