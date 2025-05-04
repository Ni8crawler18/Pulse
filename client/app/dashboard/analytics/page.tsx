import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { AnalyticsOverview } from "@/components/dashboard/analytics-overview"
import { ProjectsPerformance } from "@/components/dashboard/projects-performance"
import { TokenDistribution } from "@/components/dashboard/token-distribution"
import { TransactionHistory } from "@/components/dashboard/transaction-history"

export const metadata: Metadata = {
  title: "Analytics | Pulse",
  description: "Analytics and insights for your carbon offset projects",
}

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Analytics" text="Insights and metrics for your carbon offset projects." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnalyticsOverview className="lg:col-span-2" />
        <TokenDistribution />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <ProjectsPerformance className="lg:col-span-2" />
        <TransactionHistory />
      </div>
    </DashboardShell>
  )
}
