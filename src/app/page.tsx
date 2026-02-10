import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Pain from '../components/Pain'
import Benefits from '../components/Benefits'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <Pain />
            <Benefits />
            <Process />
            <Testimonials />
            <About />
            <FinalCTA />
            <Footer />
        </div>
    )
}
