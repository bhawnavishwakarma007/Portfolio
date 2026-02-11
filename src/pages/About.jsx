import SectionTitle from '../components/SectionTitle/SectionTitle'
import { GraduationCap, MapPin, Calendar } from '../components/Icons/Icons'
import profile from '../data/profile'
import styles from './About.module.css'

function About() {
  const edu = profile.education && profile.education[0]

  return (
    <section id="about" className={styles.section}>
      <div className={styles.aboutInner}>
        <SectionTitle number="01" title="About Me" showLine />

        <div className={styles.grid}>
          <div className={styles.bio}>
            {(profile.bioParagraphs || [profile.bio]).map((para, i) => (
              <p key={i} className={styles.paragraph}>
                {para}
              </p>
            ))}
          </div>

          <div className={styles.quickFactsWrap}>
            <div className={styles.quickFacts}>
              <h3 className={styles.quickFactsTitle}>Quick Facts</h3>
              <ul className={styles.factsList}>
                {edu && (
                  <li className={styles.factItem}>
                    <span className={styles.factIcon} aria-hidden>
                      <GraduationCap className={styles.icon} />
                    </span>
                    <div>
                      <p className={styles.factLabel}>{edu.degree}</p>
                      <p className={styles.factMuted}>{edu.institution} | {edu.details}</p>
                    </div>
                  </li>
                )}
                {profile.location && (
                  <li className={styles.factItem}>
                    <span className={styles.factIcon} aria-hidden>
                      <MapPin className={styles.icon} />
                    </span>
                    <div>
                      <p className={styles.factLabel}>{profile.location}</p>
                      <p className={styles.factMuted}>India</p>
                    </div>
                  </li>
                )}
                {edu && (
                  <li className={styles.factItem}>
                    <span className={styles.factIcon} aria-hidden>
                      <Calendar className={styles.icon} />
                    </span>
                    <div>
                      <p className={styles.factLabel}>{edu.period}</p>
                      <p className={styles.factMuted}>Expected Graduation</p>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
