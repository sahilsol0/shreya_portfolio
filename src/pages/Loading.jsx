import { useEffect, useState } from "react"
import { motion, animate, useTransform, useMotionValue, AnimatePresence } from "motion/react"
import { useNavigate, Link } from "react-router"

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
    <>
      <motion.div animate={{opacity: 1}} className="text-7xl h-svh font-serif flex flex-col items-center justify-between text-center bg-background text-foreground">
        <h1>Portfolio of Shreya Solomon.</h1>
      </motion.div>
    </>
  )
}

export default Loading
