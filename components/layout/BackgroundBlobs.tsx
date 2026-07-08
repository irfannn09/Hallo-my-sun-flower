"use client";

// Bentuk "blob" besar & buram sebagai lapisan dekoratif di belakang konten.
// Dipakai di dalam wrapper ber-class "relative" + "overflow-hidden" supaya
// halaman tidak terasa kosong/putih polos setelah bagian hero.
//
// `variant` mengatur kombinasi posisi & warna supaya tiap halaman punya
// nuansa sedikit berbeda, bukan pola yang persis sama diulang-ulang.
export function BackgroundBlobs({
  variant = "default",
}: {
  variant?: "default" | "reverse" | "center";
}) {
  const positions = {
    default: [
      "left-[-8%] top-[-4%] h-72 w-72 bg-lavender/40",
      "right-[-6%] top-1/3 h-96 w-96 bg-blossom/30",
      "left-[10%] bottom-[-8%] h-80 w-80 bg-skymist/40",
    ],
    reverse: [
      "right-[-8%] top-[-6%] h-80 w-80 bg-cornflower/35",
      "left-[-6%] top-1/2 h-72 w-72 bg-petal/45",
      "right-[8%] bottom-[-6%] h-96 w-96 bg-lavender/35",
    ],
    center: [
      "left-1/2 top-[-10%] h-96 w-96 -translate-x-1/2 bg-blossom/25",
      "left-[-4%] bottom-0 h-64 w-64 bg-skymist/40",
      "right-[-4%] bottom-1/4 h-64 w-64 bg-lavender/35",
    ],
  };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {positions[variant].map((cls, i) => (
        <div key={i} className={`absolute rounded-full blur-3xl ${cls}`} />
      ))}
    </div>
  );
}
