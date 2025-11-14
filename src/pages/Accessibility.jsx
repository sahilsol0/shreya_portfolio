import { useState, useEffect } from "react"
import {motion} from "motion/react"

function Accessibility() {
  const [isLight, setIsLight ] = useState(true)
  return (
    <main className={`min-h-screen w-screen overflow-x-hidden px-4 pt-16 flex flex-col gap-8 ${isLight ? 'bg-background text-foreground' : 'bg-foreground text-background'}`}>
      <div className="fixed top-0 left-0 w-screen px-4">
        <div className={`border-b py-2 w-full flex justify-between ${isLight ? 'bg-background text-foreground border-foreground' : 'bg-foreground text-background border-background'}`}>
        <h1 className="font-medium">Shreya Solomon.</h1>
        <h3 className="font-serif">/summary</h3>
        </div>
      </div>
      <section className="mb-4">
        <h2 className={`text-3xl font-serif border-b border-${isLight ? 'primary': 'background'} mb-4`}>Introduction</h2>
        <p>Shreya Solomon is an architecture student from Kerala currently doing her B.Arch in Trivandrum, Kerala.</p>
      </section>
      <section className="">
        <h2 className={`text-3xl font-serif border-b border-${isLight ? 'primary': 'background'} mb-4`}>Skills</h2>
        <p>Skills include.</p>
        <ul>
          <li>Time management.</li>
          <li>Team Coordination.</li>
        </ul>
      </section>
      <section className="h-screen"></section>
      <motion.div
        onClick= {()=> setIsLight(!isLight)}
        className={`fixed bottom-0 px-0.5 ${isLight ? 'bg-primary text-background' : 'bg-background text-primary'}`}
      >
        [{ isLight ? 'dark theme' : 'light theme' }]
      </motion.div>
    </main>
  )
}

export default Accessibility