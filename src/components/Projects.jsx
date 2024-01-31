import React, { useContext } from 'react'
import { Context } from '../store/appContext.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'

import HotDoggityDogWalkerScheduleImg from '../assets/HotDoggityDogWalkerScheduleImg.png'
import AlienInvadersImg from '../assets/AlienInvadersImg.png'
import SimpleJWTAuthenticationImg from '../assets/SimpleJWTAuthenticationImg.png'

const Projects = (props) => {

    const {store, actions} = useContext(Context)

    const projectCardsObjects = [
        {
            'imgSrc': HotDoggityDogWalkerScheduleImg,
            'cardTitle': 'Hot Doggity Dog Walkers',
            'cardText': 'An advanced project for a pet care business website created in collaboration with Anastasiia Ivanova and Whitney Heacock. Tech stack: React, React Context, Bootstrap, React Bootstrap, Python, Flask, Flask SQLAlchemy, PostgreSQL, FlaskJWTExtended, Werkzeug, SMTPLib, Google-Api-Python-Client, Axios, Base64, PayPal API.',

        },
        {
            'imgSrc': AlienInvadersImg,
            'cardTitle': 'Alien Invaders',
            'cardText': 'A purely front end submission for the Fall 2023 React Game Jam. Tech stack: React, React Redux and React Pixi.',

        },
        {
            'imgSrc': SimpleJWTAuthenticationImg,
            'cardTitle': 'Simple JWT Authentication Proof-Of-Concept',
            'cardText': 'A very simple (proof of concept/ability to do this) JWT authentication system. Tech stack: React, Bootstrap, Python, Flask, FlaskJWTExtended.',
        },
    ]

    const projectModalsObjects = [
        {
            'projectHeader': 'Hot Doggity Dog Walkers',
            'projectBody': 'This was the capstone project for my coding boot camp. It involved JWT authentication and the use of multiple third-party APIs. My personal contributions to this project included the entire scheduling system with integrated payments, as well as some styling. The webpages I created were mobile-friendly, and I integrated the Google Calendar and PayPal APIs. I wrote all of the backend endpoints that I used on my pages, and all of the front end logic for them as well, though I should add that I did adapt a tutorial to create a CSS effect on the card view for services, and I also adapted a tutorial to create the calendar for picking months/years/dates to schedule services on, but the component with actual timeslots was something I built from scratch.',
            'vidSrc': 'https://www.youtube.com/embed/ILjzmFSLJvo?si=p9z1UsZIA75N28BR',
        },
        {
            'projectHeader': 'Alien Invaders',
            'projectBody': 'This is a game I created for the Fall 2023 React Game Jam just for fun. The player fights off repeated waves of enemies which scale in difficulty, while buying upgrades between rounds with an in-game currency obtained by defeating enemies. The game is lost if too many enemy shots hit the player, or too many enemies advance past the player. I mainly used React, React Redux, and React Pixi on this project, as well as just general JavaScript.',
            'vidSrc': 'https://www.youtube.com/embed/3INs7TnCF5g?si=UHnL7GTZ7OLBpTqp',
        },
        {
            'projectHeader': 'Simple JWT Authentication Proof-Of-Concept',
            'projectBody': 'This was the first full stack application I created, and is quite simple as such. I wrote both the backend API endpoints and the front end pages which interact with them. The application allows a user to create an account, log in or out, and while logged in, view private user info.',
            'vidSrc': 'https://www.youtube.com/embed/Y_IR_tMm-Ek?si=wEi-n6kf2KexyvJu',
        }

    ]
  

    return (
        <div id='projects' className={`block px-4 md:flex mt-96 overflow-hidden`}>
            {projectCardsObjects.map((obj) => {
                return (
                <ProjectCard obj={obj}/>
                )
            })}
            {projectModalsObjects.map((obj) => {
                return (
                    <ProjectModal obj={obj}/>
                )
            })}
        </div>
    )
  }
  
  export default Projects