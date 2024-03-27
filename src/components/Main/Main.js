import "./style.css"
import main_page from "./../../img/main_page.png"
import main_page2 from "./../../img/main_page2.png"
import main_page3 from"./../../img/main_page3.png";
import main_page4 from"./../../img/main_page4.png";
import main_page5 from"./../../img/main_page5.png";
import main_page6 from"./../../img/main_page6.png";
import main_page7 from"./../../img/main_page7.png";
const Main = () => {
    return (  
          <div className="Main">        
            <div className="text">
                <p>Путеводитель по интересным местам КубГАУ</p>
            </div>
           
                  <div className="Photo">
                <div className="photo photo1">
                  <img src={main_page} alt="1"/>
                </div>
                <div className="photo photo2">
                  <img src={main_page2} alt="2"/>
                </div>
                <div className="photo photo3">
                  <img src={main_page3} alt="3"/>
                </div>
                <div className="photo photo7">
                  <img src={main_page7} alt="7"/>
                </div>
                <div className="photo photo4">
                  <img src={main_page4} alt="4"/>
                </div>
                <div className="photo photo5">
                  <img src={main_page5} alt="5"/>
                </div>
                <div className="photo photo6">
                  <img src={main_page6} alt="6"/>
                </div>
              </div>


            </div>    
   
        
    );
}
 
export default Main;