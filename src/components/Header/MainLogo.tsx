import logo from '../../images/main-logo-hd.png';
import logoBig from '../../images/main-logo-big.png';

const MainLogo = () => {
    return (
        <div className="header-left">
            <a className="main_logo" href="/">
                <img
                    className="logo"
                    src={logo}
                    srcSet={logoBig}
                    alt="MEDSIDE"
                />
            </a>
        </div>
    );
};

export default MainLogo;
