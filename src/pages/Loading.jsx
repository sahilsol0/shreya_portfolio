import { useEffect, useState } from "react"
import { motion, animate, useTransform, useMotionValue, AnimatePresence } from "motion/react"
import { useNavigate, Link } from "react-router"
import AnimatedPage from "../components/AnimatedPage.jsx"

function Counter({ className, duration }) {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    const controls = animate(count, 100, { duration })
    return () => controls.stop()
  }, [count, duration])

  return (
    <motion.pre className={className}>
      {rounded}
    </motion.pre>
  )
}

function Loading() {
  const navigate = useNavigate()
  const duration = 1
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    setPrefersReduced(mediaQuery.matches)

    const handler = (e) => setPrefersReduced(e.matches)
    mediaQuery.addEventListener("change", handler)

    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    const target = prefersReduced ? "/summary" : "/home"

    const timer = setTimeout(() => {
      navigate(target, { replace: true })
    }, prefersReduced ? 1000 : duration * 1000)

    return () => clearTimeout(timer)
  }, [navigate, prefersReduced])

  if (prefersReduced) {
    return (
      <div className="text-7xl font-serif h-[100svh] bg-background text-foreground flex flex-col items-center justify-center text-center">
        <h1>Portfolio of Shreya Solomon.</h1>
        <p className="text-base mt-4 opacity-60">(Reduced-motion mode enabled)</p>
      </div>
    )
  }
  return (
    <AnimatedPage>
      <motion.div animate={{opacity: 1}} className="text-7xl font-serif h-[100svh] flex flex-col items-center justify-center text-center bg-background text-foreground">
        <h1>Portfolio of Shreya Solomon.</h1>
        <Counter className="fixed bottom-0 font-serif" duration={duration} />
      </motion.div>
    </AnimatedPage>
  )
}

export default Loading
