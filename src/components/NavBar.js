import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <header className="bg-gray-600 md:h-24">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
        <NavLink
          to="/"
          exact
          activeClassName="text-white-100"
          // activeClassName is only used when user is on the linked page
          className="items-center py-6 px-3 mr-4 mt-2 text-blue-100 hover-nav text-3xl font-bold cursive tracking-wide"
        >
          Seth Blanchard
        </NavLink>

        <NavLink
            to='/projects'
            activeClassName="text-white-100 bg-gray-700"
            className='hidden md:flex text-2xl inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover-nav'
        >
            Projects
        </NavLink>

        <NavLink
                      to='/resume'
                      activeClassName="text-white-100 bg-gray-700"
                      className='hidden md:flex text-2xl inline-flex items-center py-2 px-2 my-6 rounded text-blue-200 hover-nav'
                  >
                      Resume
                  </NavLink >

                  <NavLink
                      to='/about'
                      activeClassName="text-white-100 bg-gray-700"
                      className='hidden md:flex text-2xl inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover-nav'
                  >
                      About
                  </NavLink>

                  <NavLink
                      to='/activities'
                      activeClassName="text-white-100 bg-gray-700"
                      className='hidden md:flex text-2xl inline-flex items-center py-2 px-2 my-6 rounded text-blue-200 hover-nav'
                  >
                      Activities
                  </NavLink >
        
        <div className="flex pt-2 md:hidden">
          {/* hamburger icon */}
          <button>
            <svg
              className="h-8 w-8 mx-auto fill-current text-gray-500 hover:text-gray-200"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
            </svg>
          </button>
        </div>

        </nav>
        <div className="inline-flex pt-7 md:py-3 px-4 my-6">
          <SocialIcon url="https://github.com/nsethblanchard" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 32, width: 32 }}/>
          <SocialIcon url="https://www.linkedin.com/in/seth-blanchard-2042ba89/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 32, width: 32 }}/>
          <SocialIcon url="https://twitter.com/nsethblanchard" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 32, width: 32 }}/>
        </div>


      </div>
    </header>
  );

  //    <header className="bg-gray-600 w-full">
  //        <div className="container mx-auto flex justify-between">
  //            <nav className="flex">
  //                 <NavLink
  //                     to='/'
  //                     exact
  //                     activeClassName="text-white-100"
  //                     // activeClassName is only used when user is on the linked page
  //                     className="items-center py-6 px-3 mr-4 mt-2 text-blue-100 hover-nav text-3xl font-bold cursive tracking-wide"
  //                 >
  //                     Seth Blanchard
  //                 </NavLink>

                  // <NavLink
                  //     to='/projects'
                  //     activeClassName="text-white-100 bg-gray-700"
                  //     className='text-2xl inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover-nav'
                  // >
                  //      Projects
                  // </NavLink>

                  // <NavLink
                  //     to='/resume'
                  //     activeClassName="text-white-100 bg-gray-700"
                  //     className='text-2xl inline-flex items-center py-2 px-2 my-6 rounded text-blue-200 hover-nav'
                  // >
                  //     Resume
                  // </NavLink >

                  // <NavLink
                  //     to='/about'
                  //     activeClassName="text-white-100 bg-gray-700"
                  //     className='text-2xl inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover-nav'
                  // >
                  //     About
                  // </NavLink>

                  // <NavLink
                  //     to='/activities'
                  //     activeClassName="text-white-100 bg-gray-700"
                  //     className='text-2xl inline-flex items-center py-2 px-2 my-6 rounded text-blue-200 hover-nav'
                  // >
                  //     Activities
                  // </NavLink >

  //            </nav>

  //            {/* going to use package react-social-icons */}
  //            <div className="inline-flex py-3 px-4 my-6">
  //                 <SocialIcon url="https://github.com/nsethblanchard" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 32, width: 32 }}/>
  //                 <SocialIcon url="https://www.linkedin.com/in/seth-blanchard-2042ba89/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 32, width: 32 }}/>
  //                 <SocialIcon url="https://twitter.com/nsethblanchard" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 32, width: 32 }}/>
  //            </div>
  //        </div>
  //    </header>
  // )
}

export default NavBar;
