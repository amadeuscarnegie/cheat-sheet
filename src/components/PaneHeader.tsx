import {
  Terminal, MonitorSmartphone, GitBranch, FolderOpen,
  SquareTerminal, GitMerge, Sparkles, ChevronDown,
  type LucideProps,
} from "lucide-react"
import type { ComponentType } from "react"
import { cn } from "@/lib/utils"

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Terminal,
  MonitorSmartphone,
  GitBranch,
  FolderOpen,
  SquareTerminal,
  GitMerge,
  Sparkles,
}

interface PaneHeaderProps {
  name: string
  icon: string
  accentColor: string
  itemCount: number
  learningCount: number
  expanded: boolean
  onToggle: () => void
}

export function PaneHeader({
  name,
  icon,
  accentColor,
  itemCount,
  learningCount,
  expanded,
  onToggle,
}: PaneHeaderProps) {
  const IconComponent = iconMap[icon] ?? Terminal

  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer",
        "hover:bg-[var(--color-bg-card-hover)] transition-colors",
      )}
    >
      <div
        className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${accentColor}20` }}
      >
        <IconComponent size={18} color={accentColor} />
      </div>
      <span className="font-semibold text-sm text-[var(--color-text-primary)]">{name}</span>
      <span className="text-xs text-[var(--color-text-muted)] ml-auto">
        {learningCount > 0 && (
          <span className="text-[var(--color-priority-learning)] mr-2">
            {learningCount} learning
          </span>
        )}
        {itemCount} items
      </span>
      <ChevronDown
        size={16}
        className={cn(
          "text-[var(--color-text-muted)] transition-transform duration-300",
          expanded && "rotate-180",
        )}
      />
    </button>
  )
}
