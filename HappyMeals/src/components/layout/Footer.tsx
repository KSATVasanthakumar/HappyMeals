import { NavLink } from 'react-router-dom'
import SocialIcons from '../common/SocialIcons'
import logo from '../../assets/images/Logo.png'
import { TAGLINE } from '../../constants/tagline'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Contact us', to: '/contact' },
]

function Footer() {
  return (
    <footer className="bg-(--color-primary) px-4 py-10 text-(--color-text-on-primary) sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-between">
          <NavLink to="/" className="rounded-(--radius-lg) bg-(--color-text-on-primary) p-2">
            <img
              src={logo}
              alt="Happy Meals - Nutrition & Healthy"
              className="h-14 w-auto sm:h-16"
            />
          </NavLink>
          <NavLink
            to="/contact"
            className="rounded-(--radius-full) bg-(--color-accent) px-5 py-2 text-(length:--font-size-sm) font-(--font-weight-semibold) text-(--color-primary) no-underline transition-colors hover:bg-(--color-text-on-primary)"
          >
            Request Quote
          </NavLink>
        </div>

        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:text-left">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <h3 className="text-(length:--font-size-md) font-(--font-weight-semibold) text-(--color-accent)">
              Menu
            </h3>
            <nav>
              <ul className="m-0 flex list-none flex-col items-center gap-2 p-0 sm:items-start">
                {links.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `flex items-center gap-2 text-(length:--font-size-sm) no-underline transition-colors hover:text-(--color-accent) ${
                          isActive
                            ? 'text-(--color-accent) font-(--font-weight-semibold)'
                            : 'text-(--color-text-on-primary)/80'
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
                          {link.label}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col items-center gap-3 sm:items-start">
            <h3 className="text-(length:--font-size-md) font-(--font-weight-semibold) text-(--color-accent)">
              Contact Us
            </h3>
            <div className="flex flex-col items-center gap-1 text-(length:--font-size-sm) text-(--color-text-on-primary)/80 sm:items-start">
              <p className="m-0">
                Phone -{' '}
                <a href="tel:+917259967777" className="text-(--color-text-on-primary)/80 no-underline hover:text-(--color-accent)">
                  +91 7259967777
                </a>
              </p>
              <p className="m-0">
                Email -{' '}
                <a href="mailto:contact@happymeals.co.in" className="text-(--color-text-on-primary)/80 no-underline hover:text-(--color-accent)">
                  contact@happymeals.co.in
                </a>
              </p>
              <p className="m-0 mt-2">Happy Meals</p>
              <p className="m-0">435, BOOHBCS 2nd Stage, 2nd Block,</p>
              <p className="m-0">Opp. Doddakallasandra Cricket Ground,</p>
              <p className="m-0">Narayana Nagar, Doddakallasandra,</p>
              <p className="m-0">Bangalore - 560062</p>
             
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:items-start">
            <h3 className="text-(length:--font-size-md) font-(--font-weight-semibold) text-(--color-accent)">
              Follow Us
            </h3>
            <SocialIcons />
          </div>
        </div>

        <div className="h-px w-full bg-(--color-text-on-primary)/15" />

        <p className="text-center text-(length:--font-size-xs) text-(--color-text-on-primary)/70">
          © {new Date().getFullYear()} Happy Meals — {TAGLINE} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
