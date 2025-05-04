import type React from "react"
import Link from "next/link"
import { ArrowRight, Leaf, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ProjectsOverviewProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ProjectsOverview({ className, ...props }: ProjectsOverviewProps) {
  // Mock data for demonstration
  const projects = [
    {
      id: "1",
      name: "Forest Restoration",
      location: "Amazon Rainforest, Brazil",
      type: "Reforestation",
      expectedReduction: 5000,
      status: "Active",
    },
    {
      id: "2",
      name: "Solar Farm Installation",
      location: "Nevada, USA",
      type: "Renewable Energy",
      expectedReduction: 3200,
      status: "Active",
    },
    {
      id: "3",
      name: "Mangrove Conservation",
      location: "Sundarbans, India",
      type: "Conservation",
      expectedReduction: 1800,
      status: "Pending",
    },
  ]

  return (
    <Card className={cn("col-span-3", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Projects Overview</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/projects">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-100 p-2">
                  <Leaf className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <div className="font-medium">{project.name}</div>
                  <div className="text-sm text-muted-foreground">{project.location}</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="font-medium">{project.expectedReduction} tCO₂e</div>
                <div className={cn("text-xs", project.status === "Active" ? "text-emerald-600" : "text-amber-600")}>
                  {project.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/dashboard/projects/new">
            <Plus className="mr-2 h-4 w-4" /> Register New Project
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
