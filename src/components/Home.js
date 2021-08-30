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
           

           <section className="relative px-60 -mt-44 pb-10 justify-center grid grid-cols-8 gap-3">
                <img
                    src={html}
                    alt='html'
                    className="proglogos"
                />
                <img
                    src={ruby}
                    alt='ruby'
                    className="proglogos"
                />
                <img
                    src={rails}
                    alt='rails'
                    className="rounded-2xl proglogos"
                />
                <img
                    src={js}
                    alt='javascript'
                    className="rounded-2xl proglogos"
                />
                <img
                    src={reactRedux}
                    alt='react and redux'
                    className="rounded-2xl proglogos"
                />
                <img
                    src={css}
                    alt='css'
                    className="rounded-2xl proglogos"
                />
                <img
                    src={sqlite}
                    alt='sqlite'
                    className="rounded-2xl "
                />
                <img
                    src={vscode}
                    alt='vscode'
                    className="rounded-2xl proglogos"
                />

           </section>

            
           <h2 className="relative mx-auto flex justify-center text-4xl text-gray-200 font-semibold">Seth Blanchard- Full Stack Developer</h2>
           <h3 className="relative mt-3 mx-auto flex justify-center text-3xl text-gray-200 font-semibold">nsethblanchard@gmail.com</h3>
           
           
       </main> 
    )
}


export default Home;