import {Link, useLocation} from "react-router"
import {motion, AnimatePresence} from "motion/react"

export default function Header() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      {location.pathname !== '/' && (
        <motion.header
          key= {location.pathname}
          className="w-screen flex fixed z-50 px-4 pt-2 pb-6 justify-between text-foreground bg-gradient-to-b from-background from-40% to-transparent"
          initial={{
            y: 0,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1]
            }
          }}
          exit={{
            y: -5,
            opacity: 0,
            transition: {
              duration: 0.1,
              ease: 'easeOut'
            }
          }}
        >
          <h1 className="font-medium"><Link to="/home">Shreya Solomon.</Link></h1>
            <p className="font-serif">{location.pathname}</p>
        </motion.header>
      )}
    </AnimatePresence>
  )
}