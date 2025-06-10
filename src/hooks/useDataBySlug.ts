import { useState, useEffect } from 'react';
import type { WPDataBySlug } from '../types/wpTypes';
import { getDataBySlug } from '../services/api/requests';

const useDataBySlug = <T extends WPDataBySlug>(slug: string, type: 'post' | 'cat') => {
    const [data, setData] = useState<T | undefined>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getDataBySlug(slug, type)
            .then((data) => {
                if (data) setData(data as T);
            })
            .catch(() => setError('Не удалось загрузить.'))
            .finally(() => setLoading(false));
    }, [slug]);

    return { data, loading, error };
};

export default useDataBySlug;
