import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './Header/Header';
import MainMenu from './MainMenu';
import Footer from './Footer/Footer';
import styles from './MainLayout.module.css';
const MainLayout = ({ children }) => {
    return (_jsxs("div", { className: styles.container, id: "container", children: [_jsx(Header, {}), _jsx(MainMenu, {}), _jsx("div", { id: "content", className: "nosb", children: _jsx("div", { id: "center", children: children }) }), _jsx(Footer, {})] }));
};
export default MainLayout;
