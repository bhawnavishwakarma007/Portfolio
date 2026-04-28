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
    <>
      <section className={styles.hero}>
        <Container className={styles.heroInner}>
          <p className={styles.greeting}>Hello, I am</p>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.tagline}>{profile.tagline}</p>
          <p className={styles.desc}>
            I build and automate cloud infrastructure using Terraform, OpenTofu, and AWS.
            I focus on CI/CD, infrastructure as code, and serverless architectures.
          </p>
          <ul className={styles.socials}>
            {github && (
              <li>
                <a href={github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className={styles.socialIcon} />
                </a>
              </li>
            )}
            {linkedin && (
              <li>
                <a href={linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className={styles.socialIcon} />
                </a>
              </li>
            )}
            {profile.email && (
              <li>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <Mail className={styles.socialIcon} />
                </a>
              </li>
            )}
          </ul>
          <div className={styles.ctas}>
            <Link to="/projects" className={styles.btnPrimary}>
              View My Work
            </Link>
            <Link to="/contact" className={styles.btnOutline}>
              Get In Touch
            </Link>
          </div>
          <Link to="/about" className={styles.scrollIndicator} aria-label="Scroll to About">
            <ChevronDown w={28} h={28} />
          </Link>
        </Container>
      </section>
    </>
  )
}

export default Home
