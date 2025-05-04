"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "@/components/ui/chart"

interface TokenDistributionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TokenDistribution({ className, ...props }: TokenDistributionProps) {
  // Mock data for demonstration
  const data = [
    { name: "Available", value: 85, color: "#10b981" },
    { name: "Traded", value: 43, color: "#6366f1" },
    { name: "Pending Verification", value: 12, color: "#f59e0b" },
  ]

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle>Token Distribution</CardTitle>
        <CardDescription>Status of your carbon credit tokens</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          {data.map((item) => (
            <div key={item.name} className="flex flex-col items-center">
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              <span className="text-lg font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
