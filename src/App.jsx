import { ReactLenis } from 'lenis/react'
import { frame, cancelFrame, AnimatePresence} from 'motion/react'
import { useEffect, useRef } from 'react'
import Header from "./components/Header.jsx"
import AnimatedRoute from "./components/AnimatedRoute.jsx"

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    function update(frameData) {
      lenisRef.current?.lenis?.raf(frameData.timestamp)
    }
    const unsubscribe = frame.update(update, true)

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe()
      } else {
        cancelFrame(update)
      }
    }
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <Header />
      <div className="relative min-h-screen">
        <AnimatedRoute />
      </div>
    </ReactLenis>
  )
}

export default App