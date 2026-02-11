import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Container from '../Container/Container'
import { Menu, X } from '../Icons/Icons'
import styles from './Navbar.module.css'

const navItems = [
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.navbar}>
      <Container>
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo} aria-label="Home" onClick={closeMenu}>
            <span className={styles.logoMuted}>{'<'}</span>
            <span className={styles.logoAccent}>BV</span>
            <span className={styles.logoMuted}>{' />'}</span>
          </Link>

          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X w={24} h={24} /> : <Menu w={24} h={24} />}
          </button>

          <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
