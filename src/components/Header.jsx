import {Link, useLocation} from "react-router"
import {motion, AnimatePresence} from "motion/react"

export default function Header() {
  const location = useLocation()
  
  return (
    <AnimatePresence>
      {location.pathname !== '/' && (
        <motion.header
          className="w-screen flex z-10 fixed px-4 py-2"
          initial={{
            y: -150,
            x: -50,
            opacity: 0
          }}
          animate={{
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.8,
              duration: 0.8,
              ease: 'easeInOut'
            }
          }}
          exit={{
            y: -150,
            opacity: 0,
            transition: {
              duration: 0.5
            }
          }}
        >
          <h1>Shreya Solomon.</h1>
        </motion.header>
      )}
    </AnimatePresence>
  )
}