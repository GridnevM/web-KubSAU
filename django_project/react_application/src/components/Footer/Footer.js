import "./style.css"
const Footer = () => {
   
    return ( 
        <div className="Footer">
        <div className="adres">
            <a href="https://yandex.ru/maps/org/fgbou_vo_kubanskiy_gosudarstvenny_agrarny_universitet_imeni_i_t_trubilina/1201799192/?ll=38.926394%2C45.046661&mode=search&sll=38.926394%2C45.046661&sspn=0.007703%2C0.003107&text=кубгау&z=18" target="_blank" rel="noopener noreferrer">
                <span className="address-text">
                    350044, Россия, г. Краснодар,<br /> ул. Калинина, 13
                </span>
            </a>
        </div>
        <div className="telpot">
        <a href="mailto:mail@kubsau.ru">
        <span className="telepot-text" >mail@kubsau.ru</span>
        </a>
   
            <br /> 
            <a href="tel:+78612215942">
                <span className="telepot-text" >+7 (861) 221-59-42</span>
            </a>
        </div>
    </div>
     );
}
 
export default Footer;