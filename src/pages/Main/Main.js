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
              <div className="text1">
                <p>Кубанский государственный аграрный университет - вуз с богатой историей и просторной территорией, на территории 174га расположилось  учебных корпусов, спортивный комплекс с бассейном и скалодромом, а также большое количество..... dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
                <button className="button">
                  Увидеть больше!
                  </button>
          


            </div>    
   
        
    );
}
 
export default Main;