import React, { useContext } from 'react'
import { Context } from '../store/appContext.jsx'
import { Modal } from 'flowbite'
import axios from 'axios'

const ContactForm = (props) => {

    const {store, actions} = useContext(Context)

    const handleContactFormSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const email = formData.get('email')
        const message = formData.get('message')
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const resp = await axios.post(import.meta.env.VITE_BACKEND_URL +'/contact', {
            'email': email,
            'message': message
        }, config)
        if(resp.status === 200) {
            const targetEl = document.getElementById('contactModal')
            const modal = new Modal(targetEl)
            modal.show()
        }
    }

    return (
        <div className="w-full flex flex-col items-center justify-center mb-16" id='contact'>
            <form className={`${ store.darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md rounded px-8 pt-6 pb-8 mb-4`} method="post" onSubmit={handleContactFormSubmit}>
                <div className="mb-4">
                    <label className={`block ${ store.darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-bold mb-2`} htmlFor="email">
                        Email
                    </label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} name='email' id="email" type="email" placeholder="Email"/>
                </div>
                <div className="mb-6">
                    <label className={`block ${ store.darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-bold mb-2`} htmlFor="message">
                        Message
                    </label>
                    <textarea className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='message' id='message' rows="8" cols="80" placeholder="Please contact me about employment offers!"/>
                </div>
                <div className="flex items-center justify-between">
                    <button className={` ${store.darkMode ? 'bg-cyan-900 hover:bg-cyan-700 focus:bg-cyan-700 active:bg-cyan-800' : 'bg-cyan-400 hover:bg-cyan-200 focus:bg-bg-cyan-200 active:bg-cyan-300'} inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(39,245,243,0.8)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(39,245,243,0.8),0_4px_18px_0_rgba(39,245,243,0.8)] focus:shadow-[0_8px_9px_-4px_rgba(39,245,243,0.8),0_4px_18px_0_rgba(39,245,243,0.8)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(39,245,243,0.8),0_4px_18px_0_rgba(39,245,243,0.8)] transition`} type="submit">
                        Submit
                    </button>
                </div>
            </form>
            <div id='contactModal' tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className={`relative rounded-lg ${store.darkMode ? 'bg-slate-600' : 'bg-slate-100' }`}>
                        <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                            <h3 className={`text-xl font-semibold ${store.darkMode ? 'text-neutral-50' : 'text-neutral-800'}`}>
                                Message sent! Click outside the modal to close it.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm