import { useState, useEffect } from 'react';
import type { WP_REST_API_Category as WPCategory } from 'wp-types';
import { getCategories } from '../api/requests';

const useCategories = (params: Record<string, any>) => {
    const [categories, setCategories] = useState<WPCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getCategories<WPCategory>('/categories', params)
            .then((data) => {
                if (data) setCategories(data);
            })
            .catch(() => setError('Не удалось загрузить.'))
            .finally(() => setLoading(false));
        // eslint-disable-next-line
    }, []);

    return { categories, loading, error };
};

export default useCategories;
