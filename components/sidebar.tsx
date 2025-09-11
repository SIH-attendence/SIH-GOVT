"use client"
import { Button } from "@/components/ui/button"
import { Menu, X, School, MapPin, FileText, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeMenuItem: string
  setActiveMenuItem: (item: string) => void
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

const menuItems = [
  { name: "Schools", icon: School },
  { name: "Districts", icon: MapPin },
  { name: "Reports", icon: FileText },
]

export function Sidebar({ activeMenuItem, setActiveMenuItem, collapsed, setCollapsed }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {!collapsed && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setCollapsed(true)} />}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border z-50 transition-all duration-300 shadow-elevated",
          collapsed ? "w-16" : "w-64",
          "lg:relative lg:z-auto",
        )}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              {!collapsed && (
                <>
                  <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-sidebar-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-sidebar-foreground">Education Portal</h2>
                    <p className="text-xs text-sidebar-foreground/70">Government Dashboard</p>
                  </div>
                </>
              )}
              {collapsed && (
                <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center mx-auto">
                  <Shield className="h-5 w-5 text-sidebar-primary-foreground" />
                </div>
              )}
            </div>
            {!collapsed && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCollapsed(!collapsed)}
                className="text-sidebar-foreground hover:bg-sidebar-accent rounded-lg"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <nav className="space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = activeMenuItem === item.name

              return (
                <Button
                  key={item.name}
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-4 h-12 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 shadow-soft"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    collapsed && "justify-center px-2",
                  )}
                  onClick={() => setActiveMenuItem(item.name)}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && <span className="text-left">{item.name}</span>}
                </Button>
              )
            })}
          </nav>

          {collapsed && (
            <div className="absolute bottom-6 left-0 right-0 px-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCollapsed(!collapsed)}
                className="w-full text-sidebar-foreground hover:bg-sidebar-accent rounded-lg"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
