import { DashboardShell } from "@/components/dashboard-shell";
import { InvestmentsView } from "@/components/investments-view";

export default function InvestmentsPage() {
  return (
    <DashboardShell>
      <InvestmentsView />
    </DashboardShell>
  );
}
