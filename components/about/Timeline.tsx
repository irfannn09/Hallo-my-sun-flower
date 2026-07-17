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
      <div className="absolute left-4 top-0 h-full w-0.5 bg-violet-500/30 shadow-[0_0_8px_rgba(139,92,246,0.3)] md:left-1/2 md:-translate-x-1/2" />
      <div className="flex flex-col gap-8">
        {events.map((event, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col gap-2 rounded-2xl bg-slate-900/30 border border-white/5 p-5 pl-12 backdrop-blur-sm transition-all hover:bg-slate-900/50 hover:border-violet-500/25 hover:shadow-lg hover:shadow-violet-950/20 md:w-[calc(50%-20px)] md:pl-5 ${
                isEven ? "md:pr-8 md:self-start md:text-right" : "md:pl-8 md:self-end"
              }`}
            >
              {/* Heart Marker */}
              <span className={`absolute top-6 flex h-5 w-5 items-center justify-center rounded-full bg-love-red shadow-[0_0_10px_rgba(168,85,247,0.7)] transition-transform hover:scale-110 ${
                isEven 
                  ? "left-3 md:left-auto md:right-[-31px]" 
                  : "left-3 md:left-[-31px]"
              }`}>
                <Heart className="h-2.5 w-2.5 fill-white text-white" />
              </span>

              <p className="text-xs font-semibold uppercase tracking-wide text-love-red">
                {event.date}
              </p>
              <p className="font-display text-lg italic text-ink">{event.title}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{event.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
