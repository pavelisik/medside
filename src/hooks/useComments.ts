import { useState, useEffect } from 'react';
import type { WPComment } from '../types/wpTypes';
import { getComments } from '../services/api/requests';

const useComments = (params: Record<string, any>) => {
    const [comments, setComments] = useState<WPComment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getComments('/comments', params)
            .then((data) => {
                if (data) setComments(data);
            })
            .catch(() => setError('Не удалось загрузить.'))
            .finally(() => setLoading(false));
    }, []);

    return { comments, loading, error };
};

export default useComments;
