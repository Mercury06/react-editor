import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { LogoIcon } from "../UI/Icons/Boxicons";
import "./MainPage.scss"

const MainPage = () => {

    return (
        <div className="content_block">   
            <LogoIcon />
            <div className="wrap_text_block">
                <h5>Wellcome to interactive react application!</h5>
                <p>You may navigate to <NavLink to="list" replace="true" >list</NavLink> and add some todos...</p>
            </div>
            
        </div>
    )
}

export default MainPage;