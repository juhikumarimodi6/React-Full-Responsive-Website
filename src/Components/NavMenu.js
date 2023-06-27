import React from "react";
import "./Navbar.css"

const NavMenu = () => {
    return (
        <div className="nav-menu-container">
        <span className="nav-menu">Home</span>
        <span className="nav-menu">Services</span>
        <span className="nav-menu">Products</span>
        <span className="nav-menu signUp">Sign Up</span>
    </div>
    )
}

export default NavMenu;