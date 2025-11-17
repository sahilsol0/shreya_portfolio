import { useState, useRef, useContext } from "react"
import {motion, useTransform, useMotionValueEvent, useScroll } from "motion/react"
import { Link } from "react-router"
import HeroArt from "../components/HeroArt.jsx"
import { ScrollContext } from "../components/ScrollContext.js"

function Home() {
  const container= useContext(ScrollContext)
  const { scrollYProgress } = useScroll(
    container,
    )
  const titleParallax= {
    y: useTransform(scrollYProgress, [0, 0.2], ["0", "-30%"])
  }
  const heroArt = {
    y: useTransform(scrollYProgress, [0, 0.7], ["0", "100%"]),
  }
  const orbAnimation= {
    //y: useTransform(scrollYProgress, [0.7, 0.9], ["50%", "0%"]),
    opacity: useTransform(scrollYProgress, [0.7, 0.9], [1, 0.5]),
    scale: useTransform(scrollYProgress, [0.6, 0.9], [1, 2]),
  }
  
  //useMotionValueEvent(scrollYProgress, "change", (current)=> console.log(current))
  return (
    <>
      <h1 className="text-6xl font-serif tracking-tight" style={{}}>
        Hi, I'm Shreya.<br />
        Architecture Student.
      </h1>
      <p className="text-xs text-primary">[ Currently pursuing B.Arch ]</p>
      <div 
        className="relative border-b border-primary mt-12 flex justify-center w-full h-72 overflow-hidden"
        style={heroArt}
      >
        <HeroArt scrollYProgress={{}} />
      </div>
      <section className="mt-72">
      <h2 className="text-5xl font-serif border-b border-primary">About Me.</h2>
      <p className="mt-8">Born to Malayali parents and raised in Rajasthan, I was exposed to the cultures of both North and South India<span className="text-primary">*</span>.<br /><span className="text-[0.7rem] text-primary">[*Generally, these two don't get along much, but here I am]</span></p>
      <p className="mt-8">While I spoke fluent Hindi and had mostly North Indian friends, my parents ensured that I never lost touch with my roots (being a thani naadan Malayali !). Maybe that's why after completing my schooling(12th) in Rajasthan, I wanted Kerala to be the next step in my journey.</p>
      <p className="mt-8">So I wrote the entrance exam for architecture and now I'm in first year of B.Arch doing architecture things<span><span className="text-primary">*</span></span>.<br/><span className="text-[0.7rem] text-primary line-height-1">[*Which mostly involves losing sleep over assignments you know your professor will ask you to redo for the 750th time.]</span></p>
      </section>
      <div className="h-screen relative flex items-center">
        <TextSplitter className="font-serif text-3xl z-10 w-11/12" text= {"\"This exposure to cultures has shaped how I study and approach architecture today. To me, a good design is one that elevates a place not merely through aesthetics, but also by respecting and empowering the people and their culture.\""}  />
        <div className="absolute inset-0 h-full w-full flex place-items-center justify-center"
        >
          <div 
          style= {{}}
          className="h-1/3 w-1/2 bg-primary rounded-full blur-2xl"></div>
        </div>
      </div>
      <p className="mt-32 text-xs text-primary">[ Thanks for visiting my portfolio. Use the menu below to see other parts of the website. ]</p>
    </>
  )
}

function TextSplitter({text, className}) {
  const words= text.split(" ")

  return (
    <p className={`flex flex-wrap gap-x-2 leading-snug ${className}`}>
      {
        words.map((word, i)=>{
          return ( <span 
            key={i} 
            style={{}}
            className="inline-block"
            >
              {word}
            </span>
          )
        })
      }
    </p>
  )
}

export default Home