import styles from './Footer.module.css'
import socials from '../../data/socials'
import profile from '../../data/profile'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>
          <span className={styles.mono}>©{year}</span> {profile.name} — built with React + Vite
        </span>
        <ul className={styles.socials}>
          {socials.map(s => (
            <li key={s.name}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
