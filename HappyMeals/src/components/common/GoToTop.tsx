import { AnimatePresence, motion } from 'framer-motion'
import useScrolled from '../../hooks/useScrolled'

function GoToTop() {
  const scrolled = useScrolled(400)

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.button
          type="button"
          aria-label="Go to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-(--color-primary) text-(--color-text-on-primary) shadow-md transition-colors hover:bg-(--color-secondary)"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default GoToTop
