"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

interface CarbonReductionChartProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CarbonReductionChart({ className, ...props }: CarbonReductionChartProps) {
  // Mock data for demonstration
  const data = [
    { month: "Jan", reduction: 120 },
    { month: "Feb", reduction: 180 },
    { month: "Mar", reduction: 250 },
    { month: "Apr", reduction: 320 },
    { month: "May", reduction: 410 },
    { month: "Jun", reduction: 490 },
    { month: "Jul", reduction: 580 },
    { month: "Aug", reduction: 650 },
    { month: "Sep", reduction: 720 },
    { month: "Oct", reduction: 800 },
    { month: "Nov", reduction: 880 },
    { month: "Dec", reduction: 950 },
  ]

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle>Carbon Reduction</CardTitle>
        <CardDescription>Total carbon reduction over time (tCO₂e)</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
            <YAxis tickLine={false} axisLine={false} tickMargin={10} />
            <Tooltip />
            <Area type="monotone" dataKey="reduction" stroke="#10b981" fill="#d1fae5" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
