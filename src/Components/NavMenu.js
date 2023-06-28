import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const NavMenu = ({hamburger, setHamburger}) => {
    return (
        <div className={!hamburger? "nav-menu-container nav-menu-mobile" : "nav-menu-container"}>
            <Link to="/" className="nav-menu">Home </Link>
            <Link to="/services" className="nav-menu">Services</Link>
            <Link to="/products" className="nav-menu">Products</Link>
            <Link to="/signup" className="nav-menu  signUp">Sign Up</Link>
        </div>
    )
}

export default NavMenu;