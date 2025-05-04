import type { Metadata } from "next"
import Link from "next/link"
import { Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { TokensList } from "@/components/dashboard/tokens-list"

export const metadata: Metadata = {
  title: "Tokens | Pulse",
  description: "Manage your carbon credit tokens",
}

export default function TokensPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Carbon Credit Tokens" text="View and manage your carbon credit tokens.">
        <Button asChild>
          <Link href="/dashboard/tokens/mint">
            <Coins className="mr-2 h-4 w-4" /> Mint Tokens
          </Link>
        </Button>
      </DashboardHeader>
      <TokensList />
    </DashboardShell>
  )
}
