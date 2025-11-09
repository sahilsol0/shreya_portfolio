import { useState } from "react"
import { Link, useLocation } from "react-router"
import { motion, AnimatePresence } from "motion/react"

function MenuButton({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      className="px-4 py-2 z-50"
    >
      {isOpen ? "Close" : "Menu"}
    </button>
  )
}

export default function Nav() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <AnimatePresence>
      {location.pathname !== "/" && (
        <motion.div
          className="w-screen flex flex-col items-center justify-center z-40 fixed bottom-0 px-4 py-3"
          initial={{ y: 150, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.8, duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          exit={{
            y: 150,
            opacity: 0,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <MenuButton isOpen={isOpen} toggle={toggleMenu} />

          {/* Animated tray */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                key="menu"
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
                }}
                exit={{
                  y: 100,
                  opacity: 0,
                  transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
                }}
                className="absolute bottom-0 pb-12"
              >
                <div className="grid grid-cols-4 gap-4 text-center border">
                  {
                    [].map(()=>{
                      
                    })
                  }
                  <Link to="/home" onClick={toggleMenu} className="hover:text-blue-500">Home</Link>
                  <Link to="/contact" onClick={toggleMenu} className="hover:text-blue-500">Contact</Link>
                  <Link to="/projects" onClick={toggleMenu} className="hover:text-blue-500">Projects</Link>
                  <Link to="/lifeevent" onClick={toggleMenu} className="hover:text-blue-500">Events</Link>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
