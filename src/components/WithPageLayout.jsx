import PageLayout from "./PageLayout.jsx"
import { useScrollProgress } from "./ScrollContext.js"

export default function withPageLayout(PageComponent) {
  return function PageWithLayout(props) {
    return (
      <PageLayout>
        <InnerPage Component={PageComponent} {...props} />
      </PageLayout>
    )
  }
}

function InnerPage({ Component, ...props }) {
  const { scrollYProgress } = useScrollProgress()
  return <Component scrollYProgress={scrollYProgress} {...props} />
}
