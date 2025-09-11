# SIH Government Attendance Portal

A modern, data-driven government attendance and oversight dashboard built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and an extensible component system powered by Radix UI + custom charts.

## ✨ Key Features
- Executive Dashboard with KPIs (attendance %, trends, risk indicators)
- Attendance Heatmap & Trend Visualizations
- District / Region Drilldowns via modal
- Real-time Alerts & Notifications Panel
- Export to CSV / XLS (attendance snapshots)
- Theming & Dark Mode via `next-themes`
- Accessible, composable UI (Radix primitives + custom wrappers)
- Modular component architecture (`components/ui/*`)
- Responsive layout with adaptive sidebar navigation

## 🧱 Tech Stack
| Layer | Tools |
|-------|-------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4, CSS modules, utility patterns |
| UI Primitives | Radix UI + custom abstractions |
| Charts / Data Viz | Recharts (pluggable) |
| Forms & Validation | React Hook Form + Zod |
| Theming | next-themes |
| Icons | lucide-react |

## 📂 Project Structure
```
SIH-GOVT/
  app/                # Next.js app router (layout, pages)
  components/         # Feature + UI components
    ui/               # Reusable base components (Radix wrappers)
  hooks/              # Custom React hooks (viewport, toast, etc.)
  lib/                # Utilities (formatters, helpers)
  public/             # Static assets
  styles/             # Global styles
```

## 🚀 Getting Started
### Prerequisites
- Node.js 18+
- pnpm (preferred) or npm / yarn

### Install & Run
```bash
# Clone
git clone https://github.com/SIH-attendence/SIH-GOVT.git
cd SIH-GOVT

# Install deps
pnpm install
# or
npm install

# Dev server
pnpm dev
# or
npm run dev

# Build
pnpm build

# Start production
pnpm start
```
Visit: http://localhost:3000

## 🧪 Linting
```bash
pnpm lint
```

## 🛠 Environment Variables
If later integrating APIs, create a `.env.local` file:
```
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
FEATURE_FLAGS=attendance,analytics
```
Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## 📊 Adding a New KPI Card
1. Create a component in `components/kpi-cards.tsx` or extend existing collection.
2. Provide props: `title`, `value`, `delta`, `icon`.
3. Import into the dashboard page and compose inside the grid.

## 🌗 Theming
Wrapped with `ThemeProvider` in `app/layout.tsx`. Use:
```tsx
import { useTheme } from 'next-themes';
const { theme, setTheme } = useTheme();
setTheme('light'); // or 'dark'
```

## 📤 Export Flow
The `export-button.tsx` triggers a client-side data serialization (currently placeholder). Replace the fetch logic with real API integration when backend endpoints are available.

## 🧩 UI Components
The `components/ui/*` directory wraps Radix primitives with Tailwind styles and accessible defaults. Extend by cloning an existing pattern (e.g., `button.tsx`).

## 🔐 Future Enhancements (Suggested Roadmap)
- Authentication & Role-Based Access (Admin / District Officer)
- API integration for real attendance ingestion
- Caching layer (ISR or edge runtime)
- Advanced filters (date ranges, cohorts)
- Websocket/live updates for real-time presence
- Multi-language support toggle
- Audit logging & export history

## 🤝 Contributing
1. Fork the repo
2. Create a feature branch: `git checkout -b feat/new-module`
3. Commit: `git commit -m "feat: add regional drilldown"`
4. Push: `git push origin feat/new-module`
5. Open a Pull Request

## 📜 License
MIT (add a LICENSE file if distributing publicly)

## 🙋 Support
Open an issue or start a discussion in the repository.

---
Crafted for Smart India Hackathon – Government Attendance Intelligence.
