import { useState } from "react"
import { Link, useLocation } from "react-router"
import { motion, AnimatePresence } from "motion/react"

function MenuButton({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      className="px-4 py-2 border-b border-primary z-50"
    >
      {isOpen ? "Close" : "Menu"}
    </button>
  )
}

export default function Nav() {
  const location = useLocation()
  
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  
  const links= [
    {url: '/home', name: 'Home'},
    {url: '/contact', name: 'Contact'},
    {url: '/projects', name: 'Projects'},
    {url: '/other', name: 'Other'},
  ]

  return (
    <AnimatePresence mode="wait">
      {location.pathname !== "/" && (
        <motion.div
          className="w-screen flex flex-col items-center justify-center fixed bottom-0 pb-4 z-50 bg-gradient-to-t from-background from-45% to-transparent"
          key= {location.pathname}
          initial={{ y: 150, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.4, duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          exit={{
            y: 150,
            opacity: 0,
            transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
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
                className="absolute bottom-0 pb-16"
              >
                <div className="grid grid-cols-4 gap-4 text-center border border-primary bg-background">
                  {links.map(link => (
                    <Link 
                      key={link.url} 
                      to={link.url} 
                      onClick={toggleMenu} 
                      className="hover:text-blue-500"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
