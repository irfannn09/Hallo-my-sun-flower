"use client";

import Image from "next/image";
import { GalleryItem } from "../../types";
import { Modal } from "../ui/Modal";
import { formatDate } from "../../utils/formatDate";

export function GalleryModal({
  item,
  onClose,
}: {
  item: GalleryItem | null;
  onClose: () => void;
}) {
  return (
    <Modal open={!!item} onClose={onClose} title={item?.title}>
      {item && (
        <div>
          <div className="relative mb-4 h-80 w-full overflow-hidden rounded-sm">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-contain bg-ink/5"
              unoptimized
            />
          </div>
          {item.caption && <p className="text-ink-soft">{item.caption}</p>}
          <p className="mt-3 text-xs uppercase tracking-wide text-ink-soft/70">
            {formatDate(item.createdAt)}
          </p>
        </div>
      )}
    </Modal>
  );
}
