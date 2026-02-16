import type { CheatCategory, Priority } from "@/data/types"
import { PaneHeader } from "./PaneHeader"
import { GroupSection } from "./GroupSection"
import { cn } from "@/lib/utils"

interface CategoryPaneProps {
  category: CheatCategory
  expanded: boolean
  onToggle: () => void
  getPriority: (id: string) => Priority
  onCyclePriority: (id: string) => void
  filterMode: "learning" | "all" | "known"
  animationDelay: number
}

export function CategoryPane({
  category,
  expanded,
  onToggle,
  getPriority,
  onCyclePriority,
  filterMode,
  animationDelay,
}: CategoryPaneProps) {
  const allItems = category.groups.flatMap((g) => g.items)
  const itemCount = allItems.length
  const learningCount = allItems.filter(
    (item) => getPriority(item.id) === "learning",
  ).length

  const filteredGroups = category.groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        const p = getPriority(item.id)
        if (filterMode === "learning") return p === "learning"
        if (filterMode === "known") return p !== "advanced"
        return true
      }),
    }))
    .filter((group) => group.items.length > 0)

  // When collapsed, show only learning items
  const collapsedGroups = category.groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => getPriority(item.id) === "learning"),
    }))
    .filter((group) => group.items.length > 0)

  const displayGroups = expanded ? filteredGroups : collapsedGroups

  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]",
        "animate-[fade-in-up_0.4s_ease-out_both]",
        expanded && category.id === "claude-code" && "col-span-1 md:col-span-2",
      )}
      style={{
        animationDelay: `${animationDelay}ms`,
        borderTopColor: category.accentColor,
        borderTopWidth: "2px",
      }}
    >
      <PaneHeader
        name={category.name}
        icon={category.icon}
        accentColor={category.accentColor}
        itemCount={itemCount}
        learningCount={learningCount}
        expanded={expanded}
        onToggle={onToggle}
      />

      {displayGroups.length > 0 && (
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            expanded ? "max-h-[5000px] opacity-100" : "max-h-[800px] opacity-100",
          )}
        >
          <div className="px-3 pb-3 space-y-1">
            {displayGroups.map((group) => (
              <GroupSection
                key={group.title}
                group={group}
                getPriority={getPriority}
                onCyclePriority={onCyclePriority}
              />
            ))}
          </div>
        </div>
      )}

      {!expanded && collapsedGroups.length === 0 && (
        <div className="px-3 pb-3 text-xs text-[var(--color-text-muted)] italic">
          No items marked as learning. Click to expand all.
        </div>
      )}
    </div>
  )
}
