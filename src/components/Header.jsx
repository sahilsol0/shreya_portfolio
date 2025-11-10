import {Link, useLocation} from "react-router"
import {motion, AnimatePresence} from "motion/react"

export default function Header() {
  const location = useLocation()
  
  return (
    <AnimatePresence>
      {location.pathname !== '/' && (
        <motion.header
          className="w-screen flex z-10 fixed px-4 pt-2 pb-6 justify-between bg-gradient-to-b from-background from-40% to-transparent to-90%"
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
          <h1 className="font-medium">Shreya Solomon.</h1>
          <AnimatePresence mode="wait">
            <motion.p 
            key={location.pathname}
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  // delay: 1,
                  duration: 0.4,
                  ease: [0.76, 0, 0.24, 1]
                }
              }}
              exit={{
                opacity: 0,
                x: -10,
                y: 20,
                transition: {
                  duration: 0.4,
                  ease: [0.76, 0, 0.24, 1]
                }
              }}
            className="font-serif">{location.pathname}</motion.p>
            </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  )
}