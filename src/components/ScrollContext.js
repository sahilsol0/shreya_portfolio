import { createContext, useContext } from "react"

const ScrollContext = createContext()

export const useScrollProgress= ()=> {
  const ctx = useContext(ScrollContext)
  if (ctx==null) throw new Error("useScrollProgress must be used within Scroll Provider")
  return ctx
}

export default ScrollContext