import { useEffect } from 'react'
import HomeSection from './sections/HomeSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'

function SinglePage({ initialSection }) {
  useEffect(() => {
    if (initialSection) {
      const el = document.getElementById(initialSection)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      }
    }
  }, [initialSection])

  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
    </>
  )
}

export default SinglePage
