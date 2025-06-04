import { useParams, useNavigate } from 'react-router';
import { useEffect } from 'react';
import useDataBySlug from '../hooks/useDataBySlug';
import PostPage from '../pages/Post/PostPage';
import CategoryPage from '../pages/CategoryPage';
import { isWPPostData, isWPCategoryData } from '../types/wpTypeGuards';

const SlugRouter = () => {
    const { slug } = useParams<{ slug: string }>();
    const { data, loading, error } = useDataBySlug(slug!);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !data) {
            navigate('/not-found', { replace: true });
        }
    }, [data, loading, navigate]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p className="error">{error}</p>;
    if (!data) return null;

    if (isWPPostData(data)) return <PostPage data={data} />;
    if (isWPCategoryData(data)) return <CategoryPage data={data} />;

    return <p>Неизвестный тип данных</p>;
};

export default SlugRouter;
