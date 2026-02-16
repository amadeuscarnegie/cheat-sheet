import type { Priority } from "@/data/types"
import { cn } from "@/lib/utils"

interface PriorityDotProps {
  priority: Priority
  onClick: () => void
}

const colorMap: Record<Priority, string> = {
  learning: "bg-[var(--color-priority-learning)]",
  known: "bg-[var(--color-priority-known)]",
  advanced: "bg-[var(--color-priority-advanced)]",
}

const titleMap: Record<Priority, string> = {
  learning: "Learning",
  known: "Known",
  advanced: "Advanced",
}

export function PriorityDot({ priority, onClick }: PriorityDotProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={`${titleMap[priority]} (click to cycle)`}
      className={cn(
        "w-2.5 h-2.5 rounded-full shrink-0 cursor-pointer",
        "transition-colors duration-200 hover:scale-125",
        colorMap[priority],
      )}
    />
  )
}
