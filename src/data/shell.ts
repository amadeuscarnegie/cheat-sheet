import type { CheatCategory } from "./types"

export const shell: CheatCategory = {
  id: "shell",
  name: "Shell",
  icon: "SquareTerminal",
  accentColor: "var(--color-accent-shell)",
  groups: [
    {
      title: "Custom Aliases",
      items: [
        { id: "sh-viewmd", label: "Markdown viewer", shortcut: { kind: "alias", alias: "viewmd", expansion: "node ~/code/claude-toolbox/viewmd.mjs" }, description: "Renders .md as styled HTML in browser", defaultPriority: "known" },
        { id: "sh-lg", label: "Lazygit", shortcut: { kind: "alias", alias: "lg", expansion: "lazygit" }, defaultPriority: "known" },
      ],
    },
    {
      title: "Custom Functions",
      items: [
        { id: "sh-ya", label: "Yazi with shell follow", shortcut: { kind: "alias", alias: "ya", expansion: "yazi (follows cwd on exit)" }, description: "Shell follows you when you navigate in Yazi", defaultPriority: "known" },
      ],
    },
    {
      title: "Zoxide",
      items: [
        { id: "sh-z", label: "Smart jump", shortcut: { kind: "alias", alias: "z <query>", expansion: "cd to best match" }, description: "Learns your frequent directories", defaultPriority: "known" },
        { id: "sh-zi", label: "Interactive jump", shortcut: { kind: "alias", alias: "zi", expansion: "interactive directory picker" }, description: "fzf-powered directory selection", defaultPriority: "learning" },
      ],
    },
    {
      title: "Environment",
      items: [
        { id: "sh-nvm", label: "Node version manager", shortcut: { kind: "text", text: "nvm (auto-loaded)" }, description: "Manages Node.js versions", defaultPriority: "known" },
        { id: "sh-autocompact", label: "Claude autocompact", shortcut: { kind: "text", text: "CLAUDE_AUTOCOMPACT=disabled" }, description: "Prevents auto context compaction", defaultPriority: "known" },
        { id: "sh-starship", label: "Starship prompt", shortcut: { kind: "text", text: "eval \"$(starship init zsh)\"" }, description: "Custom prompt (not visible in Claude Code)", defaultPriority: "known" },
      ],
    },
    {
      title: "Zsh Essentials",
      items: [
        { id: "sh-ctrl-r", label: "Reverse search history", shortcut: { kind: "keys", keys: ["Ctrl", "R"] }, defaultPriority: "known" },
        { id: "sh-ctrl-a", label: "Move to line start", shortcut: { kind: "keys", keys: ["Ctrl", "A"] }, defaultPriority: "known" },
        { id: "sh-ctrl-e", label: "Move to line end", shortcut: { kind: "keys", keys: ["Ctrl", "E"] }, defaultPriority: "known" },
        { id: "sh-ctrl-w", label: "Delete word backward", shortcut: { kind: "keys", keys: ["Ctrl", "W"] }, defaultPriority: "known" },
        { id: "sh-ctrl-u", label: "Delete to line start", shortcut: { kind: "keys", keys: ["Ctrl", "U"] }, defaultPriority: "known" },
        { id: "sh-ctrl-k", label: "Delete to line end", shortcut: { kind: "keys", keys: ["Ctrl", "K"] }, defaultPriority: "known" },
        { id: "sh-ctrl-l", label: "Clear screen", shortcut: { kind: "keys", keys: ["Ctrl", "L"] }, defaultPriority: "known" },
      ],
    },
  ],
}
