import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ActivityForm } from "@/components/dashboard/activity-form"

export const metadata: Metadata = {
  title: "Log Activity | Pulse",
  description: "Log a new carbon reduction activity",
}

export default function NewActivityPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Log Activity" text="Record a new carbon reduction activity." />
      <ActivityForm />
    </DashboardShell>
  )
}
