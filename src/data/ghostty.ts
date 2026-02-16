import type { CheatCategory } from "./types"

export const ghostty: CheatCategory = {
  id: "ghostty",
  name: "Ghostty",
  icon: "MonitorSmartphone",
  accentColor: "var(--color-accent-ghostty)",
  groups: [
    {
      title: "Configuration",
      items: [
        { id: "gh-option-alt", label: "Option as Alt/Meta", shortcut: { kind: "text", text: "macos-option-as-alt = left" }, description: "Enables Opt+Backspace to delete word", defaultPriority: "known" },
      ],
    },
    {
      title: "Custom Keybinds",
      items: [
        { id: "gh-del-line", label: "Delete entire line", shortcut: { kind: "keys", keys: ["Shift", "Backspace"] }, description: "Sends Ctrl+U", defaultPriority: "known" },
        { id: "gh-word-left", label: "Jump word left", shortcut: { kind: "keys", keys: ["Opt", "\u2190"] }, description: "Sends Alt+B", defaultPriority: "known" },
        { id: "gh-word-right", label: "Jump word right", shortcut: { kind: "keys", keys: ["Opt", "\u2192"] }, description: "Sends Alt+F", defaultPriority: "known" },
        { id: "gh-pass-up", label: "Pass through up", shortcut: { kind: "keys", keys: ["Opt", "\u2191"] }, description: "Regular Up when holding Option", defaultPriority: "advanced" },
        { id: "gh-pass-down", label: "Pass through down", shortcut: { kind: "keys", keys: ["Opt", "\u2193"] }, description: "Regular Down when holding Option", defaultPriority: "advanced" },
      ],
    },
    {
      title: "Built-in Shortcuts",
      items: [
        { id: "gh-new-tab", label: "New tab", shortcut: { kind: "keys", keys: ["\u2318", "T"] }, defaultPriority: "known" },
        { id: "gh-close-tab", label: "Close tab", shortcut: { kind: "keys", keys: ["\u2318", "W"] }, defaultPriority: "known" },
        { id: "gh-split-right", label: "Split right", shortcut: { kind: "keys", keys: ["\u2318", "D"] }, defaultPriority: "known" },
        { id: "gh-split-down", label: "Split down", shortcut: { kind: "keys", keys: ["\u2318", "Shift", "D"] }, defaultPriority: "known" },
        { id: "gh-next-pane", label: "Next pane", shortcut: { kind: "keys", keys: ["\u2318", "]"] }, defaultPriority: "known" },
        { id: "gh-prev-pane", label: "Previous pane", shortcut: { kind: "keys", keys: ["\u2318", "["] }, defaultPriority: "known" },
        { id: "gh-zoom-in", label: "Zoom in", shortcut: { kind: "keys", keys: ["\u2318", "+"] }, defaultPriority: "known" },
        { id: "gh-zoom-out", label: "Zoom out", shortcut: { kind: "keys", keys: ["\u2318", "-"] }, defaultPriority: "known" },
        { id: "gh-zoom-reset", label: "Reset zoom", shortcut: { kind: "keys", keys: ["\u2318", "0"] }, defaultPriority: "known" },
        { id: "gh-fullscreen", label: "Toggle fullscreen", shortcut: { kind: "keys", keys: ["\u2318", "Enter"] }, defaultPriority: "known" },
        { id: "gh-config", label: "Open config", shortcut: { kind: "keys", keys: ["\u2318", ","] }, defaultPriority: "known" },
      ],
    },
  ],
}
