import {motion} from "motion/react"
import { Link } from "react-router"


function NotFound() {
  const links= [
    {url: '/home', name: 'Home'},
    {url: '/contact', name: 'Contact'},
    {url: '/projects', name: 'Projects'},
    {url: '/other', name: 'Other'},
  ]
  return (
    <section>
      <h1 className="text-3xl text-center font-serif">Nothing found for the entered url</h1>
      <p className="text-sm mt-6 text-primary text-center">[ Try one of these. ]</p>
      <ul>
        {links.map((link)=> (
          <li className="border-b border-primary text-center">[ &gt;<Link to={link.url} replace>{link.name}</Link> ]</li>
        ))}
      </ul>
    </section>
  )
}

export default NotFound