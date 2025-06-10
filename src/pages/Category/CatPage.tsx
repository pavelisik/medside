import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import useDataBySlug from '../../hooks/useDataBySlug';
import Content from '../../layouts/Content';
import CatWithPosts from './CatWithPosts';
import CatList from './CatList';
import type { WPCategoryData } from '../../types/wpTypes';

const CatPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const fullPath = location.pathname;
    const slugParts = fullPath.split('/').filter(Boolean);
    const slug = slugParts[slugParts.length - 1];

    const { data, loading, error } = useDataBySlug<WPCategoryData>(slug, 'cat');

    useEffect(() => {
        if (!loading && !data) {
            navigate('/not-found', { replace: true });
        }
    }, [data, loading, navigate]);

    return (
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
