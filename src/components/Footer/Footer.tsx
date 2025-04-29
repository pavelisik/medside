import FooterMenu from './FooterMenu';
import FooterSocials from './FooterSocials';
import FooterInfo from './FooterInfo';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <FooterMenu />
                    <FooterSocials />
                </div>
                <div className="footer-right">
                    <div className="footer-logo"></div>
                    <div className="footer-description"></div>
                    <FooterInfo />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
