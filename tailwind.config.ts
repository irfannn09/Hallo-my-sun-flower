import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet inti — diminta langsung oleh pemilik proyek.
        lavender: "#c5aded",
        "lavender-dark": "#a888dd",
        blossom: "#f8abeb",
        petal: "#ffc8dd",
        skymist: "#bce0ff",
        cornflower: "#a2d2ff",
        // Warna tinta tambahan supaya teks tetap terbaca di atas pastel.
        ink: "#3f2f5c",
        "ink-soft": "#6f5f8c",
        cream: "#fdf9ff",
        // Alias lama dipertahankan supaya class name di komponen tidak perlu
        // diubah satu-satu — nilainya sekarang memetakan ke palet baru.
        "pink-pastel": "#ffc8dd",
        "pink-pastel-dark": "#f8abeb",
        "baby-blue": "#bce0ff",
        "baby-blue-dark": "#a2d2ff",
        "love-red": "#9c5cc4",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "dreamy-gradient":
          "linear-gradient(135deg, #c5aded 0%, #bce0ff 55%, #ffc8dd 100%)",
        "romantic-gradient":
          "linear-gradient(135deg, #f8abeb 0%, #c5aded 50%, #a2d2ff 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-12px) translateX(8px)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "butterfly-fly": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(30px, -40px) rotate(8deg)" },
          "50%": { transform: "translate(60px, 0) rotate(-4deg)" },
          "75%": { transform: "translate(30px, 40px) rotate(6deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        "wing-flap": {
          "0%, 100%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(0.6)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        sway: "sway 4s ease-in-out infinite",
        sparkle: "sparkle 2.5s ease-in-out infinite",
        "butterfly-fly": "butterfly-fly 12s ease-in-out infinite",
        "wing-flap": "wing-flap 0.4s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
