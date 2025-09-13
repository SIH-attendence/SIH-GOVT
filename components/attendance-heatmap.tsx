import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react"

const regions = [
  { name: "North District", attendance: 95, color: "bg-success", trend: "up", schools: 24 },
  { name: "South District", attendance: 87, color: "bg-chart-2", trend: "up", schools: 18 },
  { name: "East District", attendance: 92, color: "bg-success", trend: "stable", schools: 21 },
  { name: "West District", attendance: 78, color: "bg-destructive", trend: "down", schools: 15 },
  { name: "Central District", attendance: 89, color: "bg-chart-2", trend: "up", schools: 19 },
  { name: "Suburban Area", attendance: 94, color: "bg-success", trend: "up", schools: 27 },
]

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-3 w-3 text-success" />
    case "down":
      return <TrendingDown className="h-3 w-3 text-destructive" />
    default:
      return <div className="h-3 w-3 rounded-full bg-muted-foreground" />
  }
}

export function AttendanceHeatmap() {
  return (
    <Card className="p-4 sm:p-6 lg:p-8 bg-card border-border shadow-soft hover:shadow-elevated transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-card-foreground">Regional Attendance Heatmap</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">District-wise attendance performance overview</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {regions.map((region) => (
          <div
            key={region.name}
            className="group p-4 sm:p-6 rounded-xl border border-border bg-gradient-to-br from-background to-muted/20 hover:shadow-soft transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground text-sm sm:text-base mb-1">{region.name}</h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{region.schools} schools</span>
                  <div className="flex items-center gap-1">{getTrendIcon(region.trend)}</div>
                </div>
              </div>
              <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${region.color} shadow-sm`} />
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">{region.attendance}%</div>

              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div
                  className={`h-3 rounded-full ${region.color} transition-all duration-1000 ease-out shadow-sm`}
                  style={{ width: `${region.attendance}%` }}
                />
              </div>

              <div className="flex justify-end">
                {region.attendance >= 90 ? (
                  <Badge
                    variant="secondary"
                    className="bg-success/10 text-success-foreground border-success/20 text-xs"
                  >
                    Excellent
                  </Badge>
                ) : region.attendance >= 80 ? (
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary-foreground border-primary/20 text-xs"
                  >
                    Good
                  </Badge>
                ) : (
                  <Badge
                    variant="secondary"
                    className="bg-destructive/10 text-destructive-foreground border-destructive/20 text-xs"
                  >
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Attention Needed
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-muted/30 rounded-lg">
        <h4 className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">Performance Indicators</h4>
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-success shadow-sm" />
            <span className="text-muted-foreground">Excellent (90%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary shadow-sm" />
            <span className="text-muted-foreground">Good (80-89%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-destructive shadow-sm" />
            <span className="text-muted-foreground">Needs Attention (&lt;80%)</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
