import { motion } from 'framer-motion'

const steamPaths = [
  'M 58 44 C 54 36, 62 32, 58 24',
  'M 70 44 C 66 34, 74 28, 70 18',
  'M 82 44 C 78 36, 86 32, 82 24',
]

function ComingSoonIcon() {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-[clamp(6rem,28vw,9rem)]"
    >
      {steamPaths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: [0, 0.85, 0], y: [6, -6, -16] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}

      <motion.g
        style={{ transformOrigin: '70px 70px' }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ellipse cx="70" cy="70" rx="46" ry="46" stroke="var(--color-primary)" strokeWidth="3" />
        <path
          d="M 32 76 C 32 96, 108 96, 108 76"
          stroke="var(--color-primary)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M 46 62 L 58 74 L 82 50" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>

      <motion.circle
        cx="70"
        cy="70"
        r="56"
        stroke="var(--color-accent)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeDasharray="4 8"
        style={{ transformOrigin: '70px 70px' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  )
}

export default ComingSoonIcon
