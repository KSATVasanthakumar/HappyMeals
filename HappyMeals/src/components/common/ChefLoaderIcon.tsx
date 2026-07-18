import { motion } from 'framer-motion'

interface ChefLoaderIconProps {
  progress: number
}

const steamPaths = [
  'M 38 40 C 34 32, 42 28, 38 20',
  'M 50 40 C 46 30, 54 24, 50 14',
  'M 62 40 C 58 32, 66 28, 62 20',
]

const RING_RADIUS = 26
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

function ChefLoaderIcon({ progress }: ChefLoaderIconProps) {
  return (
    <svg
      viewBox="0 0 140 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-[clamp(5rem,26vw,8rem)]"
    >
      <g transform="translate(20, 0)">
        {steamPaths.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: [0, 0.8, 0], y: [6, -6, -14] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}

        <ellipse
          cx="50"
          cy="66"
          rx="26"
          ry="8"
          stroke="var(--color-text-on-primary)"
          strokeWidth="2.5"
        />
        <path
          d="M 24 66 C 24 80, 76 80, 76 66"
          stroke="var(--color-text-on-primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 20 62 L 24 62"
          stroke="var(--color-text-on-primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 76 62 L 80 62"
          stroke="var(--color-text-on-primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <motion.g
          style={{ transformOrigin: '58px 50px' }}
          animate={{ rotate: [-18, 8, -18] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line
            x1="58"
            y1="50"
            x2="44"
            y2="72"
            stroke="var(--color-accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <ellipse
            cx="60"
            cy="46"
            rx="5"
            ry="3.5"
            fill="var(--color-accent)"
            transform="rotate(28 60 46)"
          />
        </motion.g>
      </g>

      <circle
        cx="70"
        cy="118"
        r={RING_RADIUS}
        stroke="var(--color-text-on-primary)"
        strokeOpacity="0.15"
        strokeWidth="4"
      />
      <motion.circle
        cx="70"
        cy="118"
        r={RING_RADIUS}
        stroke="var(--color-accent)"
        strokeWidth="4"
        strokeLinecap="round"
        transform="rotate(-90 70 118)"
        strokeDasharray={RING_CIRCUMFERENCE}
        animate={{
          strokeDashoffset: RING_CIRCUMFERENCE * (1 - progress / 100),
        }}
        transition={{ duration: 0.1, ease: 'linear' }}
      />
      <text
        x="70"
        y="123"
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fill="var(--color-text-on-primary)"
      >
        {progress}%
      </text>
    </svg>
  )
}

export default ChefLoaderIcon
