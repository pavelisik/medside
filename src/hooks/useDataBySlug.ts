import { useState, useEffect } from 'react';
import { getDataBySlug } from '../services/api/requests';
import type { WPDataBySlug } from '../types/wpTypes';

const useDataBySlug = (slug: string) => {
    const [data, setData] = useState<WPDataBySlug | undefined>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getDataBySlug(slug)
            .then(setData)
            .catch(() => setError('Не удалось загрузить.'))
            .finally(() => setLoading(false));
    }, [slug]);

    return { data, loading, error };
};

export default useDataBySlug;
