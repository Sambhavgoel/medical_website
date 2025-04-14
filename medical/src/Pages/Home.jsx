import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Departments from '../components/Departments'
import Flipper from '../components/Flipper'
import FitnessTracker from '../components/FitnessTracker'
import Blogs from '../components/Blogs'
import Features from '../components/Features'
import FAQSection from '../components/FAQSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'


function Home() {
  return (
    <>
        <section id="first-section">
            
            <HeroSection />
        </section>
            <Departments/>
            <Flipper/>
            <FitnessTracker/>
            <Blogs/>
            <Features />
            <FAQSection />
            <ContactForm />
            
            <ScrollToTopButton />
    </>
  )
}

export default Home