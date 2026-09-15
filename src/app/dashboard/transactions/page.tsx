import { DashboardShell } from "@/components/dashboard-shell";
import { TransactionsView } from "@/components/transactions-view";

export default function TransactionsPage() {
  return (
    <DashboardShell>
      <TransactionsView />
    </DashboardShell>
  );
}
