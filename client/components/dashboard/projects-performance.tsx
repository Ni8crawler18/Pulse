"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

interface ProjectsPerformanceProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ProjectsPerformance({ className, ...props }: ProjectsPerformanceProps) {
  // Mock data for demonstration
  const data = [
    { name: "Forest Restoration", reduction: 950, target: 1200 },
    { name: "Solar Farm", reduction: 720, target: 800 },
    { name: "Mangrove Conservation", reduction: 450, target: 600 },
    { name: "Wind Turbine Farm", reduction: 580, target: 700 },
    { name: "Methane Capture", reduction: 320, target: 500 },
  ]

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle>Project Performance</CardTitle>
        <CardDescription>Carbon reduction by project vs. target (tCO₂e)</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 20,
            }}
            barGap={8}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={10} />
            <Tooltip />
            <Bar dataKey="reduction" fill="#10b981" name="Current Reduction" radius={[4, 4, 0, 0]} />
            <Bar dataKey="target" fill="#d1fae5" name="Target Reduction" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
