import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ProjectsOverview } from "@/components/dashboard/projects-overview"
import { CarbonReductionChart } from "@/components/dashboard/carbon-reduction-chart"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { TokensOverview } from "@/components/dashboard/tokens-overview"

export const metadata: Metadata = {
  title: "Dashboard | Pulse",
  description: "Manage your carbon offset projects and carbon credit tokens",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Overview of your carbon offset projects and activities." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectsOverview className="lg:col-span-2" />
        <TokensOverview />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <CarbonReductionChart className="lg:col-span-2" />
        <RecentActivities />
      </div>
    </DashboardShell>
  )
}
