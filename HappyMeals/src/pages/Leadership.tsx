import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import leadershipHeroImg from '../assets/images/pic-2.jpg'
import ceoImg from '../assets/images/pic-3.jpg'
import chefImg from '../assets/images/pic-4.jpg'
import { TAGLINE } from '../constants/tagline'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

function Leadership() {
  return (
    <section id="leadership" className="bg-(--color-background)">
      <PageHero title="Leadership" subtitle={TAGLINE} image={leadershipHeroImg} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24"
      >
        <span className="rounded-full bg-orange-500/15 px-4 py-1 text-(length:--font-size-sm) font-(--font-weight-semibold) tracking-wide text-orange-600">
          Our Story
        </span>
        <h2 className="text-(length:--font-size-2xl) font-(--font-weight-bold) font-(family-name:--font-family-heading) text-(--color-text-primary) sm:text-(length:--font-size-3xl)">
          How It Started
        </h2>
        <div className="h-px w-16 bg-(--color-accent)" />
        <p className="text-justify text-(length:--font-size-md) leading-relaxed text-(--color-text-secondary)">
          Happy Meals began with a simple observation, made the hard way. Our founder had spent so
          many years working in the food industry that food had become his whole life — yet his own
          health kept suffering, and nothing he tried seemed to fix it. It took time, and a lot of
          quiet reflection, to see that the problem was never how much he ate, but how little of it
          actually nourished him. That realisation changed everything. He rebuilt his own plate
          around fresh, seasonal, whole ingredients, felt the difference in his own body, and
          couldn't stop thinking about how many schoolchildren were growing up on meals that filled
          them up but never truly fed them. That's the idea Happy Meals was built on. What started as
          one person fixing his own health has grown into a dedicated kitchen team who share the same
          obsession with sourcing, balance, and detail. Today, Happy Meals serves schools and offices
          across the city, but the founding idea has never changed — food crafted with real
          nutrition, culinary care, and seasonal freshness, so every child and family we feed grows up
          a little healthier.
        </p>
      </motion.div>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center gap-5 text-left sm:items-start"
          >
            <img
              src={ceoImg}
              alt="Founder and CEO of Happy Meals"
              className="h-64 w-64 rounded-(--radius-lg) object-cover shadow-md"
            />
            <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
              <h3 className="text-(length:--font-size-lg) font-(--font-weight-semibold) font-(family-name:--font-family-heading) text-(--color-primary)">
                Mr. X
              </h3>
              <span className="text-(length:--font-size-sm) font-(--font-weight-medium) tracking-wide text-(--color-secondary)">
                Founder & CEO
              </span>
            </div>
            <p className="text-justify text-(length:--font-size-sm) leading-relaxed text-(--color-text-secondary)">
              Mr. X founded Happy Meals after years of working around food while his own health
              quietly declined — a struggle that took him a long time to trace back to what was
              actually on his plate. Once he turned that around for himself, he built Happy Meals
              around a simple belief: nutrition and warmth should never be casualties of scale. He
              has personally overseen the company's growth from a single-kitchen operation to a
              trusted partner for schools and offices across Bengaluru. Under his leadership, Happy
              Meals has invested heavily in sourcing, food safety, and training, ensuring every
              plate served reflects the same standard whether it's for ten children or a thousand.
              Mr. X remains closely involved in menu direction and client relationships, believing
              that a founder's attention to detail is what keeps a nutrition brand honest as it
              grows.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="flex flex-col items-center gap-5 text-left sm:items-start"
          >
            <img
              src={chefImg}
              alt="Head Chef of Happy Meals"
              className="h-64 w-64 rounded-(--radius-lg) object-cover shadow-md"
            />
            <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
              <h3 className="text-(length:--font-size-lg) font-(--font-weight-semibold) font-(family-name:--font-family-heading) text-(--color-primary)">
                Chef Y
              </h3>
              <span className="text-(length:--font-size-sm) font-(--font-weight-medium) tracking-wide text-(--color-secondary)">
                Head Chef
              </span>
            </div>
            <p className="text-justify text-(length:--font-size-sm) leading-relaxed text-(--color-text-secondary)">
              Chef Y leads the Happy Meals kitchen, shaping every menu with a blend of classic Indian
              technique and contemporary global influence. Trained in professional kitchens before
              moving into large-format catering, she brings a chef's precision to menus that must
              perform at scale without losing their soul. She works closely with the sourcing team to
              build seasonal menus around what's freshest, and personally trains the kitchen brigade on
              plating and consistency standards for every event. Known for tasting every new dish
              before it reaches a client's table, Chef Y treats a school's daily lunch with the same
              care as a single plate. Her philosophy is simple: food for a schoolchild or an office
              desk should feel just as thoughtful as a meal cooked at home, only healthier.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Leadership
