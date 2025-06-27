import { useState, useEffect } from 'react';
import type { WPRusfondData } from '../types/wpTypes';
import { getRusfondData } from '../services/api/requests';

const useRusfondData = () => {
    const [items, setItems] = useState<WPRusfondData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getRusfondData('/rusfond')
            .then((data) => {
                if (data) setItems(data);
            })
            .catch(() => setError('Не удалось загрузить.'))
            .finally(() => setLoading(false));
    }, []);

    return { items, loading, error };
};

export default useRusfondData;
