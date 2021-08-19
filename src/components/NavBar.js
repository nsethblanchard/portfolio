import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
       <header>
           <div>
               <nav>
                    <NavLink to='/' exact>
                        Seth
                    </NavLink>
                    <NavLink to='/post'>
                        Blog Posts
                    </NavLink >
                    <NavLink to='/project'>
                        Projects
                    </NavLink>
                    <NavLink to='/about'>
                        About Me!
                    </NavLink>
               </nav>
           </div>
       </header> 
    )

}


export default NavBar;