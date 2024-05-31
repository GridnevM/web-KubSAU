import React, { useState, useEffect } from 'react';
import './style.css'; // Подключаем общий CSS файл

import main_page2 from "./../../../img/korpus/zoo/1.JPG";
import main_page3 from "./../../../img/korpus/zoo/2.JPG";
import main_page4 from "./../../../img/korpus/zoo/3.JPG";
import main_page5 from "./../../../img/korpus/zoo/4.JPG";
import main_page6 from "./../../../img/korpus/zoo/5.JPG";
import main_page7 from "./../../../img/korpus/zoo/6.JPG";
import main_page8 from "./../../../img/korpus/zoo/7.JPG";
import main_page9 from "./../../../img/korpus/zoo/8.JPG";
import main_page10 from "./../../../img/korpus/zoo/9.JPG";
import main_page11 from "./../../../img/korpus/zoo/10.JPG";
import main_page12 from "./../../../img/korpus/zoo/11.jpeg";

// Массив с адресами загруженных изображений
const images = [main_page2, main_page3, main_page4, main_page5, main_page6, main_page7,main_page8,main_page9,main_page10,main_page11,main_page12];

const Zooinzhenerny = () => {
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
            <div className="korpus-title">Зооинженерный корпус (ЗОО)</div>
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
                Высшая школа по подготовке специалистов животноводов начала зарождаться в составе сельскохозяйственного отделения Северо-Кавказского политехнического института образованного 16 июня 1918 г. Постановлением Наркомпросса СССР от 12 марта 1922 г. был создан Кубанский сельскохозяйственный институт. С этого момента в институте функционирует пять предметных комиссий, в их числе, зоотехническая. В 1930 году сельскохозяйственный институт претерпел реорганизацию, в результате которой были образованы пять узкоспециализированных институтов, в том числе и Северо-Кавказский институт свиноводства.
Через несколько лет институт свиноводства перешел в Ставрополь и влился в Ставропольский зоотехнический институт. После открытия отдела животноводства при Кубанском сельскохозяйственном институте, в его составе были организованы кафедры, которыми заведовали видные ученые того времени: общего животноводства профессор А. А. Малигонов, частной зоотехнии профессор А. В. Леопольдов, молочного хозяйства П. И. Селезнев, ветеринарии, зоогигиены и анатомии животных профессор И. И. Иванов-Юдин, птицеводства профессор А. И. Дорбодрав. Отдел располагал скотным двором, опытно-показательным птичником и племенным рассадником домашней птицы.
В целом историю факультета можно разделить на три периода: организации и становления (1922—1929 гг.), реорганизации (1930—1949 гг.) и второе рождение и бурное развитие (1950 г. по настоящее время).
В период с 1950 по 1973 год зоотехнический факультет готовил ученых зоотехников широкого профиля и ученых зоотехников со специализацией по птицеводству. Впоследствии факультет был переименован в зооинженерный, а с 2006 года в факультет зоотехнологии и менеджмента. Факультет за свою многолетнюю историю прошел большой и славный путь.
За эти годы факультетом руководили видные ученные и организаторы зоотехнической науки. Первым деканом факультета был профессор Е. С. Артюх, крупный ученый в области гельминтологии. Им была проведена большая работа по изучению гельминтофауны животных Краснодарского края, результаты которой были изложены в монографии «Давэниаты диких и домашних животных».
За последние 10 лет сотрудниками факультета опубликовано более 1000 научных работ, в том числе 35 учебников и учебных пособий, 20 монографий, 32 рекомендации, получено более 45 патентов и авторских свидетельств на изобретения.
Объем и характер приобретенных знаний позволяет выпускникам факультета работать специалистами в сфере производства и переработки животноводческой продукции, в области селекции и генетики животных, в финансовых организациях, занимающихся вопросами кредитования и страхования животноводческих предприятий.
Лучшие студенты, магистры и аспиранты факультета проходят практику или стажировку в Дании, Германии и других странах, чтобы получить впоследствии интересную высокооплачиваемую работу.
В настоящее время на факультете читают лекции, и ведут лабораторно-практические занятия 30 преподавателей, среди которых 11 профессоров и 14 доцентов.
Сотрудники факультета много делают для популяризации профессии по направлению бакалавр сельского хозяйства и магистр сельского хозяйства. Это и участие в работе секции Малой сельскохозяйственной академии школьников (руководитель Ю. С. Ряднев), и встречи с учителями биологии в школах городов и районов края. За период прохождения научно-практических конференций на секции «Животноводство» с 2000 по 2020 гг. заслушано более 100 докладов. В работе секции приняли участие школьники почти из всех районов Краснодарского края, но лидерами по числу докладов стали: Калининский, Абинский, Тимашевский, Выселковский и Кореновский районы. Также участие приняли школьники из следующих городов: Краснодар, Кропоткин, Армавир, Сочи и Республики Адыгея.
Студенты факультета зоотехнии имеют возможность обучаться на военной кафедре университета, и одновременно с получением диплома о высшем профессиональном образовании получить воинское звание лейтенанта запаса, т. е. по окончании университета наши выпускники становятся офицерами, и не призываются на срочную службу в вооруженные силы России.
С целью вовлечения студентов в научно-исследовательскую работу на кафедрах факультета организованы, и функционируют студенческие научные общества. На протяжении 15 лет ответственным за НИС кандидат биологических наук, доцент Усенко В.В.
Студенческая жизнь на факультете зоотехнии насыщена и интересна. Студенты принимают участия в общественной жизни факультета и университета: спортивных соревнованиях, межфакультетских смотрах конкурсах художественной самодеятельности в КВН.
На факультете активно ведется хоздоговорная тематика, способствующая более тесному контакту ученых факультета с ведущими сельскохозяйственными организациями, департаментом сельского хозяйства и перерабатывающей промышленности Краснодарского края, и является широкой площадкой для проверки теоретических исследований в производственных условиях. Объем хоздоговорных научно — исследовательских работ за последние 5 лет составил более 7 млн. руб., что свидетельствует о востребованности результатов исследований, проводимой учеными факультета. На факультете проводится эффективная работа по подготовке научно-педагогических кадров по актуальным проблемам сельскохозяйственного производства. За последние 5 лет в аспирантуре обучалось свыше 60 аспирантов и докторантов, 24 из которых успешно защитили докторские и кандидатские диссертации. В настоящее время в аспирантуре проходят обучение 16 аспирантов.
На факультете зоотехнии созданы хорошие условия для обучения, качественной подготовки бакалавров, магистров сельского хозяйства и аспирантов для работы во всех отраслях агропромышленного комплекса.

                </div>
                <div className="full-info">
                ЦифрЭк — это новый факультет КубГАУ, включающий StartUp- студию, Проектные Мастерские, Цифровые Лаборатории, Бизнес-клуб, Английский деловой клуб.
Именно поэтому ЦифрЭк имеет статус института - полное название Институт цифровой экономики и инноваций КубГАУ.
Факультет, как правило, объединяет родственные специализированные кафедры. Институт Цифровой экономики и инноваций – это структура, в которую входят экономические, технологические и it-кафедры.
Институт Цифровой экономики и инноваций – это креативный кластер КубГАУ цифрового, инженерного и экономического лидерства.
Студенты ЦифрЭк в ходе образовательного процесса реализуют инновационные проекты в сфере цифровой экономики. Заказчики таких проектов – стратегические партнеры вуза и сам Университет.
В Институте Цифровой Экономики и Инноваций существуют дополнительные активности и преимущества для студентов:
Цифровые лаборатории. Институт пригласил Яндекс, Билайн и Сколково к участию в образовательном процессе в качестве партнеров цифровых лабораторий. В лабораториях студенты будут разрабатывать и тестировать новые цифровые продукты.
Бизнес-менторство. Ряд крупных компаний стали академическими партнерами образовательной программы. Топ-менеджеры этих компаний — бизнес-менторами. Начиная со второго семестра, студент выбирает индивидуальный образовательный трек, бизнес-ментора и компанию.
Проектный формат. Студенты выполняют промежуточные и итоговую работы в формате инновационного проекта. Академические партнеры определяют проблему, студент придумывает инновационное решение, университет помогает с акселерацией и монетизацией решения.
Директор Института Цифровой Экономики и Инноваций Семидоцкий Виктор Александрович, профессор, доктор экономических наук. Совмещает преподавательскую деятельность с бизнес-консультированием. Научный руководитель проектов разработки стратегий социально-экономического развития муниципальных образований Краснодарского края.
В становлении и развитии Института участвует профессор, доктор экономических наук, бизнес-консультант, заслуженный экономист Кубани Полиди Александр Анатольевич. Руководитель научных проектов по разработке стратегий социально-экономического развития ЮФО, Краснодарского края, Сочи, Краснодара, и других муниципальных образований Краснодарского края.
Образовательная программа ЦифрЭк практико-ориентирована, составлена с привлечением предприятий - лидеров экономики Кубани.

                    <br /><br />
                   
                </div>
            </div>
        </div>
    );
}

export default Zooinzhenerny;