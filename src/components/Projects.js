import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js'

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
        <main className="bg-gray-300 min-h-screen p-8">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Current Project Builds</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12 mt-2">Thanks for looking</h2>
                <section className='grid grid-cols-2 gap-8'>
                    
                    {projectData && projectData.map((project, index) => (
                    
                    <article key={index} className='relative rounded-lg shadow-xl bg-white p-4'>
                        <h3  className='text-gray-800 text-2xl font-bold mb-2 hover:text-green-500'> 
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
                        <strong className='font-bold text-xs'>Using: </strong>
                        
                        {project.tags.map((tag) => (
                            <span className="text-xs font-bold text-green-500">{tag}{' '}</span>
                        ))}

                        <div className='text-xs'>
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
                                    className="text-green-500 font-bold hover:underline hover:text-green-400"
                                >
                                    View The Project
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