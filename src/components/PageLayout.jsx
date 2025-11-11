import AnimatedPage from "./AnimatedPage.jsx"
// import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

export default function PageLayout({children}) {
  return (
    <AnimatedPage>
      <section className="px-4 pt-20 min-h-screen">
        {children}
      </section>
      <Footer/>
    </AnimatedPage>
  )
}