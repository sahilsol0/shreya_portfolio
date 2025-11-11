import {motion} from "motion/react"
import PageLayout from "../components/PageLayout.jsx"

function Contact() {
  const socials = [
    { platform: 'Mail', linkText: 'shreyasolomon25@gmail.com', link: 'mailto:shreyasolomon25@gmail.com'},
    { platform: 'Whatsapp', linkText: '8696621129', link: 'https://wa.me/+918696621129'}
    ]
  return (
    <PageLayout>
      <h1 className="text-5xl font-serif border-b border-primary">Contact me.</h1>
        <p className="text-sm mt-4">Currently you can only contact me through mail. Don't worry more links will be added in future.</p>
        <ul className="flex flex-col gap-8 mt-12">
          {socials.map((social, i)=> (
            <li key={i} 
              className="flex flex-col bg-primary/0 rounded"
            >
              <h1>{social.platform}</h1>
              <a href={social.link} target="redirect" className="text-primary border-b">{social.linkText}</a>
            </li>
          ))}
        </ul>
    </PageLayout>
  )
}

export default Contact