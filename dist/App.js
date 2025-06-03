import { jsx as _jsx } from "react/jsx-runtime";
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/Home/MainPage';
function App() {
    return (_jsx(MainLayout, { children: _jsx(MainPage, {}) }));
}
export default App;
