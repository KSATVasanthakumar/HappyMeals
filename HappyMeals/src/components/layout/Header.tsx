import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import useScrolled from '../../hooks/useScrolled'
import logo from '../../assets/images/Logo.png'

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Contact us', to: '/contact' },
]

function Header() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -96, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        backgroundColor: scrolled
          ? 'color-mix(in srgb, var(--color-background) 70%, transparent)'
          : 'var(--color-background)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        boxShadow: scrolled
          ? '0 1px 12px rgba(0,0,0,0.08)'
          : '0 0 0 rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="sticky top-0 z-50 grid h-20 grid-cols-[auto_1fr_auto] items-center gap-4 px-4 text-(--color-text-primary) sm:px-6 md:h-24"
    >
      <NavLink to="/" className="flex items-center gap-2 no-underline">
        <img
          src={logo}
          alt="Happy Meals - Nutrition & Healthy"
          className="h-16 w-auto sm:h-20"
        />
      </NavLink>

      <nav className="hidden justify-self-center md:block">
        <ul className="m-0 flex list-none gap-8 p-0">
          {menuItems.map((item) => (
            <li key={item.label} className="relative py-1.5">
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative px-0.5 no-underline transition-colors hover:text-(--color-secondary) ${
                    isActive
                      ? 'text-(--color-primary) font-(--font-weight-semibold)'
                      : 'text-(--color-text-primary)'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute -bottom-1.5 left-0 h-[3px] w-full bg-orange-500"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="col-start-3 flex items-center gap-2 justify-self-end">
        <NavLink
          to="/contact"
          className="hidden rounded-(--radius-full) bg-(--color-primary) px-5 py-2 text-(length:--font-size-sm) font-(--font-weight-semibold) text-(--color-text-on-primary) no-underline transition-colors hover:bg-(--color-secondary) md:inline-block"
        >
          Request Quote
        </NavLink>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
            className="h-0.5 w-6 rounded-full bg-(--color-text-primary)"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="h-0.5 w-6 rounded-full bg-(--color-text-primary)"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
            className="h-0.5 w-6 rounded-full bg-(--color-text-primary)"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="absolute top-full left-0 col-span-3 w-full overflow-hidden bg-(--color-background) shadow-md md:hidden"
          >
            <ul className="m-0 flex list-none flex-col gap-1 p-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-3 no-underline transition-colors ${
                        isActive
                          ? 'text-(--color-primary) font-(--font-weight-semibold)'
                          : 'text-(--color-text-primary)'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500 transition-opacity ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                        {item.label}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 block rounded-(--radius-full) bg-(--color-primary) px-3 py-3 text-center font-(--font-weight-semibold) text-(--color-text-on-primary) no-underline"
                >
                  Request Quote
                </NavLink>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
