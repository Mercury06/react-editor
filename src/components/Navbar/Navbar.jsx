import React from "react";
import "./Navbar.scss"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="navbar_item">
                <NavLink to="/main" className="active_link">main</NavLink>
            </div>
            <div className="navbar_item">
            <NavLink to="/list">list</NavLink>
            </div>
           
        </div>
    )
}

export default Navbar;

