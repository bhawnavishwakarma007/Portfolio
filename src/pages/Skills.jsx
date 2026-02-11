import Container from '../components/Container/Container'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import { Cloud, GitBranch, Code, Database, Wrench } from '../components/Icons/Icons'
import skills from '../data/skills'
import styles from './Skills.module.css'

const categoryIcons = {
  'Cloud & DevOps': Cloud,
  'CI/CD & Automation': GitBranch,
  'Programming Languages': Code,
  'Database Management': Database,
  'Tools & Platforms': Wrench,
}

function Skills() {
  return (
    <Container>
      <SectionTitle number="02" title="Technical Skills" showLine />
      <div className={styles.grid}>
        {skills.map((group) => {
          const Icon = categoryIcons[group.category] || Code
          return (
            <section key={group.category} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.iconWrap} aria-hidden>
                  <Icon className={styles.icon} />
                </span>
                <h3 className={styles.categoryTitle}>{group.category}</h3>
              </div>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item} className={styles.tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </Container>
  )
}

export default Skills
