import type { CheatCategory, CheatItem } from "@/data/types"

export interface SearchResult {
  item: CheatItem
  categoryId: string
  categoryName: string
  groupTitle: string
}

export function searchItems(
  categories: CheatCategory[],
  query: string,
): SearchResult[] {
  const q = query.toLowerCase().trim()
  if (!q) return []

  const results: SearchResult[] = []

  for (const cat of categories) {
    for (const group of cat.groups) {
      for (const item of group.items) {
        const searchable = [
          item.label,
          item.description ?? "",
          item.context ?? "",
          shortcutText(item.shortcut),
        ]
          .join(" ")
          .toLowerCase()

        if (searchable.includes(q)) {
          results.push({
            item,
            categoryId: cat.id,
            categoryName: cat.name,
            groupTitle: group.title,
          })
        }
      }
    }
  }

  return results
}

function shortcutText(
  s: CheatItem["shortcut"],
): string {
  switch (s.kind) {
    case "keys":
      return s.keys.join(" ")
    case "command":
      return s.text
    case "alias":
      return `${s.alias} ${s.expansion}`
    case "symbol":
      return `${s.symbol} ${s.meaning}`
    case "text":
      return s.text
  }
}
