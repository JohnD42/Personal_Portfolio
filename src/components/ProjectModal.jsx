import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext.jsx'

const ProjectModal = (props) => {

    const {store, actions} = useContext(Context)

    const [rerender, setRerender] = useState(false)

    const projectHeader = props.obj.projectHeader
    const projectBody = props.obj.projectBody
    const vidSrc = props.obj.vidSrc

    const clickModalXHandler = () => {
        console.log(projectHeader.split(' ').join('-'))
        // const modal = document.getElementById(projectHeader.split(' ').join('-'))
        // modal.classList.add('hidden')
    }

return (
        <div id={projectHeader.split(' ').join('-')} tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full modal">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className={`relative rounded-lg ${store.darkMode ? 'bg-slate-600' : 'bg-slate-100' }`}>
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className={`text-xl font-semibold ${store.darkMode ? 'text-neutral-50' : 'text-neutral-800'}`}>
                            {projectHeader}
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => {clickModalXHandler()}} data-modal-hide={projectHeader.split(' ').join('-')}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                    <iframe width='100%' height='400px' src={vidSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <p className={`text-base leading-relaxed ${store.darkMode ? 'text-neutral-200' : 'text-neutral-600'}`}>
                            {projectBody}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal