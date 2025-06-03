import { Link } from 'react-router';
import logo from '@/assets/images/main-logo-hd.png';
import logoBig from '@/assets/images/main-logo-big.png';

const MainLogo = () => {
    return (
        <div className="header-left">
            <Link className="main_logo" to="/">
                <img className="logo" src={logo} srcSet={logoBig} alt="MEDSIDE" />
            </Link>
        </div>
    );
};

export default MainLogo;
