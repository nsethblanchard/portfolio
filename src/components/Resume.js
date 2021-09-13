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
               
            />
            <div className='justify-center'>
                <img className="relative p-10 mx-auto opacity-90" src={resume} alt="Seth Blanchard's Resume"/>
            </div>
        </main>
    )
}

export default Resume;