import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaSearch } from 'react-icons/fa';
const SearchForm = () => {
    return (_jsx("form", { id: "search", name: "search", method: "get", action: "/", children: _jsxs("div", { className: "search-group", children: [_jsx("input", { className: "search_body", type: "text", name: "s", placeholder: "\u041F\u043E\u0438\u0441\u043A", defaultValue: "", maxLength: 70, autoCapitalize: "off", autoComplete: "off", autoCorrect: "off" }), _jsx("span", { className: "icon-image search-close" }), _jsx("div", { className: "search-button", children: _jsx("button", { type: "submit", children: _jsx(FaSearch, {}) }) })] }) }));
};
export default SearchForm;
