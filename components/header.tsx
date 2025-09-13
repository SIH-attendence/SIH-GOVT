import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, TrendingUp, Menu } from "lucide-react"
import { LanguageToggle } from "./language-toggle"

interface HeaderProps {
  sidebarCollapsed: boolean
  setSidebarCollapsed: (collapsed: boolean) => void
}

export function Header({ sidebarCollapsed, setSidebarCollapsed }: HeaderProps) {
  return (
    <Card className="m-4 sm:m-6 lg:m-8 mb-0 p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-card via-card to-muted/20 border-border shadow-soft">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Mobile menu button */}
        <div className="flex items-center gap-4 lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-foreground hover:bg-muted"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gradient">Government Dashboard</h1>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient hidden lg:block">Government Dashboard</h1>
            <Badge variant="secondary" className="bg-success/10 text-success-foreground border-success/20 w-fit">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse mr-2"></div>
              <TrendingUp className="h-3 w-3 mr-1" />
              Live Data
            </Badge>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-medium">Education Data Analytics & Monitoring System</p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Real-time insights into student attendance and school performance metrics
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <LanguageToggle />
          <div className="text-left sm:text-right space-y-1 sm:space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <p className="text-sm">Last Updated</p>
            </div>
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-foreground">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
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
