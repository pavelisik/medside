import { useState, useEffect } from 'react';
import { getCategories } from '../services/api/requests';
const useCategories = (params) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        setError(null);
        getCategories('/categories', params)
            .then((data) => {
            if (data)
                setCategories(data);
        })
            .catch(() => setError('Не удалось загрузить.'))
            .finally(() => setLoading(false));
        // eslint-disable-next-line
    }, []);
    return { categories, loading, error };
};
export default useCategories;
