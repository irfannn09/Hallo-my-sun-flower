export const APP_NAME = "Kisah Cinta Kecil Kami";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// 4 pilihan warna kartu catatan — mengikuti 5 warna utama situs (tanpa kuning).
export const NOTE_COLORS: Record<string, { bg: string; border: string }> = {
  pink: { bg: "bg-blossom/70", border: "border-blossom" },
  blue: { bg: "bg-skymist", border: "border-cornflower" },
  white: { bg: "bg-white", border: "border-gray-200" },
  lavender: { bg: "bg-lavender/60", border: "border-lavender-dark" },
};

export const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Galeri", href: "/gallery" },
  { label: "Catatan", href: "/notes" },
  { label: "Tentang Kami", href: "/about" },
];

// Ganti tanggal ini sesuai hari jadian kalian (format YYYY-MM-DD)
export const RELATIONSHIP_START_DATE = "2025-11-01";
