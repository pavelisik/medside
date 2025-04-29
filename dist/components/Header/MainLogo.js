import { jsx as _jsx } from "react/jsx-runtime";
import logo from '../../images/main-logo-hd.png';
import logoBig from '../../images/main-logo-big.png';
const MainLogo = () => {
    return (_jsx("div", { className: "header-left", children: _jsx("a", { className: "main_logo", href: "/", children: _jsx("img", { className: "logo", src: logo, srcSet: logoBig, alt: "MEDSIDE" }) }) }));
};
export default MainLogo;
