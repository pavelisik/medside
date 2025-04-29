import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FooterMenu from './FooterMenu';
import FooterSocials from './FooterSocials';
import FooterInfo from './FooterInfo';
const Footer = () => {
    return (_jsx("footer", { id: "footer", children: _jsxs("div", { className: "footer-inner", children: [_jsxs("div", { className: "footer-left", children: [_jsx(FooterMenu, {}), _jsx(FooterSocials, {})] }), _jsxs("div", { className: "footer-right", children: [_jsx("div", { className: "footer-logo" }), _jsx("div", { className: "footer-description" }), _jsx(FooterInfo, {})] })] }) }));
};
export default Footer;
