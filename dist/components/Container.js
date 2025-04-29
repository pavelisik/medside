import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './Header/Header';
import MainMenu from './MainMenu';
import Content from './Content/Content';
import Footer from './Footer/Footer';
const Container = () => {
    return (_jsxs("div", { id: "container", children: [_jsx(Header, {}), _jsx(MainMenu, {}), _jsx(Content, {}), _jsx(Footer, {})] }));
};
export default Container;
