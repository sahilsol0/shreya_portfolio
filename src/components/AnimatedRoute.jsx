import { Routes, Route, useLocation } from "react-router"
import { AnimatePresence } from "motion/react"
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import Loading from "./pages/Loading.jsx"

function AnimatedRoute() {
  const location = useLocation()

  return (
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Loading/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoute