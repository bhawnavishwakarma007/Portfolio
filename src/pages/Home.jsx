import { Link } from 'react-router-dom'
import Container from '../components/Container/Container'
import { Github, Linkedin, Mail, ChevronDown } from '../components/Icons/Icons'
import profile from '../data/profile'
import socials from '../data/socials'
import styles from './Home.module.css'

function Home() {
  const github = socials.find((s) => s.name === 'GitHub')
  const linkedin = socials.find((s) => s.name === 'LinkedIn')

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Hello, I am</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.tagline}>{profile.tagline}</p>
        <p className={styles.desc}>
          I design and automate cloud infrastructure using Terraform, OpenTofu, and AWS.
          Focused on CI/CD pipelines, infrastructure as code, and high-availability architectures.
        </p>

        <ul className={styles.socials}>
          {github && (
            <li>
              <a href={github.url} target="_blank" rel="noopener noreferrer"
                className={styles.socialLink} aria-label="GitHub">
                <Github />
              </a>
            </li>
          )}
          {linkedin && (
            <li>
              <a href={linkedin.url} target="_blank" rel="noopener noreferrer"
                className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin />
              </a>
            </li>
          )}
          {profile.email && (
            <li>
              <a href={`mailto:${profile.email}`} className={styles.socialLink} aria-label="Email">
                <Mail />
              </a>
            </li>
          )}
        </ul>

        <div className={styles.ctas}>
          <Link to="/projects" className={styles.btnPrimary}>View My Work</Link>
          <Link to="/contact" className={styles.btnOutline}>Get In Touch</Link>
        </div>
      </div>

      <Link to="/about" className={styles.scrollIndicator} aria-label="Scroll down">
        <ChevronDown w={24} h={24} />
      </Link>
    </section>
  )
}

export default Home
