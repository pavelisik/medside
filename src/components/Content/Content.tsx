import { Link } from 'react-router';
import { MdArrowForwardIos as Arrow } from 'react-icons/md';
import styles from './Content.module.css';
import BlockNews from './BlockNews';
import BlockPosts from './BlockPosts';

const Content = () => {
    const paramsBlock01 = { include: '121618,116766,127274', orderby: 'include' };
    const paramsBlock02 = { include: '141393,64417,67179', orderby: 'include' };
    const paramsBlock03 = { include: '7989,117862,7756', orderby: 'include' };
    const paramsBlock04 = { include: '68761,66768,22261', orderby: 'include' };

    return (
        <section id="content" className="nosb">
            <div id="center">
                <BlockNews />
                <BlockPosts params={paramsBlock01} position="left">
                    <Link to="/bolezni">Болезни</Link>
                    <Arrow className={styles.arrow} />
                    Популярные статьи
                </BlockPosts>
                <BlockPosts params={paramsBlock02} position="right">
                    <Link to="/symptoms">Симптомы</Link>
                    <Arrow className={styles.arrow} />
                    Наиболее частые жалобы
                </BlockPosts>
                <BlockPosts params={paramsBlock03} position="left">
                    <Link to="/diagnostics">Диагностика</Link>
                </BlockPosts>
                <BlockPosts params={paramsBlock04} position="right">
                    <Link to="/services">Медицинские услуги</Link>
                </BlockPosts>
            </div>
            <div className="clear"></div>
        </section>
    );
};

export default Content;
