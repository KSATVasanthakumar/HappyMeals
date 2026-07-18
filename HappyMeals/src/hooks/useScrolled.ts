import { useSyncExternalStore } from 'react'

function subscribe(callback: () => void) {
  window.addEventListener('scroll', callback)
  return () => window.removeEventListener('scroll', callback)
}

function useScrolled(threshold = 8) {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false,
  )
}

export default useScrolled
