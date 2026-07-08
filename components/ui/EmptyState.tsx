import { ReactNode } from "react";

export function EmptyState({
  icon,
  title,
  description,
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 border border-dashed border-blossom/60 bg-white/50 py-16 text-center">
      {icon && <div className="text-5xl">{icon}</div>}
      <p className="font-display text-xl italic text-ink">{title}</p>
      {description && <p className="max-w-sm text-sm text-ink-soft">{description}</p>}
    </div>
  );
}
