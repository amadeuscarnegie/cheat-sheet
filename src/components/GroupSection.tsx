import type { CheatGroup, Priority } from "@/data/types"
import { ItemRow } from "./ItemRow"

interface GroupSectionProps {
  group: CheatGroup
  getPriority: (id: string) => Priority
  onCyclePriority: (id: string) => void
}

export function GroupSection({ group, getPriority, onCyclePriority }: GroupSectionProps) {
  return (
    <div className="mb-3">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-1.5 px-2">
        {group.title}
      </h4>
      <div className="space-y-0.5">
        {group.items.map((item) => (
          <ItemRow
            key={item.id}
            item={item}
            priority={getPriority(item.id)}
            onCyclePriority={onCyclePriority}
          />
        ))}
      </div>
    </div>
  )
}
