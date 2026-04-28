import { useState } from 'react'
import profile from '../data/profile'
import socials from '../data/socials'
import styles from './Contact.module.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailto, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.labelNum}>04.</span>
          <span>Contact</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <h1 className={styles.heading}>Let's Work Together</h1>
            <p className={styles.sub}>
              Whether you have a cloud infrastructure challenge, want to collaborate on a DevOps project, or just want to say hello — my inbox is always open.
            </p>

            <div className={styles.contactCards}>
              <a href={`mailto:${profile.email}`} className={styles.contactCard}>
                <div className={styles.cardIcon}>
                  <EmailIcon />
                </div>
                <div>
                  <span className={styles.cardLabel}>Email</span>
                  <span className={styles.cardValue}>{profile.email}</span>
                </div>
              </a>

              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>
                  <PinIcon />
                </div>
                <div>
                  <span className={styles.cardLabel}>Location</span>
                  <span className={styles.cardValue}>{profile.location}</span>
                </div>
              </div>

              {socials.map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                  <div className={styles.cardIcon}>{s.name === 'GitHub' ? <GitHubIcon /> : <LinkedInIcon />}</div>
                  <div>
                    <span className={styles.cardLabel}>{s.name}</span>
                    <span className={styles.cardValue}>{s.name === 'GitHub' ? 'bhawnavishwakarma007' : 'Bhawna Vishwakarma'}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h2 className={styles.formTitle}>Send a Message</h2>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Name</label>
                  <input
                    type="text" name="name" required
                    placeholder="John Doe"
                    value={form.name} onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <label>Email</label>
                  <input
                    type="email" name="email" required
                    placeholder="john@example.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label>Subject</label>
                <input
                  type="text" name="subject"
                  placeholder="Cloud infrastructure project"
                  value={form.subject} onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label>Message</label>
                <textarea
                  name="message" required rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message} onChange={handleChange}
                />
              </div>
              <button type="submit" className={`${styles.submitBtn} ${sent ? styles.sent : ''}`}>
                {sent ? '✓ Opening email client...' : 'Send Message'}
                {!sent && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmailIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
}
function PinIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
}
function GitHubIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
}
function LinkedInIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
}

export default Contact
