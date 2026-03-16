import { DashboardShell } from "@/components/dashboard-shell";
import { Sidebar } from "@/components/sidebar";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <DashboardShell />
    </div>
  );
}
