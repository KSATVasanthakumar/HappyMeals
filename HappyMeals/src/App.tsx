import { lazy, Suspense, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import DoorLoader from './components/common/DoorLoader'
import GoToTop from './components/common/GoToTop'
import ScrollToTop from './components/common/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Leadership = lazy(() => import('./pages/Leadership'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <DoorLoader onComplete={() => setLoading(false)} />}
      <ScrollToTop />
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
      <GoToTop />
    </>
  )
}

export default App
