"use client";

import { ReactNode } from "react";
import { ProtectedRoute } from "../../components/dashboard/ProtectedRoute";
import { Sidebar } from "../../components/dashboard/Sidebar";
import { BackgroundBlobs } from "../../components/layout/BackgroundBlobs";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-[85vh]">
        <Sidebar />
        <div className="relative flex-1 overflow-hidden p-6 md:p-10">
          <BackgroundBlobs variant="center" />
          <div className="relative">{children}</div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
