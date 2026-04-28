import { useState } from 'react'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import projects from '../data/projects'
import styles from './Projects.module.css'

function TagList({ tags }) {
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  )
}

function ArchModal({ src, title, onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={`${title} architecture diagram`}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <p className={styles.modalTitle}>{title}</p>
          <button className={styles.modalClose} onClick={onClose} aria-label="Close diagram">
            ✕
          </button>
        </div>
        <div className={styles.modalImgWrap}>
          <img src={src} alt={`Architecture diagram for ${title}`} className={styles.modalImg} />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, onViewDiagram }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardNumber}>{project.id.padStart(2, '0')}</span>
        <h3 className={styles.cardTitle}>{project.title}</h3>
      </div>

      <p className={styles.cardDesc}>{project.description}</p>

      <ul className={styles.highlights}>
        {project.highlights.map((h, i) => (
          <li key={i} className={styles.highlight}>
            <span className={styles.bullet} aria-hidden>▸</span>
            {h}
          </li>
        ))}
      </ul>

      <div className={styles.cardFooter}>
        <TagList tags={project.tags} />
        {project.architectureDiagram && (
          <button
            className={styles.diagramBtn}
            onClick={() => onViewDiagram(project)}
          >
            <span className={styles.diagramIcon} aria-hidden>⬡</span>
            View Architecture
          </button>
        )}
      </div>
    </article>
  )
}

function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <section id="projects" className={styles.section}>
        <div className={styles.inner}>
          <SectionTitle number="03" title="Projects" showLine />

          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDiagram={setActiveProject}
              />
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <ArchModal
          src={activeProject.architectureDiagram}
          title={activeProject.title}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  )
}

export default Projects
