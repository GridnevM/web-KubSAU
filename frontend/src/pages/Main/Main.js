import React from 'react';
import "./style.css";
import main_page from "./../../img/main_page.png";
import main_page2 from "./../../img/main_page2.png";
import main_page3 from "./../../img/main_page3.png";
import main_page4 from "./../../img/main_page4.png";
import main_page5 from "./../../img/main_page5.png";
import main_page6 from "./../../img/main_page6.png";
import main_page7 from "./../../img/main_page7.png";
import { NavLink } from "react-router-dom";

const Main = () => {
    return (
        <div className="Main">
            <div className="text">
                <p>Путеводитель по интересным местам КубГАУ</p>
            </div>
            <div className="Photo">
                <div className="photo photo11">
                    <img src={main_page} alt="1" />
                </div>
                <div className="photo photo22">
                    <img src={main_page2} alt="2" />
                </div>
                <div className="photo photo33">
                    <img src={main_page3} alt="3" />
                </div>
                <div className="photo photo44">
                    <img src={main_page4} alt="4" />
                </div>
                <div className="photo photo55">
                    <img src={main_page5} alt="5" />
                </div>
                <div className="photo photo66">
                    <img src={main_page6} alt="6" />
                </div>
                <div className="photo photo77">
                    <img src={main_page7} alt="7" />
                </div>
            </div>
            <div className="text1">
            <p>Данный сайт является мини-путеводителем по интересным местам Кубанского государственного аграрного университета. Здесь вы найдете подробную информацию о самых знаковых и уникальных местах на территории университета.
Сайт предлагает погрузиться в историю создания университета, рассказывая о его основании, важных событиях и достижениях. Вы сможете узнать об архитектурных особенностях корпусов университета и их историческом значимости.
Особое внимание уделено музеям, находящимся в корпусах университета. Здесь вы сможете узнать о экспонатах, которые позволят вам ближе познакомиться с историей и культурой университета.
С помощью сайта Вы сможете пройти увлекательную экскурсию по Кубанскому государственному аграрному университету, познакомиться с его достопримечательностями и насладиться уникальной атмосферой этого учебного заведения.
</p>            </div>
            <NavLink to="/University">
                <button className="button">Увидеть больше!</button>
            </NavLink>
        </div>
    );
}

export default Main;