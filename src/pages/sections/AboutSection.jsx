import profile from '../../data/profile'
import styles from './AboutSection.module.css'

function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.labelNum}>01.</span>
          <span>About Me</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Turning infrastructure into
              <span className={styles.accent}> code & automation</span>
            </h2>
            {profile.bioParagraphs.map((p, i) => (
              <p key={i} className={styles.bio}>{p}</p>
            ))}

            <div className={styles.contact}>
              <a href={`mailto:${profile.email}`} className={styles.contactItem}>
                <EmailIcon />
                <span>{profile.email}</span>
              </a>
              <div className={styles.contactItem}>
                <PinIcon />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            {profile.education.map((edu, i) => (
              <div key={i} className={styles.eduCard}>
                <div className={styles.eduTop}>
                  <div className={styles.eduIcon}>🎓</div>
                  <div className={styles.eduMeta}>
                    <span className={styles.eduPeriod}>{edu.period}</span>
                    <span className={styles.eduInst}>{edu.institution}</span>
                  </div>
                </div>
                <h3 className={styles.eduDegree}>{edu.degree}</h3>
                <p className={styles.eduPlace}>{edu.place}</p>
                <div className={styles.eduGpa}>
                  <span className={styles.gpaLabel}>CGPA</span>
                  <span className={styles.gpaVal}>{edu.details.replace('CGPA – ', '')}</span>
                </div>
              </div>
            ))}

            <div className={styles.infoGrid}>
              {[
                { label: 'Focus', val: 'Cloud & DevOps' },
                { label: 'Status', val: 'Open to Work', ok: true },
                { label: 'Based In', val: 'Hyderabad, India' },
                { label: 'Currently', val: 'B.Tech CS, 2026' },
              ].map(({ label, val, ok }) => (
                <div key={label} className={styles.infoItem}>
                  <span className={styles.infoLabel}>{label}</span>
                  <span className={`${styles.infoVal} ${ok ? styles.ok : ''}`}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}
function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

export default AboutSection
