import React, { useEffect } from 'react'
import './App.css'
import injectContext from './store/appContext.jsx'
import Navbar from './components/Navbar.jsx'
import ParticlesComponent from './components/Particles.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import ResumeContainer from './components/ResumeContainer.jsx'
import ContactForm from './components/ContactForm.jsx'

function App() {

  useEffect(() => {
    document.body.classList.add('bg-gray-700')
    document.body.classList.add('overflow-x-hidden')
  },[])

  return (
  <>
    <Navbar/>
    <ParticlesComponent/>
    <About/>
    <Projects />
    <ResumeContainer />
    <ContactForm />
  </>
  )
}

export default injectContext(App)
