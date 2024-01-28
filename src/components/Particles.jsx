import React, { useCallback, useEffect, useState, useContext } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { Context } from '../store/appContext.jsx'


const ParticlesComponent = (props) => {
    const [ init, setInit ] = useState(false);

    const {store, actions} = useContext(Context)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, [store.darkMode]);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div>
            { init && <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={{
                    fullScreen:false,
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "attract",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 100,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                        },
                        move: {
                            direction: "up",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "square",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            className={`${store.darkMode ? 'darkmode' : 'lightmode'}`}/>}
        </div>
    )
}

export default ParticlesComponent