import React from 'react'
import resume from '../Resume.jpg'
import photo from "../pics/buildings.jpg"


function Resume() {
    return (
        <main className="bg-gray-700">
            <img
                src={photo}
                alt="background picture"
                className="absolute h-screen md:object-cover md:w-full md:h-auto bg-gray-700"
               
            />
            <div className='justify-center'>
                <img className="relative pt-8 md:pt-12 pb-10 px-5 mx-auto opacity-90" src={resume} alt="Seth Blanchard's Resume"/>
            </div>
        </main>
    )
}

export default Resume;