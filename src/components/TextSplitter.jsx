import { motion, useTransform } from "motion/react"
import { useElementScroll } from "../hooks/useElementScroll.js"

export default function TextSplitter({text, className}) {
  const words= text.split(" ")
  const wordScroll = useElementScroll({
    offset: ["start 60%", "start 20%"]
  })
  
  return (
    <p ref={wordScroll.elementRef} className={`flex flex-wrap gap-x-2 leading-snug ${className}`}>
      {
        words.map((word, i)=>{
          const start = i / words.length
          const end = start + (1 / words.length)
         
          const wordAnimation= {
            opacity: useTransform(wordScroll.scrollYProgress, [start, end], [0, 1]),
            scale: useTransform(wordScroll.scrollYProgress, [start, end], [0.9, 1])
          }
          return ( <motion.span 
            key={i} 
            className="inline-block origin-top-left"
            style={wordAnimation}
            >
              {word}
            </motion.span>
          )
        })
      }
    </p>
  )
}