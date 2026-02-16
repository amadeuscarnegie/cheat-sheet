import type { CheatCategory } from "./types"

export const git: CheatCategory = {
  id: "git",
  name: "Git",
  icon: "GitMerge",
  accentColor: "var(--color-accent-git)",
  groups: [
    {
      title: "Daily Workflow",
      items: [
        { id: "git-status", label: "Show status", shortcut: { kind: "command", text: "git status" }, defaultPriority: "known" },
        { id: "git-add", label: "Stage files", shortcut: { kind: "command", text: "git add <file>" }, defaultPriority: "known" },
        { id: "git-commit", label: "Commit", shortcut: { kind: "command", text: "git commit -m \"msg\"" }, defaultPriority: "known" },
        { id: "git-push", label: "Push", shortcut: { kind: "command", text: "git push" }, defaultPriority: "known" },
        { id: "git-pull", label: "Pull", shortcut: { kind: "command", text: "git pull" }, defaultPriority: "known" },
        { id: "git-diff", label: "Show diff", shortcut: { kind: "command", text: "git diff" }, defaultPriority: "known" },
        { id: "git-log-oneline", label: "Compact log", shortcut: { kind: "command", text: "git log --oneline -10" }, defaultPriority: "known" },
      ],
    },
    {
      title: "Branching",
      items: [
        { id: "git-branch", label: "List branches", shortcut: { kind: "command", text: "git branch" }, defaultPriority: "known" },
        { id: "git-switch", label: "Switch branch", shortcut: { kind: "command", text: "git switch <branch>" }, defaultPriority: "known" },
        { id: "git-switch-create", label: "Create & switch", shortcut: { kind: "command", text: "git switch -c <branch>" }, defaultPriority: "known" },
        { id: "git-merge", label: "Merge branch", shortcut: { kind: "command", text: "git merge <branch>" }, defaultPriority: "known" },
        { id: "git-rebase", label: "Rebase onto", shortcut: { kind: "command", text: "git rebase <branch>" }, defaultPriority: "learning" },
        { id: "git-delete-branch", label: "Delete branch", shortcut: { kind: "command", text: "git branch -d <branch>" }, defaultPriority: "known" },
      ],
    },
    {
      title: "GitHub CLI",
      items: [
        { id: "git-gh-co", label: "Checkout PR", shortcut: { kind: "command", text: "gh pr checkout <num>" }, defaultPriority: "learning" },
        { id: "git-gh-create", label: "Create PR", shortcut: { kind: "command", text: "gh pr create" }, defaultPriority: "known" },
        { id: "git-gh-view", label: "View PR", shortcut: { kind: "command", text: "gh pr view" }, defaultPriority: "known" },
        { id: "git-gh-repo", label: "Create repo", shortcut: { kind: "command", text: "gh repo create" }, defaultPriority: "known" },
      ],
    },
  ],
}
