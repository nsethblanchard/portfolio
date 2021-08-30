import React from 'react'
import image from '../pics/homePageHammock.jpg'
import profileImage from '../pics/profile.jpeg'

function Home() {
    return (
       <main>
           <img src={image} alt="Hammocks and Mountain Views" className="absolute object-cover w-full h-full"/>
           <img src={profileImage} alt="My ugly mug" className="relative transform scale-50 face rounded-3xl"/>
           
           <h2 className="relative mx-auto flex justify-center text-4xl text-white font-semibold">Seth Blanchard- Full Stack Developer</h2>
           <h3 className="relative mx-auto flex justify-center text-3xl text-white font-semibold">nsethblanchard@gmail.com</h3>
           
           
       </main> 
    )
}


export default Home;