import { useState, useRef } from "react"
import {motion, useScroll, useMotionValueEvent } from "motion/react"
import PageLayout from "../components/PageLayout.jsx"
import HeroArt from "../components/HeroArt.jsx"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function Home() {
  return (
    <PageLayout>
      <h1 className="text-6xl font-serif tracking-tight">
        Hi, I'm Shreya.
        Architecture Student.
      </h1>
      <p className="text-xs">(Currently pursuing B.Arch at C.A.T. Tvm.)</p>
      <div className="relative border-b border-primary mt-8 flex justify-center w-full h-72 overflow-hidden">
        <HeroArt />
      </div>
      <section className="mt-48">
      <h2 className="text-5xl font-serif border-b border-primary">About Me.</h2>
      <p className="mt-8">Born to Malayali parents and raised in Rajasthan, I was exposed to the cultures of both North and South India<span className="text-primary">*</span>.<br /><span className="text-[0.7rem] text-primary">[*Generally, these two don't get along much, but here I am]</span></p>
      <p className="mt-8">While I spoke fluent Hindi and had mostly North Indian friends, my parents ensured that I never lost touch with my roots (being a thani naadan Malayali !). Maybe that's why after completing my schooling(12th) in Rajasthan, I wanted Kerala to be the next step in my journey.</p>
      <p className="mt-6">So I wrote the entrance exam for architecture, qualified, but I knew, I could do better. So, I took a gap year, prepared and tried again. This time the stars aligned just perfectly! I got a college that I liked and now I'm in first year of B.Arch doing architecture things<span><span className="text-primary">*</span></span>.<br/><span className="text-[0.7rem] text-primary line-height-1">[*Which mostly involves losing sleep over assignments you know your professor will ask you to redo for the 750th time.]</span></p>
      <div className="h-screen flex items-center">
        <p className="font-serif text-2xl">"This exposure to cultures has shaped how I study and approach architecture today. To me, a good design is one that elevates a place not merely through aesthetics, but also by respecting and empowering the people and their culture."</p>
      </div>
      <p>Well, that was brief introduction about me. Keep exploring my portfolio. Use the menu below to see other parts of the website.</p>
      </section>
    </PageLayout>
  )
}

export default Home