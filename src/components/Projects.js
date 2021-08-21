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
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my Projects Page!</h2>
                <section className='grid grid-cols-2 gap-8'>
                    <article className='relative rounded-lg shadow-xl bg-white p-16'>
                        <h3 className='text-gray-800 tex-3xl font-bold mb-2 hover:text-red-700'> 
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
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <p></p>
                            <span></span>
                        </div>
                    </article>
                </section>
            </section>
        </main>

    )
}


export default Projects;