import React, { useEffect } from 'react'
import './App.css'
import injectContext from './store/appContext.jsx'
import Navbar from './components/Navbar'
import ParticlesComponent from './components/Particles'
import About from './components/About'
import Projects from './components/Projects'
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
