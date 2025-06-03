import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router';
import useCategories from '../../hooks/useCategories';
import Skelet from '../../components/ui/Skelet';
const BlockTabs = () => {
    const { categories, loading, error } = useCategories({ parent: 38, per_page: 28 });
    return (_jsxs("div", { className: "block-tabs", children: [_jsx("h2", { children: _jsx(Link, { to: "/meditsinskiy-slovar", children: "\u0421\u043B\u043E\u0432\u0430\u0440\u044C \u0442\u0435\u0440\u043C\u0438\u043D\u043E\u0432" }) }), loading ? (_jsx(Skelet, { skeletClass: "tabs" })) : error ? (_jsx("p", { className: "error", children: error })) : (_jsx("ul", { children: categories.map((category) => (_jsx("li", { children: category.count ? _jsx(Link, { to: `/${category.slug}`, children: category.name }) : category.name }, category.id))) }))] }));
};
export default BlockTabs;
