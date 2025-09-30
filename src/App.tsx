import './index.css'
import Navbar from './components/ui/Navbar'
import HeroSection from './components/pages/HeroSection'
import AboutSection from './components/pages/AboutSection'
import ProjectsSection from './components/pages/ProjectsSection'
import ContactSection from './components/pages/ContactSection'
import Footer from './components/ui/Footer'

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App