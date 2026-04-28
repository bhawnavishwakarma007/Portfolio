import { useState } from 'react'
import projects from '../data/projects'
import styles from './Projects.module.css'

function Projects() {
  const [expanded, setExpanded] = useState(null)
  const [diagramOpen, setDiagramOpen] = useState(false)

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.labelNum}>03.</span>
          <span>Projects</span>
        </div>

        <div className={styles.pageHeader}>
          <h1 className={styles.heading}>Things I've Built</h1>
          <p className={styles.sub}>
            A collection of cloud infrastructure, DevOps pipelines, and automation projects.
          </p>
        </div>

        {/* Jenkins Architecture highlight */}
        <div className={styles.archBanner}>
          <div className={styles.archLeft}>
            <span className={styles.archBadge}>Featured Architecture</span>
            <h3>CI/CD & GitOps Pipeline — Jenkins + ArgoCD</h3>
            <p>Click to view the full pipeline diagram showing the complete flow from Git commit to Kubernetes deployment via ArgoCD GitOps.</p>
            <button className={styles.diagBtn} onClick={() => setDiagramOpen(true)}>
              <span>View Pipeline Diagram</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <div className={styles.archRight}>
            <img
              src="/Jenkins_project_drawio.png"
              alt="Jenkins CI/CD pipeline architecture"
              className={styles.archThumb}
              onClick={() => setDiagramOpen(true)}
            />
          </div>
        </div>

        <div className={styles.projectList}>
          {projects.map((p, i) => (
            <div key={p.id} className={`${styles.projectCard} ${expanded === p.id ? styles.expanded : ''}`}>
              <div className={styles.cardHeader} onClick={() => setExpanded(expanded === p.id ? null : p.id)}>
                <div className={styles.cardLeft}>
                  <span className={styles.projectNum}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h2 className={styles.projectTitle}>{p.title}</h2>
                    <div className={styles.tagRow}>
                      {p.tags.slice(0, 5).map(t => (
                        <span key={t} className={styles.tag}>{t}</span>
                      ))}
                      {p.tags.length > 5 && (
                        <span className={styles.tagMore}>+{p.tags.length - 5}</span>
                      )}
                    </div>
                  </div>
                </div>
                <button className={styles.toggleBtn} aria-label="Expand">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: expanded === p.id ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {expanded === p.id && (
                <div className={styles.cardBody}>
                  <p className={styles.desc}>{p.description}</p>
                  {p.highlights?.length > 0 && (
                    <div className={styles.highlights}>
                      <h4>Key Highlights</h4>
                      <ul>
                        {p.highlights.map((h, hi) => (
                          <li key={hi}>
                            <span className={styles.bullet} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className={styles.allTags}>
                    {p.tags.map(t => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                  {p.architectureDiagram && (
                    <div className={styles.archPreview}>
                      <img src={p.architectureDiagram} alt="Architecture diagram" />
                    </div>
                  )}
                  <div className={styles.cardLinks}>
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                        GitHub →
                      </a>
                    )}
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtnAlt}>
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Diagram Modal */}
      {diagramOpen && (
        <div className={styles.modal} onClick={() => setDiagramOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>CI/CD & GitOps Pipeline — Jenkins + ArgoCD</h3>
              <button onClick={() => setDiagramOpen(false)} className={styles.closeBtn}>✕</button>
            </div>
            <div className={styles.modalBody}>
              <img src="/Jenkins_project_drawio.png" alt="Jenkins pipeline architecture" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
