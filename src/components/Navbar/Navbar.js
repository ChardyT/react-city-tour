import React from 'react'
import "./Navbar.scss"
import logo from '../../logo.jpg';

export default function Navbar() {
  return (
    <div>
       <nav className="navbar">

        <img src={logo} className="App-logo" alt="city tour logo" />
        
        <ul className="navItems">
           <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/tours" className="nav-link active">Tours</a></li>
        </ul>

       </nav>
    </div>
  )
}
