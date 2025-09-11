"use client"

import { useState } from "react"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const [language, setLanguage] = useState("EN")

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <button
        onClick={() => setLanguage(language === "EN" ? "HI" : "EN")}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium"
      >
        <span className={language === "EN" ? "text-foreground" : "text-muted-foreground"}>EN</span>
        <span className="text-muted-foreground">|</span>
        <span className={language === "HI" ? "text-foreground" : "text-muted-foreground"}>हिं</span>
      </button>
    </div>
  )
}
