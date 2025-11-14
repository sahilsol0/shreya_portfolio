import { useRef } from "react"
import { useScroll } from "motion/react"
import AnimatedPage from "./AnimatedPage.jsx"
// import Header from "./Header.jsx"
import Header from "./Header.jsx"
import Nav from "./Nav.jsx"
import Footer from "./Footer.jsx"
import ScrollContext from "./ScrollContext.js"

export default function PageLayout({children}){
  const scrollRef= useRef(null)
  const {scrollYProgress} = useScroll({container: scrollRef})
  return (
    <ScrollContext.Provider value={{scrollYProgress}}>
    <AnimatedPage ref={scrollRef}>
      <section className="px-4 pt-20 min-h-screen">
        {children}
      </section>
      <Footer/>
    </AnimatedPage>
    </ScrollContext.Provider>
  )
}