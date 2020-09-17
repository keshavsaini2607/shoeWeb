import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'



function Header() {
    return (
        <div className="header">
            <div className="logo">
            <h2>Grail report</h2>
            </div>
            <ul className="header__option">
            <li>
            <Link  className="links" to="/">Home</Link>
            </li>
            <li>
            <Link  className="links"  to="/blog" >Blog</Link>
            </li>
            </ul>
        </div>
    )
}

export default Header
