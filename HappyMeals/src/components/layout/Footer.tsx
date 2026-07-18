import { NavLink } from 'react-router-dom'
import SocialIcons from '../common/SocialIcons'

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
          <span className="text-(length:--font-size-lg) font-(--font-weight-bold) font-(family-name:--font-family-heading) text-(--color-text-on-primary)">
            Happy Meal
          </span>
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
                      className="text-(length:--font-size-sm) text-(--color-text-on-primary)/80 no-underline transition-colors hover:text-(--color-accent)"
                    >
                      {link.label}
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
              <p className="m-0">Email - contact@happyplates.co.in</p>
              <p className="m-0 mt-2">Happy Meal Pvt. Ltd.</p>
              <p className="m-0">31st Main Road, 2nd North Street, Near Beach Parking,</p>
              <p className="m-0">Bangalore - 560037</p>
              <p className="m-0">CIN - U55209KAXXXXXXXXXXXX</p>
              <p className="m-0 mt-2">Contact Person - Mr. X</p>
              <p className="m-0">Email - MrX@happymeals.co.in</p>
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
          © {new Date().getFullYear()} Happy Meal. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
