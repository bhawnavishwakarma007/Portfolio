import skills from '../../data/skills'
import styles from './SkillsSection.module.css'

const categoryIcons = {
  'Cloud & DevOps': '☁️',
  'Containerization & Orchestration': '🐳',
  'CI/CD & Automation': '⚙️',
  'Monitoring & Observability': '📊',
  'Programming Languages': '💻',
  'Database Management': '🗄️',
  'Tools & Platforms': '🛠️',
}

const categoryColors = {
  'Cloud & DevOps': 'teal',
  'Containerization & Orchestration': 'sky',
  'CI/CD & Automation': 'amber',
  'Monitoring & Observability': 'violet',
  'Programming Languages': 'rose',
  'Database Management': 'sky',
  'Tools & Platforms': 'teal',
}

function SkillsSection() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.labelNum}>02.</span>
          <span>Skills & Stack</span>
        </div>

        <div className={styles.header}>
          <h2 className={styles.heading}>Technologies I work with</h2>
          <p className={styles.sub}>
            My toolkit spans the full DevOps lifecycle — from infrastructure provisioning to containerization, CI/CD, and observability.
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map(({ category, items }) => (
            <div key={category} className={`${styles.card} ${styles[`color-${categoryColors[category]}`]}`}>
              <div className={styles.cardTop}>
                <span className={styles.icon}>{categoryIcons[category] || '🔧'}</span>
                <h3 className={styles.catName}>{category}</h3>
                <span className={styles.count}>{items.length}</span>
              </div>
              <ul className={styles.items}>
                {items.map(item => (
                  <li key={item} className={styles.item}>
                    <span className={styles.itemDot} />
                    <span>{item}</span>
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

export default SkillsSection
