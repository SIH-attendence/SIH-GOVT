import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, TrendingUp } from "lucide-react"
import { LanguageToggle } from "./language-toggle"

export function Header() {
  return (
    <Card className="m-8 mb-0 p-8 bg-gradient-to-r from-card via-card to-muted/20 border-border shadow-soft">
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold text-gradient">Government Dashboard</h1>
            <Badge variant="secondary" className="bg-success/10 text-success-foreground border-success/20">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse mr-2"></div>
              <TrendingUp className="h-3 w-3 mr-1" />
              Live Data
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground font-medium">Education Data Analytics & Monitoring System</p>
          <p className="text-sm text-muted-foreground">
            Real-time insights into student attendance and school performance metrics
          </p>
        </div>
        <div className="flex items-center gap-6">
          <LanguageToggle />
          <div className="text-right space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <p className="text-sm">Last Updated</p>
            </div>
            <p className="text-lg font-semibold text-foreground">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-sm text-muted-foreground">
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
