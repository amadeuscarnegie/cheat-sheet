import { useEffect } from "react"

export function useHotkey(
  key: string,
  callback: () => void,
  meta = true,
) {
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (meta && !e.metaKey && !e.ctrlKey) return
      if (e.key.toLowerCase() !== key.toLowerCase()) return
      e.preventDefault()
      callback()
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [key, callback, meta])
}
