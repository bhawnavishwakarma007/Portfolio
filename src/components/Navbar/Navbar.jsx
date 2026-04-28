import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const navItems = [
  { path: '/', label: 'Home', exact: true },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.bracket}>[</span>
          <span className={styles.logoName}>BV</span>
          <span className={styles.bracket}>]</span>
        </Link>

        <nav className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navItems.map(({ path, label, exact }) => (
            <NavLink
              key={path}
              to={path}
              end={exact}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.linkNum}>{String(navItems.indexOf(navItems.find(n => n.path === path)) + 1).padStart(2,'0')}.</span>
              {label}
            </NavLink>
          ))}
        </nav>

        <a href="/Bhawna_Vishwakarma_Resume.pdf" className={styles.resumeBtn} download>
          <span>Resume</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v8M2 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.cross : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span/><span/><span/>
        </button>
      </div>
    </header>
  )
}

export default Navbar
