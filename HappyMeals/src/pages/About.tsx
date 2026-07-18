import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import aboutHeroImg from '../assets/images/pic-1.jpg'
import storyImg from '../assets/images/pic-2.jpg'
import splitImg from '../assets/images/pic-5.jpg'
import galleryImg1 from '../assets/images/pic-6.jpg'
import galleryImg2 from '../assets/images/pic-7.jpg'
import galleryImg3 from '../assets/images/pic-8.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 },
}

const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
}

const tagline = 'Culinary artistry, cultural richness, seasonal freshness.'

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </svg>
  )
}

function UtensilsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M7 2.5v8a2.5 2.5 0 0 0 5 0v-8M9.5 2.5v19M16.5 2.5c-1.4 0-2.5 2-2.5 5s1.1 5 2.5 5v11" />
    </svg>
  )
}

function SmileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8" />
      <path d="M8.5 9.5h.01M15.5 9.5h.01" />
    </svg>
  )
}

const stats = [
  { target: 200, suffix: '+', label: 'Events Served', icon: <CalendarIcon /> },
  { target: 3000, suffix: '+', label: 'Dishes & Varieties', icon: <UtensilsIcon /> },
  { target: 200, suffix: '+', label: 'Happy Clients', icon: <SmileIcon /> },
]

const gallery = [
  { src: galleryImg1, alt: 'Happy Meal catering setup' },
  { src: galleryImg2, alt: 'Happy Meal plated dish' },
  { src: galleryImg3, alt: 'Happy Meal event service' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, target, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (value) => setCount(Math.round(value)),
    })

    return () => controls.stop()
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

function About() {
  return (
    <section id="about" className="bg-(--color-background)">
      <PageHero title="About Us" image={aboutHeroImg} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ staggerChildren: 0.04 }}
        className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-12 text-center sm:px-6 sm:py-16"
      >
        {tagline.split(' ').map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-(length:--font-size-lg) font-(--font-weight-semibold) font-(family-name:--font-family-heading) text-(--color-primary) sm:text-(length:--font-size-xl)"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-start gap-4 text-left sm:order-1"
          >
            <span className="rounded-full bg-orange-500/15 px-4 py-1 text-(length:--font-size-sm) font-(--font-weight-semibold) tracking-wide text-orange-600">
              Our Story
            </span>
            <h2 className="text-(length:--font-size-2xl) font-(--font-weight-bold) font-(family-name:--font-family-heading) text-(--color-text-primary) sm:text-(length:--font-size-3xl)">
              How Happy Meal Began
            </h2>
            <div className="h-px w-16 bg-(--color-accent)" />
            <p className="text-justify text-(length:--font-size-md) leading-relaxed text-(--color-text-secondary)">
              Happy Meal was founded in Bengaluru by a small team who believed corporate catering
              shouldn't feel like an afterthought. What began as a single kitchen serving nearby offices
              quickly grew into a name trusted for weddings, corporate luncheons, and milestone
              celebrations across the city. From day one, the promise was simple — fresh, seasonal
              ingredients, menus that could adapt to any occasion, and a level of consistency that
              scales from ten guests to a thousand. That founding promise still guides every dish we
              plate today.
            </p>
          </motion.div>

          <motion.img
            src={storyImg}
            alt="Happy Meal founding team preparing a catering spread"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="h-[320px] w-full rounded-(--radius-lg) object-cover shadow-lg sm:order-2 sm:h-[420px]"
          />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center gap-3 rounded-(--radius-lg) border border-(--color-border)/60 bg-(--color-surface) px-6 py-8 text-center shadow-sm"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-(--radius-full) bg-orange-500/15 text-orange-600">
                {stat.icon}
              </span>
              <span className="text-(length:--font-size-3xl) font-(--font-weight-bold) font-(family-name:--font-family-heading) text-(--color-primary)">
                <Counter target={stat.target} suffix={stat.suffix} />
              </span>
              <span className="text-(length:--font-size-sm) font-(--font-weight-medium) tracking-wide text-(--color-secondary)">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-10">
          <motion.img
            src={splitImg}
            alt="Happy Meal kitchen at work"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="h-[420px] w-full rounded-(--radius-lg) object-cover shadow-lg sm:h-[560px]"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col items-start gap-4 text-left"
          >
            <span className="rounded-full bg-orange-500/15 px-4 py-1 text-(length:--font-size-sm) font-(--font-weight-semibold) tracking-wide text-orange-600">
              In The Kitchen
            </span>
            <h2 className="text-(length:--font-size-2xl) font-(--font-weight-bold) font-(family-name:--font-family-heading) text-(--color-text-primary) sm:text-(length:--font-size-3xl)">
              Rooted in Craft, Built to Scale
            </h2>
            <div className="h-px w-16 bg-(--color-accent)" />
            <p className="text-justify text-(length:--font-size-md) leading-relaxed text-(--color-text-secondary)">
              As a dedicated corporate and event catering service, every Happy Meal kitchen treats a
              hundred-cover banquet with the same care as a single plate. Our chefs source seasonally,
              plate consistently, and train relentlessly, so the same dish that impresses at a
              ten-person breakfast meeting still lands perfectly at a five-hundred-guest wedding. It's
              this discipline, built into our catering operations from day one, that lets us grow
              without ever cutting corners on taste.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {gallery.map((image) => (
            <motion.img
              key={image.src}
              src={image.src}
              alt={image.alt}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="h-64 w-full rounded-(--radius-lg) object-cover shadow-md"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
