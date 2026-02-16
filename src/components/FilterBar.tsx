import { cn } from "@/lib/utils"

type FilterMode = "learning" | "all" | "known"

interface FilterBarProps {
  mode: FilterMode
  onChange: (mode: FilterMode) => void
  totalItems: number
  learningItems: number
}

const filters: { value: FilterMode; label: string }[] = [
  { value: "learning", label: "Learning" },
  { value: "all", label: "All" },
  { value: "known", label: "Hide Advanced" },
]

export function FilterBar({ mode, onChange, totalItems, learningItems }: FilterBarProps) {
  return (
    <div className="flex items-center justify-between px-2 pb-4">
      <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)]">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => onChange(f.value)}
            className={cn(
              "px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer",
              mode === f.value
                ? "bg-[var(--color-accent-claude)] text-white"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <span className="text-xs text-[var(--color-text-muted)]">
        {learningItems} learning / {totalItems} total
      </span>
    </div>
  )
}
