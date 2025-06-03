import { Route, Routes } from 'react-router';
import MainPage from '../pages/Home/MainPage';
import Bolezni from '../pages/Bolezni';
import Symptoms from '../pages/Symptoms';
import Diets from '../pages/Diets';
import Lekarstva from '../pages/Lekarstva';
import NoMatch from '../pages/NoMatch';

const AppRoutes = () => {
    const navigationRoutes = [
        { path: '/', element: <MainPage /> },
        { path: '/bolezni', element: <Bolezni /> },
        { path: '/symptoms', element: <Symptoms /> },
        { path: '/diets', element: <Diets /> },
        { path: '/lekarstva', element: <Lekarstva /> },
        { path: '*', element: <NoMatch /> },
    ];

    return (
        <Routes>
            {navigationRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
};

export default AppRoutes;
