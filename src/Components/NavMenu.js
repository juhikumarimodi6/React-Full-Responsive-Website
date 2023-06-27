import React from "react";
import "./Navbar.css"

const NavMenu = ({hamburger, setHamburger}) => {
    return (
        <div className={!hamburger? "nav-menu-container nav-menu-mobile" : "nav-menu-container"}>
            <li><a href = "./Home.js" className="nav-menu">Home</a></li>
            <li><a href = "./Services.js" className="nav-menu">Services</a></li>
            <li><a href = "./Products.js" className="nav-menu">Products</a></li>
            <li><a href = "#SignUp" className="nav-menu signUp">Sign Up</a></li>
        </div>
    )
}

export default NavMenu;