import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import HeroCarousel from '../components/common/HeroCarousel'
import missionImg from '../assets/images/pic-4.jpg'
import visionImg from '../assets/images/pic-3.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -64 },
  visible: { opacity: 1, x: 0 },
}

const fadeRight = {
  hidden: { opacity: 0, x: 64 },
  visible: { opacity: 1, x: 0 },
}

function TiffinIcon() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M7 3.5h10M9 3.5V6M15 3.5V6" />
      <rect x="4.5" y="6" width="15" height="14.5" rx="2" />
      <path d="M4.5 11.5h15M4.5 16h15" />
      <path d="M10.5 3.5v-1a1.5 1.5 0 0 1 3 0v1" />
    </motion.svg>
  )
}

function ClocheIcon() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M3.5 16.5a8.5 6 0 0 1 17 0" />
      <path d="M12 10.5v-2M10 8.5h4" />
      <path d="M2.5 16.5h19M4.5 19.5h15" />
    </motion.svg>
  )
}

function CutleryTrayIcon() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="M8 8v6M6.5 8v3a1.5 1.5 0 0 0 3 0V8" />
      <path d="M16 8v9M14.5 11c0-1.7 1-3 1.5-3s1.5 1.3 1.5 3-.7 1.5-1.5 1.5-1.5 0-1.5-1.5Z" />
    </motion.svg>
  )
}

const clients = [
  { name: 'Nexora Technologies', initials: 'NT', color: '#0A400C' },
  { name: 'Bluepeak Corp', initials: 'BP', color: '#819067' },
  { name: 'Vantage Systems', initials: 'VS', color: '#B1AB86' },
  { name: 'Meridian Finance', initials: 'MF', color: '#0A400C' },
  { name: 'Solstice Labs', initials: 'SL', color: '#819067' },
  { name: 'Harbor & Co.', initials: 'HC', color: '#B1AB86' },
  { name: 'Crestwood Group', initials: 'CG', color: '#0A400C' },
  { name: 'Ironclad Ventures', initials: 'IV', color: '#819067' },
  { name: 'Silverline Media', initials: 'SM', color: '#B1AB86' },
  { name: 'Northgate Retail', initials: 'NR', color: '#0A400C' },
  { name: 'Everline Logistics', initials: 'EL', color: '#819067' },
  { name: 'Brightfield Energy', initials: 'BE', color: '#B1AB86' },
  { name: 'Kestrel Analytics', initials: 'KA', color: '#0A400C' },
  { name: 'Pinegrove Realty', initials: 'PR', color: '#819067' },
  { name: 'Oakmont Capital', initials: 'OC', color: '#B1AB86' },
  { name: 'Redwood Health', initials: 'RH', color: '#0A400C' },
  { name: 'Summit Consulting', initials: 'SC', color: '#819067' },
  { name: 'Lakeside Textiles', initials: 'LT', color: '#B1AB86' },
]

const services = [
  {
    icon: <TiffinIcon />,
    title: 'Corporate Catering',
    description:
      'Daily office meals and business luncheons, tailored to professional environments and delivered on time, every time.',
  },
  {
    icon: <ClocheIcon />,
    title: 'Event Catering',
    description:
      'Weddings, private parties, and milestone celebrations, catered with menus built around your occasion and guest count.',
  },
  {
    icon: <CutleryTrayIcon />,
    title: 'Cafeteria Management',
    description:
      'End-to-end management of in-house corporate cafeterias, with consistent quality, variety, and hygiene standards.',
  },
]

