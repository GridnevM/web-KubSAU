import React, { useState, useEffect } from 'react';
import './style.css'; // Подключаем общий CSS файл

import main_page2 from "./../../../img/korpus/gidra/1.JPG";
import main_page3 from "./../../../img/korpus/gidra/2.JPG";
import main_page4 from "./../../../img/korpus/gidra/3.jpg";
import main_page5 from "./../../../img/korpus/gidra/4.jpg";

// Массив с адресами загруженных изображений
const images = [main_page2, main_page3, main_page4, main_page5];

const Gidro = () => {
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
        <div className="korpus">
            <div className="korpus-title">Корпус гидромелиорации (ГД)</div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '20px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button onClick={goToPrev} style={{ fontSize: '24px', fontWeight: 'bold', userSelect: 'none', marginRight: '20px' }}>{"<"}</button>
                    <div>
                        {images.map((img, index) => (
                            <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                                <img src={img} alt={`Slide ${index}`} style={{ width: '100%', maxWidth: '600px' }} />
                            </div>
                        ))}
                    </div>
                    <button onClick={goToNext} style={{ fontSize: '24px', fontWeight: 'bold', userSelect: 'none', marginLeft: '20px' }}>{">"}</button>
                </div>
                <div className="short-info">
                    Краткая информация о корпусе, что зачем и почему, а пока пару слов на латыни... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="full-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br /><br />
                    Краткая информация о корпусе, что зачем и почему, а пока пару слов на латыни...
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Gidro;
