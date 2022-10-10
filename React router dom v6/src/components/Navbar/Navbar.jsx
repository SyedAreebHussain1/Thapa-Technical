import React from "react"
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <h1>React Router v6</h1>
            <ul>
                {/* <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li> */}

                {/* NavLink color change kar karta ha link ka jis NavLink pe hum click karty ha usko */}
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar