"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AnalyticsOverviewProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AnalyticsOverview({ className, ...props }: AnalyticsOverviewProps) {
  // Mock data for demonstration
  const monthlyData = [
    { month: "Jan", reduction: 120, tokens: 120 },
    { month: "Feb", reduction: 180, tokens: 180 },
    { month: "Mar", reduction: 250, tokens: 250 },
    { month: "Apr", reduction: 320, tokens: 320 },
    { month: "May", reduction: 410, tokens: 410 },
    { month: "Jun", reduction: 490, tokens: 490 },
    { month: "Jul", reduction: 580, tokens: 580 },
    { month: "Aug", reduction: 650, tokens: 650 },
    { month: "Sep", reduction: 720, tokens: 720 },
    { month: "Oct", reduction: 800, tokens: 800 },
    { month: "Nov", reduction: 880, tokens: 880 },
    { month: "Dec", reduction: 950, tokens: 950 },
  ]

  const weeklyData = [
    { day: "Mon", reduction: 45, tokens: 45 },
    { day: "Tue", reduction: 52, tokens: 52 },
    { day: "Wed", reduction: 38, tokens: 38 },
    { day: "Thu", reduction: 65, tokens: 65 },
    { day: "Fri", reduction: 48, tokens: 48 },
    { day: "Sat", reduction: 30, tokens: 30 },
    { day: "Sun", reduction: 40, tokens: 40 },
  ]

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle>Carbon Reduction & Tokens</CardTitle>
        <CardDescription>Overview of carbon reduction and token minting over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly" className="space-y-4">
          <TabsList>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={monthlyData}
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
                <Area
                  type="monotone"
                  dataKey="reduction"
                  stackId="1"
                  stroke="#10b981"
                  fill="#d1fae5"
                  strokeWidth={2}
                  name="Carbon Reduction (tCO₂e)"
                />
                <Area
                  type="monotone"
                  dataKey="tokens"
                  stackId="2"
                  stroke="#6366f1"
                  fill="#e0e7ff"
                  strokeWidth={2}
                  name="Tokens Minted"
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="weekly" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={weeklyData}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={10} />
                <YAxis tickLine={false} axisLine={false} tickMargin={10} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="reduction"
                  stackId="1"
                  stroke="#10b981"
                  fill="#d1fae5"
                  strokeWidth={2}
                  name="Carbon Reduction (tCO₂e)"
                />
                <Area
                  type="monotone"
                  dataKey="tokens"
                  stackId="2"
                  stroke="#6366f1"
                  fill="#e0e7ff"
                  strokeWidth={2}
                  name="Tokens Minted"
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
