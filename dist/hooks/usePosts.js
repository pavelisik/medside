import { useState, useEffect } from 'react';
import { getPosts } from '../services/api/requests';
const usePosts = (params) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        setError(null);
        getPosts('/posts', params)
            .then((data) => {
            if (data)
                setPosts(data);
        })
            .catch(() => setError('Не удалось загрузить.'))
            .finally(() => setLoading(false));
        // eslint-disable-next-line
    }, []);
    return { posts, loading, error };
};
export default usePosts;
