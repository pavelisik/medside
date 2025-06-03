import { Link } from 'react-router';

const MainMenu = () => {
    return (
        <nav className="main-top-menu">
            <ul>
                <li className="drop-item menu-item item01">
                    <Link to="/bolezni">Болезни</Link>
                    <div className="top_menu_body body01 body_disable"></div>
                </li>
                <li className="drop-item menu-item item02">
                    <Link to="/symptoms">Симптомы</Link>
                    <div className="top_menu_body body02 body_disable"></div>
                </li>

                <li className="drop-item menu-item item03">
                    <Link to="/diets">Диеты</Link>
                    <div className="top_menu_body body03 body_disable"></div>
                </li>

                <li className="drop-item menu-item item04">
                    <Link to="/lekarstva">Лекарства</Link>
                    <div className="top_menu_body body04 body_disable"></div>
                </li>

                <li className="menu-item item05">
                    <Link to="/doctors">Врачи</Link>
                </li>

                <li className="menu-item item06">
                    <Link to="/clinics">Клиники</Link>
                </li>

                <li className="drop-item menu-item item07">
                    <Link to="/stati">Справочник</Link>
                    <div className="top_menu_body body07 body_disable"></div>
                </li>

                <li className="drop-item menu-item item08">
                    <Link to="/meditsinskiy-slovar">Словарь терминов</Link>
                    <div className="top_menu_body body08 body_disable"></div>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
