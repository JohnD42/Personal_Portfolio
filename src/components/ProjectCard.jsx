import React, { useContext } from 'react'
import { Context } from '../store/appContext.jsx'

const ProjectCard = (props) => {

    const {store, actions} = useContext(Context)
    const imgSrc = props.obj.imgSrc
    const cardTitle = props.obj.cardTitle
    const cardText = props.obj.cardText
    const cardBtnOnClick = props.obj.cardBtnOnClick
    return (
        <div className={`${store.darkMode ? 'bg-slate-600' : 'bg-slate-100' } block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:size-1/3 size-6/6 m-2`}>
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                    className="rounded-t-lg cardImg mx-auto m-2"
                    src={imgSrc}
                    alt="" />
                <a href="#!">
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
            </div>
            <div className="p-6">
                <h5 
                    className={` ${store.darkMode ? 'text-neutral-100' : 'text-neutral-800'} mb-2 text-xl font-medium leading-tight`}>
                    {cardTitle}
                </h5>
                <p className={`${store.darkMode ? 'text-neutral-200' : 'text-neutral-600'} mb-4 text-base`}>
                    {cardText}
                </p>
                <button
                    type="button"
                    className={` ${store.darkMode ? 'bg-cyan-900 hover:bg-cyan-700 focus:bg-cyan-700 active:bg-cyan-800' : 'bg-cyan-400 hover:bg-cyan-200 focus:bg-bg-cyan-200 active:bg-cyan-300'} inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(39,245,243,0.8)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(39,245,243,0.8),0_4px_18px_0_rgba(39,245,243,0.8)] focus:shadow-[0_8px_9px_-4px_rgba(39,245,243,0.8),0_4px_18px_0_rgba(39,245,243,0.8)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(39,245,243,0.8),0_4px_18px_0_rgba(39,245,243,0.8)] transition`}
                    data-modal-target={cardTitle.split(' ').join('-')}
                    data-modal-show={cardTitle.split(' ').join('-')}
                >
                    See more
                </button>
            </div>
        </div>
    )
}

export default ProjectCard
