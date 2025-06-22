import { useLocation, Navigate } from 'react-router';
import useDataBySlug from '../../hooks/useDataBySlug';
import NoMatch from '../NoMatch';
import Content from '../../layouts/Content';
import CatWithPosts from './CatWithPosts';
import CatList from './CatList';
import { parseFullPath } from '../../utils/parseFullPath';
import type { WPCategoryData } from '../../types/wpTypes';

const CatPage = () => {
    const location = useLocation();
    const catsWithoutList = [36, 6345, 6318, 4070];
    const { slug, pathParts, page } = parseFullPath(location.pathname);
    const { data, loading, error } = useDataBySlug<WPCategoryData>(slug, 'cat', page === 1 ? undefined : page);

    if (/\/page\/1\/?$/.test(location.pathname)) {
        const cleanPath = location.pathname.replace(/\/page\/1\/?$/, '');
        return <Navigate to={cleanPath || '/'} replace />;
    }

    const isNoMatch = !loading && !error && !data;

    return isNoMatch ? (
        <NoMatch />
    ) : (
        <Content data={data}>
            {loading ? (
                <p>Загрузка...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : data ? (
                pathParts.length > 1 || catsWithoutList.includes(data.data.id) ? (
                    <CatWithPosts data={data} />
                ) : (
                    <CatList data={data} />
                )
            ) : null}
        </Content>
    );
};

export default CatPage;
