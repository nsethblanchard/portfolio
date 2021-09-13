import React from 'react'
import image from '../pics/homePageHammock.jpg'
// import profileImage from '../pics/profile.jpeg'
import ruby from '../logos/ruby.png'
import rails from '../logos/rails.png'
import reactRedux from '../logos/react-redux.png'
import js from '../logos/js.png'
import html from '../logos/html.png'
import css from '../logos/css.png'
import sqlite from '../logos/Sqlite.png'
import vscode from '../logos/vscode.png'
import myface from '../pics/myFace.png'

function Home() {
    return (
       <main>
           <img src={image} alt="Hammocks and Mountain Views" className="absolute object-cover w-full h-full"/>
           
           <img src={myface} alt="My Face" className="relative pt-8 mx-auto opacity-90"/>

          
           <section className="p-8 relative justify-center grid grid-cols-4 md:grid-cols-8 md:mx-72 gap-3">
                <img
                    src={html}
                    alt='html'
                    className="border-solid border-2 bg-gray-500 opacity-90 rounded-xl"
                />
                <img
                    src={ruby}
                    alt='ruby'
                    className="border-solid border-2 bg-gray-500 opacity-90 rounded-xl"
                />
                <img
                    src={rails}
                    alt='rails'
                    className="rounded-xl border-solid border-2 bg-gray-500 opacity-90"
                />
                <img
                    src={js}
                    alt='javascript'
                    className="rounded-xl border-solid border-2 bg-gray-500 opacity-90"
                />
                <img
                    src={reactRedux}
                    alt='react and redux'
                    className="rounded-xl border-solid border-2 bg-gray-500 opacity-90"
                />
                <img
                    src={css}
                    alt='css'
                    className="rounded-xl border-solid border-2 bg-gray-500 opacity-90"
                />
                <img
                    src={vscode}
                    alt='vscode'
                    className="rounded-xl border-solid border-2 bg-gray-500 opacity-90"
                />
                <img
                    src={sqlite}
                    alt='sqlite'
                    className="rounded-xl border-solid border-2 bg-gray-500 opacity-90"
                />

           </section>

           <section className="relative justify-center bg-gray-600 md:mx-72 md:rounded-xl opacity-80">  
                <h2 className="relative mx-auto flex text-xl md:text-5xl justify-center text-blue-200 font-semibold">Seth Blanchard- Full Stack Developer</h2>
                <h3 className="pb-2 relative mx-auto flex text-xl md:text-3xl justify-center text-blue-200 font-semibold">nsethblanchard@gmail.com</h3>
           </section>
           
       </main> 
    )
}


export default Home;