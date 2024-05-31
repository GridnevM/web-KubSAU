import React, { useState, useEffect } from 'react';
import './style.css'; // Подключаем общий CSS файл

import main_page2 from "./../../../img/korpus/zr/1.JPG";
import main_page3 from "./../../../img/korpus/zr/2.JPG";
import main_page4 from "./../../../img/korpus/zr/3.jpg";

// Массив с адресами загруженных изображений
const images = [main_page2, main_page3, main_page4];

const Zashita_rasteniy = () => {
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
            <div className="korpus-title">Корпус защиты растений (ЗР)</div>
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
                Факультет агрохимии и защиты растений имеет полувековую историю. За время его существования сложилась классическая научная школа, позволяющая готовить высококвалифицированных кадров.
Для студентов факультета агрохимии и защиты растений создан специальный компьютерный класс, оборудованный современными моноблоками и интерактивной доской. Из него осуществляется доступ на образовательный портал для ознакомления с учебно-методической литературой, российские и международные базы данных. Высокоскоростной интернет позволяет проводить видеоконференции. На факультете реализуются такие дисциплины как Инновационные технологии, Точное земледелие, Инструментальные методы исследований на которых студенты знакомятся с новейшим оборудованием и программным обеспечением.
Ежегодно студенты факультета агрохимии и защиты растений осуществляют зарубежные выезды по программам академической мобильности. В рамках этих мероприятий практикуются стажировки в Политехническом институте г. Брагансы, Португалия, Германии Союз «Сельское хозяйство и экологическое равновесие с Восточной Европой», в компании «DLV Plant BV» (Нидерланды), стажировка в компании «DIFCO INTERNATIONAL BV"(Нидерланды) и других программах по выбору студента. Более того на кафедрах факультета защищаются кандидатские диссертации граждан ближнего и дальнего зарубежья. Также на факультете практикуется чтение лекций ведущими специалистами из зарубежных стран.
На факультете практикуется раннее вовлечение в научно-исследовательскую деятельность. Студентам, участвующим в этой работе предоставляется возможность бесплатно публиковать результаты своих исследований в журналах «Студенчество и наука», «Энтузиасты аграрной науки», «Труды Кубанского государственного аграрного университета», «Электронный политематический сетевой журнал». Ежегодно в университете проходят научные конференции на которых студенты докладывают результаты своих исследований, что позволяет формировать коммуникативные навыки будущих руководителей. На эти мероприятия приглашаются работодатели, которые со студенческой скамьи отбирают для себя кадры.
Студенты факультета агрохимии и защиты растений ежегодно проходят производственную практику в учхозах нашего университета «Кубань» и «Краснодарское», оснащенных современной техникой, отвечающей мировым стандартам, опытной R&D-станции, которая имеет статус сертифицированной международной аналитической лаборатории, оснащенной оборудованием экспертного уровня, а также на любых предприятиях, научно-исследовательских институтах и прочих организациях, работающих в сфере растениеводства.

                </div>
                <div className="full-info">
                   
                    <br /><br />
                    
                </div>
            </div>
        </div>
    );
}

export default Zashita_rasteniy;