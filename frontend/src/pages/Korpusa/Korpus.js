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
        { img: glavnyKorpus, title: 'Главный учебный корпус (ГЛ)', description: 'В здании главного учебного корпуса располагаются факультет пищевых производств и биотехнологий, факультет плодоовощеводства и виноградарства, факультет агрохимии и экологии и юридический факультет.' , link: '/Korpusa/Type_corpus/glavny' },
        { img: zooinzhenernyKorpus, title: 'Зооинженерный корпус (ЗОО)', description: 'В здании зооинженерного учебного корпуса располагаются факультет зоотехнии, факультет финансы и кредит и институт цифровой экономики и инноваций.', link: '/Korpusa/Type_corpus/zooinzhenerny' },
        { img: vetKorpus, title: 'Корпус ветеринарного отделения (ВМ)', description: 'В здании ветеринарного учебного корпуса располагается ветеринарный факультет.', link: '/Korpusa/Type_corpus/vet' },
        { img: elektroKorpus, title: 'Корпус электрификации (ЭЛ)', description: 'В здании учебного корпуса электрификации располагаются факультет управления, учетно-финансовый факультет и факультет энергетики.', link: '/Korpusa/Type_corpus/elektro' },
        { img: fizKorpus, title: 'Корпус физвоспитания (СОЦ)', description: '', link: '/Korpusa/Type_corpus/fiz' },
        { img: gidroKorpus, title: 'Корпус гидромелиорации (ГД)', description: 'В здании учебного корпуса гидромелиорации располагаются архитектурно-строительный факультет, землеустроительный факультет и факультет гидромелиорации', link: '/Korpusa/Type_corpus/gidro' },
        { img: zashitaRasteniyKorpus, title: 'Корпус защиты растений (ЗР)', description: 'В здании учебного корпуса защиты растений располагается факультет агрохимии и защиты растений.', link: '/Korpusa/Type_corpus/zashita_rasteniy' },
        { img: mehanizaciyaKorpus, title: 'Корпус механизации (МХ)', description: 'В здании учебного корпуса механизации располагается факультет механизации.', link: '/Korpusa/Type_corpus/mehanizaciya' },
        { img: economKorpus, title: 'Корпус экономического отделения (ЭК)', description: 'В здании экономического учебного корпуса располагаются факультет прикладной информатики и экономический факультет', link: '/Korpusa/Type_corpus/econom' },
        { img: zaochnoeKorpus, title: 'Корпус заочного обучения (НОТ)', description: '', link: '/Korpusa/Type_corpus/zaochnoe' },
    ];

    const handleLearnMore = (link) => {
        navigate(link); // Navigate to the specific corpus page
    };

    return (
        <div className="main-content">
            <h1 className="main-title">Учебные корпуса Кубанского ГАУ</h1>
            <p className="main-description"></p>
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