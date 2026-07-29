import { motion } from 'framer-motion'
import ComingSoonIcon from '../components/common/ComingSoonIcon'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

function AharaNyayalaya() {
  return (
    <section id="ahara-nyayalaya" className="bg-(--color-background)">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-20 text-center sm:px-6 sm:py-28"
      >
        <ComingSoonIcon />
        <span className="rounded-full bg-orange-500/15 px-4 py-1 text-(length:--font-size-sm) font-(--font-weight-semibold) tracking-wide text-orange-600">
          Coming Soon
        </span>
        <h2 className="text-(length:--font-size-2xl) font-(--font-weight-bold) font-(family-name:--font-family-heading) text-(--color-text-primary) sm:text-(length:--font-size-3xl)">
          We're Cooking Something Nutritious
        </h2>
        <div className="h-px w-16 bg-(--color-accent)" />
        <p className="text-(length:--font-size-md) leading-relaxed text-(--color-text-secondary)">
          Ahara Nyayalaya is on its way — a new Happy Meals initiative built around the same
          nutrition-first, healthy-eating promise. We're putting the finishing touches on it, so
          check back soon.
        </p>
      </motion.div>
    </section>
  )
}

export default AharaNyayalaya
