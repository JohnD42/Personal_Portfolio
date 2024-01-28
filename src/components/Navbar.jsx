import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import JD from '../assets/JD.png'
import { Context } from '../store/appContext.jsx'

const navigation = [
  { name: 'About', href: '#about', current: true },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Resume', href: '#accordion-collapse-resume', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = (props) => {
  const {store, actions} = useContext(Context)

  return (
    <Disclosure as="nav" className={`${store.darkMode ? 'bg-gray-800' : 'bg-zinc-50'} w-screen mx-0 h-16`}>
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className={`${store.darkMode ? 'text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-white`' : 'text-zinc-900 hover:bg-zinc-400 hover:text-black focus:ring-black'} relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset`}>
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={JD}
                    alt="John Durtka"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? `${store.darkMode ? 'bg-gray-900 text-white' : 'bg-zinc-500 text-zinc-900'}` : `${store.darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-zinc-700 hover:bg-zinc-400 hover:text-black'}`,
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <button onClick={() => {actions.changeDarkMode()}} className={`${store.darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium' : 'text-zinc-700 hover:bg-zinc-400 hover:text-black block rounded-md px-3 py-2 text-base font-medium'}`}>
                      {store.darkMode ? <i className="fa-solid fa-cloud-moon"></i> : <i className="fa-solid fa-cloud-sun"></i>}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="absolute mb-52 sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? `${store.darkMode ? 'bg-gray-900 text-white' : 'bg-zinc-500 text-zinc-900'}` : `${store.darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-zinc-700 hover:bg-zinc-400 hover:text-black'}`,
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <button onClick={() => {actions.changeDarkMode()}} className={`${store.darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium' : 'text-zinc-700 hover:bg-zinc-400 hover:text-black block rounded-md px-3 py-2 text-base font-medium'}`}>
                {store.darkMode ? <i className="fa-solid fa-cloud-moon"></i> : <i className="fa-solid fa-cloud-sun"></i>}
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar