import { useState, useEffect } from 'react';
import { getSlug } from '../services/api/requests';

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

const useSlug = <T = WPSlug>(slug: string) => {
    const [post, setPost] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getSlug<T>(slug)
            .then((data) => {
                if (data) setPost(data);
            })
            .catch(() => setError('Не удалось загрузить.'))
            .finally(() => setLoading(false));
        // eslint-disable-next-line
    }, []);

    return { post, loading, error };
};

export default useSlug;
