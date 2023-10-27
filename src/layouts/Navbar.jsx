import React from "react";
import "../assets/css/navbar.css"
import { Link } from "react-router-dom";
import Logo from '../assets/images/Logo.png';
const Navbar =()=>{
return (
    <div>
     <header className="header">   
     <nav className="navbar">          
            <ul>   
                <li className="logo-li">
                <img className="logo" src={Logo} alt="Logo" />
                </li>      
                <li>
                <Link className={window.location.pathname=="/" ? "nav-active":" "} to="/">Car</Link>               
                </li>
                <li>
                <Link className={window.location.pathname=="/cycle" ? "nav-active":" "} to="/cycle">Cycle</Link>     
                </li>
                <li>
                <Link className={window.location.pathname=="/bike" ? "nav-active":" "} to="/bike">Bike</Link>     
                </li>
                <li>
                    <input className="search-bar" type="text" placeholder="Search..."/>
                </li>
            </ul>
       </nav>
     </header>
    </div>
)
}

export default Navbar;

