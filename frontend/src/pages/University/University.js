import React, { useState, useEffect } from 'react';
import './style.css'; // Подключаем общий CSS файл
import main_page2 from "./../../img/korpus/econom/2.jpg";
import main_page3 from "./../../img/korpus/econom/1.jpg";
import main_page4 from "./../../img/list_korpus/fiz.JPG";
import main_page5 from "./../../img/korpus/zoo/10.JPG";

// Массив с адресами загруженных изображений
const images = [main_page2, main_page3,main_page4,main_page5];

const University = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Состояние для текущего индекса изображения

    // Хук эффекта для автоматического переключения слайдов
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // Изменение слайда каждые 3 секунды
        return () => clearInterval(timer); // Очистка таймера при размонтировании компонента
    }, []);

    const goToNext = () => { // Функция для перехода к следующему слайду
        setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
    };

    const goToPrev = () => { // Функция для перехода к предыдущему слайду
        setCurrentIndex(currentIndex => (currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <div className="t29">
                <p>Кубанский государственный аграрный университет</p>
            </div>
            <div className="slider">
                <div className="slider-images">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className={index === currentIndex ? 'active' : ''}
                            style={{ display: index === currentIndex ? 'block' : 'none' }}
                        />
                    ))}
                </div>
                <button className="prev" onClick={goToPrev}>&#9664;</button>
                <button className="next" onClick={goToNext}>&#9654;</button>
            </div>
            <div className="t19">
                <p>Кубанский госагроуниверситет — вуз с богатейшей историей, прогрессивным настоящим и надежным будущим. Традиции, заложенные преподавателями и студентами нескольких поколений, являются незыблемой основой для его развития. Со времени основания в университете диплом о высшем образовании получили более 170 тысячи выпускников. В настоящее время на 18 факультетах обучается более 15 тысяч студентов по очной и заочной формам.<br>
                </br>Кубанский государственный аграрный университет
Кубанский государственный аграрный университет — один из признанных лидеров высшего аграрного образования в России, крупнейший в ЮФО центр науки, образования и инноваций</p>
            </div>
        </div>
    );
};

export default University;
