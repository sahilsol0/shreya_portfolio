import {motion} from "motion/react"
import AnimatedPage from "../components/AnimatedPage.jsx"
import HeroArt from "../components/HeroArt.jsx"

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
      <section className="mt-16">
      <h2>About Me.</h2>
      <p>Born to Malayali parents but raised in Rajasthan, I was exposed to cultures of both north and south India (*Generally these two don't go along much, but here I am)</p>
      </section>
    </AnimatedPage>
  )
}

export default Home