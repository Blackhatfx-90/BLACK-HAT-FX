import { DashboardShell } from "@/components/dashboard-shell";
import { BudgetsView } from "@/components/budgets-view";

export default function BudgetsPage() {
  return (
    <DashboardShell>
      <BudgetsView />
    </DashboardShell>
  );
}
