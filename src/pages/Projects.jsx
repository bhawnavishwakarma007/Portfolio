import Container from '../components/Container/Container'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import projects from '../data/projects'
import styles from './Projects.module.css'

function LayersIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <Container>
        <SectionTitle number="03" title="Projects" showLine />
        <div className={styles.list}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.iconWrap} aria-hidden>
                  <LayersIcon className={styles.icon} />
                </span>
                <h3 className={styles.title}>{project.title}</h3>
              </div>
              <p className={styles.description}>{project.description}</p>
              {project.highlights && project.highlights.length > 0 && (
                <ul className={styles.highlights}>
                  {project.highlights.map((item, i) => (
                    <li key={i} className={styles.highlightItem}>
                      <span className={styles.bullet} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {project.tags && project.tags.length > 0 && (
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects
