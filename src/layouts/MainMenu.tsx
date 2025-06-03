const MainMenu = () => {
    return (
        <nav className="main-top-menu">
            <ul>
                <li className="drop-item menu-item item01">
                    <a href="/bolezni">Болезни</a>
                    <div className="top_menu_body body01 body_disable"></div>
                </li>
                <li className="drop-item menu-item item02">
                    <a href="/symptoms">Симптомы</a>
                    <div className="top_menu_body body02 body_disable"></div>
                </li>

                <li className="drop-item menu-item item03">
                    <a href="/diets">Диеты</a>
                    <div className="top_menu_body body03 body_disable"></div>
                </li>

                <li className="drop-item menu-item item04">
                    <a href="/lekarstva">Лекарства</a>
                    <div className="top_menu_body body04 body_disable"></div>
                </li>

                <li className="menu-item item05">
                    <a href="/doctors">Врачи</a>
                </li>

                <li className="menu-item item06">
                    <a href="/clinics">Клиники</a>
                </li>

                <li className="drop-item menu-item item07">
                    <a href="/stati">Справочник</a>
                    <div className="top_menu_body body07 body_disable"></div>
                </li>

                <li className="drop-item menu-item item08">
                    <a href="/meditsinskiy-slovar">Словарь терминов</a>
                    <div className="top_menu_body body08 body_disable"></div>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
