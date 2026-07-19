import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
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

function App() {
  return (
    <>
      <Intro />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
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
    </>
  )
}

export default App
