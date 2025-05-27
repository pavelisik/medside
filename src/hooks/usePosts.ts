import { useState, useEffect } from 'react';
import type { WP_REST_API_Post as WPPost } from 'wp-types';
import { getPosts } from '../api/requests';

interface WPPostImg extends WPPost {
    featured_image: string;
}

const usePosts = (params: Record<string, any>) => {
    const [posts, setPosts] = useState<WPPostImg[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getPosts<WPPostImg>('/posts', params)
            .then((data) => {
                if (data) setPosts(data);
            })
            .catch(() => setError('Не удалось загрузить.'))
            .finally(() => setLoading(false));
        // eslint-disable-next-line
    }, []);

    return { posts, loading, error };
};

export default usePosts;
