import SectionTitle from '../components/SectionTitle/SectionTitle'
import { Mail, Phone, Linkedin, Github } from '../components/Icons/Icons'
import profile from '../data/profile'
import socials from '../data/socials'
import styles from './Contact.module.css'

function Contact() {
  const contactLinks = [
    profile.email && {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    profile.phone && {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    socials.find((s) => s.name === 'LinkedIn') && {
      icon: Linkedin,
      label: 'LinkedIn',
      value: profile.name,
      href: socials.find((s) => s.name === 'LinkedIn').url,
    },
    socials.find((s) => s.name === 'GitHub') && {
      icon: Github,
      label: 'GitHub',
      value: 'bhawnavishwakarma007',
      href: socials.find((s) => s.name === 'GitHub').url,
    },
  ].filter(Boolean)

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle number="04" title="Get In Touch" showLine center />

        <p className={styles.intro}>
          I am currently looking for new opportunities in Cloud & DevOps engineering.
          Whether you have a question, a project idea, or just want to say hi, feel free to reach out.
        </p>

        <div className={styles.grid}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={styles.card}
            >
              <span className={styles.cardIcon} aria-hidden>
                <link.icon className={styles.icon} />
              </span>
              <div className={styles.cardText}>
                <p className={styles.cardLabel}>{link.label}</p>
                <p className={styles.cardValue}>{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        <a href={`mailto:${profile.email}`} className={styles.cta}>
          Say Hello
        </a>
      </div>
    </section>
  )
}

export default Contact
