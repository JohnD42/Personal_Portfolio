import React, { useContext } from 'react'
import { Context } from '../store/appContext.jsx'

const About = (props) => {

    const {store, actions} = useContext(Context)

  
    return (
        <div id='about' className="mx-auto">
            <h1 className={`${store.darkMode ? 'text-zinc-50 shadowed-darkmode' : 'shadowed-lightmode' } text-center text-8xl`}>
                Hello!
            </h1>
            <h1 className={`${store.darkMode ? 'text-zinc-50 shadowed-darkmode' : 'shadowed-lightmode' } text-center text-6xl mt-20`}>
                I'm John Durtka, full stack Web Developer.
            </h1>
            <h1 className={`${store.darkMode ? 'text-zinc-50 shadowed-darkmode' : 'shadowed-lightmode' } text-center text-6xl mt-20`}>
                I built this site using HTML, CSS, JavaScript, React, tsParticles, TailwindCSS, and more.
            </h1>
            <h1 className={`${store.darkMode ? 'text-zinc-50 shadowed-darkmode' : 'shadowed-lightmode' } text-center text-5xl mt-20`}>
                I can also use Bootstrap for styling, Python with Flask for a backend, and PostgreSQL to make a database.
            </h1>
        </div>
    )
  }
  
  export default About
  