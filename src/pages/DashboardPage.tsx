import { useState, useCallback, useMemo } from "react"
import { categories, type Priority, type CategoryId } from "@/data"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { useHotkey } from "@/hooks/useHotkey"
import { Header } from "@/components/Header"
import { FilterBar } from "@/components/FilterBar"
import { CategoryPane } from "@/components/CategoryPane"
import { CommandPalette } from "@/components/CommandPalette"

type FilterMode = "learning" | "all" | "known"

export function DashboardPage() {
  const [expandedPanes, setExpandedPanes] = useLocalStorage<CategoryId[]>(
    "cheat-sheet-expanded",
    [],
  )
  const [priorityOverrides, setPriorityOverrides] = useLocalStorage<
    Record<string, Priority>
  >("cheat-sheet-priorities", {})
  const [filterMode, setFilterMode] = useLocalStorage<FilterMode>(
    "cheat-sheet-filter",
    "all",
  )
  const [searchOpen, setSearchOpen] = useState(false)

  useHotkey("k", useCallback(() => setSearchOpen(true), []))

  const togglePane = useCallback(
    (id: CategoryId) => {
      setExpandedPanes((prev) =>
        prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
      )
    },
    [setExpandedPanes],
  )

  const getPriority = useCallback(
    (itemId: string): Priority => {
      if (priorityOverrides[itemId]) return priorityOverrides[itemId]
      for (const cat of categories) {
        for (const group of cat.groups) {
          const item = group.items.find((i) => i.id === itemId)
          if (item) return item.defaultPriority
        }
      }
      return "known"
    },
    [priorityOverrides],
  )

  const cyclePriority = useCallback(
    (itemId: string) => {
      const current = getPriority(itemId)
      const order: Priority[] = ["learning", "known", "advanced"]
      const nextIdx = (order.indexOf(current) + 1) % order.length
      setPriorityOverrides((prev) => ({ ...prev, [itemId]: order[nextIdx] }))
    },
    [getPriority, setPriorityOverrides],
  )

  const allItems = useMemo(
    () => categories.flatMap((c) => c.groups.flatMap((g) => g.items)),
    [],
  )
  const totalItems = allItems.length
  const learningItems = allItems.filter(
    (item) => getPriority(item.id) === "learning",
  ).length

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] px-4 md:px-8 max-w-7xl mx-auto">
      <Header onOpenSearch={() => setSearchOpen(true)} />
      <FilterBar
        mode={filterMode}
        onChange={setFilterMode}
        totalItems={totalItems}
        learningItems={learningItems}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
        {categories.map((cat, i) => (
          <CategoryPane
            key={cat.id}
            category={cat}
            expanded={expandedPanes.includes(cat.id)}
            onToggle={() => togglePane(cat.id)}
            getPriority={getPriority}
            onCyclePriority={cyclePriority}
            filterMode={filterMode}
            animationDelay={i * 80}
          />
        ))}
      </div>

      <CommandPalette
        categories={categories}
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        getPriority={getPriority}
        onCyclePriority={cyclePriority}
      />
    </div>
  )
}
