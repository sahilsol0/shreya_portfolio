import { useState, useRef } from "react"
import {motion, useTransform, useMotionValueEvent, useScroll } from "motion/react"
import { Link } from "react-router"
import HeroArt from "../components/HeroArt.jsx"
import WithPageLayout from "../components/WithPageLayout.jsx"

function Home({ scrollYProgress }) {
  const titleParallax= {
    y: useTransform(scrollYProgress, [0, 0.2], ["0", "-30%"])
  }
  const heroArt = {
    y: useTransform(scrollYProgress, [0, 0.7], ["0", "100%"]),
  }
  const orbAnimation= {
    y: useTransform(scrollYProgress, [0.7, 0.9], ["50%", "0%"]),
    opacity: useTransform(scrollYProgress, [0.7, 0.9], [1, 0.5]),
    scale: useTransform(scrollYProgress, [0.6, 0.9], [1, 2]),
  }
  
  //useMotionValueEvent(scrollYProgress, "change", (current)=> console.log(current))
  return (
    <>
      <motion.h1 className="text-6xl font-serif tracking-tight" style={titleParallax}>
        Hi, I'm Shreya.<br />
        Architecture Student.
      </motion.h1>
      <p className="text-xs text-primary">[ Currently pursuing B.Arch ]</p>
      <motion.div 
        className="relative border-b border-primary mt-12 flex justify-center w-full h-72 overflow-hidden"
        style={heroArt}
      >
        <HeroArt scrollYProgress={scrollYProgress} />
      </motion.div>
      <section className="mt-72">
      <h2 className="text-5xl font-serif border-b border-primary">About Me.</h2>
      <p className="mt-8">Born to Malayali parents and raised in Rajasthan, I was exposed to the cultures of both North and South India<span className="text-primary">*</span>.<br /><span className="text-[0.7rem] text-primary">[*Generally, these two don't get along much, but here I am]</span></p>
      <p className="mt-8">While I spoke fluent Hindi and had mostly North Indian friends, my parents ensured that I never lost touch with my roots (being a thani naadan Malayali !). Maybe that's why after completing my schooling(12th) in Rajasthan, I wanted Kerala to be the next step in my journey.</p>
      <p className="mt-8">So I wrote the entrance exam for architecture and now I'm in first year of B.Arch doing architecture things<span><span className="text-primary">*</span></span>.<br/><span className="text-[0.7rem] text-primary line-height-1">[*Which mostly involves losing sleep over assignments you know your professor will ask you to redo for the 750th time.]</span></p>
      </section>
      <div className="h-screen relative flex items-center">
        <TextSplitter className="font-serif text-3xl z-10 w-11/12" text= {"\"This exposure to cultures has shaped how I study and approach architecture today. To me, a good design is one that elevates a place not merely through aesthetics, but also by respecting and empowering the people and their culture.\""} scrollYProgress={scrollYProgress} />
        <div className="absolute inset-0 h-full w-full flex place-items-center justify-center"
        >
          <motion.div style= {orbAnimation} className="h-1/3 w-1/2 bg-primary rounded-full blur-2xl"></motion.div>
        </div>
      </div>
      <p className="mt-32 text-xs text-primary">[ Thanks for visiting my portfolio. Use the menu below to see other parts of the website. ]</p>
    </>
  )
}

function TextSplitter({text, className, scrollYProgress}) {
  const words= text.split(" ")
  const scrollY = useTransform(scrollYProgress, [0.6, 1], [0, 0.3])

  return (
    <motion.p className={`flex flex-wrap gap-x-2 leading-snug ${className}`}>
      {
        words.map((word, i)=>{
          const start = i*0.1 / words.length
          const end = start + 1 / words.length

          const wordAnimation= {
            opacity: useTransform(scrollY, [start, end], [0, 1]),
            scale: useTransform(scrollY, [start, end], [0.9, 1])
            // y: useTransform(scrollY, [start, end], ["80%", "0%"])
          }
          return ( <motion.span 
            key={i} 
            style={wordAnimation}
            className="inline-block"
            >
              {word}
            </motion.span>
          )
        })
      }
    </motion.p>
  )
}

export default WithPageLayout(Home)