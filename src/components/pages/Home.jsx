import {motion} from "motion/react"
import AnimatedPage from "../AnimatedPage.jsx"
import HeroArt from "../HeroArt.jsx"

function Home() {
  return (
    <AnimatedPage style="px-4 pt-24">
      <h1 className="text-6xl font-serif tracking-tight">
        Hi, I'm Shreya.
        Architecture Student.
      </h1>
      <p className="text-xs">(Currently pursuing B.Arch at C.A.T. Tvm.)</p>
      <div className="relative border-b border-primary mt-8 flex justify-center w-full h-72 overflow-hidden">
        <HeroArt />
      </div>
      <section></section>
    </AnimatedPage>
  )
}

export default Home