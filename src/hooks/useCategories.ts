import { useState, useEffect } from 'react';
import type { WPCategory } from '../types/wpTypes';
import { getCategories } from '../services/api/requests';

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
    }, []);

    return { categories, loading, error };
};

export default useCategories;
