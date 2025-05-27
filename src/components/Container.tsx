import Header from './Header/Header';
import MainMenu from './MainMenu';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import styles from './Container.module.css';

const Container = () => {
    return (
        <div className={styles.container} id="container">
            <Header />
            <MainMenu />
            <Content />
            <Footer />
        </div>
    );
};

export default Container;
