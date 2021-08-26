import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function NavBar() {
    return (
       <header className="bg-gray-600 h-20">
           <div className="container mx-auto flex justify-between">
               <nav className="flex">
                    <NavLink 
                        to='/' 
                        exact 
                        activeClassName="text-white-100"
                        // activeClassName is only used when user is on the linked page
                        className="items-center py-6 px-3 mr-4 text-blue-100 hover-nav text-3xl font-bold cursive tracking-wide"
                    >
                        Seth Blanchard
                    </NavLink>

                    <NavLink 
                        to='/projects' 
                        activeClassName="text-white-100 bg-gray-700"
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover-nav'
                    >
                         Projects
                    </NavLink>

                    <NavLink 
                        to='/activities' 
                        activeClassName="text-white-100 bg-gray-700"
                        className='inline-flex items-center py-2 px-2 my-6 rounded text-blue-200 hover-nav'
                    >
                        Extra-curricular
                    </NavLink >
                    
                    <NavLink 
                        to='/resume' 
                        activeClassName="text-white-100 bg-gray-700"
                        className='inline-flex items-center py-2 px-2 my-6 rounded text-blue-200 hover-nav'
                    >
                        Resume
                    </NavLink >

                    <NavLink 
                        to='/about' 
                        activeClassName="text-white-100 bg-gray-700"
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover-nav'
                    >
                        Bio
                    </NavLink>
               </nav>
               
               {/* going to use package react-social-icons */}
               <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/nsethblanchard" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }}/>
                    <SocialIcon url="https://www.linkedin.com/in/seth-blanchard-2042ba89/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }}/>
                    <SocialIcon url="https://twitter.com/nsethblanchard" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }}/>
               </div>
           </div>
       </header> 
    )

}


export default NavBar;