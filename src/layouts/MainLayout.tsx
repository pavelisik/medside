import type { ReactElement } from 'react';
import Header from './Header/Header';
import MainMenu from './MainMenu';
import Footer from './Footer/Footer';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }: { children?: ReactElement }) => {
    return (
        <div className={styles.container} id="container">
            <Header />
            <MainMenu />
            <div id="content" className="nosb">
                <div id="center">{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
