import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import slideImg1 from '../../assets/images/pic-5.jpg'
import slideImg2 from '../../assets/images/pic-6.jpg'
import slideImg3 from '../../assets/images/pic-7.jpg'
import slideImg4 from '../../assets/images/pic-8.jpg'

const slides = [
  {
    image: slideImg1,
    quote: 'Where every plate tells a story of flavor and finesse.',
    author: 'Executive Chef, Happy Meal',
  },
  {
    image: slideImg2,
    quote: 'Hospitality is our recipe; freshness is our promise.',
    author: 'Head of Catering, Happy Meal',
  },
  {
    image: slideImg3,
    quote: 'From boardrooms to banquets, we serve every occasion with care.',
    author: 'Founder, Happy Meal',
  },
  {
    image: slideImg4,
    quote: 'Corporate lunches to grand celebrations, catered with the same care.',
    author: 'Head Chef, Happy Meal',
  },
]

function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 4000)

    return () => window.clearInterval(interval)
  }, [])

  const slide = slides[index]

  return (
    <div className="relative h-[360px] w-full overflow-hidden sm:h-[420px] md:h-[480px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
        >
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="relative z-10 max-w-2xl px-4 text-center text-(--color-text-on-primary) sm:px-6"
          >
            <p className="text-(length:--font-size-lg) font-[family-name:'Akronim'] sm:text-(length:--font-size-xl) md:text-(length:--font-size-2xl)">
              “{slide.quote}”
            </p>
            <cite className="mt-(--padding-md) block text-(length:--font-size-sm) not-italic font-(family-name:--font-family-base) text-(--color-accent)">
              — {slide.author}
            </cite>
          </motion.blockquote>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            aria-label={`Go to slide ${dotIndex + 1}`}
            onClick={() => setIndex(dotIndex)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              dotIndex === index
                ? 'w-6 bg-(--color-accent)'
                : 'bg-(--color-text-on-primary)/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel
