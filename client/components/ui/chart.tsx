import type React from "react"
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart as RechartsBarChart,
  Pie,
  PieChart as RechartsPieChart,
  Cell,
} from "recharts"

export { Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, Cell, Pie }

// Re-export with our own names
export const BarChart = RechartsBarChart
export const PieChart = RechartsPieChart

interface AreaChartProps {
  data: any[]
  margin?: {
    top?: number
    right?: number
    left?: number
    bottom?: number
  }
  children: React.ReactNode
}

export const AreaChart: React.FC<AreaChartProps> = ({ data, margin, children }) => {
  return (
    <RechartsAreaChart data={data} margin={margin}>
      {children}
    </RechartsAreaChart>
  )
}
