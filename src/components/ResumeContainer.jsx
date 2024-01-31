import React, { useContext, useRef } from 'react'
import { Context } from '../store/appContext.jsx'
import Resume from '../assets/Resume.pdf'

const ResumeContainer = (props) => {

    const {store, actions} = useContext(Context)
    const firstClick = useRef(false)

    const clickResumeAccordionHandler = () => {
        const accordion = document.getElementById('accordion-collapse-body-1')
        if(accordion.classList.contains('hidden')) {
            accordion.classList.remove('hidden')
        }
        else {
            accordion.classList.add('hidden')
        }
        if(!firstClick.current) {
            accordion.classList.remove('hidden')
            firstClick.current = true
        }
    }

    return (
        <div id="accordion-collapse-resume" data-accordion="collapse" className='flex flex-col items-center justify-center mb-16'>
            <h2 id="accordion-collapse-heading">
                <button type="button" className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 ${ store.darkMode ? 'focus:ring-gray-700 border-gray-600 hover:bg-gray-300 bg-gray-800' : 'border-gray-100 focus:ring-gray-200 hover:bg-gray-50 bg-gray-300'} rounded-t-xl focus:ring-4 gap-3`} onClick={() => {clickResumeAccordionHandler()}} data-accordion-target="#accordion-collapse-body-1" data-accordion-toggle={'accordion-collapse-body-1'} aria-expanded="false" aria-controls="accordion-collapse-body-1">
                <span>Resume</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading">
                <div className={`p-5 border border-b-0 ${store.darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200'}`}>
                    <iframe id='resume' className='pb-8' src={Resume} />
                </div>
            </div>
        </div>
    )
}

export default ResumeContainer  