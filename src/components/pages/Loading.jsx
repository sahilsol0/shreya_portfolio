import { useEffect } from "react"
import {motion} from "motion/react"
import AnimatedPage from "../AnimatedPage.jsx"
import { useNavigate } from "react-router"

function Loading() {
  const navigate = useNavigate()
  
  useEffect(()=> {
    const timer= setTimeout(()=>{
      navigate('/home',{replace: true})
    }, 2000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <AnimatedPage style="bg-white">
      <h1 className="text-9xl">Loading...</h1>
    </AnimatedPage>
  )
}

export default Loading 