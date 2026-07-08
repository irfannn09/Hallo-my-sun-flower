"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../constants";
import { cn } from "../../utils/cn";
import { MusicToggle } from "./MusicToggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-lavender/30 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-xl italic text-ink">
          untuk kita berdua
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative pb-1 text-sm font-medium tracking-wide transition-colors",
                  active ? "text-love-red" : "text-ink-soft hover:text-love-red"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-love-red transition-transform",
                    active && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
          <MusicToggle />
        </div>

        <button
          className="text-love-red md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Buka menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-lavender/20 px-5 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-2 py-2 text-sm font-medium text-ink-soft hover:bg-petal/50"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-2 pt-1">
            <MusicToggle />
          </div>
        </div>
      )}
    </header>
  );
}
