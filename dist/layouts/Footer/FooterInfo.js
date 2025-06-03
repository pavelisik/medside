import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const FooterInfo = () => {
    const currentYear = new Date().getFullYear();
    return (_jsx("div", { className: "footer-info", children: _jsxs("p", { children: [_jsx("strong", { children: "\u041E\u041E\u041E \u00AB\u041C\u0435\u0434\u0441\u0442\u043E\u0440\u043E\u043D\u0430 - \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438\u00BB" }), " \u041E\u0413\u0420\u041D 1182375072802", _jsx("br", {}), _jsxs("span", { children: ["\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B \u00A9 2011-", currentYear] })] }) }));
};
export default FooterInfo;
