import type React from "react"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface RecentActivitiesProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RecentActivities({ className, ...props }: RecentActivitiesProps) {
  // Mock data for demonstration
  const activities = [
    {
      id: "1",
      date: "2023-05-01",
      description: "Tree planting - 50 trees",
      project: "Forest Restoration",
      reduction: 2.5,
    },
    {
      id: "2",
      date: "2023-05-05",
      description: "Solar panel installation",
      project: "Solar Farm Installation",
      reduction: 5.8,
    },
    {
      id: "3",
      date: "2023-05-12",
      description: "Mangrove seedling planting",
      project: "Mangrove Conservation",
      reduction: 1.2,
    },
  ]

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Activities</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/activities">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 border-b pb-4 last:border-0 last:pb-0">
              <div className="rounded-full bg-emerald-100 p-2">
                <Calendar className="h-4 w-4 text-emerald-600" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.description}</p>
                  <p className="text-sm font-medium">{activity.reduction} tCO₂e</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">{activity.project}</p>
                  <p className="text-xs text-muted-foreground">{new Date(activity.date).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href="/dashboard/activities/new">Log New Activity</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
