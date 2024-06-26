import React, { useState, useEffect } from 'react';
import './style.css'; // Подключаем общий CSS файл

import main_page2 from "./../../../img/korpus/glavny/1.JPG";
import main_page3 from "./../../../img/korpus/glavny/2.JPG";
import main_page4 from "./../../../img/korpus/glavny/3.JPG";
import main_page5 from "./../../../img/korpus/glavny/4.jpg";
import main_page6 from "./../../../img/korpus/glavny/5.jpg";
import main_page7 from "./../../../img/korpus/glavny/6.jpg";
import main_page8 from "./../../../img/korpus/glavny/7.jpg";
import main_page9 from "./../../../img/korpus/glavny/8.jpg";

// Массив с адресами загруженных изображений
const images = [main_page2, main_page3, main_page4, main_page5, main_page6, main_page7,main_page8,main_page9];

const Glavny = () => {
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
                Факультет перерабатывающих технологий решением Ученого совета Кубанского ГАУ и приказом ректора с 01 декабря 2022 года переименован в факультет пищевых производств и биотехнологий.
Факультет перерабатывающих технологий был создан еще в 1925 году при Кубанском сельскохозяйственном институте в виде отделения сельскохозяйственной технологии и товароведения. Основателями технологического направления подготовки инженеров-технологов были известные профессора В.Н.Джонс и А.А. Шмук. В 1999 году факультет перерабатывающих технологий был воссоздан на основании решения Главного Управления высших учебных заведений МСХ РФ. Основой для создания факультета послужила кафедра технологии хранения и переработки сельскохозяйственной продукции, которая была создана в 1991 году на факультете плодоовощеводства и виноградарства. Это был один из первых факультетов подобного направления среди сельскохозяйственных вузов России.
Основателем факультета и его первым деканом с 1999 по 2009 годы была доктор технических наук, профессор Л.В. Донченко. С 2009 по 2014 год деканом был кандидат технических наук, доцент А.И. Решетняк. С 2014 года факультет возглавляет кандидат технических наук, доцент А.В. Степовой.
Благодаря программе импортозамещения в Российской Федерации все большее значение приобретает производство собственных, высококачественных отечественных продуктов.
С 2021 года факультет в составе вуза участвует в Федеральной программы «Приоритет-2030». Силами сотрудников факультета реализуются два стратегических проекта «Здоровое питание» и «Инновационные корма и кормовые добавки». За счет федеральных бюджетных средств факультет оснащен новейшими приборами и оборудованием, позволяющими осваивать и разрабатывать прорывные технологии в этих сферах.
Существующим предприятиям пищевой промышленности невозможно обойтись без высококлассных специалистов, которых готовит факультет пищевых производств и биотехнологий Кубанского государственного аграрного университета!
Студенты факультета перерабатывающих технологий имеют возможность проходить обучение на военной кафедре КубГАУ для получения звания сержант запаса.
Профессорско-преподавательский состав факультета отмечается высоким научным и педагогическим уровнем преподавателей. Из 43 человек преподавательского состава 14 человек – доктора наук, профессора; 28 - кандидаты наук, доценты. В учебном процессе принимают активное участие представители ведущих пищевых и перерабатывающих предприятий края (Агеева Наталья Васильевна. – заместитель генерального директора ОАО КК «Кубань, Садовая Т.Н.- генеральный директор ООО фирма «Калория» и многие другие).
Лабораторные занятия студентов проходят в современных, оснащенных высокотехнологичным оборудованием, лабораториях. Свои практические навыки студенты отрабатывают в производственных цехах Учебного научно-производственного комплекса «Агробиотехпереработка» и учебного научно-инновационного комплекса «Технолог», производя своими руками по классическим рецептурам хлебобулочные и колбасные изделия, полуфабрикаты и деликатесы, соки, напитки и т.д. Освоив всю технологическую цепочку, студенты дегустируют свои произведения и под руководством опытных преподавателей производят полный анализ готового продукта.
Отработать свои практические и закрепить теоретические навыки студенты факультета пищевых производств и биотехнологий могут на одном из современнейших предприятий Краснодарского края, с которыми у факультета заключены договоры о сотрудничестве.

                </div>
                <div className="full-info">
                Факультет плодоовощеводства и виноградарства один из старейших в университете. За время его существования сформировалась мощная научная школа, позволяющая вести профессиональную подготовку обучающихся на высоком уровне.
В разное время здесь трудились выдающиеся ученые, такие как почетный академик ВАСХНИЛ, Герой Социалистического Труда, лауреат Сталинской премии профессор В.И. Эдельштейн; заслуженный деятель науки России, профессор П.Г. Шитт; лауреат Сталинской премии, профессор A.M. Фролов-Багреев; лауреат Ленинской премии, профессор А.А. Мержаниан.
Первый выпуск ученых агрономов-плодоовощеводов-виноградарей состоялся в 1927 году. На сегодняшний день количество выпускников факультета превышает 7 тыс. человек.
Продиктованные временем изменения в образовании, переход на трёхуровневую систему, потребовали разработки новых образовательных программ для подготовки бакалавров, магистров и аспирантов. Постоянный контакт с ведущими специалистами передовых производственных предприятий, глубокий мониторинг рынка труда, дает нам понимание какими компетенциями должен обладать современный выпускник, чтобы быть успешным в своей профессиональной деятельности. В связи с этим, профессорско-преподавательский состав постоянно совершенствует рабочие программы преподаваемых дисциплин и разрабатывает новые, к которым относятся Адаптивное и органическое садоводство, Декоративное садоводство с основами ландшафтного проектирования, Фитодизайн интерьеров и помещений, Инновационные технологии производства садовой продукции, Оборудование и автоматизация винодельческой отрасли и ряд других.
Таким образом, накопленный за долгие годы научный потенциал, актуальный подход к методикам преподавания, ориентирование на потребителя образовательных услуг с учетом современных требований рынка труда, позволяет сегодня готовить высококвалифицированных специалистов.
Материально-техническое обеспечение способствует осуществлению образовательной деятельности на высоком уровне, отвечающей действующим образовательным стандартам. Учебные аудитории, оснащены современным оборудованием, средствами мультимедиа, системами кондиционирования воздуха.
Традиционно факультет тесно сотрудничает с передовыми производственными предприятиями и научными центрами, где обучающиеся регулярно оттачивают свои профессиональные навыки в рамках учебных, научных и производственных практик, что позволяет в полной мере реализовывать практико-ориентированный подход в реализации образовательных программ.
Одним из главных достоинств является обеспеченность факультета мощной базой практик, ядром которой является учебный научный центр инновационных технологий в садоводстве и виноградарстве. Центр расположен вблизи студенческого кампуса, на территории учебно-опытного хозяйства «Кубань». В его структуру входит уникальный набор опытных площадок плодовых культур и винограда, моделирующих наиболее востребованные в производстве технологии. Осваивать самые передовые технологии возделывания овощных культур в условиях открытого грунта позволяет специализированный учебно-опытный участок.
В здании центра имеются две учебные аудитории, в которых проводятся выездные лабораторно-практические занятия. Кроме того, функционирует прививочная мастерская, где студенты учатся производить посадочный материал плодовых культур и винограда. Важнейшим элементом учебного центра является учебная лаборатория микровиноделия с современным оборудованием, позволяющим осуществлять все необходимые технологические операции.
Анализ мирового опыта показал, что именно такой подход позволяет готовить высококлассных специалистов для отрасли плодоовощеводства, виноградарства и виноделия. В этих условиях обучающиеся осваивают все элементы технологии производства сельскохозяйственных культур, начиная от заготовки саженцев, уходу за молодыми и плодоносящими насаждениями, и заканчивая уборкой урожая и его переработкой в учебной винодельне.
Демонстрационные площадки центра не раз становились местом проведения «Дня поля», совещания ректоров ВУЗов, подведомственных Минсельхозу РФ, проведению занятий в рамках реализации программы «Школа фермера» и т.п. Перенимать опыт в организации учебных кластеров подобного формата приезжают коллеги из разных уголков страны.
С целью реализации проекта «Генетика и селекция в животноводстве и растениеводстве» в учебно-опытном хозяйстве «Кубань» ведется закладка коллекции мирового генетического фонда винограда. Создана лаборатория ампелографической коллекции. Функционирование коллекции будет способствовать изучению генетического разнообразия, исследованию строения геномов, выявлению особенностей их строения, а полученные данные будут использованы в целях ускорения селекции винограда.

В рамках реализации цели федерального проекта «Развитие интеграционных процессов в сфере науки, высшего образования и индустрии» (Национальный проект «Наука и университеты»), а также программы стратегического академического лидерства «Приоритет 2030» сотрудниками кафедры плодоводства продолжаются исследования по разработке инновационных способов и технологических элементов получения конкурентоспособной экологически чистой продукции в системе органического садоводства.
В рамках реализации федерального образовательного проекта Россельхозбанка «Школа фермера» профессорско-преподавательский состав факультета проводит курсы повышения квалификации и переподготовки по специализациям «Виноградарство», «Садоводство», «Овощеводство».
На факультете практикуется активное ведение научно-исследовательской деятельности по наиболее перспективным направлениям. Результаты своих исследований обучающиеся публикуют на бесплатной основе в журналах «Студенчество и наука», «Энтузиасты аграрной науки», «Труды Кубанского государственного аграрного университета», «Электронный политематический сетевой журнал» и докладывают на конференциях.
Участие в общественной жизни позволяет вырабатывать у обучающихся коммуникативные и управленческие навыки, так необходимые успешному руководителю. Кроме того, на мероприятия приглашаются представители компаний - работодателей. На подобных встречах из числа отличившихся студентов они формируют для своих организаций кадровый резерв.
Ежегодно студенты факультета плодоовощеводства и виноградарства имеют возможность проходить обучение за рубежом по программам академической мобильности.
Активная студенческая жизнь, высокий уровень теоретической и практической подготовки способствует всестороннему развитию личности обучающегося, способного в дальнейшем вести профессиональную деятельность.

                    <br /><br />
                    
                </div>
            </div>
        </div>
    );
}

export default Glavny;
