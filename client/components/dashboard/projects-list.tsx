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
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function ProjectsList() {
  // Mock data for demonstration
  const [projects, setProjects] = useState([
    {
      id: "1",
      name: "Forest Restoration",
      location: "Amazon Rainforest, Brazil",
      type: "Reforestation",
      expectedReduction: 5000,
      status: "Active",
      createdAt: "2023-01-15",
    },
    {
      id: "2",
      name: "Solar Farm Installation",
      location: "Nevada, USA",
      type: "Renewable Energy",
      expectedReduction: 3200,
      status: "Active",
      createdAt: "2023-02-22",
    },
    {
      id: "3",
      name: "Mangrove Conservation",
      location: "Sundarbans, India",
      type: "Conservation",
      expectedReduction: 1800,
      status: "Pending",
      createdAt: "2023-03-10",
    },
    {
      id: "4",
      name: "Wind Turbine Farm",
      location: "Scotland, UK",
      type: "Renewable Energy",
      expectedReduction: 4200,
      status: "Active",
      createdAt: "2023-04-05",
    },
    {
      id: "5",
      name: "Methane Capture",
      location: "Alberta, Canada",
      type: "Emissions Reduction",
      expectedReduction: 2500,
      status: "Pending",
      createdAt: "2023-05-18",
    },
  ])

  return (
    <Card>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Expected Reduction (tCO₂e)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>{project.location}</TableCell>
                <TableCell>{project.type}</TableCell>
                <TableCell className="text-right">{project.expectedReduction.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant={project.status === "Active" ? "default" : "outline"}>{project.status}</Badge>
                </TableCell>
                <TableCell>{new Date(project.createdAt).toLocaleDateString()}</TableCell>
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
                        <Link href={`/dashboard/projects/${project.id}`}>View Details</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/projects/${project.id}/edit`}>
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
