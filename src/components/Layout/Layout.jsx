import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--header-h, 5rem)', position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
