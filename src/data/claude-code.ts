import type { CheatCategory } from "./types"

export const claudeCode: CheatCategory = {
  id: "claude-code",
  name: "Claude Code",
  icon: "Terminal",
  accentColor: "var(--color-accent-claude)",
  groups: [
    {
      title: "Global",
      items: [
        { id: "cc-todo", label: "Toggle todo list", shortcut: { kind: "keys", keys: ["Ctrl", "T"] }, defaultPriority: "known" },
        { id: "cc-transcript", label: "Toggle transcript", shortcut: { kind: "keys", keys: ["Ctrl", "O"] }, defaultPriority: "known" },
        { id: "cc-teammate-preview", label: "Toggle teammate preview", shortcut: { kind: "keys", keys: ["Ctrl", "Shift", "O"] }, defaultPriority: "advanced" },
        { id: "cc-history-search", label: "Search history", shortcut: { kind: "keys", keys: ["Ctrl", "R"] }, defaultPriority: "known" },
      ],
    },
    {
      title: "Chat",
      items: [
        { id: "cc-cancel", label: "Cancel response", shortcut: { kind: "keys", keys: ["Esc"] }, defaultPriority: "known" },
        { id: "cc-cycle-mode", label: "Cycle permission mode", shortcut: { kind: "keys", keys: ["Shift", "Tab"] }, defaultPriority: "known" },
        { id: "cc-model-picker", label: "Model picker", shortcut: { kind: "keys", keys: ["\u2318", "P"] }, defaultPriority: "known" },
        { id: "cc-fast-mode", label: "Toggle fast mode", shortcut: { kind: "keys", keys: ["\u2318", "O"] }, defaultPriority: "known" },
        { id: "cc-thinking", label: "Toggle thinking", shortcut: { kind: "keys", keys: ["\u2318", "T"] }, defaultPriority: "learning" },
        { id: "cc-submit", label: "Submit message", shortcut: { kind: "keys", keys: ["Enter"] }, defaultPriority: "known" },
        { id: "cc-prev-history", label: "Previous message", shortcut: { kind: "keys", keys: ["\u2191"] }, defaultPriority: "known" },
        { id: "cc-next-history", label: "Next message", shortcut: { kind: "keys", keys: ["\u2193"] }, defaultPriority: "known" },
        { id: "cc-undo", label: "Undo last edit", shortcut: { kind: "keys", keys: ["Ctrl", "_"] }, defaultPriority: "learning" },
        { id: "cc-external-editor", label: "Open external editor", shortcut: { kind: "keys", keys: ["Ctrl", "G"] }, defaultPriority: "learning" },
        { id: "cc-stash", label: "Stash message", shortcut: { kind: "keys", keys: ["Ctrl", "S"] }, defaultPriority: "learning" },
        { id: "cc-paste-image", label: "Paste image", shortcut: { kind: "keys", keys: ["Ctrl", "V"] }, defaultPriority: "learning" },
      ],
    },
    {
      title: "Autocomplete",
      items: [
        { id: "cc-ac-accept", label: "Accept suggestion", shortcut: { kind: "keys", keys: ["Tab"] }, defaultPriority: "known" },
        { id: "cc-ac-dismiss", label: "Dismiss suggestion", shortcut: { kind: "keys", keys: ["Esc"] }, defaultPriority: "known" },
        { id: "cc-ac-prev", label: "Previous suggestion", shortcut: { kind: "keys", keys: ["\u2191"] }, defaultPriority: "known" },
        { id: "cc-ac-next", label: "Next suggestion", shortcut: { kind: "keys", keys: ["\u2193"] }, defaultPriority: "known" },
      ],
    },
    {
      title: "Confirmation Prompts",
      items: [
        { id: "cc-yes", label: "Accept", shortcut: { kind: "keys", keys: ["Y"] }, defaultPriority: "known" },
        { id: "cc-no", label: "Reject", shortcut: { kind: "keys", keys: ["N"] }, defaultPriority: "known" },
        { id: "cc-toggle", label: "Toggle option", shortcut: { kind: "keys", keys: ["Space"] }, defaultPriority: "known" },
        { id: "cc-cycle-confirm", label: "Cycle mode", shortcut: { kind: "keys", keys: ["Shift", "Tab"] }, defaultPriority: "learning" },
        { id: "cc-explanation", label: "Toggle explanation", shortcut: { kind: "keys", keys: ["Ctrl", "E"] }, defaultPriority: "learning" },
      ],
    },
    {
      title: "Settings / Select",
      items: [
        { id: "cc-select-prev", label: "Previous item", shortcut: { kind: "keys", keys: ["K"] }, context: "vim-style", defaultPriority: "known" },
        { id: "cc-select-next", label: "Next item", shortcut: { kind: "keys", keys: ["J"] }, context: "vim-style", defaultPriority: "known" },
        { id: "cc-select-accept", label: "Accept selection", shortcut: { kind: "keys", keys: ["Enter"] }, defaultPriority: "known" },
        { id: "cc-settings-search", label: "Search settings", shortcut: { kind: "keys", keys: ["/"] }, defaultPriority: "learning" },
        { id: "cc-settings-retry", label: "Retry", shortcut: { kind: "keys", keys: ["R"] }, defaultPriority: "learning" },
      ],
    },
    {
      title: "History Search",
      items: [
        { id: "cc-hs-next", label: "Next match", shortcut: { kind: "keys", keys: ["Ctrl", "R"] }, defaultPriority: "known" },
        { id: "cc-hs-accept", label: "Accept match", shortcut: { kind: "keys", keys: ["Esc"] }, defaultPriority: "known" },
        { id: "cc-hs-execute", label: "Execute match", shortcut: { kind: "keys", keys: ["Enter"] }, defaultPriority: "known" },
      ],
    },
    {
      title: "Task / Background",
      items: [
        { id: "cc-bg", label: "Send to background", shortcut: { kind: "keys", keys: ["Ctrl", "B"] }, defaultPriority: "learning" },
      ],
    },
    {
      title: "Transcript",
      items: [
        { id: "cc-tr-toggle", label: "Toggle show all", shortcut: { kind: "keys", keys: ["Ctrl", "E"] }, defaultPriority: "learning" },
        { id: "cc-tr-exit", label: "Exit transcript", shortcut: { kind: "keys", keys: ["Esc"] }, defaultPriority: "known" },
      ],
    },
    {
      title: "Message Selector",
      items: [
        { id: "cc-ms-up", label: "Move up", shortcut: { kind: "keys", keys: ["K"] }, defaultPriority: "learning" },
        { id: "cc-ms-down", label: "Move down", shortcut: { kind: "keys", keys: ["J"] }, defaultPriority: "learning" },
        { id: "cc-ms-top", label: "Jump to top", shortcut: { kind: "keys", keys: ["Shift", "K"] }, defaultPriority: "advanced" },
        { id: "cc-ms-bottom", label: "Jump to bottom", shortcut: { kind: "keys", keys: ["Shift", "J"] }, defaultPriority: "advanced" },
        { id: "cc-ms-select", label: "Select message", shortcut: { kind: "keys", keys: ["Enter"] }, defaultPriority: "learning" },
      ],
    },
    {
      title: "Diff Dialog",
      items: [
        { id: "cc-diff-dismiss", label: "Dismiss diff", shortcut: { kind: "keys", keys: ["Esc"] }, defaultPriority: "known" },
        { id: "cc-diff-prev-src", label: "Previous source", shortcut: { kind: "keys", keys: ["\u2190"] }, defaultPriority: "learning" },
        { id: "cc-diff-next-src", label: "Next source", shortcut: { kind: "keys", keys: ["\u2192"] }, defaultPriority: "learning" },
        { id: "cc-diff-prev-file", label: "Previous file", shortcut: { kind: "keys", keys: ["\u2191"] }, defaultPriority: "learning" },
        { id: "cc-diff-next-file", label: "Next file", shortcut: { kind: "keys", keys: ["\u2193"] }, defaultPriority: "learning" },
        { id: "cc-diff-details", label: "View details", shortcut: { kind: "keys", keys: ["Enter"] }, defaultPriority: "learning" },
      ],
    },
    {
      title: "Model Picker",
      items: [
        { id: "cc-effort-down", label: "Decrease effort", shortcut: { kind: "keys", keys: ["\u2190"] }, defaultPriority: "learning" },
        { id: "cc-effort-up", label: "Increase effort", shortcut: { kind: "keys", keys: ["\u2192"] }, defaultPriority: "learning" },
      ],
    },
    {
      title: "Plugin Menu",
      items: [
        { id: "cc-plugin-toggle", label: "Toggle plugin", shortcut: { kind: "keys", keys: ["Space"] }, defaultPriority: "learning" },
        { id: "cc-plugin-install", label: "Install plugin", shortcut: { kind: "keys", keys: ["I"] }, defaultPriority: "learning" },
      ],
    },
    {
      title: "Attachments",
      items: [
        { id: "cc-att-next", label: "Next attachment", shortcut: { kind: "keys", keys: ["\u2192"] }, defaultPriority: "learning" },
        { id: "cc-att-prev", label: "Previous attachment", shortcut: { kind: "keys", keys: ["\u2190"] }, defaultPriority: "learning" },
        { id: "cc-att-remove", label: "Remove attachment", shortcut: { kind: "keys", keys: ["Backspace"] }, defaultPriority: "learning" },
      ],
    },
    {
      title: "Slash Commands",
      items: [
        { id: "cc-cmd-fix", label: "Scan for bugs", shortcut: { kind: "command", text: "/code-fix" }, description: "4 parallel scouts, confidence >= 80", defaultPriority: "known" },
        { id: "cc-cmd-simplify", label: "Clarity improvements", shortcut: { kind: "command", text: "/code-simplify" }, description: "3 parallel scouts, confidence >= 75", defaultPriority: "known" },
        { id: "cc-cmd-refactor", label: "Structural assessment", shortcut: { kind: "command", text: "/code-refactor" }, description: "5 parallel scouts, waits for approval", defaultPriority: "known" },
        { id: "cc-cmd-docs", label: "Update documentation", shortcut: { kind: "command", text: "/update-docs" }, description: "Triggers doc-keeper agent", defaultPriority: "known" },
        { id: "cc-cmd-sync", label: "Sync repos between machines", shortcut: { kind: "command", text: "/sync" }, description: "Push or pull all repos + dotfiles", defaultPriority: "known" },
        { id: "cc-cmd-commit", label: "Create git commit", shortcut: { kind: "command", text: "/commit" }, description: "Built-in skill", defaultPriority: "known" },
        { id: "cc-cmd-help", label: "Show help", shortcut: { kind: "command", text: "/help" }, defaultPriority: "known" },
        { id: "cc-cmd-clear", label: "Clear conversation", shortcut: { kind: "command", text: "/clear" }, defaultPriority: "known" },
        { id: "cc-cmd-compact", label: "Compact context", shortcut: { kind: "command", text: "/compact" }, defaultPriority: "learning" },
        { id: "cc-cmd-fast", label: "Toggle fast mode", shortcut: { kind: "command", text: "/fast" }, defaultPriority: "known" },
      ],
    },
    {
      title: "Agents",
      items: [
        { id: "cc-agent-fix-scout", label: "code-fix-scout", shortcut: { kind: "text", text: "Read-only bug finder" }, description: "Opus, project memory, max 15 turns", defaultPriority: "known" },
        { id: "cc-agent-simplify-scout", label: "code-simplify-scout", shortcut: { kind: "text", text: "Clarity/consistency analyzer" }, description: "Opus, project memory, max 15 turns", defaultPriority: "known" },
        { id: "cc-agent-refactor-scout", label: "code-refactor-scout", shortcut: { kind: "text", text: "Structural assessor" }, description: "Opus, project memory, max 20 turns", defaultPriority: "known" },
        { id: "cc-agent-fixer", label: "code-fixer-agent", shortcut: { kind: "text", text: "Executes code changes" }, description: "Opus, max 10 turns, minimum change", defaultPriority: "known" },
        { id: "cc-agent-legacy", label: "legacy-researcher", shortcut: { kind: "text", text: "Investigates old Cognito codebase" }, description: "Opus, user memory (persistent), max 25 turns", defaultPriority: "advanced" },
        { id: "cc-agent-docs", label: "doc-keeper", shortcut: { kind: "text", text: "Updates all documentation" }, description: "Opus, max 20 turns", defaultPriority: "known" },
      ],
    },
    {
      title: "Plugins",
      items: [
        { id: "cc-plug-vercel", label: "vercel", shortcut: { kind: "text", text: "Deploy commands/skills" }, defaultPriority: "known" },
        { id: "cc-plug-ts-lsp", label: "typescript-lsp", shortcut: { kind: "text", text: "Type info, go-to-def, find-refs" }, defaultPriority: "known" },
        { id: "cc-plug-github", label: "github", shortcut: { kind: "text", text: "PR/issue workflows via MCP" }, defaultPriority: "known" },
        { id: "cc-plug-context7", label: "context7", shortcut: { kind: "text", text: "Version-specific library docs" }, defaultPriority: "known" },
        { id: "cc-plug-feature-dev", label: "feature-dev", shortcut: { kind: "text", text: "Feature development workflow" }, defaultPriority: "known" },
      ],
    },
    {
      title: "MCP Servers",
      items: [
        { id: "cc-mcp-lighthouse", label: "lighthouse", shortcut: { kind: "text", text: "Web audits (perf, a11y, SEO)" }, defaultPriority: "known" },
        { id: "cc-mcp-knip", label: "knip", shortcut: { kind: "text", text: "Dead code detection" }, defaultPriority: "known" },
        { id: "cc-mcp-semgrep", label: "semgrep", shortcut: { kind: "text", text: "Security vulnerability scanning" }, defaultPriority: "known" },
        { id: "cc-mcp-a11y", label: "a11y", shortcut: { kind: "text", text: "WCAG accessibility auditing" }, defaultPriority: "known" },
        { id: "cc-mcp-devtools", label: "chrome-devtools", shortcut: { kind: "text", text: "DevTools (perf traces, network)" }, defaultPriority: "known" },
        { id: "cc-mcp-security", label: "security-audit", shortcut: { kind: "text", text: "npm vulnerability scanning" }, defaultPriority: "known" },
        { id: "cc-mcp-codeindex", label: "code-index", shortcut: { kind: "text", text: "AST indexing, complexity metrics" }, defaultPriority: "advanced" },
        { id: "cc-mcp-playwright", label: "playwright", shortcut: { kind: "text", text: "Browser automation" }, defaultPriority: "known" },
        { id: "cc-mcp-figma", label: "Figma", shortcut: { kind: "text", text: "Design data, screenshots, variables" }, defaultPriority: "known" },
        { id: "cc-mcp-slack", label: "Slack", shortcut: { kind: "text", text: "Read/send messages, search channels" }, defaultPriority: "known" },
      ],
    },
    {
      title: "Hooks",
      items: [
        { id: "cc-hook-stop", label: "Stop sound", shortcut: { kind: "text", text: "Plays Glass.aiff on finish" }, context: "global", defaultPriority: "known" },
        { id: "cc-hook-permission", label: "Permission voice", shortcut: { kind: "text", text: "Says 'Hey! I need your permission'" }, context: "global", defaultPriority: "known" },
        { id: "cc-hook-biome", label: "Auto-format", shortcut: { kind: "text", text: "Biome format on Edit/Write" }, context: "cognito-rebuild", defaultPriority: "advanced" },
        { id: "cc-hook-session", label: "Session start", shortcut: { kind: "text", text: "Show branch + last 5 commits" }, context: "cognito-rebuild", defaultPriority: "advanced" },
        { id: "cc-hook-tsc", label: "Type check on stop", shortcut: { kind: "text", text: "npx tsc --noEmit (first 30 lines)" }, context: "cognito-rebuild", defaultPriority: "advanced" },
      ],
    },
  ],
}
