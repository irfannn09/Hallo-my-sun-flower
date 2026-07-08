"use client";

import { Pencil, Trash2 } from "lucide-react";
import { ReactNode } from "react";
import { Skeleton } from "../ui/Skeleton";
import { EmptyState } from "../ui/EmptyState";

interface Column<T> {
  header: string;
  render: (item: T) => ReactNode;
}

interface DataTableProps<T extends { id: string }> {
  columns: Column<T>[];
  data?: T[];
  isLoading?: boolean;
  onEdit: (item: T) => void;
  onDelete: (item: T) => void;
  emptyLabel: string;
}

export function DataTable<T extends { id: string }>({
  columns,
  data,
  isLoading,
  onEdit,
  onDelete,
  emptyLabel,
}: DataTableProps<T>) {
  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-16 w-full" />
        ))}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <EmptyState title={emptyLabel} />;
  }

  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-pink-pastel/60 text-gray-700">
          <tr>
            {columns.map((col) => (
              <th key={col.header} className="px-4 py-3 font-semibold">
                {col.header}
              </th>
            ))}
            <th className="px-4 py-3 font-semibold text-right">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t border-pink-pastel/40 hover:bg-pink-pastel/10">
              {columns.map((col) => (
                <td key={col.header} className="px-4 py-3 align-top">
                  {col.render(item)}
                </td>
              ))}
              <td className="px-4 py-3 text-right">
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="rounded-full bg-baby-blue p-2 text-gray-700 hover:bg-baby-blue-dark"
                    aria-label="Sunting"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onDelete(item)}
                    className="rounded-full bg-red-100 p-2 text-red-500 hover:bg-red-200"
                    aria-label="Hapus"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
