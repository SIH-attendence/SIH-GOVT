"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { AttendanceHeatmap } from "@/components/attendance-heatmap"
import { AttendanceTrends } from "@/components/attendance-trends"
import { AlertsSection } from "@/components/alerts-section"
import { ExportButton } from "@/components/export-button"
import { KPICards } from "@/components/kpi-cards"
import { DistrictModal } from "@/components/district-modal"

function SchoolsContent() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <KPICards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <AttendanceHeatmap />
        <AttendanceTrends />
      </div>
      <AlertsSection />
    </div>
  )
}

function DistrictsContent() {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null)

  const districts = [
    { name: "District 1", attendance: 94.2, schools: 12, status: "excellent" },
    { name: "District 2", attendance: 91.8, schools: 8, status: "good" },
    { name: "District 3", attendance: 78.4, schools: 15, status: "needs-attention" },
    { name: "District 4", attendance: 96.1, schools: 10, status: "excellent" },
    { name: "District 5", attendance: 88.7, schools: 14, status: "good" },
    { name: "District 6", attendance: 92.3, schools: 11, status: "good" },
  ]

  return (
    <div className="space-y-6 sm:space-y-8">
      <KPICards />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {districts.map((district) => (
          <div
            key={district.name}
            onClick={() => setSelectedDistrict(district.name)}
            className="bg-card rounded-xl p-4 sm:p-6 border border-border shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">{district.name}</h3>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  district.status === "excellent"
                    ? "bg-success/10 text-success"
                    : district.status === "good"
                      ? "bg-primary/10 text-primary"
                      : "bg-destructive/10 text-destructive"
                }`}
              >
                {district.status === "excellent"
                  ? "Excellent"
                  : district.status === "good"
                    ? "Good"
                    : "Needs Attention"}
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Attendance Rate</span>
                <span
                  className={`font-semibold ${
                    district.attendance >= 95
                      ? "text-success"
                      : district.attendance >= 85
                        ? "text-primary"
                        : "text-destructive"
                  }`}
                >
                  {district.attendance}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Schools</span>
                <span className="font-semibold text-foreground">{district.schools}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    district.attendance >= 95
                      ? "bg-success"
                      : district.attendance >= 85
                        ? "bg-primary"
                        : "bg-destructive"
                  }`}
                  style={{ width: `${district.attendance}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <DistrictModal
        isOpen={!!selectedDistrict}
        onClose={() => setSelectedDistrict(null)}
        districtName={selectedDistrict || ""}
      />
    </div>
  )
}

function ReportsContent() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-card rounded-xl p-4 sm:p-6 border border-border shadow-soft hover:shadow-elevated transition-shadow">
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Monthly Reports</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Comprehensive monthly attendance and performance reports</p>
          <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm">
            Generate Report
          </button>
        </div>

        <div className="bg-card rounded-xl p-4 sm:p-6 border border-border shadow-soft hover:shadow-elevated transition-shadow">
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Annual Summary</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Year-end comprehensive analysis and statistics</p>
          <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm">
            View Summary
          </button>
        </div>

        <div className="bg-card rounded-xl p-4 sm:p-6 border border-border shadow-soft hover:shadow-elevated transition-shadow">
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Custom Reports</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Create custom reports with specific parameters</p>
          <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm">
            Create Custom
          </button>
        </div>
      </div>
    </div>
  )
}

export default function GovernmentDashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState("Schools")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const renderContent = () => {
    switch (activeMenuItem) {
      case "Schools":
        return <SchoolsContent />
      case "Districts":
        return <DistrictsContent />
      case "Reports":
        return <ReportsContent />
      default:
        return <SchoolsContent />
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Sidebar
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarCollapsed ? "ml-16" : "ml-64"
        } lg:ml-0`}
      >
        <Header 
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">{renderContent()}</div>
        </main>

        <ExportButton />
      </div>
    </div>
  )
}
