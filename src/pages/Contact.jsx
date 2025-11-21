import {motion} from "motion/react"

function Contact() {
  const socials = [
    { platform: 'Mail', linkText: 'shreyasolomon25@gmail.com', link: 'mailto:shreyasolomon25@gmail.com'},
    { platform: 'Linkedin', linkText: 'shreyasolomon', link: '#'},
    { platform: 'Twitter', linkText: 'shreyasolomon', link: '#'},
    ]
  return (
    <section>
      <h1 className="text-5xl font-serif border-b border-primary">Contact me.</h1>
        <p className="text-sm mt-4">Currently you can only contact me through mail. Don't worry more links will be added in future.</p>
        <ul className="flex flex-col gap-8 mt-12">
          {socials.map((social, i)=> (
            <li key={i} 
              className="flex border-b border-primary gap-2"
            >
              <a href={social.link} target="redirect" className="bg-primary w-12 h-12 text-2xl text-background flex items-center justify-center">{i+1}</a>
              <span className="flex flex-col justify-between">
                <h1 className="">{social.platform}</h1>
                <a href={social.link} target="redirect" className="text-primary">{social.linkText}</a>
              </span>
            </li>
          ))}
        </ul>
        <motion.div 
          whileInView={{ x: [100, -50, 160], y: [-150, 14, -95], opacity: 0.7 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror',
            repeatDelay: 1,
            ease: 'easeInOut'
          }}
          className="absolute place-self-center justify-self-center bg-primary/60 h-96 w-36 blur-0 -z-20 rounded-full blur-3xl"></motion.div>
    </section>
  )
}

export default Contact