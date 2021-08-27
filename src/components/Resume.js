import React from 'react'
import resume from '../Resume.jpg'


function Resume() {
    return (
        <main className='bg-gray-400'>
            <div className='bg-gray-400 pt-16 pb-24 mr-60 ml-60'>
                <img classname="object-fill" src={resume} alt="Seth Blanchard's Resume"/>
            </div>
        </main>
    )
}

export default Resume;