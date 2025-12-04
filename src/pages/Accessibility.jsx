import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import DarkModeToggle from '../components/DarkModeToggle.jsx'

function Accessibility() {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{
          delay: 0.1
        }}
        className="min-h-screen w-screen overflow-x-hidden px-4 pt-16 flex flex-col gap-8 bg-background text-foreground"
      >
        <div className="fixed top-0 left-0 w-screen px-4">
          <div
            className="border-b py-2 w-full flex justify-between bg-background text-foreground border-foreground"
          >
            <h1 className="font-medium">Shreya Solomon.</h1>
            <h3 className="font-serif">/summary</h3>
          </div>
        </div>

        <section className="mb-4">
          <h2 className="top-2 text-3xl font-serif border-b border-primary background mb-4">
            Introduction
          </h2>
          <p>
            Shreya Solomon is an architecture student from Kerala currently doing her B.Arch in
            Trivandrum, Kerala.
          </p>
        </section>

        <section>
          <h2 className="top-2 text-3xl font-serif border-b border-primary background mb-4">
            Skills
          </h2>
          <p>Skills include.</p>
          <ul>
            <li>Time management.</li>
            <li>Team Coordination.</li>
          </ul>
        </section>

        <section className="h-screen" />
      </motion.main>
      <div className="fixed right-0 bottom-0 bg-foreground flex justify-around items-center h-12 aspect-square">
        <DarkModeToggle />
      </div>
    </>
  )
}

export default Accessibility
