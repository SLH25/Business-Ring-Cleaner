import Seo from '../components/Seo.jsx'
import Hero from '../sections/home/Hero.jsx'
import ServicesPreview from '../sections/home/ServicesPreview.jsx'
import BeforeAfter from '../sections/home/BeforeAfter.jsx'
import WhyUs from '../sections/home/WhyUs.jsx'
import Testimonials from '../sections/home/Testimonials.jsx'
import FinalCTA from '../sections/shared/FinalCTA.jsx'
import { seo } from '../data/site.js'

export default function Home() {
  return (
    <>
      <Seo {...seo.home} />
      <Hero />
      <ServicesPreview />
      <BeforeAfter />
      <WhyUs />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
