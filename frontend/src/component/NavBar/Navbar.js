import React from 'react'
import "./navBar.css"
function Navbar() {
  return (
    <div className='cls'>
        <nav >
            <img className='deep' src="https://deepthought.education/assets/images/logo/logo.svg" alt="" />
            <div className="navbar-icon">
                <ul>
                    <li><a href="/"><i className="fa-solid fa-house home"></i></a></li>
                    <li><a href="/"><i className="fa-solid fa-screwdriver-wrench screw"></i></a></li>
                    <li><a href="/"><i className="fa-solid fa-bell bell"></i></a></li>
                    <li><a href="/"><i className="fa-solid fa-user user"></i></a></li>
                    <li><a href="/"><i className="fa-solid fa-ellipsis-vertical dot-menu"></i></a></li>
                </ul>           
            </div>
        </nav>
        
    </div>
  )
}
export default Navbar
