import { claudeCode } from "./claude-code"
import { ghostty } from "./ghostty"
import { lazygit } from "./lazygit"
import { yazi } from "./yazi"
import { shell } from "./shell"
import { git } from "./git"
import { starship } from "./starship"
import type { CheatCategory } from "./types"

export const categories: CheatCategory[] = [
  claudeCode,
  ghostty,
  lazygit,
  yazi,
  shell,
  git,
  starship,
]

export { type CheatCategory, type CheatItem, type CheatGroup, type Priority, type CategoryId, type ShortcutDisplay } from "./types"
