import React from "react";
import "./Navbar.scss"
import {Link} from "react-router-dom";
import {nav} from "react-bootstrap";
import { LogoIcon } from "../UI/Icons/Boxicons";

const Navbar2 = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" >React todo app</a>
   
   
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/main" class="nav-item">Main</Link> 
          {/* <a class="nav-link active" aria-current="page" >Home</a> */}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Features">Features</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar2;

{/* <Nav.Item>
                    <Nav.Link as={NavLink} to={"/main"}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" as={NavLink} to={"/list"}>Option 2</Nav.Link>
                </Nav.Item>                 */}