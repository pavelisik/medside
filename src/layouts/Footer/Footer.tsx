import FooterMenu from './FooterMenu';
import FooterSocials from './FooterSocials';
import FooterInfo from './FooterInfo';
import footerLogo from '../../assets/images/footer-logo-hd.png';
import footerLogoBig from '../../assets/images/footer-logo-big.png';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <FooterMenu />
                    <FooterSocials />
                </div>
                <div className="footer-right">
                    <div className="footer-logo">
                        <img src={footerLogo} srcSet={footerLogoBig} alt="MEDSIDE" />
                    </div>
                    <div className="footer-description">
                        <p>
                            Все представленные на сайте материалы предназначены исключительно для образовательных целей
                            и не предназначены для медицинских консультаций, диагностики или лечения. Администрация
                            сайта, редакторы и авторы статей не несут ответственности за любые последствия и убытки,
                            которые могут возникнуть при использовании материалов сайта.
                        </p>
                    </div>
                    <FooterInfo />
                </div>
                <div className="clear"></div>
            </div>
        </footer>
    );
};

export default Footer;
