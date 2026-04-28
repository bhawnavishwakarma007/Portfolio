import SectionTitle from '../components/SectionTitle/SectionTitle'
import skills from '../data/skills'
import styles from './Skills.module.css'

const categoryIcons = {
  'Cloud & DevOps': '☁',
  'Containerization & Orchestration': '⬡',
  'CI/CD & Automation': '⚙',
  'Monitoring & Observability': '◎',
  'Programming Languages': '{ }',
  'Database Management': '◫',
  'Tools & Platforms': '⬒',
}

function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle number="02" title="Skills" showLine />

        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardIcon} aria-hidden>
                  {categoryIcons[group.category] || '▸'}
                </span>
                <h3 className={styles.cardTitle}>{group.category}</h3>
              </div>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
