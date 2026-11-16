'use client'

import { useEffect, useState } from 'react'
import { loadProtectedContent } from '@/lib/access'

/** True once this browser has a valid, unexpired portfolio password. */
export function useUnlocked() {
  const [unlocked, setUnlocked] = useState(false)
  useEffect(() => {
    let active = true
    loadProtectedContent().then((content) => {
      if (active) setUnlocked(content !== null)
    })
    return () => {
      active = false
    }
  }, [])
  return unlocked
}
