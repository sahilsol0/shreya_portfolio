import { useRef, useState, useContext } from "react"
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useLocation } from 'react-router'
import { ScrollContext } from "../contexts/ScrollContext.js"
import Footer from "./Footer.jsx"

const slide = {
  initial: { left: '100vw', opacity: 0 },
  enter: { 
    left: '100vw',
    opacity: 1
  },
  exit: {
    left: 0,
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1] 
    } 
  }
};

const perspective = {
  initial: { 
    x: 0,
    y: 0,
    scale: 1, 
    filter: 'blur(0px)'
  },
  enter: { 
    x: 0,
    y: 0,
    scale: 1, 
    filter: 'blur(0px)',
    transition: { 
      duration: 0, 
      ease: [0.76, 0, 0.24, 1]
    }
  },
  exit: { 
    x: -40,
    y: 40,
    scale: 0.9,
    opacity: 0.2,
    filter: 'blur(3px)',
    transition: { 
      duration: 0.6, 
      ease: [0.76, 0, 0.24, 1] 
    }                        
  }
};                                                                               
const opacity = { 
  initial: false,
  enter: {
    opacity: 1,
    transition: { 
      duration: 0.2, 
      delay: 0.1,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 1,
    transition: { duration: 0.3 }
  }
}

function AnimatedPage({children}) {
  const location = useLocation()
  const anim = (variants) => ({
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants
  })
  const ref= useRef(null)
  return (
    <ScrollContext value={ref}>
    <div className="fixed inset-0 overflow-hidden">
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none bg-background"
        {...anim(slide)}
      />
      <motion.div
        className="fixed inset-0 overflow-y-auto overflow-x-hidden bg-background text-foreground"
        {...anim(perspective)}
        ref= {ref}
      >
        
          <motion.div>
            <section className="pt-20 px-4 min-h-lvh selection:bg-primary selection:text-background">{children}</section>
            {location.pathname==='/'?null:<Footer/>}
          </motion.div>
      </motion.div>
    </div>
    </ScrollContext>
  )
}

export default AnimatedPage