import { useEffect, useRef, createContext, useContext, useState } from 'react'
import { ReactLenis } from 'lenis/react'
import { frame, cancelFrame, AnimatePresence } from 'motion/react'
import { useLocation } from "react-router"
import Header from "./components/Header.jsx"
import Nav from "./components/Nav.jsx"
import AnimatedRoute from "./components/AnimatedRoute.jsx"
import { ThemeProvider } from './contexts/ThemeContext.jsx'

function App() {
  const location = useLocation()
  const lenisRef = useRef(null)

  useEffect(() => {
    function update({ timestamp }) {
      const time = timestamp
      lenisRef.current?.lenis?.raf(time)
    }
    frame.update(update, true)
    return () => cancelFrame(update)
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false , lerp: 0.1, duration: 1.5, smoothTouch: true}} ref={lenisRef}>
      <ThemeProvider>
        {location.pathname === '/summary' ? null : <Header/>}
        {location.pathname === '/summary' ? null : <Nav />}
        <div className="relative font-sans bg-background">
          <AnimatedRoute />
        </div>
      </ThemeProvider>
    </ReactLenis>
  )
}

export default App