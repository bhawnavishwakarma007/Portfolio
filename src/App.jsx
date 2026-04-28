import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import SinglePage from './pages/SinglePage'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<SinglePage />} />
          <Route path="/about" element={<SinglePage initialSection="about" />} />
          <Route path="/skills" element={<SinglePage initialSection="skills" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
