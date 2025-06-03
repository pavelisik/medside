import MainLogo from './MainLogo';
import SearchForm from './SearchForm';

const Header = () => {
    return (
        <header id="header">
            <div className="header-container">
                <MainLogo />
                <SearchForm />
            </div>
        </header>
    );
};

export default Header;
