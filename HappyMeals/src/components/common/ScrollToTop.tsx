import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      let attempts = 0
      const interval = window.setInterval(() => {
        const target = document.getElementById(id)
        attempts += 1
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          window.clearInterval(interval)
        } else if (attempts >= 100) {
          window.clearInterval(interval)
        }
      }, 100)
      return () => window.clearInterval(interval)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
