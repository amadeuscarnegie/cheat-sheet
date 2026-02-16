import type { CheatCategory } from "./types"

export const starship: CheatCategory = {
  id: "starship",
  name: "Starship",
  icon: "Sparkles",
  accentColor: "var(--color-accent-starship)",
  groups: [
    {
      title: "Prompt Format",
      items: [
        { id: "sp-format", label: "Prompt layout", shortcut: { kind: "text", text: "$directory on $git_branch$git_status$character" }, description: "Minimal clean prompt", defaultPriority: "known" },
        { id: "sp-dir", label: "Directory style", shortcut: { kind: "text", text: "bold cyan, truncated to 1 level" }, description: "Shows repo root separately", defaultPriority: "known" },
        { id: "sp-branch", label: "Branch style", shortcut: { kind: "text", text: "bold purple with \ue0a0 icon" }, defaultPriority: "known" },
        { id: "sp-success", label: "Success prompt", shortcut: { kind: "symbol", symbol: ">", meaning: "bold green — command succeeded" }, defaultPriority: "known" },
        { id: "sp-error", label: "Error prompt", shortcut: { kind: "symbol", symbol: ">", meaning: "bold red — command failed" }, defaultPriority: "known" },
      ],
    },
    {
      title: "Git Status Symbols",
      items: [
        { id: "sp-ahead", label: "Ahead of remote", shortcut: { kind: "symbol", symbol: "\u21E1", meaning: "commits ahead (need to push)" }, defaultPriority: "known" },
        { id: "sp-behind", label: "Behind remote", shortcut: { kind: "symbol", symbol: "\u21E3", meaning: "commits behind (need to pull)" }, defaultPriority: "known" },
        { id: "sp-untracked", label: "Untracked files", shortcut: { kind: "symbol", symbol: "?", meaning: "new files not in git" }, defaultPriority: "known" },
        { id: "sp-modified", label: "Modified files", shortcut: { kind: "symbol", symbol: "!", meaning: "changes not staged" }, defaultPriority: "known" },
        { id: "sp-staged", label: "Staged files", shortcut: { kind: "symbol", symbol: "+", meaning: "changes ready to commit" }, defaultPriority: "known" },
        { id: "sp-deleted", label: "Deleted files", shortcut: { kind: "symbol", symbol: "\u2718", meaning: "files removed" }, defaultPriority: "known" },
        { id: "sp-renamed", label: "Renamed files", shortcut: { kind: "symbol", symbol: "\u00BB", meaning: "files renamed/moved" }, defaultPriority: "learning" },
        { id: "sp-stashed", label: "Stash exists", shortcut: { kind: "symbol", symbol: "*", meaning: "stash has entries" }, defaultPriority: "learning" },
      ],
    },
    {
      title: "Disabled Modules",
      items: [
        { id: "sp-nodejs", label: "Node.js version", shortcut: { kind: "text", text: "disabled" }, description: "Reduces prompt noise", defaultPriority: "advanced" },
        { id: "sp-package", label: "Package version", shortcut: { kind: "text", text: "disabled" }, description: "Reduces prompt noise", defaultPriority: "advanced" },
      ],
    },
  ],
}
