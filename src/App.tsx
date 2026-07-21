import { useState } from 'react'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Brand from './components/Brand'
import Products from './components/Products'
import Process from './components/Process'
import Impact from './components/Impact'
import Structure from './components/Structure'
import VideoCTA from './components/VideoCTA'
import Quality from './components/Quality'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FilmLayer, Marquee, ScrollProgress } from './components/ScrollFX'
import Cursor from './components/Cursor'
import QuoteModal from './components/QuoteModal'
import SafraBadge from './components/SafraBadge'

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <>
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <Intro />
      <Cursor />
      <ScrollProgress />
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <main>
        <Hero />
        <About />
        <Brand />
        <Marquee
          className="marquee-dark"
          items={['Qualidade', 'Padronização', 'Confiança', 'Do campo à sua mesa']}
        />
        <Products />
        <Process />
        <Impact />
        <Structure />
        <VideoCTA />
        <Marquee
          className="marquee-light"
          reverse
          items={['Seleção rigorosa', 'Entrega nacional', 'Rastreabilidade', 'Frescor garantido']}
        />
        <Quality />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FilmLayer />
      <SafraBadge />
    </>
  )
}

export default App
