import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Education } from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


export const App = () => {
  return <>
    <Navbar />
    <Hero />
    <Education />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </>
}