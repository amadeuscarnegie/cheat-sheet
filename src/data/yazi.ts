import type { CheatCategory } from "./types"

export const yazi: CheatCategory = {
  id: "yazi",
  name: "Yazi",
  icon: "FolderOpen",
  accentColor: "var(--color-accent-yazi)",
  groups: [
    {
      title: "Navigation",
      items: [
        { id: "yz-up", label: "Move up", shortcut: { kind: "keys", keys: ["K"] }, defaultPriority: "known" },
        { id: "yz-down", label: "Move down", shortcut: { kind: "keys", keys: ["J"] }, defaultPriority: "known" },
        { id: "yz-parent", label: "Go to parent", shortcut: { kind: "keys", keys: ["H"] }, defaultPriority: "known" },
        { id: "yz-enter", label: "Enter directory / open file", shortcut: { kind: "keys", keys: ["L"] }, defaultPriority: "known" },
        { id: "yz-top", label: "Jump to top", shortcut: { kind: "keys", keys: ["G", "G"] }, defaultPriority: "known" },
        { id: "yz-bottom", label: "Jump to bottom", shortcut: { kind: "keys", keys: ["Shift", "G"] }, defaultPriority: "known" },
        { id: "yz-home", label: "Go to home", shortcut: { kind: "keys", keys: ["G", "H"] }, defaultPriority: "learning" },
        { id: "yz-hidden", label: "Toggle hidden files", shortcut: { kind: "keys", keys: ["."] }, defaultPriority: "known" },
        { id: "yz-search", label: "Search files", shortcut: { kind: "keys", keys: ["/"] }, defaultPriority: "known" },
        { id: "yz-search-next", label: "Next search result", shortcut: { kind: "keys", keys: ["N"] }, defaultPriority: "known" },
        { id: "yz-search-prev", label: "Previous search result", shortcut: { kind: "keys", keys: ["Shift", "N"] }, defaultPriority: "known" },
      ],
    },
    {
      title: "Selection",
      items: [
        { id: "yz-select", label: "Toggle selection", shortcut: { kind: "keys", keys: ["Space"] }, defaultPriority: "known" },
        { id: "yz-select-all", label: "Select all", shortcut: { kind: "keys", keys: ["Ctrl", "A"] }, defaultPriority: "known" },
        { id: "yz-invert", label: "Invert selection", shortcut: { kind: "keys", keys: ["Ctrl", "R"] }, defaultPriority: "learning" },
      ],
    },
    {
      title: "File Operations",
      items: [
        { id: "yz-open", label: "Open file", shortcut: { kind: "keys", keys: ["Enter"] }, defaultPriority: "known" },
        { id: "yz-copy", label: "Copy (yank)", shortcut: { kind: "keys", keys: ["Y"] }, defaultPriority: "known" },
        { id: "yz-cut", label: "Cut (move)", shortcut: { kind: "keys", keys: ["X"] }, defaultPriority: "known" },
        { id: "yz-paste", label: "Paste", shortcut: { kind: "keys", keys: ["P"] }, defaultPriority: "known" },
        { id: "yz-delete", label: "Delete (trash)", shortcut: { kind: "keys", keys: ["D"] }, defaultPriority: "known" },
        { id: "yz-perm-delete", label: "Permanent delete", shortcut: { kind: "keys", keys: ["Shift", "D"] }, defaultPriority: "advanced" },
        { id: "yz-rename", label: "Rename", shortcut: { kind: "keys", keys: ["R"] }, defaultPriority: "known" },
        { id: "yz-create", label: "Create file/dir", shortcut: { kind: "keys", keys: ["A"] }, defaultPriority: "known" },
      ],
    },
    {
      title: "Tabs",
      items: [
        { id: "yz-new-tab", label: "New tab", shortcut: { kind: "keys", keys: ["T"] }, defaultPriority: "learning" },
        { id: "yz-close-tab", label: "Close tab", shortcut: { kind: "keys", keys: ["Shift", "T"] }, defaultPriority: "learning" },
        { id: "yz-tab-1", label: "Switch to tab 1-9", shortcut: { kind: "keys", keys: ["1-9"] }, defaultPriority: "learning" },
        { id: "yz-tab-next", label: "Next tab", shortcut: { kind: "keys", keys: ["]"] }, defaultPriority: "learning" },
        { id: "yz-tab-prev", label: "Previous tab", shortcut: { kind: "keys", keys: ["["] }, defaultPriority: "learning" },
      ],
    },
    {
      title: "General",
      items: [
        { id: "yz-quit", label: "Quit", shortcut: { kind: "keys", keys: ["Q"] }, defaultPriority: "known" },
        { id: "yz-help", label: "Help", shortcut: { kind: "keys", keys: ["~"] }, defaultPriority: "known" },
        { id: "yz-shell", label: "Open shell", shortcut: { kind: "keys", keys: [":"] }, defaultPriority: "learning" },
        { id: "yz-sort", label: "Sort menu", shortcut: { kind: "keys", keys: [","] }, defaultPriority: "learning" },
      ],
    },
  ],
}
