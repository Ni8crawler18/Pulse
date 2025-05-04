import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { TokenMintForm } from "@/components/dashboard/token-mint-form"

export const metadata: Metadata = {
  title: "Mint Tokens | Pulse",
  description: "Mint carbon credit tokens",
}

export default function MintTokensPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Mint Tokens"
        text="Convert your carbon reduction activities into carbon credit tokens."
      />
      <TokenMintForm />
    </DashboardShell>
  )
}
