export const APP_NAME = "Kisah Cinta Kecil Kami";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// 4 pilihan warna kartu catatan — neon glassmorphic dengan latar gelap transparan & border berpendar.
export const NOTE_COLORS: Record<string, { bg: string; border: string }> = {
  pink: { bg: "bg-fuchsia-950/30 backdrop-blur border-fuchsia-500/30 text-fuchsia-100", border: "border-fuchsia-500/20" },
  blue: { bg: "bg-blue-950/30 backdrop-blur border-blue-500/30 text-blue-100", border: "border-blue-500/20" },
  white: { bg: "bg-slate-900/40 backdrop-blur border-slate-500/20 text-slate-100", border: "border-slate-500/10" },
  lavender: { bg: "bg-violet-950/30 backdrop-blur border-violet-500/30 text-violet-100", border: "border-violet-500/20" },
};

export const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Galeri", href: "/gallery" },
  { label: "Catatan", href: "/notes" },
  { label: "Tentang Kami", href: "/about" },
];

// Ganti tanggal ini sesuai hari jadian kalian (format YYYY-MM-DD)
export const RELATIONSHIP_START_DATE = "2025-11-01";
