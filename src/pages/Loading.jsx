import { useEffect } from "react"
import {motion, animate, useTransform, useMotionValue} from "motion/react"
import AnimatedPage from "../components/AnimatedPage.jsx"
import { useNavigate } from "react-router"

function Counter({className}) {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 100, { duration: 2 })
        return () => controls.stop()
    }, [])

    return <motion.pre
      className = {`${className}`}
    >{rounded}</motion.pre>
}

function Loading() {
  const navigate = useNavigate()
  
  useEffect(()=> {
    const timer= setTimeout(()=>{
      navigate('/home',{replace: true})
    }, 2000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <AnimatedPage className="flex place-content-center">
      <Counter className=""/>
    </AnimatedPage>
  )
}

export default Loading 