import type { CheatItem, Priority } from "@/data/types"
import { ShortcutBadge } from "./ShortcutBadge"
import { PriorityDot } from "./PriorityDot"

interface ItemRowProps {
  item: CheatItem
  priority: Priority
  onCyclePriority: (id: string) => void
}

export function ItemRow({ item, priority, onCyclePriority }: ItemRowProps) {
  return (
    <div className="flex items-center gap-3 py-1.5 px-2 rounded-md hover:bg-[var(--color-bg-card-hover)] transition-colors group">
      <PriorityDot
        priority={priority}
        onClick={() => onCyclePriority(item.id)}
      />
      <span className="text-sm text-[var(--color-text-primary)] min-w-[120px] shrink-0">
        {item.label}
      </span>
      <div className="flex-1 flex justify-end">
        <ShortcutBadge shortcut={item.shortcut} />
      </div>
      {item.context && (
        <span className="text-[10px] text-[var(--color-text-muted)] hidden group-hover:inline shrink-0">
          {item.context}
        </span>
      )}
    </div>
  )
}
