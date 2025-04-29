import Header from './Header/Header';
import MainMenu from './MainMenu';
import Content from './Content/Content';
import Footer from './Footer/Footer';

const Container = () => {
    return (
        <div id="container">
            <Header />
            <MainMenu />
            <Content />
            <Footer />
        </div>
    );
};

export default Container;
