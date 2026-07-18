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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-(--color-primary) via-[color-mix(in_srgb,var(--color-primary)_55%,var(--color-secondary))] to-(--color-secondary) px-4 sm:gap-6"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
        >
          <ChefLoaderIcon progress={progress} />

          <div className="flex flex-col items-center gap-2">
            <span className="text-(length:--font-size-xs) uppercase tracking-[0.3em] sm:text-(length:--font-size-sm) sm:tracking-[0.35em] text-(--color-accent)">
              Welcome to
            </span>
            <span className="text-(length:--font-size-2xl) font-(--font-weight-semibold) font-(family-name:--font-family-heading) tracking-wide text-(--color-text-on-primary) sm:text-(length:--font-size-3xl)">
              Happy Meal
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DoorLoader
