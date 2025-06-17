import { useLocation } from 'react-router';
import useDataBySlug from '../../hooks/useDataBySlug';
import NoMatch from '../NoMatch';
import Content from '../../layouts/Content';
import CatWithPosts from './CatWithPosts';
import CatList from './CatList';
import type { WPCategoryData } from '../../types/wpTypes';

const CatPage = () => {
    const location = useLocation();

    const fullPath = location.pathname;
    const slugParts = fullPath.split('/').filter(Boolean);
    const slug = slugParts[slugParts.length - 1];

    const { data, loading, error } = useDataBySlug<WPCategoryData>(slug, 'cat');

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
                slugParts.length > 1 ? (
                    <CatWithPosts data={data} />
                ) : (
                    <CatList data={data} />
                )
            ) : null}
        </Content>
    );
};

export default CatPage;
