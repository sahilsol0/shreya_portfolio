import { useState } from "react"
import { Link, useLocation } from "react-router"
import { motion, AnimatePresence } from "motion/react"

function MenuButton({ isOpen, toggle }) {
  return (
    <motion.button
      onClick={toggle}
      whileTap= {{
        scale: 0.9
      }}
      className="px-4 py-2 border border-primary z-50 bg-background"
    >
      {isOpen ? "Close" : "Menu"}
    </motion.button>
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
          className="w-screen flex flex-col items-center justify-center fixed bottom-0 pb-4 z-50 text-foreground"
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
                initial={{ y: 10, opacity: 0.5, scale:0.9 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.05, ease: 'easeOut' },
                }}
                exit={{
                  y: 10,
                  opacity: 0,
                  scale:0.9,
                  transition: { duration: 0.1, ease: 'easeIn' },
                }}
                className="absolute bottom-0 pb-18"
              >
                <div className="flex items-center gap-4 border border-primary bg-background py-1 px-4">
                  {links.map(link => (
                    <Link 
                      key={link.url} 
                      to={link.url} 
                      onClick={toggleMenu}
                      className= {`${location.pathname===link.url ? 'font-serif text-primary':'font-sans'} hover:text-primary`}
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
