import type { CheatCategory } from "./types"

export const lazygit: CheatCategory = {
  id: "lazygit",
  name: "Lazygit",
  icon: "GitBranch",
  accentColor: "var(--color-accent-lazygit)",
  groups: [
    {
      title: "Launch",
      items: [
        { id: "lg-launch", label: "Open lazygit", shortcut: { kind: "alias", alias: "lg", expansion: "lazygit" }, description: "Shell alias defined in ~/.zshrc", defaultPriority: "known" },
      ],
    },
    {
      title: "Navigation",
      items: [
        { id: "lg-status", label: "Status panel", shortcut: { kind: "keys", keys: ["1"] }, defaultPriority: "known" },
        { id: "lg-files", label: "Files panel", shortcut: { kind: "keys", keys: ["2"] }, defaultPriority: "known" },
        { id: "lg-branches", label: "Branches panel", shortcut: { kind: "keys", keys: ["3"] }, defaultPriority: "known" },
        { id: "lg-commits", label: "Commits panel", shortcut: { kind: "keys", keys: ["4"] }, defaultPriority: "known" },
        { id: "lg-stash", label: "Stash panel", shortcut: { kind: "keys", keys: ["5"] }, defaultPriority: "known" },
        { id: "lg-next-panel", label: "Next panel", shortcut: { kind: "keys", keys: ["Tab"] }, defaultPriority: "known" },
        { id: "lg-prev-panel", label: "Previous panel", shortcut: { kind: "keys", keys: ["Shift", "Tab"] }, defaultPriority: "known" },
        { id: "lg-scroll-up", label: "Scroll up", shortcut: { kind: "keys", keys: ["K"] }, defaultPriority: "known" },
        { id: "lg-scroll-down", label: "Scroll down", shortcut: { kind: "keys", keys: ["J"] }, defaultPriority: "known" },
        { id: "lg-page-up", label: "Page up", shortcut: { kind: "keys", keys: ["Ctrl", "U"] }, defaultPriority: "learning" },
        { id: "lg-page-down", label: "Page down", shortcut: { kind: "keys", keys: ["Ctrl", "D"] }, defaultPriority: "learning" },
      ],
    },
    {
      title: "Files",
      items: [
        { id: "lg-stage", label: "Stage/unstage file", shortcut: { kind: "keys", keys: ["Space"] }, defaultPriority: "known" },
        { id: "lg-stage-all", label: "Stage all", shortcut: { kind: "keys", keys: ["A"] }, defaultPriority: "known" },
        { id: "lg-discard", label: "Discard changes", shortcut: { kind: "keys", keys: ["D"] }, defaultPriority: "known" },
        { id: "lg-edit", label: "Edit file", shortcut: { kind: "keys", keys: ["E"] }, defaultPriority: "known" },
        { id: "lg-open", label: "Open file", shortcut: { kind: "keys", keys: ["O"] }, defaultPriority: "known" },
        { id: "lg-ignore", label: "Add to .gitignore", shortcut: { kind: "keys", keys: ["I"] }, defaultPriority: "advanced" },
        { id: "lg-refresh", label: "Refresh files", shortcut: { kind: "keys", keys: ["R"] }, defaultPriority: "learning" },
      ],
    },
    {
      title: "Staging",
      items: [
        { id: "lg-stage-line", label: "Stage line/hunk", shortcut: { kind: "keys", keys: ["Space"] }, context: "staging view", defaultPriority: "learning" },
        { id: "lg-stage-enter", label: "Enter staging view", shortcut: { kind: "keys", keys: ["Enter"] }, context: "on a file", defaultPriority: "known" },
        { id: "lg-toggle-hunk", label: "Expand/collapse hunk", shortcut: { kind: "keys", keys: ["Tab"] }, context: "staging view", defaultPriority: "learning" },
      ],
    },
    {
      title: "Commits",
      items: [
        { id: "lg-commit", label: "Commit", shortcut: { kind: "keys", keys: ["C"] }, defaultPriority: "known" },
        { id: "lg-amend", label: "Amend last commit", shortcut: { kind: "keys", keys: ["Shift", "A"] }, defaultPriority: "known" },
        { id: "lg-push", label: "Push", shortcut: { kind: "keys", keys: ["Shift", "P"] }, defaultPriority: "known" },
        { id: "lg-pull", label: "Pull", shortcut: { kind: "keys", keys: ["P"] }, defaultPriority: "known" },
        { id: "lg-reword", label: "Reword commit", shortcut: { kind: "keys", keys: ["R"] }, context: "commits panel", defaultPriority: "learning" },
        { id: "lg-squash", label: "Squash commit", shortcut: { kind: "keys", keys: ["S"] }, context: "commits panel", defaultPriority: "learning" },
        { id: "lg-fixup", label: "Fixup commit", shortcut: { kind: "keys", keys: ["F"] }, context: "commits panel", defaultPriority: "advanced" },
        { id: "lg-cherry-pick", label: "Cherry-pick", shortcut: { kind: "keys", keys: ["Shift", "C"] }, context: "commits panel", defaultPriority: "advanced" },
      ],
    },
    {
      title: "Branches",
      items: [
        { id: "lg-checkout", label: "Checkout branch", shortcut: { kind: "keys", keys: ["Space"] }, context: "branches panel", defaultPriority: "known" },
        { id: "lg-new-branch", label: "New branch", shortcut: { kind: "keys", keys: ["N"] }, context: "branches panel", defaultPriority: "known" },
        { id: "lg-delete-branch", label: "Delete branch", shortcut: { kind: "keys", keys: ["D"] }, context: "branches panel", defaultPriority: "known" },
        { id: "lg-merge", label: "Merge into current", shortcut: { kind: "keys", keys: ["Shift", "M"] }, context: "branches panel", defaultPriority: "learning" },
        { id: "lg-rebase", label: "Rebase onto branch", shortcut: { kind: "keys", keys: ["Shift", "R"] }, context: "branches panel", defaultPriority: "learning" },
      ],
    },
    {
      title: "General",
      items: [
        { id: "lg-quit", label: "Quit", shortcut: { kind: "keys", keys: ["Q"] }, defaultPriority: "known" },
        { id: "lg-undo", label: "Undo", shortcut: { kind: "keys", keys: ["Z"] }, defaultPriority: "known" },
        { id: "lg-filter", label: "Filter", shortcut: { kind: "keys", keys: ["/"] }, defaultPriority: "known" },
        { id: "lg-help", label: "Help", shortcut: { kind: "keys", keys: ["?"] }, defaultPriority: "known" },
        { id: "lg-copy", label: "Copy to clipboard", shortcut: { kind: "keys", keys: ["Y"] }, defaultPriority: "learning" },
      ],
    },
  ],
}
