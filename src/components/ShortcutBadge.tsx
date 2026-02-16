import type { ShortcutDisplay } from "@/data/types"

interface ShortcutBadgeProps {
  shortcut: ShortcutDisplay
}

export function ShortcutBadge({ shortcut }: ShortcutBadgeProps) {
  switch (shortcut.kind) {
    case "keys":
      return (
        <span className="flex items-center gap-1 flex-wrap">
          {shortcut.keys.map((key, i) => (
            <span key={i}>
              {i > 0 && <span className="text-[var(--color-text-muted)] text-xs mx-0.5">+</span>}
              <kbd className="keycap">{key}</kbd>
            </span>
          ))}
        </span>
      )

    case "command":
      return (
        <code className="font-mono text-xs px-2 py-0.5 rounded bg-[var(--color-bg-input)] text-[var(--color-text-primary)]">
          {shortcut.text}
        </code>
      )

    case "alias":
      return (
        <span className="flex items-center gap-1.5 text-xs">
          <code className="font-mono font-medium px-1.5 py-0.5 rounded bg-[var(--color-bg-input)] text-[var(--color-text-primary)]">
            {shortcut.alias}
          </code>
          <span className="text-[var(--color-text-muted)]">&rarr;</span>
          <code className="font-mono text-[var(--color-text-secondary)] truncate max-w-[200px]">
            {shortcut.expansion}
          </code>
        </span>
      )

    case "symbol":
      return (
        <span className="flex items-center gap-1.5 text-xs">
          <span className="font-mono font-bold text-sm text-[var(--color-text-primary)]">
            {shortcut.symbol}
          </span>
          <span className="text-[var(--color-text-secondary)]">
            {shortcut.meaning}
          </span>
        </span>
      )

    case "text":
      return (
        <span className="text-xs text-[var(--color-text-secondary)] font-mono">
          {shortcut.text}
        </span>
      )
  }
}
