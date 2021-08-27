import React from 'react'
import image from '../homePageHammock.jpg'

function Home() {
    return (
       <main>
           <img src={image} alt="Hammocks and Mountain Views" className="absolute object-cover w-full h-full"/>
           <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
               <h1 className="text-6xl text-white font-semibold leading-none"> My Amazing Portfolio</h1>
           </section>
       </main> 
    )
}


export default Home;