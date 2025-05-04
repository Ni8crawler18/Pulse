import type { Metadata } from "next"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ProjectsList } from "@/components/dashboard/projects-list"

export const metadata: Metadata = {
  title: "Projects | Pulse",
  description: "Manage your carbon offset projects",
}

export default function ProjectsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Projects" text="Manage your carbon offset projects.">
        <Button asChild>
          <Link href="/dashboard/projects/new">
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Link>
        </Button>
      </DashboardHeader>
      <ProjectsList />
    </DashboardShell>
  )
}
