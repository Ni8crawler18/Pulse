import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ProjectForm } from "@/components/dashboard/project-form"

export const metadata: Metadata = {
  title: "New Project | Pulse",
  description: "Register a new carbon offset project",
}

export default function NewProjectPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="New Project" text="Register a new carbon offset project." />
      <ProjectForm />
    </DashboardShell>
  )
}
