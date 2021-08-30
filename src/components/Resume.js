import React from 'react'
import resume from '../Resume.jpg'
import photo from "../pics/buildings.jpg"


function Resume() {
    return (
        <main>
            <img
                src={photo}
                alt="background picture"
                className="absolute object-cover w-full"
                // className="absolute w-full"
            />
            <div className='bg-gray-400 pt-16 pb-24 mx-80 lg:mx-96'>
                <img className="object-fill shadow-2xl opacity-90" src={resume} alt="Seth Blanchard's Resume"/>
            </div>
        </main>
    )
}

export default Resume;