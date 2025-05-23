import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router';
import { MdArrowForwardIos as Arrow } from 'react-icons/md';
import styles from './BlockPosts.module.css';
import BlockNews from './BlockNews';
import BlockPosts from './BlockPosts';
const Content = () => {
    const params01 = { include: '121618,116766,127274', orderby: 'include' };
    const params02 = { include: '141393,64417,67179', orderby: 'include' };
    return (_jsxs("section", { id: "content", className: "nosb", children: [_jsxs("div", { id: "center", children: [_jsx(BlockNews, {}), _jsx(BlockPosts, { params: params01, position: "left", children: _jsxs(_Fragment, { children: [_jsx(Link, { to: "/bolezni", children: "\u0411\u043E\u043B\u0435\u0437\u043D\u0438" }), _jsx(Arrow, { className: styles.arrow }), "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438"] }) }), _jsx(BlockPosts, { params: params02, position: "right", children: _jsxs(_Fragment, { children: [_jsx(Link, { to: "/symptoms", children: "\u0421\u0438\u043C\u043F\u0442\u043E\u043C\u044B" }), _jsx(Arrow, { className: styles.arrow }), "\u041D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0447\u0430\u0441\u0442\u044B\u0435 \u0436\u0430\u043B\u043E\u0431\u044B"] }) })] }), _jsx("div", { className: "clear" })] }));
};
export default Content;
