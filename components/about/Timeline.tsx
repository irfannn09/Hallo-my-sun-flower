"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

// Ganti array ini dengan momen-momen penting hubungan kalian sendiri.
const defaultEvents: TimelineEvent[] = [
  { date: "Jun 2025", title: "Hari Pertama Bertemu", description: "Kisah kami dimulai dari satu sapaan sederhana." },
  { date: "Aug 2025", title: "Kencan Pertama", description: "Secangkir kopi, tawa gugup, dan rasa berdebar." },
  { date: "Nov 2025", title: "Resmi Jadian", description: "Kami memutuskan menulis cerita ini bersama-sama." },
  { date: "Oct 2025", title: "Liburan Pertama Bersama", description: "Tempat baru, tapi tetap dengan orang favoritku." },
  { date: "Today", title: "Masih Terus Berjalan", description: "Dan ceritanya akan terus jadi lebih baik." },
];

export function Timeline({ events = defaultEvents }: { events?: TimelineEvent[] }) {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-lavender-dark/50 md:left-1/2" />
      <div className="flex flex-col gap-10">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative flex flex-col gap-2 pl-12 md:w-1/2 md:pl-0 ${
              i % 2 === 0 ? "md:pr-10 md:self-start md:text-right" : "md:pl-10 md:self-end"
            }`}
          >
            <span className="absolute left-2.5 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-love-red md:left-auto md:right-[-8px] md:[&:last-child]:right-auto">
              <Heart className="h-2.5 w-2.5 fill-white text-white" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-wide text-love-red">
              {event.date}
            </p>
            <p className="font-display text-lg italic text-ink">{event.title}</p>
            <p className="text-sm text-ink-soft">{event.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
