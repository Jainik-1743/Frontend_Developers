"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/ui-store";

export function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebarStore();

  const links = [
    "Dashboard",
    "Patients",
    "Appointments",
    "Analytics",
    "Clinical AI",
  ];

  return (
    <aside
      className={cn(
        "sticky top-0 flex h-screen flex-col border-r border-slate-200/70 bg-white/80 pt-5 backdrop-blur transition-all duration-300",
        isOpen ? "w-64" : "w-20",
      )}
    >
      <div className="mb-8 flex items-center justify-between px-5">
        <div
          className={cn(
            "overflow-hidden transition-opacity",
            isOpen ? "opacity-100" : "opacity-0",
          )}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            CareOps
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">HealthHub</h2>
        </div>
        <Button
          onClick={toggleSidebar}
          size="icon"
          type="button"
          variant="outline"
        >
          {isOpen ? (
            <PanelLeftClose className="h-4 w-4" />
          ) : (
            <PanelLeftOpen className="h-4 w-4" />
          )}
        </Button>
      </div>

      <nav className="flex-1 space-y-2 px-4">
        {links.map((link, index) => (
          <div
            className={cn(
              "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
              index === 0
                ? "bg-slate-900 text-white"
                : "text-slate-700 hover:bg-slate-100",
            )}
            key={link}
          >
            {isOpen ? link : link.slice(0, 1)}
          </div>
        ))}
      </nav>
    </aside>
  );
}
