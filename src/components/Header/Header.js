import logo from "./../../img/logo-white.png";
import "./style.css";

const Header = () => {
    return ( 
       <div className="Header">
            <div className="menu">
                <ul className="menu-list">
                    <li className="menu-university">
                        <p>УНИВЕРСИТЕТ</p>
                    </li>
                    <li className="menu-korpusa">
                        <p>КОРПУСА</p>
                    </li>
                    <li className="logo">
                    <img src={logo} alt="logo" />
                    </li>
                    <li className="menu-musei">
                        <p>МУЗЕИ</p>
                    </li>
                    <li className="menu-garden">
                        <p>ДЕНДРАРИЙ</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Header;
