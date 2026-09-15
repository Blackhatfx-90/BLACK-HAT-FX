import { DashboardShell } from "@/components/dashboard-shell";
import { AccountsView } from "@/components/accounts-view";

export default function AccountsPage() {
  return (
    <DashboardShell>
      <AccountsView />
    </DashboardShell>
  );
}
