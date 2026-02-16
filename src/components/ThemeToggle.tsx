import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-light)] transition-colors cursor-pointer"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
