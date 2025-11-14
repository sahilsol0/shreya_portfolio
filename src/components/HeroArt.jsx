import { motion, useTransform } from "motion/react"

export default function HeroArt({scrollYProgress}) {
  const parallaxLayerBack= {
    y: useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"])
  }
  const parallaxLayerMid= {
    y: useTransform(scrollYProgress, [0, 0.5], ["0%", "40%"])
  }
  const mainStructure= {
    y: useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"])
  }
  return (
    <>
    <motion.div className="relative w-full h-full">
      <div className="absolute inset-0 flex items-end">
        <motion.div style={parallaxLayerBack} className="w-6/12 h-2/3 border border-b-0 border-primary bg-primary/20 rounded-t-full"></motion.div>
      <motion.div style={parallaxLayerBack} className="w-6/12 h-full border border-b-0 border-primary bg-primary/20 rounded-t-full"></motion.div>
      </div>
      <div className="absolute inset-0 flex items-end">
        <motion.div style={parallaxLayerMid} className="w-2/12 h-2/12 border border-b-0 border-primary bg-primary/20 rounded-t-full"></motion.div>
      <motion.div style={parallaxLayerMid} className="w-4/12 h-4/12 border border-b-0 border-primary bg-primary/20  rounded-t-full"></motion.div>
      <motion.div style={parallaxLayerMid} className="w-4/12 h-10/12 border border-b-0 border-primary bg-primary/20  rounded-t-full"></motion.div>
      <motion.div style={parallaxLayerMid} className="w-4/12 h-8/12 border border-b-0 border-primary bg-primary/20  rounded-t-full"></motion.div>
      </div>
    </motion.div>
    <div className="absolute top-0 mx-auto h-full aspect-square grid grid-cols-6 grid-rows-6">
      <div className="col-start-3 col-span-2 row-start-6 bg-primary"></div>
      <div className="col-start-2 row-start-4 row-span-3 bg-primary"></div>
      <div className="col-start-5 row-start-5 row-span-2 bg-primary"></div>
      <div className="col-start-3 row-start-5 bg-primary"></div>
      <div className="col-start-4 row-start-4 bg-primary"></div>
      <div className="col-start-2 row-start-6 bg-slate-900/20 rounded-t-full ml-2 w-2/3"></div>
    </div>
    </>
    )
}