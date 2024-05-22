import React from 'react';
import { useNavigate } from 'react-router-dom';
import './korpus.css'; // Ensure your CSS file is linked correctly

// Import images
import glavnyKorpus from './../../img/list_korpus/glavni.JPG';
import zooinzhenernyKorpus from './../../img/list_korpus/zoo.jpeg';
import vetKorpus from './../../img/list_korpus/vet.JPG';
import elektroKorpus from './../../img/list_korpus/electro.jpg';
import fizKorpus from './../../img/list_korpus/fiz.JPG';
import gidroKorpus from './../../img/list_korpus/gidra.jpg';
import zashitaRasteniyKorpus from './../../img/list_korpus/zachita.JPG';
import mehanizaciyaKorpus from './../../img/list_korpus/meh.JPG';
import economKorpus from './../../img/list_korpus/econom.jpg';
import zaochnoeKorpus from './../../img/list_korpus/zaochka.jpg';

const Korpus = () => {
    const navigate = useNavigate(); // Initialize useHistory hook

    const korpuses = [
        { img: glavnyKorpus, title: 'Главный учебный корпус (ГЛ)', description: 'Старейший учебный корпус, здесь проходят занятия у таких-то факультетов, а также располагается крутейшая лаборатория для животноводов', link: '/Korpusa/Type_corpus/glavny' },
        { img: zooinzhenernyKorpus, title: 'Зооинженерный корпус (ЗОО)', description: 'Старейший учебный корпус, здесь проходят занятия таких-то факультетов, а также располагается крупнейшая лаборатория для животноводов', link: '/Korpusa/Type_corpus/zooinzhenerny' },
        { img: vetKorpus, title: 'Корпус ветеринарного отделения (ВМ)', description: 'Старейший учебный корпус, здесь проходят занятия у таких-то факультетов, а также располагается крутейшая лаборатория для животноводов', link: '/Korpusa/Type_corpus/vet' },
        { img: elektroKorpus, title: 'Корпус электрификации (ЭЛ)', description: 'Старейший учебный корпус, здесь проходят занятия у таких-то факультетов, а также располагается крутейшая лаборатория для животноводов', link: '/Korpusa/Type_corpus/elektro' },
        { img: fizKorpus, title: 'Корпус физвоспитания (СОЦ)', description: 'Старейший учебный корпус, здесь проходят занятия таких-то факультетов, а также располагается крупнейшая лаборатория для животноводов', link: '/Korpusa/Type_corpus/fiz' },
        { img: gidroKorpus, title: 'Корпус гидромелиорации (ГД)', description: 'Старейший учебный корпус, здесь проходят занятия у таких-то факультетов, а также располагается крутейшая лаборатория для животноводов', link: '/Korpusa/Type_corpus/gidro' },
        { img: zashitaRasteniyKorpus, title: 'Корпус защиты растений (ЗР)', description: 'Старейший учебный корпус, здесь проходят занятия таких-то факультетов, а также располагается крупнейшая лаборатория для животноводов', link: '/Korpusa/Type_corpus/zashita_rasteniy' },
        { img: mehanizaciyaKorpus, title: 'Корпус механизации (МХ)', description: 'Старейший учебный корпус, здесь проходят занятия у таких-то факультетов, а также располагается крутейшая лаборатория для животноводов', link: '/Korpusa/Type_corpus/mehanizaciya' },
        { img: economKorpus, title: 'Корпус экономического отделения (ЭК)', description: 'Старейший учебный корпус, здесь проходят занятия у таких-то факультетов, а также располагается крутейшая лаборатория для животноводов', link: '/Korpusa/Type_corpus/econom' },
        { img: zaochnoeKorpus, title: 'Корпус заочного обучения (НОТ)', description: 'Старейший учебный корпус, здесь проходят занятия у таких-то факультетов, а также располагается крутейшая лаборатория для животноводов', link: '/Korpusa/Type_corpus/zaochnoe' },
    ];

    const handleLearnMore = (link) => {
        navigate(link); // Navigate to the specific corpus page
    };

    return (
        <div className="main-content">
            <h1 className="main-title">Учебные корпуса Кубанского ГАУ</h1>
            <p className="main-description">На территории университета расположено много учебных корпусов с аудиториями с современным оборудованием, а пока снова пару слов на латыни... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="courses">
                {korpuses.map((korpus, index) => (
                    <div className="course" key={index}>
                        <div className="photo-container">
                            <img src={korpus.img} alt={korpus.title} className="korpus-photo"/>
                        </div>
                        <div className="course-info">
                            <h2>{korpus.title}</h2>
                            <p>{korpus.description}</p>
                            <button onClick={() => handleLearnMore(korpus.link)}>Подробнее →</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Korpus;