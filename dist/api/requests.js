import axios from 'axios';
const api = axios.create({
    baseURL: 'https://medside.ru/wp-json/wp/v2',
});
const handleAxiosError = (error) => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            console.error('Ошибка API:', error.response.data.message);
        }
        else {
            console.error('Ошибка API:', error.message);
        }
    }
    else if (error instanceof Error) {
        console.error('Неожиданная ошибка:', error.message);
    }
    else {
        console.error('Произошла неизвестная ошибка.');
    }
};
export const getPosts = async (url, params) => {
    try {
        const res = await api.get(url, { params });
        return res.data;
    }
    catch (error) {
        handleAxiosError(error);
    }
};
