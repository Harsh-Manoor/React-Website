import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='nav-container'>
                    <NavLink exact to="/" className="nav-logo">HARSH</NavLink>
                </div>
                <ul className='nav-menu'>
                    <li className='nav-item'><NavLink exact to="/" activeClassName="active" className="nav-links">Home</NavLink></li>
                    <li className='nav-item'><NavLink exact to="/about" activeClassName="active" className="nav-links">About</NavLink></li>
                    <li className='nav-item'><NavLink exact to="/blog" activeClassName="active" className="nav-links">Blog</NavLink></li>
                    <li className='nav-item'><NavLink exact to="/contact" activeClassName="active" className="nav-links">Contact</NavLink></li>
                    <li className='nav-item'><NavLink exact to="/sign-in" activeClassName="active" className="nav-links">Sign In</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
