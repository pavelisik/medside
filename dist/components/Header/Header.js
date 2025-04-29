import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MainLogo from './MainLogo';
import SearchForm from './SearchForm';
const Header = () => {
    return (_jsx("header", { id: "header", children: _jsxs("div", { className: "header-container", children: [_jsx(MainLogo, {}), _jsx(SearchForm, {})] }) }));
};
export default Header;
