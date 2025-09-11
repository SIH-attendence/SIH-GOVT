"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"
import { TrendingUp, Calendar, Target, Brain } from "lucide-react"

const data = [
  { month: "Jan", attendance: 85, target: 90 },
  { month: "Feb", attendance: 88, target: 90 },
  { month: "Mar", attendance: 92, target: 90 },
  { month: "Apr", attendance: 89, target: 90 },
  { month: "May", attendance: 94, target: 90 },
  { month: "Jun", attendance: 91, target: 90 },
  { month: "Jul", attendance: 87, target: 90 },
  { month: "Aug", attendance: 93, target: 90 },
  { month: "Sep", attendance: 96, target: 90 },
  { month: "Oct", attendance: 94, target: 90 },
  { month: "Nov", attendance: 90, target: 90 },
  { month: "Dec", attendance: 88, target: 90 },
  // Predicted data points
  { month: "Jan '25", attendance: null, target: 90, predicted: 91 },
  { month: "Feb '25", attendance: null, target: 90, predicted: 93 },
  { month: "Mar '25", attendance: null, target: 90, predicted: 95 },
]

export function AttendanceTrends() {
  return (
    <Card className="p-8 bg-card border-border shadow-soft hover:shadow-elevated transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-card-foreground">Attendance Trends</h3>
            <p className="text-sm text-muted-foreground">12-month performance + AI predictions</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
            <Calendar className="h-3 w-3 mr-1" />
            2024 Data
          </Badge>
          <Badge variant="secondary" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
            <Brain className="h-3 w-3 mr-1" />
            AI Forecast
          </Badge>
        </div>
      </div>

      <div className="h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.2} />
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis
              dataKey="month"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--border))" }}
            />
            <YAxis
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--border))" }}
              domain={[75, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--card-foreground))",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              labelStyle={{ color: "hsl(var(--muted-foreground))" }}
            />
            {/* Target line */}
            <Line
              type="monotone"
              dataKey="target"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
            {/* Attendance area and line */}
            <Area
              type="monotone"
              dataKey="attendance"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              fill="url(#attendanceGradient)"
            />
            <Line
              type="monotone"
              dataKey="attendance"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 5 }}
              activeDot={{ r: 7, fill: "hsl(var(--accent))", stroke: "hsl(var(--background))", strokeWidth: 2 }}
            />
            <Area
              type="monotone"
              dataKey="predicted"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              strokeDasharray="8 4"
              fill="url(#predictedGradient)"
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              strokeDasharray="8 4"
              dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Average</span>
          </div>
          <div className="text-2xl font-bold text-foreground">91.2%</div>
        </div>
        <div className="text-center p-4 bg-success/5 rounded-lg border border-success/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-3 h-3 text-success" />
            <span className="text-xs font-medium text-success uppercase tracking-wide">Peak</span>
          </div>
          <div className="text-2xl font-bold text-success">96%</div>
        </div>
        <div className="text-center p-4 bg-destructive/5 rounded-lg border border-destructive/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Target className="w-3 h-3 text-destructive" />
            <span className="text-xs font-medium text-destructive uppercase tracking-wide">Lowest</span>
          </div>
          <div className="text-2xl font-bold text-destructive">85%</div>
        </div>
        <div className="text-center p-4 bg-chart-2/5 rounded-lg border border-chart-2/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Brain className="w-3 h-3 text-chart-2" />
            <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Predicted</span>
          </div>
          <div className="text-2xl font-bold text-chart-2">93%</div>
        </div>
      </div>
    </Card>
  )
}
