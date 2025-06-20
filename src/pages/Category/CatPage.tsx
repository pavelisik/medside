import { useLocation, useSearchParams } from 'react-router';
import useDataBySlug from '../../hooks/useDataBySlug';
import NoMatch from '../NoMatch';
import Content from '../../layouts/Content';
import CatWithPosts from './CatWithPosts';
import CatList from './CatList';
import type { WPCategoryData } from '../../types/wpTypes';

const CatPage = () => {
    const location = useLocation();
    const catsWithoutList = [36, 6345, 6318, 4070];

    const [searchParams] = useSearchParams();
    const pageParam = searchParams.get('page');
    const page = pageParam ? parseInt(pageParam, 10) : undefined;

    const fullPath = location.pathname;
    const slugParts = fullPath.split('/').filter(Boolean);
    const slug = slugParts[slugParts.length - 1];

    const { data, loading, error } = useDataBySlug<WPCategoryData>(slug, 'cat', page);

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
                slugParts.length > 1 || catsWithoutList.includes(data.data.id) ? (
                    <CatWithPosts data={data} />
                ) : (
                    <CatList data={data} />
                )
            ) : null}
        </Content>
    );
};

export default CatPage;
