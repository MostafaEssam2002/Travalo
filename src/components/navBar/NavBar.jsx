import React, { useState } from 'react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='navbar_section x_padding'>
      <div className="navbar_section_logo">
        <h1>Travello</h1>
      </div>
      <div className="navbar_section_menue">
        <ul className={isMenuOpen ? 'active' : ''}>
          <li>
            <a href="#" onClick={closeMenu}>Destination</a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>Our Activities</a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>Trips</a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>WHO WE ARE ?</a>
          </li>
        </ul>
        <div className="hamburger_menu" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar