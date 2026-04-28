import styles from './SectionTitle.module.css'

function SectionTitle({ number, title, subtitle, showLine, center }) {
  const withNumber = Boolean(number)
  const withLine = Boolean(showLine)
  const isCentered = Boolean(center)

  return (
    <header
      className={[
        styles.sectionTitle,
        withNumber && styles.withNumber,
        withLine && styles.withLine,
        isCentered && styles.centered,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {number && <span className={styles.number}>{number}{withLine ? '.' : ''}</span>}
      <div className={styles.titleBlock}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {withLine && !isCentered && <div className={styles.line} aria-hidden />}
    </header>
  )
}

export default SectionTitle
