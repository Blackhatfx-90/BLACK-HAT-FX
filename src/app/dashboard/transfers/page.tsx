import { DashboardShell } from "@/components/dashboard-shell";
import { TransfersView } from "@/components/transfers-view";

export default function TransfersPage() {
  return (
    <DashboardShell>
      <TransfersView />
    </DashboardShell>
  );
}
