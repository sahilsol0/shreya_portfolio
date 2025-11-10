import { motion } from 'motion/react'
import { useLocation } from 'react-router'
import Footer from "./Footer.jsx"

function AnimatedPage({children, className}) {
  const location = useLocation()
  const isLoading = location.pathname === '/'?true:false
  const containerVariants = {
    initial: { 
      opacity: isLoading?0:1, 
      x: isLoading?1:'100vw',
      scale: 1
    },
    animate: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    exit: { 
      opacity: 0.5, 
      x: -150,
      y: 50,
      scale: 0.9,
      filter: 'blur(10px)',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }
  
  const childVariants = {
    initial: { 
      opacity: 0,
      filter: 'blur(10px)'
    },
    animate: { 
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        delay: isLoading?0.3:1.2,
        ease: 'easeIn'
      }
    },
  }

  return (
    <motion.main
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`absolute top-0 left-0 right-0 min-h-screen pt-10 bg-background ${className || ""}`}
    >
      <motion.div variants={childVariants}>
        {/* <Header/> */}
        {children}
      </motion.div>
      <Footer />
    </motion.main>
  )
}

export default AnimatedPage