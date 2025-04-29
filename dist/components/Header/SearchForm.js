import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SearchForm = () => {
    return (_jsx("form", { id: "search", name: "search", method: "get", action: "/", children: _jsxs("div", { className: "search-group", children: [_jsx("input", { className: "search_body", type: "text", name: "s", placeholder: "\u041F\u043E\u0438\u0441\u043A", value: "", maxLength: 70, accessKey: "s", autoCapitalize: "off", autoComplete: "off", autoCorrect: "off" }), _jsx("span", { className: "icon-image search-close" }), _jsxs("div", { className: "search-button", children: [_jsx("input", { className: "icon-image", id: "button", type: "submit", name: "", value: "&#xeb33", disabled: true }), _jsx("div", { className: "inner" })] })] }) }));
};
export default SearchForm;
