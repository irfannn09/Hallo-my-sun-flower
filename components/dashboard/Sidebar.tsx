"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Camera, NotebookPen, LogOut, Heart } from "lucide-react";
import { cn } from "../../utils/cn";
import { useAuth } from "../../contexts/AuthContext";

const links = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Gallery", href: "/dashboard/gallery", icon: Camera },
  { label: "Notes", href: "/dashboard/notes", icon: NotebookPen },
];

export function Sidebar() {
  const pathname = usePathname();
  const { logout, admin } = useAuth();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-white/80 backdrop-blur-md border-r border-pink-pastel-dark/40 p-5">
      <div className="mb-8 flex items-center gap-2 font-display text-xl text-love-red">
        <Heart className="h-5 w-5 fill-love-red text-love-red" />
        Admin Panel
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {links.map((link) => {
          const active = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-pink-pastel text-love-red"
                  : "text-gray-600 hover:bg-pink-pastel/50"
              )}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-pink-pastel-dark/30 pt-4">
        {admin && <p className="mb-2 truncate text-xs text-gray-400">{admin.email}</p>}
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4" />
          Keluar
        </button>
      </div>
    </aside>
  );
}
