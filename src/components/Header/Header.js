import React from 'react';
import logo from "./../../img/logo-white.png";
import "./style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <NavLink to="/" className="logo">
                <img src={logo} alt="logo" />
            </NavLink>
            <ul className="menu-list">
                <li><NavLink to="/University" className="menu_link">УНИВЕРСИТЕТ</NavLink></li>
                <li><NavLink to="/Korpusa" className="menu_link">КОРПУСА</NavLink></li>
                <li><NavLink to="/Musei" className="menu_link">МУЗЕИ</NavLink></li>
                <li><NavLink to="/Dendrik" className="menu_link">ДЕНДРАРИЙ</NavLink></li>
            </ul>
        </div>
    );
}
 
export default Header;
