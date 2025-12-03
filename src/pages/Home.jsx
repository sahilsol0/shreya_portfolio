import { useState, useRef, useContext } from "react"
import {motion, useTransform, useMotionValueEvent, useScroll } from "motion/react"
import { Link } from "react-router"
import HeroArt from "../components/HeroArt.jsx"
import TextSplitter from "../components/TextSplitter.jsx"
import { ScrollContext } from "../components/ScrollContext.js"
import { useElementScroll } from "../hooks/useElementScroll.js"

function Home() {
  const entryVariant= {
    "initial": {
      x: 10,
      opacity: 0
    },
    "show": {
      x: 0,
      opacity: 1
    }
  }
  const h1Scroll = useElementScroll({
    offset: ["start 0.1", "end 0"]
  })
  
  const h1Animation = {
    y: useTransform(h1Scroll.scrollYProgress, [0, 1], ["0%", "-30%"])
  }
  
  const heroArtScroll = useElementScroll({
    offset: ["start 0.4", "end start"]
  })
  const heroY = useTransform(heroArtScroll.scrollYProgress, [0, 1], ["0%", "40%"])
  
  const orbScroll = useElementScroll({
    offset: ["start 0.8", "start 0"]
  })
  const orbAnimation = {
    opacity: useTransform(orbScroll.scrollYProgress, [0, 0.7, 1], [0, 1, 0.70]),
    y: useTransform(orbScroll.scrollYProgress, [0, 1], ["-10vh", "50vh"]),
    scale: useTransform(orbScroll.scrollYProgress, [0, 0.75, 1], [0.1, 0.2, 2])
  }
  
  return (
    <>
      <motion.h1 
        ref={h1Scroll.elementRef} 
        className="text-6xl font-serif tracking-tight"
        variants= {entryVariant}
        initial= "initial"
        animate="show"
        transition= {{
          duration: 0.2,
          ease: "easeOut"
        }}
        style={h1Animation}
        >
        Hi, I'm Shreya.<br />
        Architecture Student.
      </motion.h1>
      <motion.p
        variants= {entryVariant}
        initial= "initial"
        animate="show"
        transition= {{
          duration: 0.2,
          delay: 0.1,
          ease: "easeOut"
        }}
        className="text-xs text-primary">[ Scroll to learn more ]</motion.p>
      <motion.div 
        ref={heroArtScroll.elementRef}
        className="relative border-b border-primary mt-12 flex justify-center w-full h-72 overflow-hidden will-change-transform"
        style={{ y: heroY }}
        variants= {entryVariant}
        initial= "initial"
        animate="show"
        transition= {{
          duration: 0.2,
          delay: 0.2,
          ease: "easeOut"
        }}
      >
        <HeroArt baseProgress={heroArtScroll.scrollYProgress} />
      </motion.div>
      <section 
      className="mt-72">
      <h2 className="text-5xl font-serif border-b border-primary">About Me.</h2>
      <p className="mt-8">Born to Malayali parents and raised in Rajasthan, I was exposed to the cultures of both North and South India<span className="text-primary">*</span>.<br /><span className="text-[0.7rem] text-primary">[*Generally, these two don't get along much, but here I am]</span></p>
      <p className="mt-8">While I spoke fluent Hindi and had mostly North Indian friends, my parents ensured that I never lost touch with my roots (being a thani naadan Malayali !). Maybe that's why after completing my schooling(12th) in Rajasthan, I wanted Kerala to be the next step in my journey.</p>
      <p className="mt-8">So I wrote the entrance exam for architecture and now I'm in first year of B.Arch doing architecture things<span><span className="text-primary">*</span></span>.<br/><span className="text-[0.7rem] text-primary line-height-1">[*Which mostly involves losing sleep over assignments you know your professor will ask you to redo for the 750th time.]</span></p>
      </section>
      <div className="h-screen relative flex items-center pt-72">
        <TextSplitter className="font-serif tracking-normal text-3xl z-10 w-11/12" text= {"\"This exposure to cultures has shaped how I study and approach architecture today. To me, a good design is one that elevates a place not merely through aesthetics, but also by respecting and empowering the people and their culture.\""}  />
        <div className="absolute inset-0 h-full w-full flex items-start justify-center"
        >
          <motion.div
          ref={orbScroll.elementRef}
          style= {orbAnimation}
          className="h-1/3 w-1/2 bg-primary rounded-full blur-2xl"></motion.div>
        </div>
      </div>
      <p className="mt-96 text-xs text-primary">[ Thanks for visiting my portfolio. Use the menu below to see other parts of the website. ]</p>
    </>
  )
}

export default Home