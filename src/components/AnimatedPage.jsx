import { motion } from 'motion/react'
import { useLocation } from 'react-router'

const slide = {
  initial: { left: '100vw' },
  enter: { 
    left: '100vw', 
    transition: { 
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1]
    }
  },
  exit: { 
    left: 0, 
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
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1]
    }
  },
  exit: { 
    x: -100,
    y: 100,
    scale: 0.9, 
    filter: 'blur(10px)',
    transition: { 
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1] 
    }                        
  }
};                                                                               
const opacity = { 
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { 
      duration: 0.6, 
      delay: 0.3 
    }
  },
  exit: {
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

function AnimatedPage({children}) {
  const location = useLocation()
  const anim = (variants) => ({
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants
  });
  return (
    <div className="fixed inset-0 overflow-hidden">
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none bg-background"
        {...anim(slide)}
      />
      <motion.div
        className="fixed inset-0 overflow-y-auto bg-background"
        {...anim(perspective)}
      >
        <motion.div {...anim(opacity)}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AnimatedPage