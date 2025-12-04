import { useState } from "react"
import { Link, useLocation } from "react-router"
import { motion, AnimatePresence } from "motion/react"
import DarkModeToggle from './DarkModeToggle.jsx'
import menu from '../assets/vectors/menu.svg'

function MenuButton({ isOpen, toggle }) {
  return (
    <motion.button
      onClick={toggle}
      whileTap={{
        scale: 0.9
      }}
      className="px-4 py-2 border border-primary z-50 bg-background text-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.499 8.248h15m-15 7.501h15"
          />
        )}
      </svg>
    </motion.button>

  )
}

export default function Nav() {
  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const links = [
    { url: '/home', name: 'Home' },
    { url: '/contact', name: 'Contact' },
    { url: '/projects', name: 'Projects' },
    { url: '/other', name: 'Other' },
  ]

  return (
    <AnimatePresence mode="wait">
      {location.pathname !== "/" && (
        <motion.div
          className="w-screen flex justify-center fixed bottom-0 pb-4 z-50 text-foreground h-16"
          key={location.pathname}
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
          <motion.span whileTap={{ scale: 0.9 }} className="flex items-center justify-around bg-primary aspect-square h-full z-50"><DarkModeToggle /></motion.span>
          {/* Animated tray */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                key="menu"
                initial={{ y: 10, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.1, ease: 'easeOut' },
                }}
                exit={{
                  y: 10,
                  opacity: 0,
                  transition: { duration: 0.1, ease: 'easeOut' },
                }}
                className="absolute bottom-0 pb-18"
              >
                <div className="origin-bottom flex items-center gap-4 border border-primary bg-background py-1 px-4">
                  {links.map(link => (
                    <Link
                      key={link.url}
                      to={link.url}
                      onClick={toggleMenu}
                      className={`${location.pathname === link.url ? 'font-serif text-primary' : 'font-sans'} hover:text-primary`}
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
