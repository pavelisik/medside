import { useState, useEffect } from 'react';
import type { WPPostImg } from '../types/wpTypes';
import { getPosts } from '../services/api/requests';

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
    }, []);

    return { posts, loading, error };
};

export default usePosts;
