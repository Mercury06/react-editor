import React from "react";
import "./Navbar.scss"
import {NavLink} from "react-router-dom";
import {nav} from "react-bootstrap";
import { LogoIcon } from "../UI/Icons/Boxicons";

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

