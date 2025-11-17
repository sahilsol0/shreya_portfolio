import { Routes, Route, useLocation } from "react-router"
import { AnimatePresence } from "motion/react"
import Home from "../pages/Home.jsx"
import Contact from "../pages/Contact.jsx"
import Loading from "../pages/Loading.jsx"
import Project from "../pages/Project.jsx"
import LifeEvent from "../pages/LifeEvent.jsx"
import Accessibility from "../pages/Accessibility.jsx"
import NotFound from "../pages/NotFound.jsx"

import AnimatedPage from "./AnimatedPage.jsx"

function AnimatedRoute() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Loading/></AnimatedPage>}/>
        <Route path="/home" element={<AnimatedPage><Home/></AnimatedPage>}/>
        <Route path="/contact" element={<AnimatedPage><Contact/></AnimatedPage>} />
        <Route path="/projects" element={<AnimatedPage><Project/></AnimatedPage>} />
        <Route path="/other" element={<AnimatedPage><LifeEvent/></AnimatedPage>} />
        <Route path="/summary" element={<AnimatedPage><Accessibility/></AnimatedPage>} replace={true} />
        <Route path='*' element={<AnimatedPage><NotFound/></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoute