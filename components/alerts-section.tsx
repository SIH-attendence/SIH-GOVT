import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, TrendingDown, Users, Clock, Bell } from "lucide-react"

const alerts = [
  {
    id: 1,
    school: "Lincoln Elementary",
    issue: "Attendance dropped 15% this week - Critical intervention needed",
    severity: "critical",
    attendanceRate: 68,
    icon: TrendingDown,
    time: "2 hours ago",
  },
  {
    id: 2,
    school: "Washington Middle School",
    issue: "Chronic absenteeism in Grade 7 - Moderate concern",
    severity: "moderate",
    attendanceRate: 76,
    icon: Users,
    time: "4 hours ago",
  },
  {
    id: 3,
    school: "Roosevelt High School",
    issue: "Late arrivals increased by 25% - Monitor closely",
    severity: "moderate",
    attendanceRate: 82,
    icon: Clock,
    time: "6 hours ago",
  },
  {
    id: 4,
    school: "Jefferson Elementary",
    issue: "System reporting minor errors detected",
    severity: "low",
    attendanceRate: 91,
    icon: AlertTriangle,
    time: "1 day ago",
  },
]

export function AlertsSection() {
  return (
    <Card className="p-8 bg-card border-border shadow-soft hover:shadow-elevated transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
            <Bell className="h-5 w-5 text-destructive" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-card-foreground">School Anomalies & Alerts</h3>
            <p className="text-sm text-muted-foreground">Real-time monitoring and notifications</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="destructive" className="bg-destructive text-destructive-foreground">
            🔴 {alerts.filter((alert) => alert.severity === "critical").length} Critical
          </Badge>
          <Badge variant="secondary" className="bg-warning/10 text-warning-foreground border-warning/20">
            🟠 {alerts.filter((alert) => alert.severity === "moderate").length} Moderate
          </Badge>
        </div>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => {
          const Icon = alert.icon
          const severityConfig = {
            critical: {
              borderColor: "border-l-destructive",
              bgColor: "bg-destructive/5",
              iconBg: "bg-destructive/10",
              iconColor: "text-destructive",
              badge: "destructive" as const,
              emoji: "🔴",
            },
            moderate: {
              borderColor: "border-l-warning",
              bgColor: "bg-warning/5",
              iconBg: "bg-warning/10",
              iconColor: "text-warning",
              badge: "secondary" as const,
              emoji: "🟠",
            },
            low: {
              borderColor: "border-l-muted-foreground",
              bgColor: "bg-muted/50",
              iconBg: "bg-muted",
              iconColor: "text-muted-foreground",
              badge: "secondary" as const,
              emoji: "🟡",
            },
          }

          const config = severityConfig[alert.severity as keyof typeof severityConfig]

          return (
            <div
              key={alert.id}
              className={`p-6 border-l-4 rounded-r-xl bg-background border border-border hover:shadow-soft transition-all duration-300 hover:scale-[1.01] ${config.borderColor} ${config.bgColor}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${config.iconBg}`}>
                  <Icon className={`h-5 w-5 ${config.iconColor}`} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground text-lg">{alert.school}</h4>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-medium ${
                          alert.attendanceRate < 70
                            ? "text-destructive"
                            : alert.attendanceRate < 80
                              ? "text-warning"
                              : "text-success"
                        }`}
                      >
                        {alert.attendanceRate}%
                      </span>
                      <Badge
                        variant={config.badge}
                        className={`text-xs ${
                          alert.severity === "moderate" ? "bg-warning/10 text-warning-foreground border-warning/20" : ""
                        }`}
                      >
                        {config.emoji} {alert.severity.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3 leading-relaxed">{alert.issue}</p>
                  <p className="text-xs text-muted-foreground font-medium">{alert.time}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
