"use client"

import { TrendingUp, Users, MapPin, AlertTriangle } from "lucide-react"

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-gradient-to-br from-card to-card/80 rounded-xl p-6 border border-border shadow-soft hover:shadow-elevated transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-success/10 rounded-lg">
            <TrendingUp className="h-6 w-6 text-success" />
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-xs text-success font-medium">Live</span>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold text-foreground">94.2%</p>
          <p className="text-sm text-muted-foreground">Average Attendance</p>
          <p className="text-xs text-success">+2.1% from last month</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-card to-card/80 rounded-xl p-6 border border-border shadow-soft hover:shadow-elevated transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div className="text-xs text-muted-foreground">Best District</div>
        </div>
        <div className="space-y-1">
          <p className="text-lg font-bold text-foreground">District 7</p>
          <p className="text-sm text-muted-foreground">Highest Performance</p>
          <p className="text-xs text-primary">97.8% attendance</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-card to-card/80 rounded-xl p-6 border border-border shadow-soft hover:shadow-elevated transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-warning/10 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-warning" />
          </div>
          <div className="text-xs text-muted-foreground">Needs Attention</div>
        </div>
        <div className="space-y-1">
          <p className="text-lg font-bold text-foreground">District 3</p>
          <p className="text-sm text-muted-foreground">Lowest Performance</p>
          <p className="text-xs text-warning">78.4% attendance</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-card to-card/80 rounded-xl p-6 border border-border shadow-soft hover:shadow-elevated transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-chart-2/10 rounded-lg">
            <Users className="h-6 w-6 text-chart-2" />
          </div>
          <div className="text-xs text-muted-foreground">Today's Need</div>
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold text-foreground">2,847</p>
          <p className="text-sm text-muted-foreground">Meals Required</p>
          <p className="text-xs text-chart-2">Mid-day meal allocation</p>
        </div>
      </div>
    </div>
  )
}
