"use client"

import { useState } from "react"
import Link from "next/link"
import { Edit, MoreHorizontal, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"

export function ActivitiesList() {
  // Mock data for demonstration
  const [activities, setActivities] = useState([
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
    {
      id: "4",
      date: "2023-05-18",
      description: "Wind turbine maintenance",
      project: "Wind Turbine Farm",
      reduction: 3.7,
    },
    {
      id: "5",
      date: "2023-05-25",
      description: "Methane capture system upgrade",
      project: "Methane Capture",
      reduction: 4.2,
    },
    {
      id: "6",
      date: "2023-06-02",
      description: "Tree planting - 75 trees",
      project: "Forest Restoration",
      reduction: 3.8,
    },
    {
      id: "7",
      date: "2023-06-10",
      description: "Solar panel expansion",
      project: "Solar Farm Installation",
      reduction: 6.5,
    },
  ])

  return (
    <Card>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Project</TableHead>
              <TableHead className="text-right">CO₂ Reduction (tCO₂e)</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>{new Date(activity.date).toLocaleDateString()}</TableCell>
                <TableCell className="font-medium">{activity.description}</TableCell>
                <TableCell>{activity.project}</TableCell>
                <TableCell className="text-right">{activity.reduction.toFixed(2)}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/activities/${activity.id}`}>View Details</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/activities/${activity.id}/edit`}>
                          <Edit className="mr-2 h-4 w-4" /> Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
