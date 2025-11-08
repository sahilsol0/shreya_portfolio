import {motion} from "motion/react"

function AnimatedPage({children}) {
  const animation = {
    variants : {
      initial: { opacity: 1, x: '100%' },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 1, x: '-100%' },
    },
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
  return (
    <motion.div
      variants= {animation.variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={animation.transition}
      className="absolute inset-0 overflow-hidden"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage