import { motion } from 'motion/react'
// import Header from './Header.jsx'

function AnimatedPage({children, style}) {
  const containerVariants = {
    initial: { 
      opacity: 1, 
      x: '100vw',
      scale: 1
    },
    animate: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
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
        delay: 1.2,
        ease: 'easeIn'
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`absolute inset-0 overflow-hidden pt-12 ${style}`}
    >
      <motion.div variants={childVariants}>
        {/* <Header/> */}
        {children}
      </motion.div>
    </motion.div>
  )
}

export default AnimatedPage