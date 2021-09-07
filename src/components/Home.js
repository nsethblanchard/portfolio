import React from 'react'
import image from '../pics/homePageHammock.jpg'
import profileImage from '../pics/profile.jpeg'
import ruby from '../logos/ruby.png'
import rails from '../logos/rails.png'
import reactRedux from '../logos/react-redux.png'
import js from '../logos/js.png'
import html from '../logos/html.png'
import css from '../logos/css.png'
import sqlite from '../logos/sqlite.png'
import vscode from '../logos/vscode.png'

function Home() {
    return (
       <main>
           <img src={image} alt="Hammocks and Mountain Views" className="absolute object-cover w-full h-full"/>
           <img src={profileImage} alt="My ugly mug" className="relative transform scale-50 face rounded-full opacity-90"/>
           
           <section className="relative px-48 -mt-36 pb-12 justify-center grid grid-cols-8">
                <img
                    src={html}
                    alt='html'
                    className="proglogos p-1 border-solid border-2 bg-gray-500 opacity-90 rounded-xl"
                />
                <img
                    src={ruby}
                    alt='ruby'
                    className="proglogos p-1 border-solid border-2 bg-gray-500 opacity-90 rounded-xl"
                />
                <img
                    src={rails}
                    alt='rails'
                    className="rounded-xl p-1 proglogos border-solid border-2 bg-gray-500 opacity-90"
                />
                <img
                    src={js}
                    alt='javascript'
                    className="rounded-xl p-1 proglogos border-solid border-2 bg-gray-500 opacity-90"
                />
                <img
                    src={reactRedux}
                    alt='react and redux'
                    className="rounded-xl p-1 proglogos border-solid border-2 bg-gray-500 opacity-90"
                />
                <img
                    src={css}
                    alt='css'
                    className="rounded-xl p-1 proglogos border-solid border-2 bg-gray-500 opacity-90"
                />
                <img
                    src={vscode}
                    alt='vscode'
                    className="rounded-xl p-1 proglogos border-solid border-2 bg-gray-500 opacity-90"
                />
                <img
                    src={sqlite}
                    alt='sqlite'
                    className="rounded-xl p-1 border-solid border-2 bg-gray-500 opacity-90"
                />

           </section>

           <section className="relative justify-center mx-48 rounded-xl bg-gray-500 opacity-80">  
                <h2 className="relative mx-auto flex text-5xl justify-center text-gray-100 font-semibold">Seth Blanchard- Full Stack Developer</h2>
                <h3 className="relative mt-3 mx-auto flex text-3xl justify-center text-gray-100 font-semibold">nsethblanchard@gmail.com</h3>
           </section>
           
       </main> 
    )
}


export default Home;