export type Priority = "learning" | "known" | "advanced"

export type ShortcutDisplay =
  | { kind: "keys"; keys: string[] }
  | { kind: "command"; text: string }
  | { kind: "alias"; alias: string; expansion: string }
  | { kind: "symbol"; symbol: string; meaning: string }
  | { kind: "text"; text: string }

export interface CheatItem {
  id: string
  label: string
  shortcut: ShortcutDisplay
  description?: string
  context?: string
  defaultPriority: Priority
}

export interface CheatGroup {
  title: string
  items: CheatItem[]
}

export const CATEGORY_IDS = [
  "claude-code",
  "ghostty",
  "lazygit",
  "yazi",
  "shell",
  "git",
  "starship",
] as const

export type CategoryId = (typeof CATEGORY_IDS)[number]

export interface CheatCategory {
  id: CategoryId
  name: string
  icon: string
  accentColor: string
  groups: CheatGroup[]
}
