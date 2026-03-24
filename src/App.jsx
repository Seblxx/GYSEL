import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageReveal from './components/PageReveal'
import Home from './pages/Home'
import Services from './pages/Services'
import Neige from './pages/Neige'
import Contact from './pages/Contact'
import Stihl from './pages/Stihl'

function App() {
  const [revealed, setRevealed] = useState(false)

  return (
    <>
      <PageReveal onComplete={() => setRevealed(true)} />
      {revealed && <Navbar />}
      <div className={`app-content ${revealed ? 'revealed' : ''}`}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ineige" element={<Neige />} />
            <Route path="/stihl" element={<Stihl />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
