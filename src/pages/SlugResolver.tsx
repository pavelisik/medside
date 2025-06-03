import { useParams } from 'react-router';
import useSlug from '../hooks/useSlug';
import PostPage from './Post/PostPage';

interface WPSlug {
    type: string;
    subtype: string;
    data: {
        id: number;
        slug: string;
        title: string;
        date: string;
        featured_image: string;
        post_author: {};
        categories: any[];
        parents_count: number;
        parent_cat_first?: {};
        parent_cat_second?: {};
        content: string;
        metadata: {};
    };
}

const SlugResolver = () => {
    const { slug } = useParams<{ slug: string }>();
    const { post, loading, error } = useSlug<WPSlug>(slug as string);

    return <>{loading ? <p>Загрузка...</p> : error ? <p className="error">{error}</p> : <PostPage data={post} />}</>;
};

export default SlugResolver;
