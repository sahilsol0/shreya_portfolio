import { useContext, useRef } from "react"
import { useScroll } from "motion/react"
import { ScrollContext } from "../components/ScrollContext.js"

export function useElementScroll({ offset }) {
  const scrollContainer = useContext(ScrollContext)
  const elementRef = useRef(null)

  const { scrollYProgress } = useScroll({
    container: scrollContainer,
    target: elementRef,
    offset
  })

  return { elementRef, scrollYProgress }
}