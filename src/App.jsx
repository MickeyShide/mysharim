import { useRef } from 'react'
import Cursor from './components/Cursor'
import StarCanvas from './components/StarCanvas'
import Scanline from './components/Scanline'
import Squirrel from './components/Squirrel'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import UTPStrip from './components/UTPStrip'
import Departments from './components/Departments'
import MarqueeSec from './components/MarqueeSec'
import Weapon from './components/Weapon'
import About from './components/About'
import TGSection from './components/TGSection'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useNavScroll } from './hooks/useNavScroll'
import { useGlitchInterval } from './hooks/useGlitchInterval'

export default function App() {
  const mouseRef = useRef({ x: 0, y: 0 })

  useScrollReveal()
  useNavScroll()
  useGlitchInterval()

  return (
    <>
      <div>
        <Scanline />
        <Cursor mouseRef={mouseRef} />
        <StarCanvas mouseRef={mouseRef} />
        <Nav />
        <Hero />
        {/* <Ticker /> */}
        {/* <UTPStrip /> */}
        <Departments />
        {/* <MarqueeSec /> */}
        <Weapon />
        <About />
        <TGSection />
        <CTA />
        <Footer />
        <Squirrel />
      </div>
    </>
  )
}
