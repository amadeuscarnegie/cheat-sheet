import { Search, Keyboard } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

interface HeaderProps {
  onOpenSearch: () => void
}

export function Header({ onOpenSearch }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-6 px-2">
      <div className="flex items-center gap-3">
        <Keyboard size={28} className="text-[var(--color-accent-claude)]" />
        <div>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            Cheat Sheet
          </h1>
          <p className="text-xs text-[var(--color-text-muted)]">
            All shortcuts, commands & configs in one place
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-muted)] text-sm hover:border-[var(--color-border-light)] transition-colors cursor-pointer"
        >
          <Search size={14} />
          <span>Search</span>
          <kbd className="keycap text-[10px] ml-2">&nbsp;&#8984;K&nbsp;</kbd>
        </button>
        <ThemeToggle />
      </div>
    </header>
  )
}
