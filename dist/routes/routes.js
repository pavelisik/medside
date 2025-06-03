import { jsx as _jsx } from "react/jsx-runtime";
import { Route, Routes } from 'react-router';
import MainPage from '../pages/Home/MainPage';
import Bolezni from '../pages/Bolezni';
import Symptoms from '../pages/Symptoms';
import Diets from '../pages/Diets';
import Lekarstva from '../pages/Lekarstva';
import NoMatch from '../pages/NoMatch';
const AppRoutes = () => {
    const navigationRoutes = [
        { path: '/', element: _jsx(MainPage, {}) },
        { path: '/bolezni', element: _jsx(Bolezni, {}) },
        { path: '/symptoms', element: _jsx(Symptoms, {}) },
        { path: '/diets', element: _jsx(Diets, {}) },
        { path: '/lekarstva', element: _jsx(Lekarstva, {}) },
        { path: '*', element: _jsx(NoMatch, {}) },
    ];
    return (_jsx(Routes, { children: navigationRoutes.map((route) => (_jsx(Route, { path: route.path, element: route.element }, route.path))) }));
};
export default AppRoutes;
