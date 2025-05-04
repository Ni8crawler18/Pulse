import type { Metadata } from "next"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ActivitiesList } from "@/components/dashboard/activities-list"

export const metadata: Metadata = {
  title: "Activities | Pulse",
  description: "Log and manage your carbon reduction activities",
}

export default function ActivitiesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Carbon Reduction Activities" text="Log and manage your carbon reduction activities.">
        <Button asChild>
          <Link href="/dashboard/activities/new">
            <Plus className="mr-2 h-4 w-4" /> Log Activity
          </Link>
        </Button>
      </DashboardHeader>
      <ActivitiesList />
    </DashboardShell>
  )
}
