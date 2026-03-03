import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Education } from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'


export const App = () => {
  return <>
    <Navbar />
    <Hero />
    <Education />
    <Skills />
    <Projects />
  </>
}