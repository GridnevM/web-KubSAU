import React, { useState, useEffect } from 'react';
import './../../components/Header/Header';
import './../../components/Footer/Footer';

// Импорт изображений
import main_page2 from "./../../img/main_page2.png";
import main_page3 from "./../../img/main_page3.png";
import main_page4 from "./../../img/main_page4.png";
import main_page5 from "./../../img/main_page5.png";
import main_page6 from "./../../img/main_page6.png";
import main_page7 from "./../../img/main_page7.png";

// Массив с адресами загруженных изображений
const images = [main_page2, main_page3, main_page4, main_page5, main_page6, main_page7];

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
        <>
            <h1>Slaider</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', margin: '20px 0' }}>
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
            <style jsx>{`
                @media (max-width: 768px) {
                    div {
                        flex-direction: column;
                    }
                    img {
                        max-width: 100%;
                    }
                    button {
                        margin: 10px 0;
                        font-size: 20px;
                    }
                }
            `}</style>
        </>
    );
}

export default University;
