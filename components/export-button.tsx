"use client"

import { Button } from "@/components/ui/button"
import { Download, Check, ChevronDown, FileText, FileSpreadsheet, File } from "lucide-react"
import { useState } from "react"

export function ExportButton() {
  const [isExporting, setIsExporting] = useState(false)
  const [exported, setExported] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const exportFormats = [
    { name: "CSV", icon: FileSpreadsheet, extension: "csv", type: "text/csv" },
    { name: "PDF", icon: FileText, extension: "pdf", type: "application/pdf" },
    {
      name: "Excel",
      icon: File,
      extension: "xlsx",
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
  ]

  const handleExport = async (format: (typeof exportFormats)[0]) => {
    setIsExporting(true)
    setShowDropdown(false)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    const data = {
      timestamp: new Date().toISOString(),
      report_type: "Government Dashboard Export",
      attendance_data: {
        total_schools: 156,
        average_attendance: 94.2,
        regional_breakdown: [
          { region: "North", attendance: 95.1 },
          { region: "South", attendance: 93.8 },
          { region: "East", attendance: 94.5 },
          { region: "West", attendance: 93.2 },
        ],
      },
      alerts: [
        { school: "Lincoln Elementary", type: "Low Attendance", severity: "Medium" },
        { school: "Washington High", type: "Staff Shortage", severity: "High" },
      ],
      districts: {
        total: 24,
        active: 22,
        under_review: 2,
      },
      kpi_metrics: {
        best_district: "District 7 (97.8%)",
        worst_district: "District 3 (78.4%)",
        meals_required: 2847,
        predicted_attendance: "93% (Mar 2025)",
      },
    }

    let content: string
    let mimeType: string

    switch (format.name) {
      case "CSV":
        content = convertToCSV(data)
        mimeType = format.type
        break
      case "PDF":
        content = generatePDFContent(data)
        mimeType = format.type
        break
      case "Excel":
        content = JSON.stringify(data, null, 2) // Simplified for demo
        mimeType = format.type
        break
      default:
        content = JSON.stringify(data, null, 2)
        mimeType = "application/json"
    }

    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `government-dashboard-export-${new Date().toISOString().split("T")[0]}.${format.extension}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    setIsExporting(false)
    setExported(true)

    setTimeout(() => setExported(false), 3000)
  }

  const convertToCSV = (data: any) => {
    const headers = ["Region", "Attendance", "Status"]
    const rows = data.attendance_data.regional_breakdown.map((item: any) => [
      item.region,
      `${item.attendance}%`,
      item.attendance >= 95 ? "Excellent" : item.attendance >= 90 ? "Good" : "Needs Attention",
    ])

    return [headers, ...rows].map((row) => row.join(",")).join("\n")
  }

  const generatePDFContent = (data: any) => {
    return `Government Dashboard Report
Generated: ${new Date().toLocaleDateString()}

ATTENDANCE SUMMARY
Average Attendance: ${data.attendance_data.average_attendance}%
Total Schools: ${data.attendance_data.total_schools}

REGIONAL BREAKDOWN
${data.attendance_data.regional_breakdown.map((item: any) => `${item.region}: ${item.attendance}%`).join("\n")}

ALERTS
${data.alerts.map((alert: any) => `${alert.school}: ${alert.type} (${alert.severity})`).join("\n")}
`
  }

  return (
    <div className="fixed bottom-6 right-6 z-30">
      <div className="relative">
        {showDropdown && (
          <div className="absolute bottom-full right-0 mb-2 bg-card border border-border rounded-lg shadow-lg min-w-[160px]">
            {exportFormats.map((format) => (
              <button
                key={format.name}
                onClick={() => handleExport(format)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                disabled={isExporting}
              >
                <format.icon className="h-4 w-4" />
                Export as {format.name}
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          <Button
            onClick={() => setShowDropdown(!showDropdown)}
            disabled={isExporting}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg gap-2 transition-all duration-200"
            size="lg"
          >
            {isExporting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary-foreground border-t-transparent" />
                Exporting...
              </>
            ) : exported ? (
              <>
                <Check className="h-5 w-5" />
                Exported!
              </>
            ) : (
              <>
                <Download className="h-5 w-5" />
                Export Data
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
