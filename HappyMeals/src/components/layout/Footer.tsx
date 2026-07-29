import { NavLink } from 'react-router-dom'
import SocialIcons from '../common/SocialIcons'
import logo from '../../assets/images/Logo.png'
import { TAGLINE } from '../../constants/tagline'

function Footer() {
  return (
    <footer className="bg-(--color-primary) px-4 py-4 text-(--color-text-on-primary) sm:px-6">
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <NavLink to="/" className="rounded-(--radius-lg) bg-(--color-text-on-primary) p-1">
            <img
              src={logo}
              alt="Happy Meals - Nutrition & Healthy"
              className="h-8 w-auto sm:h-9"
            />
          </NavLink>
          <NavLink
            to="/contact#contact-form"
            className="rounded-(--radius-full) bg-(--color-accent) px-5 py-1.5 text-(length:--font-size-sm) font-(--font-weight-semibold) text-(--color-primary) no-underline transition-colors hover:bg-(--color-text-on-primary)"
          >
            Request Quote
          </NavLink>
        </div>

        <div className="flex flex-col items-center gap-0.5 text-center text-(length:--font-size-xs) text-(--color-text-on-primary)/80">
          <p className="m-0">
            Phone -{' '}
            <a href="tel:+917259967777" className="text-(--color-text-on-primary)/80 no-underline hover:text-(--color-accent)">
              +91 7259967777
            </a>
            {'  |  '}Email -{' '}
            <a href="mailto:contact@happymeals.co.in" className="text-(--color-text-on-primary)/80 no-underline hover:text-(--color-accent)">
              contact@happymeals.co.in
            </a>
          </p>
          <p className="m-0">Happy Meals, 435, BOOHBCS 2nd Stage, 2nd Block,</p>
          <p className="m-0">Opp. Doddakallasandra Cricket Ground, Narayana Nagar,</p>
          <p className="m-0">Doddakallasandra, Bangalore - 560062</p>
        </div>

        <div className="flex justify-center sm:justify-end">
          <SocialIcons />
        </div>

        <div className="h-px w-full bg-(--color-text-on-primary)/15" />

        <p className="m-0 text-center text-(length:--font-size-xs) text-(--color-text-on-primary)/70">
          © {new Date().getFullYear()} Happy Meals — {TAGLINE} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
