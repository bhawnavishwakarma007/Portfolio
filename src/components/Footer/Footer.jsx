import { Github, Linkedin, Mail } from '../Icons/Icons'
import profile from '../../data/profile'
import socials from '../../data/socials'
import styles from './Footer.module.css'

function Footer() {
  const github = socials.find((s) => s.name === 'GitHub')
  const linkedin = socials.find((s) => s.name === 'LinkedIn')

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.links}>
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="GitHub profile"
            >
              <Github className={styles.icon} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="LinkedIn profile"
            >
              <Linkedin className={styles.icon} />
            </a>
          )}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className={styles.link}
              aria-label="Send email"
            >
              <Mail className={styles.icon} />
            </a>
          )}
        </div>
        <p className={styles.credit}>
          Designed & Built by {profile.name}
        </p>
      </div>
    </footer>
  )
}

export default Footer