function Home() {
  return (
    <section id="home" className="bg-(--color-background) text-(--color-text-primary)">
      <HeroCarousel />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center gap-5 px-4 py-16 text-center sm:px-6 sm:py-20 md:py-28"
      >
        <h1 className="text-(length:--font-size-2xl) font-(--font-weight-bold) font-(family-name:--font-family-heading) sm:text-(length:--font-size-3xl)">
          Crafting Moments Beyond the Meal
        </h1>
        <div className="h-px w-12 bg-(--color-accent)" />
        <p className="text-(length:--font-size-md) font-(--font-weight-medium) italic text-(--color-secondary)">
          The story of a brand built on trust — one event at a time.
        </p>
        <p className="max-w-prose text-(length:--font-size-md) leading-relaxed text-(--color-text-secondary)">
          Happy Meal Pvt. Ltd. is Bengaluru's dedicated corporate and event catering partner,
          delivering exceptional culinary experiences for every occasion. Since our founding, we
          have rapidly grown into a trusted name in corporate and event catering — serving
          businesses, weddings, and celebrations with fresh, seasonal menus crafted to scale.
        </p>
      </motion.div>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeRight}
          transition={{ staggerChildren: 0.15, duration: 0.7, ease: 'easeOut' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.94 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.03, borderColor: 'var(--color-accent)', boxShadow: '0 16px 32px -12px rgba(0,0,0,0.18)' }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center gap-3 rounded-(--radius-lg) border border-(--color-border)/60 bg-(--color-surface) px-6 py-8 text-center shadow-sm"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-(--radius-full) bg-orange-500/15 text-orange-600">
                {service.icon}
              </span>
              <h3 className="text-(length:--font-size-lg) font-(--font-weight-semibold) font-(family-name:--font-family-heading) text-(--color-primary)">
                {service.title}
              </h3>
              <p className="text-(length:--font-size-sm) leading-relaxed text-(--color-text-secondary)">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
          <motion.img
            src={missionImg}
            alt="Happy Meal team committed to excellence"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="h-32 w-32 shrink-0 rounded-(--radius-full) object-cover shadow-md ring-4 ring-orange-500/70 sm:h-40 sm:w-40"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col items-center gap-3 sm:items-start"
          >
            <span className="rounded-full bg-orange-500/15 px-4 py-1 text-(length:--font-size-sm) font-(--font-weight-semibold) tracking-wide text-orange-600">
              Our Mission
            </span>
            <h2 className="text-(length:--font-size-xl) font-(--font-weight-bold) font-(family-name:--font-family-heading) text-(--color-text-primary) sm:text-(length:--font-size-2xl)">
              Beyond the Plate — The Happy Meal Standard
            </h2>
            <p className="text-(length:--font-size-md) leading-relaxed text-(--color-text-secondary)">
              Our mission is to build a scalable, value-driven enterprise that redefines the
              standards of catering in India. We take pride in creating meaningful value for every
              stakeholder — from customers and corporate partners to employees and shareholders.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row-reverse sm:items-center sm:gap-8 sm:text-left">
          <motion.img
            src={visionImg}
            alt="Happy Meal's vision for catering across India"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="h-32 w-32 shrink-0 rounded-(--radius-full) object-cover shadow-md ring-4 ring-orange-500/70 sm:h-40 sm:w-40"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col items-center gap-3 sm:items-start"
          >
            <span className="rounded-full bg-orange-500/15 px-4 py-1 text-(length:--font-size-sm) font-(--font-weight-semibold) tracking-wide text-orange-600">
              Our Vision
            </span>
            <h2 className="text-(length:--font-size-xl) font-(--font-weight-bold) font-(family-name:--font-family-heading) text-(--color-text-primary) sm:text-(length:--font-size-2xl)">
              To Be India's Most Trusted Catering Partner
            </h2>
            <p className="text-(length:--font-size-md) leading-relaxed text-(--color-text-secondary)">
              We envision a future where every corporate office, wedding, and celebration across India
              turns to Happy Meal as the benchmark for reliable, high-quality catering — known equally
              for culinary excellence, consistency at scale, and genuine care for every guest we serve.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16 text-center sm:px-6 sm:pb-20 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="rounded-full bg-orange-500/15 px-4 py-1 text-(length:--font-size-sm) font-(--font-weight-semibold) tracking-wide text-orange-600">
            Trusted By
          </span>
          <h2 className="text-(length:--font-size-lg) font-(--font-weight-semibold) font-(family-name:--font-family-heading) text-(--color-text-primary)">
            Businesses That Rely on Us Every Day
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex w-max items-center gap-6 sm:gap-8"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                title={client.name}
                className="group flex h-20 w-20 shrink-0 items-center justify-center rounded-(--radius-lg) border border-(--color-border)/60 bg-(--color-surface) shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:h-24 sm:w-24"
              >
                <span
                  style={{ backgroundColor: client.color }}
                  className="flex h-14 w-14 items-center justify-center rounded-(--radius-full) text-(length:--font-size-md) font-(--font-weight-bold) text-(--color-text-on-primary) sm:h-16 sm:w-16 sm:text-(length:--font-size-lg)"
                >
                  {client.initials}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-20 text-center sm:px-6 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-(--radius-xl) bg-(--color-primary) px-6 py-10 sm:px-10 sm:py-12"
        >
          <h2 className="text-(length:--font-size-xl) font-(--font-weight-semibold) font-(family-name:--font-family-heading) text-(--color-text-on-primary)">
            Planning an Event or Daily Office Meals?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-(length:--font-size-md) leading-relaxed text-(--color-text-on-primary)/80">
            Tell us about your occasion, headcount, and cuisine preferences, and we'll put together a
            catering proposal built around it.
          </p>
          <NavLink
            to="/contact"
            className="mt-6 inline-block rounded-(--radius-full) bg-(--color-accent) px-6 py-2.5 text-(length:--font-size-sm) font-(--font-weight-semibold) text-(--color-primary) no-underline transition-colors hover:bg-(--color-text-on-primary)"
          >
            Get a Quote
          </NavLink>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
