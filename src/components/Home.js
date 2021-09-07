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
           
           <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <img
                    src={html}
                    alt='html'
                    className="proglogos bg-gray-400 opacity-80 rounded-2xl"
                />
                <img
                    src={ruby}
                    alt='ruby'
                    className="proglogos bg-gray-400 opacity-80 rounded-2xl"
                />
                <img
                    src={rails}
                    alt='rails'
                    className="rounded-2xl proglogos bg-gray-400 opacity-80"
                />
                <img
                    src={js}
                    alt='javascript'
                    className="rounded-2xl proglogos bg-gray-400 opacity-80"
                />
                <img
                    src={reactRedux}
                    alt='react and redux'
                    className="rounded-2xl proglogos bg-gray-400 opacity-80"
                />
                <img
                    src={css}
                    alt='css'
                    className="rounded-2xl proglogos bg-gray-400 opacity-80"
                />
                <img
                    src={vscode}
                    alt='vscode'
                    className="rounded-2xl proglogos bg-gray-400 opacity-80"
                />
                <img
                    src={sqlite}
                    alt='sqlite'
                    className="rounded-2xl bg-gray-400 opacity-80"
                />

           </section>

            
           <h2 className="relative mx-auto flex justify-center text-5xl text-gray-200 font-semibold">Seth Blanchard- Full Stack Developer</h2>
           <h3 className="relative mt-3 mx-auto flex justify-center text-3xl text-gray-200 font-semibold">nsethblanchard@gmail.com</h3>
           
           
       </main> 
    )
}


export default Home;