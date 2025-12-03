import { motion, useTransform } from "motion/react"
import { useElementScroll } from "../hooks/useElementScroll.js"

export default function TextSplitter({text, className}) {
  const words= text.split(" ")
  const wordScroll = useElementScroll({
    offset: ["start 60%", "start 20vh"]
  })
  
  return (
    <p ref={wordScroll.elementRef} className={`flex flex-wrap gap-x-2 leading-tight ${className}`}>
      {
        words.map((word, i)=>{
          const start = i *0.9 / words.length
          const end = start + (5 / words.length)
         
          const wordAnimation= {
            opacity: useTransform(wordScroll.scrollYProgress, [start, end], [0, 1]),
            filter: useTransform(wordScroll.scrollYProgress, [start, end], ['blur(5px)', 'blur(0px)'])
          }
          return ( <motion.span 
            key={i} 
            className="inline-block"
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