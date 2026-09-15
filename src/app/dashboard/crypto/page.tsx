import { DashboardShell } from "@/components/dashboard-shell";
import { CryptoView } from "@/components/crypto-view";

export default function CryptoPage() {
  return (
    <DashboardShell>
      <CryptoView />
    </DashboardShell>
  );
}
