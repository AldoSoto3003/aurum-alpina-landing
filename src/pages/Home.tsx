import Footer from '../components/Footer'
import InfoBadge from '../components/InfoBadge'
import NavBar from '../components/NavBar'
import BubbleWaButton from '../components/WaBubble'
import AboutUs from './AboutUs'
import Hero from './Hero'
import OurProducts from './OurProducts'

export default function Home() {
  return (
    <>
        <NavBar />
        <Hero />
        <OurProducts />
        <InfoBadge/>
        <AboutUs />
        <Footer/>
        <BubbleWaButton/>
    </>
  )
}
