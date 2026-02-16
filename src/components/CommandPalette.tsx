import { useRef, useEffect, useState } from "react"
import { Search, X } from "lucide-react"
import { searchItems, type SearchResult } from "@/lib/search"
import type { CheatCategory, Priority } from "@/data/types"
import { ShortcutBadge } from "./ShortcutBadge"
import { PriorityDot } from "./PriorityDot"

interface CommandPaletteProps {
  categories: CheatCategory[]
  open: boolean
  onClose: () => void
  getPriority: (id: string) => Priority
  onCyclePriority: (id: string) => void
}

export function CommandPalette({
  categories,
  open,
  onClose,
  getPriority,
  onCyclePriority,
}: CommandPaletteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState("")
  const results = searchItems(categories, query)

  useEffect(() => {
    if (open) {
      setQuery("")
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  // Global Escape listener — works regardless of focus position
  useEffect(() => {
    if (!open) return
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [open, onClose])

  if (!open) return null

  // Group results by category
  const grouped = results.reduce<Record<string, SearchResult[]>>((acc, r) => {
    ;(acc[r.categoryName] ??= []).push(r)
    return acc
  }, {})

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-[var(--color-overlay)]" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search shortcuts"
        className="relative w-full max-w-lg mx-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl shadow-2xl animate-[scale-in_0.2s_ease-out_both] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-border)]">
          <Search size={16} className="text-[var(--color-text-muted)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search shortcuts, commands, tools..."
            className="flex-1 bg-transparent text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none"
          />
          <button type="button" onClick={onClose} className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] cursor-pointer">
            <X size={16} />
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-2">
          {query && results.length === 0 && (
            <p className="text-sm text-[var(--color-text-muted)] text-center py-8">
              No results for &ldquo;{query}&rdquo;
            </p>
          )}

          {!query && (
            <p className="text-sm text-[var(--color-text-muted)] text-center py-8">
              Type to search across all categories...
            </p>
          )}

          {Object.entries(grouped).map(([catName, items]) => (
            <div key={catName} className="mb-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] px-2 py-1">
                {catName}
              </h3>
              {items.map(({ item }) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-[var(--color-bg-card-hover)] transition-colors"
                >
                  <PriorityDot
                    priority={getPriority(item.id)}
                    onClick={() => onCyclePriority(item.id)}
                  />
                  <span className="text-sm text-[var(--color-text-primary)] min-w-[120px] shrink-0">
                    {item.label}
                  </span>
                  <div className="flex-1 flex justify-end">
                    <ShortcutBadge shortcut={item.shortcut} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
