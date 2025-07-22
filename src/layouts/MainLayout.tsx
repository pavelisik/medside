import type { ReactNode } from 'react';
import Header from './Header/Header';
import MainMenu from './MainMenu/MainMenu';
import Footer from './Footer/Footer';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }: { children?: ReactNode }) => {
    return (
        <div className={styles.container} id="container">
            <Header />
            <MainMenu />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
