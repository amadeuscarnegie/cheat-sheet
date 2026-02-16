import { ThemeProvider } from "@/context/ThemeContext"
import { DashboardPage } from "@/pages/DashboardPage"

function App() {
  return (
    <ThemeProvider>
      <DashboardPage />
    </ThemeProvider>
  )
}

export default App
