import {Link} from "react-router"
import {motion} from "motion/react"

export default function Header() {
  return (
    <motion.header className="w-screen h-20 bg-amber-300 flex z-10 fixed">
      <h1>Shreya Solomon.</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </motion.header>
  )
}