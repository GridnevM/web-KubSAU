import logo from "./../../img/logo-white.png";
import "./style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
       <div className="Header">
            <div className="menu">
                <ul className="menu-list">
                    <li className="menu-university">
                        <NavLink to="/University" className="menu_link">
                           <p>УНИВЕРСИТЕТ</p> 
                        </NavLink>
                    </li>
                    <li className="menu-korpusa">
                        <NavLink to ="/Korpusa" className="menu_link">
                        <p>КОРПУСА</p>
                        </NavLink>
                    </li>
                    <li >
                    <NavLink to="/" className="logo">
                    <img src={logo} alt="logo"/>
                    </NavLink>
                    </li>
                    <li className="menu-musei">
                        <NavLink to="/Musei" className="menu_link">
                        <p>МУЗЕИ</p>
                        </NavLink>

                    </li>
                    <li className="menu-garden">
                        <NavLink to="/Dendrik" className="menu_link">
                        <p>ДЕНДРАРИЙ</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Header;
