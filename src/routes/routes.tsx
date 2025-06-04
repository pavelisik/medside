import { Route, Routes } from 'react-router';
import MainPage from '../pages/Home/MainPage';
import NoMatch from '../pages/NoMatch';
import SlugResolver from '../pages/SlugResolver';

const AppRoutes = () => {
    const navigationRoutes = [
        { path: '/', element: <MainPage /> },
        { path: '/:slug', element: <SlugResolver /> },
        // { path: '/bolezni/:slug', element: <SlugResolver /> },
        { path: '/not-found', element: <NoMatch /> },
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
