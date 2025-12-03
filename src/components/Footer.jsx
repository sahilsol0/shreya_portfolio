import { motion } from "motion/react"

export default function Footer() {
  const year= new Date().getFullYear()
  return (
    <section className="relative mt-4 bg-primary/30 text-primary overflow-hidden">
      <div className="flex justify-between px-1">
        <h1 className="font-medium">&copy; <span className="text-sm font-semibold tracking-tight">{year}</span> shreyasolomon</h1>
        <p className="font-serif">Be Happy.</p>
      </div>
      <div className="flex justify-center items-center text-[6rem] overflow-hidden blur-xs z-10"> a അ अ  </div>
      <div className="flex justify-between items-end px-1">
        <p className="font-serif">Peace over Everything.</p>
        <p className="text-xs">Developed by- <br/> <a href="http://sahilsolomon.vercel.app/" target="#" className="underline text-primary/80">Sahil Solomon</a></p>
      </div>
      <div className="pointer-events-none h-16 bg-gradient-to-t from-background from-40% to-transparent"></div>
      <motion.div
        whileInView={{ x: [100, -75], y: [-10, 14, -87], rotate: [-8, 0, 4, -10] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 1,
          ease: 'easeInOut'
        }}
        className="pointer-events-none blur-2xl absolute inset-0 h-full flex justify-center items-center text-[16rem] font-black">അ</motion.div>
    </section>
  )
}