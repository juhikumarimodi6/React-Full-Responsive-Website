import React from "react";
import NavMenu from "./NavMenu";
import { SiYourtraveldottv } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = ({hamburger, setHamburger}) => {
    const handleHamburger = () => {
        setHamburger(!hamburger);
        console.log(hamburger)
    }
    return (
        <div className="nav-container">
            <div className="nav-logo-container">
                <div className="nav-logo"> 
                    <Link to="/">TRVL <SiYourtraveldottv /> </Link>
                </div>
            </div>
            <NavMenu 
                hamburger={hamburger}
                setHamburger={setHamburger}
            />
            <div className="hamburger-icon" onClick={handleHamburger}>
                    {hamburger?<GiHamburgerMenu />: <ImCross />}
            </div>
        </div>
    )
}

export default Navbar;