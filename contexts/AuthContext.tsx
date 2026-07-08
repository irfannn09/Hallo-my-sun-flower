"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { Admin } from "../types";
import { authService } from "../services/authService";
import toast from "react-hot-toast";

interface AuthContextValue {
  admin: Admin | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedAdmin = localStorage.getItem("couple_admin");
    const token = localStorage.getItem("couple_token");
    if (storedAdmin && token) {
      setAdmin(JSON.parse(storedAdmin));
    }
    setIsLoading(false);
  }, []);

  async function login(email: string, password: string) {
    const result = await authService.login({ email, password });
    localStorage.setItem("couple_token", result.token);
    localStorage.setItem("couple_admin", JSON.stringify(result.admin));
    setAdmin(result.admin);
    toast.success("Selamat datang kembali! 💖");
    router.push("/dashboard");
  }

  function logout() {
    localStorage.removeItem("couple_token");
    localStorage.removeItem("couple_admin");
    setAdmin(null);
    toast.success("Berhasil logout. Sampai jumpa lagi! 👋");
    router.push("/login");
  }

  return (
    <AuthContext.Provider
      value={{ admin, isLoading, isAuthenticated: !!admin, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
