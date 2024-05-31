import React, { useState } from 'react';
import istor from "./img/исторический.png";
import alleya from "./img/аллея.png";
import zolog from "./img/зоолог.png";
import poch from "./img/почвенный.png";
import geo from "./img/геолог.png";
import ot from "./img/энто.png"
import pat from "./img/патолог.png"
import anatom from "./img/анатом.png"
import sport from "./img/sport.png"
import './style.css';
import { NavLink } from "react-router-dom";

const Musei = () => {
   const [hovered1, setHovered1] = useState(false); 
   const [hovered2, setHovered2] = useState(false);
   const [hovered3, setHovered3] = useState(false); 
   const [hovered4, setHovered4] = useState(false); 
   const [hovered5, setHovered5] = useState(false);
   const [hovered6, setHovered6] = useState(false);
   const [hovered7, setHovered7] = useState(false);
   const [hovered8, setHovered8] = useState(false);
   const [hovered9, setHovered9] = useState(false);

   const handleMouseEnter1 = () => {
       setHovered1(true);
   };

   const handleMouseLeave1 = () => {
       setHovered1(false);
   };

   const handleMouseEnter2 = () => {
       setHovered2(true);
   };

   const handleMouseLeave2 = () => {
       setHovered2(false);
   };
   const handleMouseEnter3 = () => {
      setHovered3(true);
  };

  const handleMouseLeave3 = () => {
      setHovered3(false);
  };
  const handleMouseEnter4 = () => {
   setHovered4(true);
   };

   const handleMouseLeave4 = () => {
      setHovered4(false);
   };
   const handleMouseEnter5 = () => {
      setHovered5(true);
   };

   const handleMouseLeave5 = () => {
      setHovered5(false);
   };
   const handleMouseEnter6 = () => {
      setHovered6(true);
   };

   const handleMouseLeave6 = () => {
      setHovered6(false);
   };
   const handleMouseEnter7 = () => {
      setHovered7(true);
   };

   const handleMouseLeave7 = () => {
      setHovered7(false);
   };
   const handleMouseEnter8 = () => {
      setHovered8(true);
   };

   const handleMouseLeave8 = () => {
      setHovered8(false);
   };
   const handleMouseEnter9 = () => {
      setHovered9(true);
   };

   const handleMouseLeave9 = () => {
      setHovered9(false);
   };



    return ( 
        <div className="Musei">

         <div className="t1">
            <p>Музеи Кубанского ГАУ</p>
         </div>

         <div className="t2">
            <p>На территории университета расположено 9 музеев и множество других памятников архитектуры</p>
         </div>
         <div className="container">
            <NavLink to="/Musei1" className="musei_link">
         <div className="r1" 
              onMouseEnter={handleMouseEnter1} 
              onMouseLeave={handleMouseLeave1}
              style={{ background: hovered1 ? '#287828' : '#61AA2A' }}>
            <div className="photo1">
                <img src={istor} alt="исторический музей"/>
            </div>
            <div className="textm">
               <p>Исторический музей</p>
            </div>
         </div>
         </NavLink>
         <NavLink to="/Musei2" className="musei_link">
         <div className="r2" 
              onMouseEnter={handleMouseEnter2} 
              onMouseLeave={handleMouseLeave2}
              style={{ background: hovered2 ? '#287828' : '#61AA2A' }}>
            <div className="photo2">
                <img src={alleya} alt="Алля славы"/>
            </div>
            <div className="textm1">
               <p>Аллея славы</p>
            </div>
         </div>
         </NavLink>
         <NavLink to="/Musei3" className="musei_link">
         <div className="r3" 
              onMouseEnter={handleMouseEnter3} 
              onMouseLeave={handleMouseLeave3}
              style={{ background: hovered3 ? '#287828' : '#61AA2A' }}>
            <div className="photo3">
                <img src={zolog} alt="Зоологический"/>
            </div>
            <div className="textm2">
               <p>Зоологический музей</p>
            </div>
         </div>
         </NavLink>
         <NavLink to="/Musei4" className="musei_link">
         <div className="r4" 
              onMouseEnter={handleMouseEnter4} 
              onMouseLeave={handleMouseLeave4}
              style={{ background: hovered4 ? '#287828' : '#61AA2A' }}>
            <div className="photo4">
                <img src={poch} alt="Почвеный музей"/>
            </div>
            <div className="textm3">
               <p>Почвенный музей</p>
            </div>
         </div>
         </NavLink>
         <NavLink to="/Musei5" className="musei_link">
         <div className="r5" 
              onMouseEnter={handleMouseEnter5} 
              onMouseLeave={handleMouseLeave5}
              style={{ background: hovered5 ? '#287828' : '#61AA2A' }}>
            <div className="photo5">
                <img src={geo} alt="Геологический музей"/>
            </div>
            <div className="textm4">
               <p>Геологический музей</p>
            </div>
         </div>
         </NavLink>
         <NavLink to="/Musei6" className="musei_link">
         <div className="r6" 
              onMouseEnter={handleMouseEnter6} 
              onMouseLeave={handleMouseLeave6}
              style={{ background: hovered6 ? '#287828' : '#61AA2A' }}>
            <div className="photo6">
                <img src={ot} alt="Энтомологический музей"/>
            </div>
            <div className="textm5">
               <p>Энтомологический музей</p>
            </div>
         </div>
         </NavLink>
         <NavLink to="/Musei7" className="musei_link">
         <div className="r7" 
              onMouseEnter={handleMouseEnter7} 
              onMouseLeave={handleMouseLeave7}
              style={{ background: hovered7 ? '#287828' : '#61AA2A' }}>
            <div className="photo7">
                <img src={pat} alt="Паталогоанатомический музей"/>
            </div>
            <div className="textm6">
               <p>Паталогоанатомический музей</p>
            </div>
         </div>
         </NavLink>
         <NavLink to="/Musei8" className="musei_link">
         <div className="r8" 
              onMouseEnter={handleMouseEnter8} 
              onMouseLeave={handleMouseLeave8}
              style={{ background: hovered8 ? '#287828' : '#61AA2A' }}>
            <div className="photo8">
                <img src={anatom} alt="анатомический"/>
            </div>
            <div className="textm8">
               <p>Анатомический музей</p>
            </div>
         </div>
         </NavLink>
         <NavLink to="/Musei9" className="musei_link">
         <div className="r9" 
              onMouseEnter={handleMouseEnter9} 
              onMouseLeave={handleMouseLeave9}
              style={{ background: hovered9 ? '#287828' : '#61AA2A' }}>
            <div className="photo9">
                <img src={sport} alt="2"/>
            </div>
            <div className="textm9">
               <p>Музей спортивных достижений</p>
            </div>
         </div>
         </NavLink>
        </div>
        </div>
     );
}
 
export default Musei;