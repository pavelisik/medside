import { Route, Routes } from 'react-router';
import MainPage from '../pages/Home/MainPage';
import PostPage from '../pages/Post/PostPage';
import CatPage from '../pages/Category/CatPage';

const AppRoutes = () => {
    const navigationRoutes = [
        { path: '/', element: <MainPage /> },

        { path: '/bolezni/*', element: <CatPage /> },
        { path: '/symptoms/*', element: <CatPage /> },
        { path: '/diets/*', element: <CatPage /> },
        { path: '/lekarstva/*', element: <CatPage /> },
        { path: '/diagnostics/*', element: <CatPage /> },
        { path: '/services/*', element: <CatPage /> },
        { path: '/stati/*', element: <CatPage /> },
        { path: '/novosti-meditsinyi/*', element: <CatPage /> },
        { path: '/active-substances/*', element: <CatPage /> },
        { path: '/meditsinskiy-slovar/*', element: <CatPage /> },

        { path: '/doctors/*', element: <CatPage /> },
        { path: '/clinics/*', element: <CatPage /> },

        // { path: '/author/*', element: <PostRouter /> },

        { path: '/:slug', element: <PostPage /> },
        // { path: '/not-found', element: <NoMatch /> },
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
