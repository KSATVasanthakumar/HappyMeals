import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ChefLoaderIcon from './ChefLoaderIcon'
import logo from '../../assets/images/Logo.png'
import { TAGLINE } from '../../constants/tagline'

interface DoorLoaderProps {
  onComplete: () => void
}

const tagline = TAGLINE

const taglineContainer = {
  hidden: {},
  visible: { transition: { delayChildren: 0.4, staggerChildren: 0.09 } },
}

const taglineWord = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
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

          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <span className="text-[clamp(0.65rem,2.5vw,0.875rem)] uppercase tracking-[0.25em] text-(--color-accent) sm:tracking-[0.35em]">
              Welcome to
            </span>
            <img
              src={logo}
              alt="Happy Meals - Nutrition & Healthy"
              className="h-12 w-auto rounded-(--radius-lg) bg-(--color-text-on-primary) p-1.5 sm:h-16"
            />
          </div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={taglineContainer}
            className="mt-1 flex flex-wrap items-center justify-center gap-x-[0.35em] text-center text-[clamp(0.95rem,3.5vw,1.5rem)] font-[family-name:'Akronim'] text-(--color-text-on-primary) sm:mt-2"
          >
            {tagline.split(' ').map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={taglineWord}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DoorLoader
