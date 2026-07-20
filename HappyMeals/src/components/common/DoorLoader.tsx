import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ChefLoaderIcon from './ChefLoaderIcon'

interface DoorLoaderProps {
  onComplete: () => void
}

function DoorLoader({ onComplete }: DoorLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [doorsOpen, setDoorsOpen] = useState(false)

  useEffect(() => {
    const start = Date.now()
    const duration = 2200

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - start
      const next = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(next)

      if (next >= 100) {
        window.clearInterval(interval)
        setDoorsOpen(true)
      }
    }, 30)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!doorsOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex h-[100dvh] w-screen flex-col items-center justify-center gap-3 overflow-y-auto bg-gradient-to-br from-(--color-primary) via-[color-mix(in_srgb,var(--color-primary)_55%,var(--color-secondary))] to-(--color-secondary) px-4 py-6 sm:gap-6"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
        >
          <ChefLoaderIcon progress={progress} />

          <div className="flex flex-col items-center gap-1.5 sm:gap-2">
            <span className="text-[clamp(0.65rem,2.5vw,0.875rem)] uppercase tracking-[0.25em] text-(--color-accent) sm:tracking-[0.35em]">
              Welcome to
            </span>
            <span className="text-[clamp(1.25rem,6vw,2.5rem)] font-(--font-weight-semibold) font-(family-name:--font-family-heading) tracking-wide text-(--color-text-on-primary)">
              Happy Meals
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DoorLoader
