import React from 'react'

function Hamburger() {
    return (
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
    )
}

export default Hamburger
