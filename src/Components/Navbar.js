import React from "react";
import NavMenu from "./NavMenu";
import { SiYourtraveldottv } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import './Navbar.css'

const Navbar = ({hamburger, setHamburger}) => {
    const handleHamburger = () => {
        setHamburger(!hamburger);
        console.log(hamburger)
    }
    return (
        <div className="nav-container">
            <div className="nav-mobile">
                <div className="nav-logo"> 
                    TRVL <SiYourtraveldottv />
                </div>
                <div className="hamburger-icon" onClick={handleHamburger}>
                    {hamburger?<GiHamburgerMenu />: <ImCross />}
                </div>
            </div>
            <NavMenu />
        </div>
    )
}

export default Navbar;