import React, { useState, useEffect } from 'react';
import './style.css'; // Подключаем общий CSS файл

import main_page2 from "./../../../img/korpus/mex/1.JPG";
import main_page3 from "./../../../img/korpus/mex/2.JPG";
import main_page4 from "./../../../img/korpus/mex/3.jpg";

// Массив с адресами загруженных изображений
const images = [main_page2, main_page3, main_page4];

const Mehanizaciya = () => {
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
            <div className="korpus-title">Корпус механизации (МХ)</div>
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
                Факультет механизации организован Указом Председателя Правительства СССР от 21 ноября 1949 г. В 1950 году состоялся первый набор студентов. За годы существования на факультете подготовлено более 12 тысяч специалистов, бакалавров и магистров. Учебная работа ведется в лабораториях и кабинетах, оснащенных современным оборудованием и компьютерной техникой. Факультет располагает демонстрационно-учебным центром и учебным парком сельскохозяйственной техники, в которых представлены самые современные машины и орудия зарубежных и отечественных производителей. На факультете организованы и функционируют 18 учебных центров ведущих мировых производителей и дилеров транспортно-технологических средств, таких как CLAAS, JOHN DEERE, BIG DUTCHMAN, TEEJET, AMAZONE, JUSTICE BROTHERS, РОСТСЕЛЬМАШ, АГРОМАШ, АСТ, МИРОВАЯ ТЕХНИКА, КИРОВЕЦ, КЛЮЧАВТО, РОССИЙСКО-ДАТСКИЙ УЧЕБНЫЙ ЦЕНТР, и др.
Материальная база факультета постоянно обновляется. В 2019 -2020 гг. компания АСТ дилер компании JOHN DEERE подарил факультету трактор 6135В и зерноуборочный комбайн W-540I, а также открыты учебные центры Петербургского и Минского тракторных заводов.
Студенты факультета механизации имеют возможность обучаться в военном учебном центре университета, и одновременно с получением диплома о высшем образовании могут получить воинское звание лейтенанта запаса, а также:
•	второе высшее заочное образование на базе первого;
•	водительское удостоверение тракториста;
•	сертификат специалиста по охране труда и технике безопасности на производстве.
Обучение осуществляется в одну смену, в специализированных аудиториях и лабораториях учебных корпусов, имеются аудитории для самостоятельной работы студентов, библиотека, читальный зал, с возможностью работать с электронными базами данных университета, всем студентам предоставляется общежитие, на территории имеется собственная поликлиника. Студентам предоставляются льготные путевки в спортивно-оздоровительный лагерь «Криница» на берегу Черного моря.
Для студентов факультета механизации создан специальный компьютерный класс, оборудованный современными моноблоками и интерактивной доской. Из него осуществляется доступ на образовательный портал для ознакомления с учебно-методической литературой, российские и международные базы данных. Высокоскоростной интернет позволяет проводить видеоконференции. На факультете реализуются такие дисциплины как Инновационные технологии, Точное земледелие, на которых студенты знакомятся с новейшим оборудованием и программным обеспечением.
Кроме государственной академической стипендии для студентов обучающихся на нашем факультете доступны следующие стипендиальные программы: Стипендия имени Академика Трубилина, Государственные повышенные стипендии Президента и Правительства Российской Федерации, Администрации Краснодарского края. Автомобильный холдинг КЛЮЧАВТО ежегодно учреждает именные стипендии для студентов факультета механизации. Более того каждый месяц около 30 студентов факультета получают повышенную государственную стипендию за достижения в научной, культурно-творческой, спортивной, общественной и учебной деятельности.
Студенты факультета механизации имеют возможность осуществлять зарубежные выезды по программам академической мобильности. В рамках этих мероприятий практикуются стажировки в вузах г. Брагансы (Португалия), Германии (Союз «Сельское хозяйство и экологическое равновесие с Восточной Европой»). На кафедрах факультета защищаются кандидатские и магистерские диссертации граждан ближнего и дальнего зарубежья (Казахстан, Узбекистан, Венесуэла, Сирия и др.). На факультете практикуется чтение лекций ведущими специалистами из зарубежных стран.
На факультете заинтересованные студенты с первого курса вовлечены в научно-исследовательскую деятельность. Студентам, участвующим в этой работе, предоставляется возможность бесплатно публиковать результаты своих исследований в журналах «Студенчество и наука», «Сельский механизатор», «Труды Кубанского государственного аграрного университета», «Электронный политематический сетевой журнал КубГАУ». Ежегодно в университете проходят научные конференции, на которых студенты докладывают результаты своих исследований, что позволяет формировать коммуникативные навыки будущих руководителей. На эти мероприятия приглашаются работодатели, которые со студенческой скамьи отбирают для себя кадры.
Студенты факультета механизации ежегодно проходят производственные практики на предприятиях CLAAS, РОСТСЕЛЬМАШ, МИРОВАЯ ТЕХНИКА, КЛЮЧАВТО, ТЕХНОКОМ, ТД МТЗ-СЕВЕРО-ЗАПАД, а также в учхозах нашего университета «Кубань» и «Краснодарское», оснащенных современной техникой, отвечающей мировым стандартам, и других организациях агропромышленного комплекса.

                </div>
                <div className="full-info">
                   
                    <br /><br />
                    
                </div>
            </div>
        </div>
    );
}

export default Mehanizaciya;