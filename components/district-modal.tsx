"use client"
import { X, TrendingUp, TrendingDown, Minus } from "lucide-react"

interface DistrictModalProps {
  isOpen: boolean
  onClose: () => void
  districtName: string
}

export function DistrictModal({ isOpen, onClose, districtName }: DistrictModalProps) {
  if (!isOpen) return null

  const schoolsData = [
    { name: "Primary School A", attendance: 96.5, trend: "up", students: 245 },
    { name: "Secondary School B", attendance: 94.2, trend: "up", students: 387 },
    { name: "High School C", attendance: 89.7, trend: "down", students: 512 },
    { name: "Primary School D", attendance: 92.1, trend: "stable", students: 198 },
    { name: "Middle School E", attendance: 87.3, trend: "down", students: 324 },
    { name: "Primary School F", attendance: 95.8, trend: "up", students: 276 },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-success" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-destructive" />
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">{districtName} - School Details</h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 overflow-auto max-h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Total Schools</p>
              <p className="text-2xl font-bold text-foreground">{schoolsData.length}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Average Attendance</p>
              <p className="text-2xl font-bold text-foreground">
                {(schoolsData.reduce((acc, school) => acc + school.attendance, 0) / schoolsData.length).toFixed(1)}%
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Total Students</p>
              <p className="text-2xl font-bold text-foreground">
                {schoolsData.reduce((acc, school) => acc + school.students, 0).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">School Name</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Students</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Attendance</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Trend</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {schoolsData.map((school, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-foreground">{school.name}</td>
                    <td className="py-3 px-4 text-muted-foreground">{school.students}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`font-medium ${
                          school.attendance >= 95
                            ? "text-success"
                            : school.attendance >= 85
                              ? "text-warning"
                              : "text-destructive"
                        }`}
                      >
                        {school.attendance}%
                      </span>
                    </td>
                    <td className="py-3 px-4">{getTrendIcon(school.trend)}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          school.attendance >= 95
                            ? "bg-success/10 text-success"
                            : school.attendance >= 85
                              ? "bg-warning/10 text-warning"
                              : "bg-destructive/10 text-destructive"
                        }`}
                      >
                        {school.attendance >= 95 ? "Excellent" : school.attendance >= 85 ? "Good" : "Needs Attention"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
