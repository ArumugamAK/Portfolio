import React from 'react'
import website1 from '../asserts/Google-clone.png'
import website2 from '../asserts/Youtube-clone.png'
import website3 from '../asserts/Chat-Application.png'
import website4 from '../asserts/Room-Booking.png'
import website5 from '../asserts/Group-chat.png'
import website6 from '../asserts/Book-add.png'
export const Project = () => {
    const config1 = {
        projects : [
            {
                image: website2,
                description: 'A YouTube-Clone Website. Built with TypeScript,React and API-KEY',
                link: 'https://arumugamak.github.io/YouTube-clone/'
            },
            {
                image: website1,
                description: 'A Google-Clone website. Built with MERN STACK and API-KEY',
                link: 'https://arumugamak.github.io/Google_clone/'
            },
            {
                image: website3,
                description: 'A Real-Time-Chat-Application Dynamic Website. Built with MERN STACK and FireBase',
                link: 'https://github.com/ArumugamAK/Chat-application'
            }
        ]
    }
    const config2 = {
        projects : [
            {
                image: website4,
                description: 'A Room Booking Dynamic Website . Built with Html, Bootstrap, Js, Node, MongoDb',
                link: 'https://github.com/ArumugamAK/Room-Booking'
            },
            {
                image: website5,
                description: 'A Group-chat Dynamic website. Built with MERN STACk and Firebase',
                link: 'https://github.com/ArumugamAK/group_chat'
            },
            {
                image: website6,
                description: 'Basic Book-add Website. Built with Html, Css and js',
                link: 'https://github.com/ArumugamAK/Book-Add/tree/main/CSS_PROJECT'
            }
        ]
    }

    return <section id='project' className="flex  flex-col px-5  bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-7 py-10 items-center ">
                <h1 className="border-b-4 border-primary mb-5 w-[150px] font-bold text-4xl">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config1.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[300px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-6'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link} >View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
            <div className='flex flex-col md:flex-row px-10 gap-5 py-10'>
                {config2.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[300px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-6'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}
