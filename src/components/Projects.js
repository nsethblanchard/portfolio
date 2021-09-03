import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js'
import photo from '../pics/milky-way.jpg'

function Projects() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main>
            <img src={photo} alt="background picture" className="absolute w-full"/>
            
            <section className="container mx-auto relative">
                <h1 className="p-8 text-5xl flex text-gray-200 justify-center cursive">Current Project Builds</h1>               
                <section className='grid grid-cols-2 md:grid-cols-3 gap-8'>
                    
                    {projectData && projectData.map((project, index) => (
                    
                    <article key={index} className='m-7 relative rounded-lg bg-white opacity-80 p-4'>
                        <h3  className='text-gray-800 text-3xl font-bold mb-2 hover:text-purple-600'> 
                            <a 
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                // this removes the referral option with HTTP header
                                rel="noopener noreferrer"
                            >
                                {project.title}
                            </a>
                        </h3>
                        <strong className='font-bold'>Languages/Frameworks: </strong>
                        
                        {project.tags.map((tag) => (
                            <span className="font-bold">{tag}{' '}</span>
                        ))}

                        <div className='pt-3'>
                            <p className="mb-2 text-gray-700">{project.description}</p>
                            <span>
                                <strong className='font-bold'>Completed For</strong>:{'  '}
                                {project.projectType}
                            </span>
                            <span>
                                {/* quickest way to use JS to add data without an extra package */}
                                {'   '}<strong className='font-bold'>Finished on</strong>:{' '}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <div className="mt-3">
                                <a href={project.link} 
                                    rel="noopener noreferrer" 
                                    target="_blank" 
                                    className="text-purple-800 text-xl font-bold hover:underline hover:text-purple-500"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>

    )
}


export default Projects;