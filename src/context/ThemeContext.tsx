import { createContext, useContext, useCallback } from "react"
import { useLocalStorage } from "@/hooks/useLocalStorage"

type Theme = "dark" | "light"

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>("cheat-sheet-theme", "dark")

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark"
      document.documentElement.className = next
      return next
    })
  }, [setTheme])

  // Sync class on mount
  document.documentElement.className = theme

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
