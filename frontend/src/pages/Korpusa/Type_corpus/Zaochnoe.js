import React, { useState, useEffect } from 'react';
import './style.css'; // Подключаем общий CSS файл

import main_page2 from "./../../../img/korpus/not/1.JPG";
import main_page3 from "./../../../img/korpus/not/2.JPG";
import main_page4 from "./../../../img/korpus/not/3.jpg";


// Массив с адресами загруженных изображений
const images = [main_page2, main_page3, main_page4];

const Zaochnoe = () => {
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
            <div className="korpus-title">Главный учебный корпус (ГЛ)</div>
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
                Заочное отделение организовано в 1950 г. по специальностям «Агрономия» и «Зоотехния». Первый выпуск в 1954 г. состоял из 4 студентов по специальности «Агрономия».
В 1956 г. в связи с увеличением набора студентов заочное отделение было преобразовано в факультет заочного обучения. В разное время факультетом руководили: доцент Е. А. Близнюк, профессор Я. В. Губанов (1958–1971 гг.), профессор Н. Г. Сыкало (1971–1978 гг.), доцент В. А. Бутусов (1978–1985 гг.), заслуженный деятель науки и образования Кубани, профессор В. А. Масливец (1985–2012 гг.), доцент М. В. Гринь (2012–2014 гг.), профессор С. Н. Забашта (2014–2015 гг.), доцент А. В. Петух (2015–2016 гг.).
В настоящее время деканом факультета заочного обучения является доцент Е. А. Оксанич.
За время существования факультета более 40 тысяч специалистов получили высшее профессиональное образование.
В учебном процессе со студентами-заочниками заняты преподаватели 84 кафедр, в том числе пять академиков, около 100 профессоров и более 350 доцентов. Контингент студентов составляет около семи тысяч человек.
Гордостью факультета являются его выпускники: Герои Социалистического Труда А. С. Мельник, А. Г. Валько и Т. М. Туриченко. Также среди выпускников–заочников – руководитель Управления Федеральной службы государственной регистрации, кадастра и картографии по Краснодарскому краю В. В. Колодяжный, генеральный директор ООО «Кубань» Каневского района, доктор экономических наук В. П. Мищенко, глава муниципального образования Краснодарского края В. И. Синяговский (г. Новороссийск).
Многие известные ученые-аграрии также окончили факультет заочного обучения: заведующий кафедрой частной зоотехнии, доктор сельскохозяйственных наук, профессор В. И. Комлацкий, профессор кафедры экономики и внешнеэкономической деятельности А.Ф. Инюкин, заместитель декана факультета заочного обучения, доцент кафедры общего земледелия В. П. Матвиенко.
Факультет заочного обучения развивается в соответствии с требованиями времени. В последние годы осуществляется подготовка по двадцати пяти магистерским программам.

                </div>
                <div className="full-info">
                   
                    <br /><br />
                   
                </div>
            </div>
        </div>
    );
}

export default Zaochnoe;
