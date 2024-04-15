import React from 'react';
import logo from "./../../img/logo-white.png";
import "./style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <div className="menu-group">
                <NavLink to="/University" className="menu_link">УНИВЕРСИТЕТ</NavLink>
                <NavLink to="/Korpusa" className="menu_link">КОРПУСА</NavLink>
            </div>
            <div className="logo-container">
                <NavLink to="/" className="logo">
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <div className="menu-group">
                <NavLink to="/Musei" className="menu_link">МУЗЕИ</NavLink>
                <NavLink to="/Dendrik" className="menu_link">ДЕНДРАРИЙ</NavLink>
            </div>
        </div>
    );
}

export default Header;
